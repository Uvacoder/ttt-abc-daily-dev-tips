---
layout: ../../layouts/Post.astro
title: 'CSS Only Accordion'
metaTitle: 'CSS Only Accordion'
metaDesc: 'CSS Only Accordion with the input hack'
image: /images/17-04-2020.jpg
date: 2020-04-17T03:00:00.000Z
tags:
  - css
---

Another great example where we can make the web lean again.

Accordions don't even need to have fancy `JavaScript` plugins. Surely we can do it simply in `Vanilla JavaScript`, but sometimes it's best to even look at other solutions.

Today we will look into doing a **CSS-only accordion** with the `input` hack.

> There are multiple ways of doing it with CSS. But today, we will look into just the input hack.

## HTML Setup for CSS only Accordion

For the HTML part we are going to use the following:

```html
<div class="accordion">
  <input type="checkbox" id="tab1" />
  <label class="accordion-label" for="tab1">Item 1</label>
  <div class="accordion-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
  </div>
</div>
```

This will generate one accordion for us. As you can see, we use a checkbox and a label. The label will be our accordion title.

## CSS for the Accordion

```css
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.accordion {
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.accordion-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-weight: bold;
  cursor: pointer;
  background: #333;
  color: #fff;
}
.accordion-content {
  max-height: 0;
  padding: 0 1em;
  background: white;
  transition: all 0.35s;
}
input:checked ~ .accordion-content {
  max-height: 100vh;
  padding: 1em;
}
```

Let's loop through this in more detail step by step:

```css
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
```

We don't need the input visible, so we give it a `postion: absolute;` and `z-index: -1` to hide it.
We set the `opacity: 0` so it's not visible to the user.

```css
.accordion {
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
```

For the main accordion styling, we do some simple styling.

We set a `margin` of 10px to give it some space. Then we make the corners rounded with `border-radius: 5px;`. Then we also set the `overflow: hidden` to not make the accordion content show before clicking the label. Lastly, we set a nice `box-shadow` to give it a clean effect.

```css
.accordion-label {
  display: flex;
  padding: 1em;
  font-weight: bold;
  cursor: pointer;
  background: #333;
  color: #fff;
}
```

The label we give a `display: flex` to make full width. Then we add some `padding`, make the font bold, add a `cursor: pointer`, and add some color to make it pop.

```css
.accordion-content {
  max-height: 0;
  padding: 0 1em;
  background: white;
  transition: all 0.35s;
}
```

We set the content div to have a `max-height: 0` give it a small `padding`, and add a `transition` to make it animated once it opens.

```css
input:checked ~ .accordion-content {
  max-height: 100vh;
  padding: 1em;
}
```

No for the magic, once the `input` is checked we set the `max-height: 100vh` ([100% of the viewport](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/)) and add the overall `padding` to the content div.

> The ~ is a general sibling selector it will select a sibling that follows the first one.

See the following Codepen for a demo:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="eYpJvxN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Only Accordion">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYpJvxN">
  CSS Only Accordion</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or see this example a bit more styled and more options:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="WNQQoMx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Challenge #3">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNQQoMx">
  Challenge #3</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
