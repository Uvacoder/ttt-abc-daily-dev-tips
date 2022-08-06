---
layout: ../../layouts/Post.astro
title: 'Revue - Sendy sync: project setup + Revue calls'
metaTitle: 'Sendy sync: project setup + Revue calls'
metaDesc: 'Creating the NodeJS project and calling the Revue API from Node'
ogImage: /images/26-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/fcafbb97-02a6-46f1-62a5-8fc4e1461900
date: 2022-06-26T03:00:00.000Z
tags:
  - developer
  - revue-sync
---

Now that we have a good understanding of [all the API calls we need to make](https://daily-dev-tips.com/posts/revue-sendy-sync-collecting-the-apis/), we can start setting up the project.

I'll be building this project as a Node project simply because it's the lowest overhead and easy to host somewhere.

The goal for today is to have a basic Node project that we can run. On running the code, it should list all unsubscribed people from Revue and all the subscribers.

## Creating the project

Let's get started.

Create a new node project.

```bash
# Create folder
mkdir revue-sendy-sync

# Navigate into the folder
cd revue-sendy-sync

# Init new node project
npm init
```

We should now have our basic project with a `package.json` file.

The first thing I did was change it to module type so we can use imports.

```js
{
  "name": "revue-sendy-sync",
  "version": "1.0.0",
  "type": "module",
  ...
}
```

The next thing we want to do is add some packages that we'll use. So far, we know we need some environment variables and want to make some API calls.

The packages we can use for that are [`dotenv`](https://www.npmjs.com/package/dotenv) and [`node-fetch`](https://www.npmjs.com/package/node-fetch).

```bash
npm i dotenv node-fetch
```

With those installed, we can define a `.env` file. This file can be used to store your environment variables.

While creating this, also make sure to exclude it by using your [`.gitignore` file](https://daily-dev-tips.com/posts/git-basics-ignore-files-from-being-committed/). (You don't want your secret to being committed to git!)

Inside the `.env` file, add the following variable.

```
REVUE_API_TOKEN={YOUR_TOKEN}
```

> Note: Don't have the token? Read the article on [retrieving all the API keys](https://daily-dev-tips.com/posts/revue-sendy-sync-collecting-the-apis/#revue-api).

Then the last file we need is an `index.js` file. This will be the brains of the operation.

Create the file, and start by importing the packages we installed.

```js
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

console.log(`I'm working!`);
```

You can now try to run this by executing `node index.js`. In return it should show you "I'm working".

## Calling the Revue API from Node.js

Let's start with the first piece of software. We want to be able to call the Revue API.

We can start with the unsubscribe call.

To make things scaleable, I created a custom function for this purpose.

```js
const getRevueUnsubscribers = async () => {
  const response = await fetch(
    'https://www.getrevue.co/api/v2/subscribers/unsubscribed',
    {
      headers: {
        Authorization: `Token ${process.env.REVUE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  ).then((res) => res.json());
  return response;
};
```

As you can see, we use the `node-fetch` package to request the unsubscribed endpoint. We then pass the `Authorisation` header where we set the API token.

> Note: This token is loaded from our `.env` file.

Once it returns, we convert the response to a valid JSON object and eventually return that.

Then we have to create a function that runs once our script gets called.
This is called an Immediately invoked function expression (IIFE for short).

```js
(async () => {
  const revueUnsubscribed = await getRevueUnsubscribers();
  console.log(revueUnsubscribed);
})();
```

This creates a function that invokes itself, so it will now run when we run our script.

In return, it will console log the JSON object of people who unsubscribed on Revue.

![Calling Revue API via NodeJS response](https://cdn.hashnode.com/res/hashnode/image/upload/v1655357235962/_UXF87c_A.png)

Yes, that was more straightforward than I thought. We already have one call done.

Let's also add the call that will get the subscribed people.

```js
const getRevueSubscribers = async () => {
  const response = await fetch('https://www.getrevue.co/api/v2/subscribers', {
    headers: {
      Authorization: `Token ${process.env.REVUE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then((res) => res.json());
  return response;
};
```

And we can add this to our IIFE like this.

```js
(async () => {
  const revueUnsubscribed = await getRevueUnsubscribers();
  console.log(revueUnsubscribed);

  const revueSubscribed = await getRevueSubscribers();
  console.log(revueSubscribed);
})();
```

Let's try it out and see what happens.

![Revue subscribed API call](https://cdn.hashnode.com/res/hashnode/image/upload/v1655357401491/ZkywmeCrP.png)

Nice, we can see both API calls return data.

## Cleaning up

For those paying attention, we created some [repeating code](https://daily-dev-tips.com/posts/software-design-principles-dry/). The Revue API calls look the same, so we can change things around a little bit.

```js
const callRevueAPI = async (endpoint) => {
  const response = await fetch(`https://www.getrevue.co/api/v2/${endpoint}`, {
    headers: {
      Authorization: `Token ${process.env.REVUE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then((res) => res.json());
  return response;
};

(async () => {
  const revueUnsubscribed = await callRevueAPI('subscribers/unsubscribed');
  console.log(revueUnsubscribed);

  const revueSubscribed = await callRevueAPI('subscribers');
  console.log(revueSubscribed);
})();
```

The code still does the same thing, but now we only leverage one uniform function.

It only limits to `GET` requests, but for now, that's precisely what we need.

## Conclusion

This article taught us how to call the Revue API from NodeJS.

If you want to follow along by coding this project yourself, I've uploaded this version to [GitHub](https://github.com/rebelchris/revue-sendy-sync/tree/part-1-revue-api).

We'll call the Sendy API in the following article, so keep an eye out.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
