---
layout: ../../layouts/Post.astro
title: 'How to use Tailwind CSS in Astro'
metaTitle: 'How to use Tailwind CSS in Astro'
metaDesc: 'Installing and using Tailwind CSS in Astro'
image: /images/25-07-2021.jpg
date: 2021-07-25T03:00:00.000Z
tags:
  - astro
---

It's never been easier to include Tailwind CSS in a framework.

Why? Astro has [build-in support for Tailwind](https://docs.astro.build/guides/styling#-tailwind)! 🥳
And yes, even the [Tailwind JIT compiler](https://daily-dev-tips.com/posts/why-tailwind-jit-compiler-is-amazing/).

I'll write down this quick guide to get you started setting up Tailwind CSS in an Astro project.

## Installing Tailwind CSS in an Astro project

Let's start with a basic Astro project.

```bash
mkdir astro-tailwind && cd astro-tailwind
npm init astro
```

You can choose any of the templates. It doesn't matter.

Now let's install Tailwind CSS.

```bash
npm install -D tailwindcss
```

The next step is to create a `tailwind.config.js` file to tell Tailwind which files to purge and enable the JIT compiler.

```js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
};
```

Then we can Astro that it should use this Tailwind config file by modifying the `astro.config.js` file and adding this to the `devOptions` section.

```js
devOptions: {
  tailwindConfig: './tailwind.config.js';
}
```

Create a `global.css` file in the `src/assets` directory.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Let's modify our `src/pages/index.astro` to test how it works.

The first thing we need to do is load our stylesheet in the head section:

> Edit 25-10: This is Astro's new way of loading assets

```html
<head>
  <!-- Other stuff -->
  <link rel="stylesheet" href={Astro.resolve("../assets/style/global.css")} >
</head>
```

```html
<div
  class="min-h-screen overflow-auto bg-gradient-to-br from-indigo-900 to-green-900"
>
  <div class="container max-w-5xl px-4 mx-auto">
    <div class="w-4/5 mx-auto">
      <h1 class="mt-32 text-6xl font-bold text-white">
        <img width="60" height="80" src="/assets/logo.svg" alt="Astro logo" />
        Welcome to
        <a href="https://astro.build/">Astro</a>
      </h1>
    </div>
    <div class="w-4/5 mx-auto my-10">
      <h3 class="text-gray-300">
        Build faster websites with less
        <strong class="text-white">client-side Javascript</strong>
        <br />
        This is how easy it is to get started
      </h3>
    </div>
    <div
      class="w-2/5 p-10 mx-auto leading-10 text-white bg-black shadow-lg rounded-2xl"
    >
      mkdir astro<br />
      cd astro<br />
      npm init astro
    </div>
  </div>
</div>
```

And this results in the following:

![Tailwind starter in Astro](https://cdn.hashnode.com/res/hashnode/image/upload/v1626673864896/iu-ZiwbwcQ.png)

You can also download this project from [GitHub](https://github.com/rebelchris/astro-tailwind).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
