---
layout: ../../layouts/Post.astro
title: 'Show and hide a header based on scroll direction'
metaTitle: 'Show and hide a header based on scroll direction'
metaDesc: 'How to create a header that shows on scroll up and hides on scroll down in JavaScript and CSS'
image: /images/09-01-2022.jpg
date: 2022-01-09T03:00:00.000Z
tags:
  - css
  - javascript
---

This article has a funny origin as it was requested by my good friend Fredrik who asked me to help with a specific menu.

He initially reached out to me, thanking me for writing down the article on [showing a menu on scroll](https://daily-dev-tips.com/posts/slide-down-menu-on-scroll/).

And he wanted to create something similar to the [Pentagram website](https://www.pentagram.com/).

Let's take a moment to see what happens and what kind of actions we need to focus on.

1. We see the header with no background sitting over an image
2. On scroll, the header disappears like a regular element
3. Once we scroll down and pass the first viewport height, the following actions can happen
4. Scroll up, and the menu re-appears with a background
5. Scroll down, and the menu disappears again
6. When we hit the viewport height, it always disappears again

I've done more research on this website, and they use two headers to achieve this effect. However, I will show you how to do this with just one!

The result for today can be seen in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="BawYXYz" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BawYXYz">
  Show and hide a header based on scroll direction</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Sketching a solution

Let's start by wireframing an HTML setup to work with. I went for a straightforward approach and came up with the following.

```html
<header>Logo</header>
<main>
  <section><img src="img.jpg" alt="colorfull passage" /></section>
  <section><p>text</p></section>
  <section><img src="img.jpg" alt="colored leafs" /></section>
  <section><p>text</p></section>
</main>
```

As you can see, we have the header as one element and a main wrapper with some sections.

I'll start by making each section the exact size of the viewport. This will make the effect stand out a bit more.

```css
section {
  background: #efefef;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> Note: You can find the complete CSS in the CodePen example.

Then we have to start working on the initial header styling.
As mentioned, it should be an absolute positioned element so that it will scroll away initially.

```css
header {
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
}
```

## Handling scroll events in JavaScript

Now I think it's time to add some JavaScript scroll listeners.

As you might know, listening to scroll events greatly impacts performance because it fires too often.
Especially on mobile devices, it fires like crazy.

So, we want to add some threshold not to fire too many events.

I've decided on a 100ms delay of firing. You can play around with this value. However, it will impact when it adds/removes certain classes to get weird behaviors.

The throttle function looks like this:

```js
const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};
```

This will check if enough time is passed. If that is the case, we fire the `func()` we passed as an argument.

To use this, we can wrap the function we want to use for the scroll effect like so:

```js
window.addEventListener('scroll', throttle(validateHeader, 100));
```

So on scroll, but only after `100ms` will we fire a `validateHeader` function.

Before building this function, let's set up some variables we need.
In this case, we want to have the header element and the last scrolled position.

```js
const header = document.querySelector('header');
let lastScroll = 0;
```

Now it's time to make the `validateHeader` function.

```js
const validateHeader = () => {
  // todo
};
```

We can start by getting the current scroll offset and the screen size.

```js
const windowY = window.scrollY;
const windowH = window.innerHeight;
```

We first need to determine if we scrolled past the first viewport height (`windowH`).

```js
if (windowY > windowH) {
  // We passed the first section, set a toggable class
  header.classList.add('is-fixed');
} else {
  header.classList.remove('is-fixed', 'can-animate');
}
```

If this is the case, we will add a new class to our header. This class is the `is-fixed` class.

If the scroll is not high enough, we remove this class, and the `can-animate` class we'll add in a second.

This `is-fixed` class looks like this:

```css
header {
  &.is-fixed {
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    transform: translate3d(0, -100%, 0);
  }
}
```

This class changes the header from `absolute` to `fixed` and makes sure it's hidden initially. It also changes the background of the header.

Next, we need to determine if we passed the viewport height + the header size.
I split these two to prevent flickering from happening because of the animation we will set.

```js
// Determine is we ready to animate
if (windowY > windowH + 40) {
  header.classList.add('can-animate');
} else {
  header.classList.remove('scroll-up');
}
```

This `can-animate` class will add the smooth animation we want. However, as mentioned, we don't want to on the first load. That's why we split the two.

```css
header {
  &.can-animate {
    transition: transform 0.3s ease, visibility 0s 0.3s linear;
  }
}
```

The last part of this puzzle is the actual show once we scroll upwards.

```js
if (windowY < lastScroll) {
  header.classList.add('scroll-up');
} else {
  header.classList.remove('scroll-up');
}
```

We can see if the window position is smaller than the last scrolled position.
If yes, we should scroll up and add the `scroll-up` class.

This class will transform the negative position of the header.

```css
header {
  &.scroll-up {
    transform: translate3d(0, 0, 0);
  }
}
```

The last thing this function needs is to update the previous scroll position with the current one.

```js
lastScroll = windowY;
```

And that's it. We got a header that can change appearance once it passes the first viewport height.
And it will show only on scroll up.

> Note: You can see the complete code in the embedded CodePen.

I hope you enjoyed this article. I would love to see what you used this for.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
