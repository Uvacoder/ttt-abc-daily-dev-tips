---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Element.scrollIntoView'
metaTitle: 'JS scrollIntoView offset with fixed header [2022 Tutorial]'
metaDesc: 'Learn how to implement smooth scrolling to a section wihout it being hidden under a fixed header. See the Codepen example code.'
image: /images/28-04-2020.jpg
date: 2020-04-28T03:00:00.000Z
tags:
  - javascript
---

I'm sure you have seen this: you click a button and smoothly scroll to that section.

Today we are looking at implementing a smooth scroll into view in `Vanilla JavaScript` by using the `Element.scrollIntoView()` function.

## HTML Structure

Let's set up a small demo to demonstrate this. The demo code will have a fixed header with some buttons and four sections to which we can scroll.

```html
<header>
  <nav>
    <a href="#" data-target="section-1" class="btn-scroll-into">Section 1</a>
    <a href="#" data-target="section-2" class="btn-scroll-into">Section 2</a>
    <a href="#" data-target="section-3" class="btn-scroll-into">Section 3</a>
    <a href="#" data-target="section-4" class="btn-scroll-into">Section 4</a>
  </nav>
</header>
<section id="section-1">Section 1</section>
<section id="section-2">Section 2</section>
<section id="section-3">Section 3</section>
<section id="section-4">Section 4</section>
```

As you can see, nothing fancy. Note that we added `data-target` `attributes` to our header navigation items and a class of `btn-scroll-into`.
Read more about [data-attributes](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/).

## CSS for our scrollIntoView demo

```css
body {
  padding-top: 50px;
}
header {
  position: fixed;
  height: 50px;
  background: #345995;
  width: 100%;
  top: 0;
}
header nav {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header nav a {
  padding: 5px 10px;
  background: #03cea4;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
}
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
  background: #ca1551;
}
section:nth-child(odd) {
  background: #fb4d3d;
}
```

Really nothing special here. We **offset** our body by 50 pixels since we use a fixed header that will always stay on the top of our screen.
And add some 100% sections by utilising [viewport units](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/) and [flex box centering](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

## JavaScript scrollIntoView

```js
document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn-scroll-into')) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView();
});
```

Yep, that is all! We added an `event listener`, which will fire each time we click; we then check if the element we click has the class `btn-scroll-into`.
We then define an element variable by using `getElementById` and passing the [`dataset attribute`](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/) called target.

Then all we do is say `element.scrollIntoView();` this will put the element we selected at the top of our page.

### You can see the example in action on this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="ExVWJxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Element.scrollIntoView">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExVWJxg">
  Vanilla JavaScript Element.scrollIntoView</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## ScrollIntoView options

This is now a hard switch, but it allows options which are the following:

- behavior: `auto` or `smooth`
- block: `start`, `center`, `end` or `nearest` (default: `start`)
- inline: `start`, `center`, `end` or `nearest` (default: `nearest`)

So let's make it scroll smoothly:

```js
element.scrollIntoView({ behavior: 'smooth' });
```

### View this smooth scroll example on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="KKdWYzP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Element.scrollIntoView Smooth">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKdWYzP">
  Vanilla JavaScript Element.scrollIntoView Smooth</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
