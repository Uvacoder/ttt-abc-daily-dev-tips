---
layout: ../../layouts/Post.astro
title: 'Why CSS :focus-within is amazing'
metaTitle: 'Why CSS :focus-within is amazing'
metaDesc: 'Did you know about this amazing feature to grab attention to elements?'
image: /images/10-11-2020.jpg
date: 2020-11-10T03:00:00.000Z
tags:
  - css
---

This is not a :focus selector, which will highlight when you focus on an element.
But a selector to fire when something within is focused.

In our case, we'll be focusing on forms (I see what you did there 😏)

The end result will look like this:

![CSS focus-within selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1604594756589/SX71OB4Nt.gif)

## HTML Structure

As for our HTML, we wil create a form with 2 inputs.

```html
<form>
  <label for="username">Username</label>
  <input type="text" name="username" />
  <br /><br />
  <label for="password">Password</label>
  <input type="password" name="username" />
</form>
```

That's all we need for this specific demo.

## CSS focus-within pseudo selector

The :focus-within is a [pseudo-selector](https://daily-dev-tips.com/posts/css-pseudo-elements/), like :before or :after.

Let's first add some basic styling.

```css
body {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
form {
  border: 1px dashed #333;
  padding: 25px;
}
```

This will make sure our form is [absolutely centered](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) on the page and has a small border to showcase our effect later on.

Now we want to draw the users attention to the form, but making it a fancy colour when they focus an input field.

```css
form {
  border: 1px dashed #333;
  padding: 25px;
  transition: background 0.3s ease;
}
form:focus-within {
  background: #f4d35e;
}
```

This will change the background of our form to yellow.

You can see this in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="GRqBXxY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Why CSS :focus-within is amazing">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/GRqBXxY">
  Why CSS :focus-within is amazing</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Making it more awesome

Yes, we can even make it more awesome by using a box-shadow hack we can create a kind of modal effect!

```css
form {
  border: 1px dashed #333;
  padding: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0);
}
form:focus-within {
  background: #f4d35e;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7);
}
```

We create a box-shadow that is 100% of the viewport biggest position (width or height). Initially, this will be at 0 opacity.

When we have a :focus-within we change the opacity to 70%.

The effect is a lightbox-like effect ✨.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="NWrBLjm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Why CSS :focus-within is amazing ~ Modal Effect">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWrBLjm">
  Why CSS :focus-within is amazing ~ Modal Effect</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The :focus-within selector actually has pretty good support, considering IE is dead already.

![CSS focus-within selector browser support](https://caniuse.bitsofco.de/image/css-focus-within.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
