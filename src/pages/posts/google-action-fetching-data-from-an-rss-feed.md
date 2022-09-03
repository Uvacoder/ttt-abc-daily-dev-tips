---
layout: ../../layouts/Post.astro
title: 'Google action fetching data from an RSS feed'
metaTitle: 'Google action fetching data from an RSS feed'
metaDesc: 'How to fetch data from an RSS feed inside a Google Action function'
ogImage: /images/13-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d3cdd014-e113-4793-72ff-17da03b7ce00
date: 2022-09-13T03:00:00.000Z
tags:
  - google-actions
---

In the previous article, we looked at [fetching data from an API for our Google action](https://daily-dev-tips.com/posts/google-action-fetching-data-from-an-api/).

However, in my case, I don't have an API at my disposal. I have an RSS feed, so let's see how we can use that to fetch the latest article, which we can return.

If you'd like to follow along, you can use [this article](https://daily-dev-tips.com/posts/google-actions-via-cloud-function/) as your starting point.

## Fetching RSS data and prompt in Google action

Since our action is based on a cloud function, we can add some dynamic data fetching.

Open up your webhook `package.json`, and let's first add the package we need to parse XML.

```js
{
  "dependencies": {
	  // The other deps
    "xml-js": "^1.6.11"
  }
}
```

Now you can head over to the `index.js` file and start importing the packages we need.
This includes the node-fetch API.

```js
const fetch = require('node-fetch');
const convert = require('xml-js');
```

Then we'll need to convert our handle function to an async function.

```js
// Previous
app.handle('greeting', (conv) => {});

// New
app.handle('greeting', async (conv) => {});
```

And then, we can start by fetching our RSS feed. This can be parsed as plain text.

```js
const response = await fetch('https://daily-dev-tips.com/sitemap.xml');
const text = await response.text();
```

From here, we can use the xml-js package to convert it into a readable stream of JSON.

```js
const jsonData = JSON.parse(convert.xml2json(text, { compact: true }));
```

> Note: I'm using compact mode, which removes a lot of unneeded lines

Then we can add a new card with the first item's data.

```js
conv.add(
  new Card({
    title: jsonData.feed.entry[0].title._cdata,
    text: jsonData.feed.entry[0].content._cdata,
    image: new Image({
      url: 'https://daily-dev-tips.com/images/logo.png',
      alt: 'Daily Dev Tips logo',
    }),
  })
);
```

Save and deploy your function; wait for the deployment to finish and test it out.

![Google actions get data from RSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1662186242360/rp1JLUAd8.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
