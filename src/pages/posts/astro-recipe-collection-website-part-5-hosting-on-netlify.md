---
layout: ../../layouts/Post.astro
title: 'Astro recipe collection website - Part 5 Hosting on Netlify'
metaTitle: 'Astro recipe collection website - Part 5 Hosting on Netlify'
metaDesc: 'Hosting Astro websites on Netlify'
image: /images/16-08-2021.jpg
date: 2021-08-16T03:00:00.000Z
tags:
  - astro
---

We finished our Astro recipe website, and now it's time to publish our fantastic website on the World Wide Web.

We'll be using [Netlify](https://www.netlify.com/) as our hosting provider, as it's a super simple system and setup.

## Fixing our Astro source code

Before we do anything, let's make sure we add two steps to make our lives easier.

Make sure your master branch is up to date and add a `netlify.toml` file.

```
[build]
  command = "npm run build"
  publish = "dist"
```

This file will make sure Netlify takes the default configuration for this project.

Next up, create a `.nvmrc` file. This tells Netlify which node version to use, as it by default will use Node 12, and we want to use 14+ with Astro.

```js
v14.15.1
```

## Hosting Astro on Netlify

1. Header over to Netlify and create an account
2. Press the "New site from Git" button
3. Click on your Git provider and follow the steps
4. In the build settings, use the following settings:

![Netlify Astro build settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1628525316876/8n63l7Yt4.png)

Then click the deploy button, and watch the magic happen!

You will now have your website available at the domain provided by Netlify.

[Check out the Astro recipe website on Netlify](https://modest-galileo-019727.netlify.app/)

From here, you can even change this to be your domain.

## Updating Astro code on Netlify

But what if we need to update anything?
Don't worry, Netlify makes this super easy, literally super easy!

To get a new release online, all you have to do is push your changes to the master branch! (Or whichever branch you setup)

I happen to like Netlify since it's super easy, and their free tier is massive.
But if you like to explore other options, check out [Astro's documentation for hosting](https://docs.astro.build/guides/deploy).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
