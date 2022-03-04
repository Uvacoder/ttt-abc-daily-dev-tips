---
layout: ../../layouts/Post.astro
title: 'Node.js read and write post status to a JSON file'
metaTitle: 'Node.js read and write post status to a JSON file'
metaDesc: 'How can we read and write a JSON file while keeping track of things?'
image: /images/22-09-2020.jpg
date: 2020-09-22T03:00:00.000Z
tags:
  - nodejs
---

A while ago, I started building my [RSS reader](https://daily-dev-tips.com/posts/rss-reader-in-node-js/) to auto-publish to certain platforms, but we never finished it 👀.

Today we will be looking into looping over the articles we get via the RSS reader and keeping track of which ones are posted to the socials.

> Pre-condition: You need to know how to set up a [basic node app](https://daily-dev-tips.com/posts/basic-nodejs-express-application/) 👈

What you'll learn from this article

- Read data from a JSON file in Node.js
- Write data to a JSON file in Node.js
- Reading RSS data
- Keeping track of run changes

## Setting up our JSON file

Our JSON file is going to be quite easy in structure and will look as follows:

```json
{
  "https://daily-dev-tips.com/posts/rss-reader-in-node-js": {
    "published": true
  },
  "https://daily-dev-tips.com/posts/top-10-chrome-extensions-for-developers-👀": {
    "published": true
  }
}
```

We basically only need to know if an object is already on this list.

## Looping through our RSS feed

First, we need to add the `rss-parser` package.

```js
npm i rss-parser
```

Then we can loop through our articles using the sitemap we have.

```js
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');

  feed.items.forEach((item) => {
    console.log(item.id);
  });
})();
```

Now we need to make sure we read our JSON file and see if we have already published this article.

First, let's define the `file-system`.

```js
const fs = require('fs');
```

Then we can read out actual JSON file

```js
let rawdata = fs.readFileSync('site.json');
let siteData = JSON.parse(rawdata);
```

This will at first we an empty object `{}`.

In our loop we need to check if we already published this item.
If yes => Don't do anything
If no => Do magic and then add to JSON file._‌_

```js
feed.items.forEach((item) => {
  let url = item.id;
  if (!siteData.url) {
    // Do magic posting stuff
    siteData[url] = {
      published: true,
    };
  }
});
```

Once the loop is done, we can save our JSON to the actual file.

```js
fs.writeFileSync('site.json', JSON.stringify(siteData));
```

Our JSON file will then look something like this.

```json
{
  "https://daily-dev-tips.com/posts/vanilla-javascript-canvas-images-to-black-and-white/": {
    "published": true
  },
  "https://daily-dev-tips.com/posts/vanilla-javascript-images-in-canvas/": {
    "published": true
  },
  "https://daily-dev-tips.com/posts/vanilla-javascript-colouring-our-canvas-elements-🌈/": {
    "published": true
  }
}
```

Awesome, we now parsed our RSS feed, read our JSON file, and wrote data to it if not already in there!

You can find this project on [GitHub](https://github.com/rebelchris/rss-app/tree/feature/read-write-json).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
