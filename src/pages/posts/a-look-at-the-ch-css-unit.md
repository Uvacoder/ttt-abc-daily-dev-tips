---
layout: ../../layouts/Post.astro
title: 'A look at the ch CSS unit'
metaTitle: 'A look at the ch CSS unit'
metaDesc: 'What is the ch unit in CSS and how to use it'
image: /images/27-11-2021.jpg
date: 2021-11-27T03:00:00.000Z
tags:
  - css
---

A while ago, I wrote about the [Tailwind typography plugin].
I was blown away by how easy and readable big text elements become.

After researching their applied styles, I've noted the prose class goes off on the `ch` unit.

```css
.prose {
  max-width: 65ch;
}
```

This is based on the width of the 0 characters for a specific font!
Yes, so changing the font might affect this.

And the result is that it makes a super readable width.

## Seeing the ch unit in action

Let's give this a try and make a demo with it.

For the HTML, we render two sections with different classes to represent the different fonts.

```html
<section class="georgia">
  <p>copy</p>
</section>
<section class="helvetica">
  <p>copy</p>
</section>
```

Let's add some basic styling to see these two sections under each other.

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
}
section {
  display: flex;
  align-items: center;
}
p {
  max-width: 65ch;
}
.georgia {
  font-family: Georgia, serif;
}
.helvetica {
  font-family: helvetica, sans-serif;
}
```

As you can see, we use the same `max-width` value for both elements, but once we know the result, the one is bigger.

![CSS ch unit in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1637045759612/0DRii0KY2.png)

The image above shows that the top element rendering the `Georgia` font is wider.
This is caused by its `0` (zero) being wider than the Helvetica font set.

You can also have a play with it yourself in this Codepen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="BadGOag" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BadGOag">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Extra reading

Shawn wrote this great article using this `ch` unit and just 100 bytes of CSS to make anything look great!

Here are his magic bytes:

```css
html {
  max-width: 70ch;
  padding: 3em 1em;
  margin: auto;
  line-height: 1.75;
  font-size: 1.25em;
}
```

You can read the [full article on Shawn's blog](https://www.swyx.io/css-100-bytes/).

To wrap this up, the `ch` unit is super powerful, yet a bit unpredictable as the size might change.

I like it, as I don't do static pixel design anyway, but I'm looking forward to hearing your thoughts on the `ch` unit!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
