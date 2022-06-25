---
layout: ../../layouts/Post.astro
title: Posting to Twitter via Node.js
metaTitle: How to post to Twitter API with Node.js
metaDesc: Tweeting via the Twitter API using Node.js VanillaJs
image: '/images/fallback.png'
date: 2020-03-25T03:00:00.000Z
tags:
  - nodejs
  - api
---

So this week, we have been working on our RSS social posting app, as mentioned in [yesterday's](https://daily-dev-tips.com/posts/posting-with-the-facebook-api-via-node-js/) article we are looking into posting with Twitter's API via `Node.js`

Read more: [Basic Node.js Express application](https://daily-dev-tips.com/posts/basic-nodejs-express-application/)

## Posting to Twitter

Same as Facebook [yesterday](https://daily-dev-tips.com/posts/posting-with-the-facebook-api-via-node-js/), Twitter also has quite a signup process to become a developer.

> Visit: [Twitter developer](https://developer.twitter.com/en/application/in-review) and sign up for an account (this can take a while!)

Once you have your developer account, we can start creating a new app; We don't need anything special.

## Connecting to the Twitter API with Node.js

So with Twitter, we will skip the part of doing a graph-like test (you could use [postman](https://www.postman.com/) if you want to).

For the `node.js` part, we are going to add the following [Twitter package](https://www.npmjs.com/package/twitter) make sure you open the correct folder in the terminal, then run the following command:

```
npm i twitter
```

Then we open our index.js page and add the following script:

```js
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '{CONSUMER_KEY}',
  consumer_secret: '{CONSUMER_SECRET}',
  access_token_key: '{ACCESS_TOKEN_KEY}',
  access_token_secret: '{ACCESS_TOKEN_SECRET}',
});

client.post(
  'statuses/update',
  { status: 'Posting via the API is awesome!' },
  function (error, tweet, response) {
    if (error) throw error;
    console.log(tweet); // Tweet body.
    console.log(response); // Raw response object.
  }
);
```

First, we define our Twitter package import.
Next, we define a new Twitter client and add the four parameters we got from the Twitter app we just created.

Then we do an actual post to the `statuses/update` endpoint and pass a status object (your tweet) to it.

Next, in the response, we log both the tweet and the raw response to see what we get!

That's all we can now run the following command to test out our `node.js` posting to Twitter.

```
node index.js
```

### Let's tweet and connect!

You can find today's code [here](https://github.com/rebelchris/rss-app/tree/day-3-twitter) on GitHub.

So now, you figured out how to post to [Facebook](https://www.facebook.com/DailyDevTipsBlog) and [Twitter](https://twitter.com/DailyDevTips1) via `node.js`.
Let me know how this went for you and what topics you still want to address.
