---
layout: ../../layouts/Post.astro
title: 'Creating a startup script with Astro'
metaTitle: 'Creating a startup script with Astro'
metaDesc: 'Creating a once off startup script in Astro'
image: /images/15-03-2022.jpg
date: 2022-03-15T03:00:00.000Z
tags:
  - astro
---

Let me explain my situation and needs, I'm running this blog of Astro, a fantastic static site generator, so it converts my Markdown files into HTML output.

While they are static, we can have some logic behind them to evaluate something on build time.

## Describing the problem

For example, the subscribers' count comes from the [Sendy API](https://daily-dev-tips.com/posts/loading-the-total-sendy-subscribers/) can't be retrieved in realtime since there is no server behind there.

Of course, we could use JavaScript to fetch every request, but this will result in our API being called for every visitor.

Another way we could do this is by introducing it in the Astro logic, which I started with.
We could use a `Stats.astro` component that looks something like this.

```js
---
const response = await fetch(`${PUBLIC_SENDY_ENDPOINT}api/subscribers/active-subscriber-count.php`,
{
  method: "POST",
  body: new URLSearchParams(
    `api_key=${PUBLIC_SENDY_API_KEY}&list_id=${PUBLIC_SENDY_LIST_ID}`
  ),
}
);
const subscribers = await response.text();
---
{subscribers} are subscribed to the newsletter
```

The above will request the API and return the response we want.

However, there is a significant downside to this. It runs for every page that has this component.

In my case, this is 700+ pages that should render this component, and it's improbable this number will change in the minute it takes to build the website.

So what else could we do?

## A uniform startup script

I started thinking that I needed just a script that could run before the build time.

And while there is no official support for this yet (The team is considering something for this), I used a plain node script that would run before the build.

Let's see how I put it together.

First, it's important to have this script located outside your `src` directory. Astro will evaluate all the modules you import, and it becomes a bit of a headache to manage.

I created a `scripts` directory and inside creating a `collect.mjs` file. (`mjs` files are es6 module files)

This file will be responsible for fetching our subscribers and storing them in a plain JSON file on the server. Astro can then fetch this information from that JSON file.

Since we are now outside of Astro, we have a couple of issues of handy things we are missing out on:

- fetch is no longer available
- we can't easily access the environment variables

But, luckily Nate (Astro core) mentioned there are some things we can use. For the fetch part, we can leverage the Astro polyfill.

```js
import { polyfill } from '@astropub/webapi';

polyfill(globalThis, {
  exclude: 'window document',
});
```

The next thing is the env variables, and this is something Vite can help us with.

```js
import { loadEnv } from 'vite';
const { PUBLIC_SENDY_ENDPOINT, PUBLIC_SENDY_API_KEY, PUBLIC_SENDY_LIST_ID } =
  loadEnv('production', process.cwd(), '');
```

Now we have these variables available in this document.

Let's make a function that will fetch our subscribers and store them in a JSON file on the Astro side.

```js
import fs from 'fs';

const fetchSubscribers = async () => {
  const response = await fetch(
    `${PUBLIC_SENDY_ENDPOINT}api/subscribers/active-subscriber-count.php`,
    {
      method: 'POST',
      body: new URLSearchParams(
        `api_key=${PUBLIC_SENDY_API_KEY}&list_id=${PUBLIC_SENDY_LIST_ID}`
      ),
    }
  );
  const allSubscribers = await response.text();

  fs.writeFile(
    '_cache/subscribers.json',
    JSON.stringify({ subscribers: allSubscribers }),
    (err) => {
      if (err) throw err;
      console.log(`>>> ${file} cached successfully`);
    }
  );
};
```

This function will fetch the subscribers from our API and store them in a `_cache/subscribers.json` file.
This way, Astro will be able to read from this file.

Now, all we have to do is invoke this function like so:

```js
fetchSubscribers();
```

We can then add this to our `package.json` file to run it quickly.

```js
{
  "name": "@example/starter",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "collect": "node --experimental-modules scripts/collect.mjs",
    "start": "astro dev",
    "build": "npm run collect && astro build",
  }
}
```

Now we have the option to run the script on its own, which in turn executes this file we just created.
Or we can run the `npm run build` command, which first will run the script.

## Loading subscribers from the cache

All we have to do is modify our existing implementation of the subscribe component to load the subscriber count from the cached file.

```js
---
import fs from "fs";

const readCache = () => {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    const cacheFile = fs.readFileSync("_cache/subscribers.json");
    return JSON.parse(cacheFile);
  }
};
const cachedSubscribers = await readCache();
const subscribers = cachedSubscribers.subscribers;
---
{subscribers} loaded from cache
```

And there you go, we now converted this to only read from our API once every build. This will be easier on the API and not flood it with requests.

I hope you enjoyed this article. If you have any questions or suggestions about this process, do let me know.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
