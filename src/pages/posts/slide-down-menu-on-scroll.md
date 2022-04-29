---
layout: ../../layouts/Post.astro
title: 'Slide Down Menu on Scroll'
metaTitle: 'Slide Down Menu on Scroll'
metaDesc: 'Today we make a slide down menu with CSS and JavaScript'
image: /images/12-06-2020.jpg
date: 2020-06-12T03:00:00.000Z
tags:
  - css
  - javascript
---

Ever wondered how to make a menu that appears as soon as you scrolled a bit?
Today we are going to create one like that. It will slide in from the top the moment we scroll.
And hide once we scrolled back to the top.

## HTML Structure

```html
<div id="navbar">
  <a href="https://daily-dev-tips.com/" target="_blank">Blog</a>
  <a href="https://twitter.com/DailyDevTips1" target="_blank">Twitter</a>
  <a href="#" target="_blank">Facebook</a>
</div>

<div class="content">
  <h1>Please scroll down to see the menu</h1>

  A lot of content here...
</div>
```

## CSS Structure

As for the menu, we use the following `CSS`.

```css
#navbar {
  background-color: #3f3f37;
  position: fixed;
  top: -50px;
  width: 100%;
  display: flex;
  transition: top 0.3s;
  justify-content: space-around;
}
#navbar a {
  display: block;
  color: #878472;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
#navbar a:hover {
  background-color: #878472;
  color: #3f3f37;
}
```

We give the navbar a `position: fixed` to stay on the top but start from a negative 50 pixels. This will make it hidden at first.
The animation will happen because of `transition: top 0.3s;`.

Then we style the links inside, but nothing fancy going on there.

## JavaScript magic

As for the actual magic, that comes down to `JavaScript`.

```js
const navbar = document.getElementById('navbar');
window.onscroll = function () {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-50px';
  }
};
```

We first define our navbar element.
Then we start a scroll listener and check if we scrolled more than 25 pixels.
If yes, we set the top of our navbar to 0.
Else we will hide it again.

See it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="MWKywbO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Slide Down Menu on Scroll">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWKywbO">
  Slide Down Menu on Scroll</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
