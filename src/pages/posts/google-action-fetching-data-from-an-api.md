---
layout: ../../layouts/Post.astro
title: 'Google action fetching data from an API'
metaTitle: 'Google action fetching data from an API'
metaDesc: 'How to fetch data from an API inside a Google Action function'
ogImage: /images/12-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/4d40b5ad-e39b-4959-ba88-da6b70716200
date: 2022-09-12T03:00:00.000Z
tags:
  - google-actions
---

Now that we have our action triggered programmatically let's see how we can get the response data from an API.

This way, we can make it a bit more interactive.

If you'd like to follow along, please complete the [previous article](https://daily-dev-tips.com/posts/google-actions-via-cloud-function/) first.

## Fetching API data in a google action

The cool part now that we have our action using a function is that we can use all kinds of node goodies.
One of these goodies is the fetch API.

Let's use a placeholder API first, so it's easier to test.

Open up your action and start by adding the fetch API.

```js
const fetch = require('node-fetch');
```

Then inside our greeting function, we should convert it to an async function.

```js
// Previous
app.handle('greeting', (conv) => {});

// New
app.handle('greeting', async (conv) => {});
```

Now that our function is asynchronous, we can await the fetch; since it's direct JSON we can await the JSON conversion as well like this:

```js
app.handle('greeting', async (conv) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const text = await response.json();
});
```

And then, we can modify our response card to return this data instead of the static data.

```js
app.handle('greeting', async (conv) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const text = await response.json();

  conv.add(
    new Card({
      title: text.title,
      text: text.body,
      image: new Image({
        url: 'https://daily-dev-tips.com/images/logo.png',
        alt: 'Daily Dev Tips logo',
      }),
    })
  );
});
```

You can now save and deploy your function, be sure to wait a minute or so for it to deploy.
Then test your function and see it in action!

![Google action calling API](https://cdn.hashnode.com/res/hashnode/image/upload/v1662132536836/PmQSGQ_BC.png)

And that's it. We now added an API call to our Google action!
Pretty cool stuff, if I may say so.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
