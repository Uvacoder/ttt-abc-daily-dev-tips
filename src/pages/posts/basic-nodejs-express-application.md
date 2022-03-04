---
layout: ../../layouts/Post.astro
title: 'Basic Node.js Express application'
metaTitle: 'Basic Node.js Express application'
metaDesc: 'How do we create a hello world application in Node.js and Express'
image: /images/09-04-2020.jpg
date: 2020-04-09T03:00:00.000Z
tags:
  - nodejs
  - express
---

So far we have done a few daily tips like [Read and write a JSON file](https://daily-dev-tips.com/posts/read-and-write-a-json-file-in-node-js/), [Posting to Twitter via Node.js](https://daily-dev-tips.com/posts/posting-to-twitter-via-node-js/), [Posting to Facebook via Node.js](https://daily-dev-tips.com/posts/posting-with-the-facebook-api-via-node-js/) and [RSS Reader in Node.js](https://daily-dev-tips.com/posts/rss-reader-in-node-js/) with `node.js`. But we never really got around to creating a basic browser-based application.

So let's spend today creating a Hello World in `Node.js` in combination with `express`

## Installing node.js

To install `node.js` we simply have to go to their website and download the package. Then go ahead and follow the install instructions afterward.

[Node.js download](https://nodejs.org/en/)

## Creating our first node.js app

To create a `node.js` app, we use our terminal.

> If you are on Mac I'd suggest using [iTerm2](https://www.iterm2.com/). The best terminal for Mac!

Run the following code in your terminal.

```
mkdir firstapp
cd firstapp
```

These commands will `mkdir` make directory called `firstapp` and `cd` change directory into this newly created directory.

Node comes with a `CLI` (Command Line Interface) so we can use the following command to turn this directory into a `node.js` app.

```
npm init
```

This will create a `package.json` file in our folder. This command will prompt some questions in our terminal.
You can enter through these.

## Installing Express in our node.js app

[`Express`](https://www.npmjs.com/package/express) is a web framework for `node.js`. It comes with useful tools that are easy to use and understand. Because of this, it's a widely adopted standard in `node.js` web development. Especially when you are a beginner I would suggest using `Express`.

Make sure you are still in the `firstapp` directory and run the following command.

```
npm install express --save
```

This command will install the package `Express`, and the `--save` option will save this in our `package.json`

We should now see a `node_modules` folder in our project automatically.

## Creating our node.js index.js file

Of course we need a file to work from, open your editor of choice and add our newly created project.

Create a file in the root called `index.js` and add the following code to it:

```js
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Node.js is amazing! ⚡️');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

Explained;

```js
const express = require('express');
const app = express();
```

The first line says we need to require the `express` package, and them we start a new `app` which is based on `Express.

```js
app.get('/', function (req, res) {
  res.send('Node.js is amazing! ⚡️');
});
```

This says if someone browser to the `/` endpoint we send the result (res) of `Node.js is amazing! ⚡️`.

```js
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

This tells our app to listen on port 3000 and when it does return to the console it's up and running.

## Running our Node.js Express app

To run our newly created application we run the following command in our terminal (still in the firstapp directory)

```
node index.js
```

The terminal now should show the following:

```
Example app listening on port 3000!
```

When we go to [http://localhost:3000/](http://localhost:3000/) in our browser we should see `‌Node.js is amazing! ⚡️`

Amazing, we created our very first browser `Node.js` application!

You can download this project on [GitHub](https://github.com/rebelchris/firstapp).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
