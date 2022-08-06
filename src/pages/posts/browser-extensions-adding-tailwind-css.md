---
layout: ../../layouts/Post.astro
title: 'Browser extensions - adding Tailwind CSS'
metaTitle: 'Browser extensions - adding Tailwind CSS'
metaDesc: 'Adding Tailwind CSS to our browser extensions via Parcel'
ogImage: /images/14-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/ac2b9d3a-31b0-41bf-2204-9a4b28bc1800
date: 2022-08-14T03:00:00.000Z
tags:
  - browser-extensions
---

Yesterday we made our very first new tab browser extension.
However, it was solely powered by plain CSS. This can become super hard to maintain over time, so let's see if we can automate much of it by introducing Tailwind CSS.

The main benefit of adding Tailwind is that it can only use its auto-purge option to include classes we are using on the page.

To handle the builds, I will also add Parcel, a super slim bundling tool we can use to do the heavy lifting.

## Installing the dependencies

If you like to follow this article, you can take the following [GitHub repo](https://github.com/rebelchris/new-tab-extension/tree/part-1) as the starting point.

As we had a plain HTML starter before, we first have to init a package file.

```bash
npm init -y
```

Open the project and execute the following commands for this project in the terminal.

```bash
npm i parcel tailwindcss
```

This will install [Parcel](https://parceljs.org/) and [Tailwind CSS](https://tailwindcss.com/) packages.

Then we also need some dev dependencies.

```bash
npm i -D parcel-reporter-static-files-copy postcss-cli
```

This will install the [Parcel static file copier](https://github.com/elwin013/parcel-reporter-static-files-copy) and [postCSS CLI](https://www.npmjs.com/package/postcss-cli).
We will use these to clean up our build process.

And that's already it. We now have all the needed packages.

## Migrating the static files

Since we installed the Parcel static file reporter, we can leverage its powers to move files that never change to our dist output.

Create a `static` folder in the root of your project, then move the manifest and the icons folder inside of it.

For it to work, we also need to create a `.parcelrc` file and put the following contents inside.

```
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["parcel-reporter-static-files-copy"]
}
```

This will ensure the static directory is always copied to our `dist` output.

## The Tailwind setup

Next, we want to look at how we can introduce the Tailwind setup to work.

First of all, add a `.postcssrc.json` file in the root project, this is a postCSS config file, but since it's built into Parcel, they will handle most of the config.

Put the following lines inside of this file.

```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

Next up, create the Tailwind config file by running the following command.

```bash
npx tailwind init
```

You can modify it to look like this:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Now open up the existing `css/style.css` file and replace everything inside with the following lines.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And that's it. Our tailwind config is already done.

## Putting it all together

Now that we have all the individual players lined up, we need to combine them.
This magic happens in the `package.json` file.

Add the following scripts to the file.

```json
{
	...
  "scripts": {
    "prebuild": "rm -rf dist .parcel-cache",
    "watch": "parcel watch new-tab.html",
    "build": "parcel build new-tab.html"
  },
}
```

We state that any `prebuild` should remove the parcel cache and dist directory.
The watch command can be used while you are developing the extension, and it will auto-reload for you.
Once satisfied, you can generate a final build by running the following command.

```bash
npm run build
```

To test it out, you have to follow the steps described in [this article](https://daily-dev-tips.com/posts/browser-extensions-new-tab-extension/#testing-the-extension), but pick the `dist` folder to be loaded.

And that's it!
You now have an extension powered by Tailwind CSS and Parcel.

You can also find the complete code sample on this [GitHub repo](https://github.com/rebelchris/new-tab-extension/tree/tailwind).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
