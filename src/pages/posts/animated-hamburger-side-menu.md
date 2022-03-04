---
layout: ../../layouts/Post.astro
title: 'Animated Hamburger Side Menu 🍔'
metaTitle: 'Animated Hamburger Sidenar Menu Tutorial [2022]'
metaDesc: 'Learn in this tutorial how to make a great animated hamburger side menus with an animation into a cross symbol.'
image: /images/26-04-2020.jpg
date: 2020-04-26T03:00:00.000Z
tags:
  - css
  - javascript
---

Sorry, this blog post is not about making the perfect burger menu. I know disappointing, right?

Instead, we will be looking into a pure CSS animated side menu.

I've created this hamburger sidebar menu for my current company and wanted to guide you through some of the processes. This is a simplified version. You will learn how to **animate the hamburger icon** and how to slide in the menu from the **right side**.
We will also implement two views, one for desktop and one for mobile views.

> This is my interpretation and solution for this setup; there are many ways of doing this!

## HTML Structure for side menu

```html
<nav id="main-nav" class="nav">
  <a href="#" class="logo">
    <img width="50" src="https://daily-dev-tips.com/images/logo.png" />
  </a>
  <div class="nav-menu">
    <span class="nav-menu-item"> Menu</span>
    <span class="nav-menu-cross"></span>
  </div>
  <div class="nav-menu-side">
    <nav class="nav-menu-side-nav">
      <ul>
        <li><a href="#">Home.</a></li>
        <li><a href="#">Work.</a></li>
        <li><a href="#">Blog.</a></li>
        <li><a href="#">Resume.</a></li>
        <li><a href="#">Contact.</a></li>
      </ul>
    </nav>
  </div>
</nav>
```

We use one main nav to wrap the whole menu bar and side menu in.
The menu has three child elements which are:

- logo with a link to the home page
- nav menu, which contains the hamburger icon
- sidebar menu with all the links

The HTML doesn't contain any special hacks, so let's dive into the CSS part.

## JavaScript add an open class

So as far as JavaScript goes in this example, we don't need much. We just want to add one class to our top element once we click the hamburger icon.

```js
const mainNav = document.getElementById('main-nav');
document.addEventListener('click', function (event) {
  if (!event.target.matches('.nav-menu')) return;
  mainNav.classList.toggle('nav-open');
});
```

So we get our main navigation element and add a click listener.
If that is our nav-menu CSS class, we will toggle the nav-open class on it.
Read more about [JavaScript classList](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/).

## CSS Animated Hamburger Menu

```css
body {
  background: #fff;
  min-height: 100vh;
}
```

