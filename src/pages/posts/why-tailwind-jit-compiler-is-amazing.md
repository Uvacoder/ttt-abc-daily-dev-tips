---
layout: ../../layouts/Post.astro
title: 'Why Tailwind JIT compiler is amazing'
metaTitle: 'Why Tailwind JIT compiler is amazing'
metaDesc: 'How the Tailwind JIT Compiler rules, and why you should use it'
image: /images/17-04-2021.jpg
date: 2021-04-17T03:00:00.000Z
tags:
  - css
  - tailwind
---

I only found out about this JIT Compiler a few days ago, during my Livestream with [Stefan Natter](https://www.youtube.com/watch?v=YA1hzqfv2i8).

During this Livestream, we got to use the JIT compiler, and I was super amazed by the speed, but more than that, the customization option!

I have been waiting for something like that, and it's spot on what you would expect.

Today I'll show you how to enable the JIT compiler and how you can leverage this custom CSS.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🚀 Excited to share the biggest advancement we&#39;ve made with Tailwind CSS since the first release back in 2017!<br /><br />⚡️ A lightning fast JIT compiler<br />🧁 Never configure variants again<br />🤸 Write less custom CSS than ever<br /><br />Watch the announcement 👉<a href="https://t.co/VWuTNZRnxj">https://t.co/VWuTNZRnxj</a> <a href="https://t.co/tnPMJJ9qJe">pic.twitter.com/tnPMJJ9qJe</a></p>&mdash; Adam Wathan (@adamwathan) <a href="https://twitter.com/adamwathan/status/1371505992840663051?ref_src=twsrc%5Etfw">March 15, 2021</a></blockquote> <script defer async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Adding the Tailwind JIT Compiler

For this article, I'm going to use my simple HTML Tailwind starter project.

You can [find the project on GitHub](https://github.com/rebelchris/HTML-Tailwind-Starter).

The first step is to add the JIT Compiler. We can do so by running the following command.

```bash
npm install -D @tailwindcss/jit tailwindcss postcss autoprefixer
```

Next up, we need to make sure this compiler is used.
For our project, we can open up the `postcss.config.js` file.

Adjust the file to look like this:

```js
module.exports = {
  plugins: {
    '@tailwindcss/jit': {},
    autoprefixer: {}
  }
};
```

And that is all there is to it!
Already amazing, right?

## Using Tailwind JIT Compiler to generate custom styles

I'm sure every one of us ever needed a custom style.
Perhaps you needed a fixed-width element, a custom size border, or translate, perhaps.

With the new JIT Compiler, we can do this in a breeze.

Imagine we need to create a fixed-width box.
The box needs to be exactly 300x300px. We could, of course, extend Tailwind, but we can now even do this easier!

Simply add classnames like such:

```html
<div class="w-[300px] h-[300px]">
  Tailwind JIT Compiler
</div>
```

That is so cool!
Start the script with `npm run dev` and check out what's happening in the browser.

![Tailwind JIT Compiler custom size](https://cdn.hashnode.com/res/hashnode/image/upload/v1618380362939/ber12VU9F.png)

There you go, a square box and the classes are already reflecting in our CSS file!

You can find this project on the following [GitHub link](https://github.com/rebelchris/HTML-Tailwind-Starter/tree/JIT-compiler).

This stuff is next level,
Thank you, Tailwind!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
