---
layout: ../../layouts/Post.astro
title: 'RSS reader in node.js'
metaTitle: 'RSS reader and parser Node.js tutorial [2022]'
metaDesc: 'Guide to teach how to create an rss reader and parse XML files in node.js. See the examples and explanations.'
date: 2020-03-23T07:44:26.594Z
tags:
  - nodejs
---

This week I want to focus on helping myself being more effective and automated.
So we are going to build an RSS reader that functions as an automated social media publishing tool.

This tool will be build in `node.js` and will have the following sequence for now:

1. Get all posts from a websites RSS feed
2. Loop through the posts and see if they are already published (we keep track of this in a json file)
3. If not, we get the posts content and publish to Facebook
4. We also post this to Twitter

Today we will start this process and see how we can parse a websites `RSS feed`.

## RSS reader app in `node.js`

> Note: Make sure you have `node.js` installed on your machine see [nodejs website](https://node.js.org/en/) for installation procedure.

To create a basic app in `node.js` we run the following command in our terminal:

```js
mkdir rss-app && cd rss-app && npm init
```

We are doing 3 thins here:

1. `mkdir rss-app` this created a directory called rss-app
2. `cd rss-app` this command tells us to `change directory` into a folder called rss-app
3. `npm init` this command comes with `node.js` and created a blank template it will ask a couple questions which you can just enter through.

Read more: [Basic Node.js Express application](https://daily-dev-tips.com/posts/basic-nodejs-express-application/)

## Creating our node.js entry point

We start off by creating the basic entry point for our app, every `node.js` project needs an entry point.

```js
touch index.js
```

Touch means we create a new file and it's called index.js

Next we install our **rss parser**

```js
npm i rss-parser
```

This tells node to install a package called `rss-parser`. You can find the package here: [rss-parser](https://www.npmjs.com/package/rss-parser)

## Read the XML feed

The RSS feed for my website can be found on the following URL: https://daily-dev-tips.com/sitemap.xml

Open your `index.js` file in your favourite editor and place the following code in it.

```js
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');

  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title);
  });
})();
```

Let's go through this code:

```js
let Parser = require('rss-parser');
let parser = new Parser();
```

The first line tells `node.js` we are going to use the rss-parser package.
The second line defines a new parser.

```js
(async () => {})();
```

This block is a shorthand for an asynchronous function. Which we need because we are going to use the `await` function.

```js
let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');

console.log(feed.title);
```

Here we tell the rss-parser package to parse a new XML feed from my website's feed URL.
Next we console log the feed's title.

```js
feed.items.forEach((item) => {
  console.log(item.title);
});
```

This is a JavaScript loop that will loop through the feed's items.

It will console log each item's title.

## Run the RSS app

To test and run our app, go back to the terminal and run the following command:

```
node index.js
```

This tells node to run the file called index.js

It will output this:

```
Daily Dev Tips
String replace in Vanilla JS
Weekend tip: Watch the Vue documentary
Promise chains in JavaScript
Match all urls from a string in vanilla JS
```

### Conclusion

You can find the GitHub demo project here: [RSS-App](https://github.com/rebelchris/rss-app).

We can now read our RSS feed and parse its data in `node.js` [tomorrow](https://daily-dev-tips.com/posts/posting-with-the-facebook-api-via-node-js/) we will start doing something with this data.
In the meantime feel free to send me a message on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
