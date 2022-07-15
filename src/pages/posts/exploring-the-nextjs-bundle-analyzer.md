---
layout: ../../layouts/Post.astro
title: 'Exploring the NextJS bundle analyzer'
metaTitle: 'Exploring the NextJS bundle analyzer'
metaDesc: 'Using the NextJS bundle analyzer to evaluate big packages'
ogImage: /images/25-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/707cdad5-5059-471e-d83a-2478096e9e00
date: 2022-07-25T03:00:00.000Z
tags:
  - nextjs
---

Did you know that Next.js gives us an option to analyze our output bundle size?

While creating our application, it's hard to determine what will be included in the final build output.

But no worries, I'll show you how you can add the bundle analyzer to analyze the build output in this article.

## Installing the Next.js bundle analyzer

First, let's take an existing Next.js project to work on.
I will use my [Next markdown blog](https://github.com/rebelchris/next-markdown-blog) for this.

The first thing we want to do is install the analyzer with the following command.

```bash
npm install @next/bundle-analyzer
```

The next part is to create/modify our `next.config.js` file.

The first element we need is a definition of the analyzer, which we can import like this.

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
```

The following step might depend on the fact that you already have some configuration.

If not, you can do the following export.

```js
module.exports = withBundleAnalyzer({});
```

Otherwise, you have to wrap your existing export with the bundle analyzer.

```js
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
});
```

## Running the analyzer

To run the analyzer, we have to use the environment variable defined above.

The command would look like this:

```bash
ANALYZE=true npm run build
```

When you run this command, it will automatically open two pages in your browser.

- The client-side code
- The server-side code

![Next.js client side bundle analyzer](https://cdn.hashnode.com/res/hashnode/image/upload/v1657864420914/8ygVQ4W1r.png)
![Next.js server side bundle analyzer](https://cdn.hashnode.com/res/hashnode/image/upload/v1657864412561/yt81e4cX9.png)

You can quickly inspect what takes up the most space, or when using a Monorepos, which packages might have been included twice unintentionally.

### Quick command

We can also create a quick command, so we don't have to worry about setting this environment variable on every call.

Head over to your package.json file and add a new script like this.

```js
"scripts": {
	...
	"analyze": "ANALYZE=true next build"
},
```

Now you can quickly run the analyzer with the following command.

```bash
npm run analyze
```

I've also uploaded the changes to the project so you can view them on [GitHub](https://github.com/rebelchris/next-markdown-blog/tree/bundle-analyzer).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
