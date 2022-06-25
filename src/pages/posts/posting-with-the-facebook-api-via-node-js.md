---
layout: ../../layouts/Post.astro
title: Posting with the Facebook API via Node.js
metaTitle: Posting with the Facebook API via Node.js
metaDesc: Learn how to post an article via the Facebook API in Node.js. In our example we will use an RSS feed to post to Facebook*s news feed.
image: '/images/fallback.png'
date: 2020-03-24T03:00:00.000Z
tags:
  - nodejs
  - api
---

In [yesterday\'s](https://daily-dev-tips.com/posts/rss-reader-in-node-js/) post, we started our RSS social media posting app by reading the RSS feed from the website.

Today, we will post to Facebook via the Facebook API with the help of Node JS.

Read more: [Basic Node.js Express application](https://daily-dev-tips.com/posts/basic-nodejs-express-application/)

## How to post to Facebook with the Facebook Graph API Explorer

Facebook has quite an extended sign-up process, so be aware it might take some time to get an actual developer account to use their API.

> Visit: [Facebook developers](https://developers.facebook.com/) to sign up for a developer account

Once you have your Facebook developer account, start by creating a new app.

Next, it's easiest to open the Facebook Graph API Explorer, which you can find [here](https://developers.facebook.com/tools/explorer/)

Changing the URL to `DailyDevTipsBlog/feed` obviously changes DailyDevTipsBlog to your page.

We need to add permissions for:

```
manage_pages
publish_pages
publish_to_groups
```

And add the message in the left column as following `JSON`

```
{
    "message": "Testing with api"
}
```

We have to get a new access token to log in at this point. Click the button, and it will ask you if it's ok to use these new permissions.

If we now click Submit, we should get a response with an `id`. This means the post is now on your page!

Success!! 👏

## Connecting to the Facebook API via Node.js

Facebook helped us out a lot, and I know you're scared, but in `node.js`, it's easier!

First, we go back to our rss-app directory in the terminal and execute the following command with NPM:

```
npm install fb
```

This will install a [NodeJS library for the Facebook API](https://www.npmjs.com/package/fb) with NPM.

We write our JavaScript code to do the actual posting via the API.

```js
const FB = require('fb');

FB.setAccessToken('ACCESS_TOKEN');
FB.api(
  '/DailyDevTipsBlog/feed',
  'POST',
  { message: 'Testing with api' },
  function (response) {
    console.log(response);
  }
);
```

In the first line, we define that we want to use the Facebook package.
Then we set the access token (we can get that from the Graph API for now!)
Then, we call the API and do the same as we did in the Graph API!

Easy as that! 🙄

### Stay tuned and connected!

Find today's code [here](https://github.com/rebelchris/rss-app/tree/day-2-facebook) on GitHub

In the meantime, feel free to send me a message on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) and keep an eye out for tomorrow's Twitter integration!
