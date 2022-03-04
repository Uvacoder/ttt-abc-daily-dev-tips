---
layout: ../../layouts/Post.astro
title: 'How to use Google Fonts'
metaTitle: 'How to use Google Fonts'
metaDesc: 'Surely you want a cool Google Font on your website?'
image: /images/03-05-2020.jpg
date: 2020-05-03T03:00:00.000Z
tags:
  - css
  - website
---

Google fonts are an awesome way of adding a cool font to your website, I know I'm not using them, but that is for other purposes.
I use them in client websites all the time, and they are amazing and simple to use.

Let's get started on implementing a custom font for your website.

## Finding your Google Font

To find a cool font, we can go to the [Google Font library](https://fonts.google.com/) and pick one we like.

Once you have found the one you want, open it up you will see the whole set's letters and Styles.
Google Fonts will allow you to include on our more styles on your website. In my case, I'm using [Amatic SC Bold](https://fonts.google.com/specimen/Amatic+SC?sidebar.open&selection.family=Amatic+SC). Click the `Select this style` button for each style you want.
You will see a side menu on the right. It will have a `Review` and `Embed` section; in the embed, we can get the code.

## Embedding the Google Font in your website

There are two ways of embedding the font into your website

- `<link>` attribute; this sets a link like any external stylesheet
- `@import` this imports it directly in the `CSS`

The Google Fonts website will also show you which `font-family` rule you must apply to each element you want to have this specific font.

### Should I use Link or @import?

This is a question that keeps floating around on the internet, and [Steve Souders](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/) did an excellent job of comparing the two.
As his article title suggests, <link> is the best way to go according to him and [Yahoo](https://developer.yahoo.com/performance/rules.html#csslink).

## Using the Google Font on our website

```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
    rel="stylesheet"
  />
</head>
```

We embed the Google Font in the head of our `HTML` file using the following code. This is the code you get from Google Fonts.

Then in our `CSS` we can do the following:

```css
h1 {
  font-family: 'Amatic SC', cursive;
}
```

It's important to use the name as stated in Google Fonts website.

We then have the following result:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="KKdXJQK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="KKdXJQK">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKdXJQK">
  KKdXJQK</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## What to think about

So important to note when using Google Fonts, they tend to load slowly, the more you use, the more load time it will add.
And Google itself will not like that very much. My suggestion is that you keep it to one custom font.
We can use `font-display: swap` to not interfere with the load, more on this in another article!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
