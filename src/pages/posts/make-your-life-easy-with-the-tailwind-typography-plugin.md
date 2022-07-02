---
layout: ../../layouts/Post.astro
title: 'Make your life easy with the Tailwind typography plugin'
metaTitle: 'Make your life easy with the Tailwind typography plugin'
metaDesc: 'Use the Tailwind typography plugin to make styling content blocks easy'
image: /images/15-11-2021.jpg
date: 2021-11-15T03:00:00.000Z
tags:
  - css
  - tailwind
---

I'm sure you are a tailwind rockstar by now, but you might have found yourself in a situation where you struggled to get that perfect reading font?

Or you couldn't be bothered setting up the basic heading, list, and whatnot styles.

That's why you should try out the [typography plugin](https://github.com/tailwindlabs/tailwindcss-typography)!

## What is this Tailwind typography plugin?

This is a plugin you can add to your Tailwind project. It comes with a new class called `prose`, and if you use that on your content wrapping div, everything inside of it will be automatically styled in a super neat way.

I love to use this for markdown rendered posts, as I don't want to think about the styling of each element I might add to it.

And the best part about this plugin? You can customize it to fit your needs!

## Installing the Tailwind typography plugin

To install the plugin, go to your project in a terminal and run the following command.

```bash
npm install @tailwindcss/typography
```

Once that's done, open up your `tailwind.config.js` file and add the plugin like so:

```js
module.exports = {
  // ...
  plugins: [require('@tailwindcss/typography')],
};
```

Let's try it out and place some basic HTML in an article element.

```html
<article>
  <h1>Welcome to my article</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
    orci at erat vulputate, at mattis leo facilisis. Vestibulum non tortor a leo
    sodales facilisis vitae at nunc. Cras maximus eros sed lectus viverra
    commodo. Nunc vulputate sem quam, ac mollis ligula tincidunt eget. Aenean a
    aliquet est, quis mollis lacus. Maecenas eu porta arcu. Suspendisse
    vulputate ipsum id dui aliquet pellentesque. Nullam non quam nec sapien
    sollicitudin maximus. Vivamus aliquam ornare odio, pellentesque condimentum
    diam finibus eu. Nunc vehicula tincidunt tempor.
  </p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
    <li>List item 5</li>
  </ul>
  <h2>Closing with a H2</h2>
</article>
```

If we run this, we get a soup of words not styled at all.

![Tailwind un styled content](https://cdn.hashnode.com/res/hashnode/image/upload/v1636005097962/D2mzqoTDU.png)

Let's change that and make this a typography item.
To do this, add a `prose` class to the article.

```html
<article class="prose"></article>
```

![Tailwind typography in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636004973281/4txSQlIgZ.png)

Way better, right!

We didn't have to think about anything, and it just looks great.

You can also find this on my [plain HTML Tailwind starter](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/) on [GitHub](https://github.com/rebelchris/HTML-Tailwind-Starter/tree/tailwind-typography).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
