---
layout: ../../layouts/Post.astro
title: 'NextJS and TypeScript'
metaTitle: 'NextJS and TypeScript - Daily Dev Tips'
metaDesc: "NextJS and TypeScript are a match made in heaven, in this article I'll show you how you can add TypeScript to your Next.JS app"
image: /images/03-03-2022.jpg
date: 2022-03-03T03:00:00.000Z
tags:
  - nextjs
  - typescript
---

You may already know this, but Next.JS comes with TypeScript support for those who don't!

Which is amazing!
We can leverage all the TypeScript wonders in our Next.js application.

This article will show you how to enable it for a new project and convert existing ones to use TypeScript.

We'll also look at some types we get out of the box.

## Creating a new TypeScript Next.JS project

Starting from scratch is as simple as launching a new application and providing the typescript flag.

There is a shortcut flag: `--ts` or the full written version: `--typescript`.

Creating an app would look like this:

```js
npx create-next-app@latest --ts
```

Once installed, you already have all the TypeScript powers available.

## Converting an existing Next.JS project to use TypeScript

You'll often find yourself already having created a super cool app, and you don't want to start over from scratch.

So let's look at how we can convert an existing app to TypeScript.

Let's take this [Next Tailwind starter](https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/) I started a while ago and convert that to use TypeScript.

[Download starter project from GitHub](https://github.com/rebelchris/next-tailwind)

Now add a `tsconfig.json` file to the root of your project. You can leave the content of this file empty.

Now when you run `next` or `npm run dev`, you should be prompted with the following message:

![NextJS missing TypeScript info](https://cdn.hashnode.com/res/hashnode/image/upload/v1645507576443/Vlqo3_jbi.png)

> Note: It could show different packages here. Follow whatever the CLI tells you.

Once installed and re-run the command, it should state it will create the `tsconfig.json` for you.
This file will now be populated with the correct contents.

One task is to convert our files from `.js` to `.tsx` to leverage TypeScript files.

Note this only affects your files, do not change the config files at the root of your project.

And there you go, you can now safely use TypeScript in your Next.js application.

## Next.JS Types

A super cool part is that Next.js comes with some ready-made types we can leverage.

Let's start with the custom app, which can be found at `pages/_app.tsx`. We can set the type `AppProps` and import those types.

**Before:**

```js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

**After:**

```js
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

If you are using SSG or SSR there are also types provided for `getStaticProps`, `getStaticPaths`, and `getServerSideProps`.

```js
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};
```

Another thing you might be using is the API routes from Next.js.

By default, they look something like this:

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
```

We can typecast the `req` and `res` to be types like this:

```js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}
```

And that's it. You can type all the other things in your application that you might be using already.

I found it easy to get TypeScript going in a Next.JS application and defiantly urge you to try it out yourself.

I've uploaded it to [this branch in GitHub](https://github.com/rebelchris/next-tailwind/tree/feat-typescript).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