We make the body background white and add a `min-height` of `100vh` to make it full screen. Read more about [viewport units](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
.logo {
  display: flex;
  margin-left: 24px;
}
```

For the logo, we say it must `display: flex` to fix a spacing issue and have a `margin-left` of 24px to offset it from the side.
(We can't use padding on the navigation bar because it will become too wide)

```css
.nav {
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.25s;
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
}
```

The `nav` is the actual main container for this project. We make it fixed so it will be stuck to the top if you have more content.
Then we give it a z-index to lay on top of other content.
`transition` is the animation effect, and we add it to all effects.
Then we use `display: flex` and `justify-content: space-between` to put the logo left and the menu right.
And we add 24px `padding` to the top and bottom.

```css
.nav:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 95%;
  bottom: 0;
  left: 2.5%;
  background: #000;
}
```

Here we have another `pseudo-element` as we learned in the article [CSS pseudo-elements](https://daily-dev-tips.com/posts/css-pseudo-elements/).
In this code example, I'll add a 1px high line of 95% of our viewport, showing black. We use this as the divider line for the menu.

```css
.nav-open {
  color: #fff;
}
```

Nav-open will be our class that will make the menu open. So once it's open, we make the text white instead of black.

```css
.nav-open:after {
  background: #fff;
}
```

We then also make the divider line white instead of black.

```css
.nav-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 34px;
  position: relative;
  margin-right: 24px;
}
.nav-menu > * {
  pointer-events: none;
}
```

This is the CSS for the menu text. It makes sure the text is in the middle of the sidebar, and we add `margin-right: 24px` to offset it.
Then we make sure all children have no `pointer-events` with `pointer-events: none` this is important for our `JavaScript` code. It makes sure it only fires on the parent element.

## Hamburger Icon CSS

Many of you will wonder how we can set up the cross animation for the hamburger.
So let's go through that CSS.

```css
.nav-menu-cross {
  position: absolute;
  top: 20.5px;
  right: 0;
  height: 2px;
  width: 20px;
  background-color: #000;
  display: block;
  border-radius: 5px;
  transition: transform 0.25s, -webkit-transform 0.25s;
}
```

We create a small line and say it can animate with the `transition` rule. As you can see, it's important to set `position: absolute`.

But with this, we only have one line. Let's use another [CSS Pseudo-element](https://daily-dev-tips.com/posts/css-pseudo-elements/) after.

```css
.nav-menu-cross:before {
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 20px;
  background-color: #000;
  top: 5px;
  right: 0;
  border-radius: 5px;
  transition: transform 0.25s, -webkit-transform 0.25s;
}
```

As you can see, it's a copy of the above hamburger line, but 5px below the first line.

### Animating Hamburger Lines to the Cross

So once we click the menu button, we want to see the hamburger turn into a cross symbol.

```css
.nav-open .nav-menu-cross {
  background: #fff;
  transform: translate3d(0, 4px, 0) rotate(45deg);
}
.nav-open .nav-menu-cross:before {
  background: #fff;
  transform: rotate(-90deg) translate3d(5px, 0px, 0);
}
```

So, if the main navigation has the nav-open class, which we added with our `JavaScript`, we tell our hamburger menu to turn white and use `transform` to rotate our hamburger lines to look like a cross!
Amazingly simply right?!

## The actual side menu

```css
.nav-menu-side {
  transition: all 0.25s;
  position: absolute;
  left: 100%;
  width: 100%;
  height: 100vh;
  padding-top: 98px;
  top: 0px;
  z-index: -1;
  background: #000;
}
```

This is our actual side menu, including the hamburger. We position it absolute and make sure it's set to `left: 100%`. This makes it start outside the viewport.

So imagine your browser and next to it the sidebar menu. It's not visible at first.
We then add `padding-top: 98px` to make it only start under the menu bar.

```css
.nav-menu-side-nav {
  margin-top: 36px;
  display: flex;
  justify-content: center;
  text-aling: center;
  width: 100%;
}
.nav-menu-side-nav ul {
  list-style: none;
  text-align: center;
}
.nav-menu-side-nav ul li {
  padding-bottom: 12px;
}
.nav-menu-side-nav ul li a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
```

All this is the styling for the menu. We make sure it's centered inside and do some basic CSS to make it look pretty.

### Open Side Menu

Let me show you what happens to the sidebar if the nav-open class is on our main navigation element:

```css
.nav-open .nav-menu-side {
  left: 47%;
}
.nav-open .nav-menu-side-nav {
  width: 53%;
}
```

This code will fire and make the side menu have left of 47%.
Remember we added `transition: all 0.25s;` to our side menu. That will make sure it slides in!
Then we fix the navigation position inside our side menu width a percentage-based width.

```css
@media screen and (max-width: 1024px) {
  .nav-open .nav-menu-side {
    left: 0%;
  }
  .nav-open .nav-menu-side-nav {
    width: 100%;
  }
}
```

The code above is for screens smaller than 1024px. We call these `media-queries`, and they can be used in many varieties.
We just want the side menu to be entirely on the left of our page and our navigation inside full width.

## Demo hamburger side menu

There was a lot of code, but I wanted to show a nice solution. I would strongly suggest you try this yourself or have a play on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="zYvNWNG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Animated Hamburger Side Menu 🍔">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYvNWNG">
  Animated Hamburger Side Menu 🍔</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
