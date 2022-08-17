---
layout: ../../layouts/Post.astro
title: "CSS Aspect Ratio it's finally here"
metaTitle: "CSS Aspect Ratio it's finally here"
metaDesc: 'The long awaited CSS Aspect ratio is finally available to make our lives easier.'
image: /images/01-02-2021.jpg
date: 2021-02-01T03:00:00.000Z
tags:
  - css
---

If you're a front-end developer, you must have looked up "CSS Aspect Ratio" more than once.

One of these things one would expect to be existing in CSS for a long time, but it was not! (Well, not really)

There are [some hacks](https://css-tricks.com/aspect-ratio-boxes/) to achieve it.

But not a proper aspect-ratio solution, until now that is!

Chrome just got support for the `aspect-ratio` property.

To give you an example of how it works:

![CSS aspect-ratio demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1611725841854/SD7zMTaj8.gif)

## Using the CSS aspect-ratio

The syntax for the `aspect-ratio` is pretty simple.

```css
aspect-ratio: width / height;
```

Alternatively you have some CSS basics like:

```css
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: unset;
```

To test it out, let's make a resizable box to test out how it will work.

```html
<div class="container"></div>
```

Inside of the container, we will place two boxes that will have their own aspect ratio's

Box 1 will have an aspect ratio of 1/1
And Box 2 will have a 16/9 aspect ratio.

```html
<div class="container">
  <div class="box box1"></div>
  <div class="box box2"></div>
</div>
```

First, we'll start by styling the container. We want it to wrap the elements inside but add the [CSS Resize property](https://daily-dev-tips.com/posts/making-divs-user-resizable-with-css/).

```css
.container {
  display: flex;
  gap: 16px;
  resize: horizontal;
  overflow: auto;
}
```

Then we can move to our generic box styling. This will be the styling that each box will get.

```css
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
}
```

As you can see, this is mainly used to center the content inside the boxes and give them a bigger font.

Now onto the magic part 🪄.

### CSS square aspect-ratio 1/1

For our first box, we will use a square aspect ratio. We can achieve this by using the following CSS.

```css
.box1 {
  aspect-ratio: 1 / 1;
  background: #06d6a0;
  flex: 1;
}
```

This will provide us a square box that can grow in size.

### CSS rectangle aspect-ratio 16/9

The second box will have a 16/9 aspect-ratio, which we can achieve by the following CSS.

```css
.box2 {
  aspect-ratio: 16 / 9;
  background: #ef476f;
  flex: 1 0 auto;
}
```

Now we get the following result as you can test out in this Codepen.

> Note: Browser support is not big, so you might not see it behave as expected. I've added the GIF, in the beginning to showcase how it works.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="JjRgaQx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Aspect Ratio it's finally here">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjRgaQx">
  CSS Aspect Ratio it's finally here</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

It's still very early days for the `aspect-ratio` browser-support. Chrome shipped it in production in version 88, and Firefox has it in beta, so you can enable it in Firefox.

![CSS aspect-ratio browser support](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__aspect-ratio-1611725701664.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
