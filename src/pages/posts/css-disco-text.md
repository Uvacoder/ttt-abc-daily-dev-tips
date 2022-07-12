---
layout: ../../layouts/Post.astro
title: 'CSS Disco Text'
metaTitle: 'CSS Disco Text Tutorial [2022]'
metaDesc: 'Learn how to create text with a disco effect using CSS hue-rotate. See the code examples in the Codepen!'
image: /images/14-08-2020.jpg
date: 2020-08-14T03:00:00.000Z
tags:
  - css
---

Today I will teach you something useless but fun!
I will teach you how to create text with a **disco effect** in CSS.

I wanted to explore the `hue-rotate` function and didn't have any better use case for it.

> If you have an excellent use case drop me a message!

## HTML Structure

```html
<div class="container">
  <input type="checkbox" />
  <div>D I S C O</div>
  <i>click above</i>
  <span></span>
</div>
```

I'm going with a sluggish solution today, and we'll use an invisible checkbox to get the party started 🥳.

Our text will be one word. It will be the star of the show. And a span element for the background effect.

## Disco Text effect with CSS Hue-rotate

For the text effect, the main idea is to showcase the power of the `hue-rotate` filter in `CSS`.

But let's start with the basic styling:

```css
.container {
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
```

The most important part here is the `relative` position.
The other is just basic [centering with flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

```css
.container span {
  width: 100%;
  height: 100%;
  background: #efefef;
  position: absolute;
  z-index: -1;
  transition: all 0.5s ease;
}
```

This span will be our virtual background, so we give it a starting grey color and position it `absolute` on the whole background.

We then add a transition on all effects.

```css
.container div {
  position: relative;
  width: auto;
  background: #1d1e21;
  color: #555;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 25px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}
```

Now for our main div, it's nothing fancy, some general styling to make it look nice.

This article uses a checkbox to turn our disco on/off. We'll make the checkbox invisible across our whole page for easy usability.

```css
input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 100;
}
```

Ok, on to the magic part: What happens if we click this checkbox:

```css
input[type='checkbox']:checked ~ span {
  background: #333;
}
```

First, we make our background span a darker color to "turn the lights off."

And then, we turn the actual disco text on with this CSS code:

```css
input[type='checkbox']:checked ~ div {
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  color: yellow;
  text-shadow: 0 0 15px yellow, 0 0 25px yellow;
  animation: glow 5s linear infinite;
}
```

The glow animation is where the excellent disco effect takes place:

```css
@keyframes glow {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
```

There we go! This is how to create a text with animating disco colors.

### See the Code example on Codepen

The result is in the following Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="JjXGOMv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Disco Text">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjXGOMv">
  CSS Disco Text</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

As you can imagine, such a cool CSS feature comes at the price of not supporting every browser :(.

There is a [polyfill](https://github.com/Schepp/CSS-Filters-Polyfill), but also limited.

![CSS Filter support](https://caniuse.bitsofco.de/image/css-filters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
