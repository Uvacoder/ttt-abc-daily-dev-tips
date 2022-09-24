---
layout: ../../layouts/Post.astro
title: 'A first look at Bun'
metaTitle: 'A first look at Bun'
metaDesc: 'What exactly is this Bun JavaScript runtime'
ogImage: /images/04-10-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f76b9f61-1a14-4b07-e447-ba5e1e95ea00
date: 2022-10-04T03:00:00.000Z
tags:
  - bun
---

Since I heard about Bun, I've been super excited to try it.
And that's precisely what this article will be about.

Before we dive into the nitty gritty of setting Bun up, let's take a moment to talk about what it is.

## What is Bun?

Bun is a brand new JavaScript runtime, much like you know Node and potentially Deno already.
However, they build this one from scratch with speed in mind.
The idea is that we can use Bun for our JavaScript and TypeScript apps.

It comes packed with 90% of the Node-API function, plus it comes with all the fantastic Web APIs like fetch, WebSockets, and so on.

I won't go into the details, but Bun is written on the JavaScriptCore engine instead of the V8 engine. They wrote the code in ZIG, which helps with memory management.
The combination here is what makes it so fast!

## Trying out Bun

Alright, I'm not one for long background stories and am eager to see how it works and performs.
So let's get some applications up and running.

First, let's install Bun.
Open up your terminal and run the following command.

```bash
curl -fsSL https://bun.sh/install | bash
```

Now create a folder, and inside add a `http.js` file with the following contents.

```js
// http.js
export default {
  port: 3000,
  fetch(request) {
    return new Response('Welcome to Bun!');
  },
};
```

Now run the following command in this folder:

```bash
bun run http.js
```

And if we now visit `http://localhost:3000/` we should see the welcome from Bun.

![Bun.js basic web server](https://cdn.hashnode.com/res/hashnode/image/upload/v1664001084437/V7qtsX5KL.png)

As Bun is still very much being developed and limited now, I wouldn't rush to migrate all your applications as some essentials still need to be developed.

However, getting a feel for it is good, as it might become the following big framework for runtimes.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
