---
layout: ../../layouts/Post.astro
title: 'CSS image reflections with box-reflect'
metaTitle: 'CSS image reflections with box-reflect'
metaDesc: 'A super cool one-line CSS option to reflect images'
image: /images/14-03-2021.jpg
date: 2021-03-14T03:00:00.000Z
tags:
  - css
---

Did you know CSS has a custom reflection property?
It's a pretty cool addition to reflect an image to a specific side.

We can create these reflections using the box-reflect property.

Curious to see what the reflection can look like, check out this Codepen using box-reflect.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="QWGJyBO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS image reflections with box-reflect">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/QWGJyBO">
  CSS image reflections with box-reflect</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Reflecting image using CSS

For our example, we are using a super simple markup using just one image.

```html
<img src="myimage.png" />
```

Then we can use the box-reflect class to enable our reflection:

```css
img {
  -webkit-box-reflect: below;
}
```

This will give us the following result:

![CSS Box-reflect below](https://cdn.hashnode.com/res/hashnode/image/upload/v1615304615973/QuTN7iU2M.png)

We can use the following options:

- below
- above
- left
- right

And even place a offset:

```css
img {
  -webkit-box-reflect: right 20px;
}
```

![Box-reflect offset right](https://cdn.hashnode.com/res/hashnode/image/upload/v1615304713709/5Wq5qPT9B.png)

And even cooler, we can add a gradient as the fade-out effect using the third parameter.

```css
img {
  -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
}
```

## Browser support

Box-reflect doesn't have the best support, but it's upcoming. So far, Firefox and IE have no support at all.

![CSS Box-reflect browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__-webkit-box-reflect-1615304850311.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
