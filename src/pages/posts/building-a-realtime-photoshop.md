---
layout: ../../layouts/Post.astro
title: 'Building a Realtime Photoshop 🎨'
metaTitle: 'Building a Realtime Photoshop 🎨'
metaDesc: 'Playing with CSS Filters and CSS Variables!'
image: /images/15-08-2020.jpg
date: 2020-08-15T03:00:00.000Z
tags:
  - css
  - javascript
---

We're going to do something amazing this weekend - we'll be re-creating Photoshop!

Well, not entirely, but we'll be re-creating the image filters in Photoshop using variable CSS Filters.

I choose to build a playground so people can understand what each filter's effect is! I do hope you find it helpful.

Things we will address in this article are:

- CSS Variables
- CSS Filters
- JavaScript Setting CSS Variables

Please have a play around with this Codepen, because actually trying it will show you how it works.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="LYNNPpp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Building a Realtime Photoshop 🎨">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYNNPpp">
  Building a Realtime Photoshop 🎨</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

Our application is going to have one image on the left hand side, and then our slider controls on the right, so let's start by creating this in HTML:

```html
<div class="container">
  <img
    src="https://images.unsplash.com/photo-1508671323699-6df22ecaec2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    id="main-image"
  />
  <div class="toolbox">
    <label>
      Blur
      <input id="blur" max="20" min="0" step="1" type="range" value="0" />
    </label>
    <label>
      Brightness
      <input id="brightness" max="1" min="0" step="0.1" type="range" value="1" />
    </label>
    <label>
      Contrast
      <input id="contrast" max="200" min="0" step="1" type="range" value="100" />
    </label>
    <label>
      Grayscale
      <input id="grayscale" max="100" min="0" step="1" type="range" value="0" />
    </label>
    <label>
      Hue
      <input id="hue" max="360" min="0" step="1" type="range" value="0" />
    </label>
    <label>
      Invert
      <input id="invert" max="100" min="0" step="1" type="range" value="0" />
    </label>
    <label>
      Opacity
      <input id="opacity" max="100" min="0" step="1" type="range" value="100" />
    </label>
    <label>
      Saturate
      <input id="saturate" max="200" min="0" step="1" type="range" value="100" />
    </label>
    <label>
      Sepia
      <input id="sepia" max="100" min="0" step="1" type="range" value="0" />
    </label>
  </div>
</div>
```

There we go, as you can see we are using the `HTML` `range` type sliders and give them default values, which are the normal values for each filter.

## Adding our General Styling

Let's start by adding our general styling:

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
}
.toolbox {
  margin-left: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
}
```

Nothing fancy, we are using [Flex to center](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) everything and add some primary margin to our elements.

## Adding our CSS Variables

In today's topic we are addressing [`CSS` Variables](https://daily-dev-tips.com/posts/how-to-use-css-vars/), these are super useful because they can easily be changed by `JavaScript`!

```css
:root {
  --blur: 0;
  --brightness: 1;
  --contrast: 100;
  --grayscale: 0;
  --hue: 0;
  --invert: 0;
  --opacity: 100;
  --saturate: 100;
  --sepia: 0;
}
```

Above, you see all the variables we are using. They correspond with the `HTML` inputs we created!

So we set them all to have our basic starting point values, but how do they do something?

## CSS Filters

As we saw in our article about our [`CSS` Disco Text](https://daily-dev-tips.com/posts/css-disco-text/), CSS Filters are really cool.

The filters we can use are as follows:

- url (We won't use this today)
- blur
- brightness
- contrast
- drop-shadow (Also, won't be used)
- grayscale
- hue-rotate
- invert
- opacity
- saturate
- sepia

So let's address this and add the filters to our Image.

```css
#main-image {
  transition: all 300ms ease-in-out;
  filter: blur(calc(1px * var(--blur))) brightness(var(--brightness)) contrast(
      calc(1% * var(--contrast))
    ) grayscale(calc(1% * var(--grayscale))) hue-rotate(calc(1deg * var(--hue))) invert(
      calc(1% * var(--invert))
    )
    opacity(calc(1% * var(--opacity))) saturate(calc(1% * var(--saturate))) sepia(calc(1% *
          var(--sepia)));
  border: 5px solid #fff;
}
```

Wow! Massive code-block, but basically, you can only have one filter element, so we "chain" the filters after each other!

Ok, cool, we now set all the filters on our image, but nothing changed?

Correct! These are all the default values of each filter, so let's add some `JavaScript` to make the sliders affect our variables.

## JavaScript Setting CSS Variables

First let's start and get our image object.

```js
const img = document.getElementById('main-image');
```

Ok, now we need to find all our sliders

```js
const inputs = document.querySelectorAll('input');
```

Next, we want to loop over each input and attach a event listener.

```js
[].forEach.call(inputs, function(input) {
  input.addEventListener('input', e => {
    img.style.setProperty('--' + input.id, input.value);
  });
});
```

We add an event listener to our input event, so every time the slider changes, we execute the function.
The function then gets our image variable and uses the `setProperty` function to set the variables (e.g. `--blur`) to the input value!

## Browser Support

As mentioned before, CSS Filters are cool, but not widely supported yet 😩.

There is a [polyfill](https://github.com/Schepp/CSS-Filters-Polyfill), but also limited.

![CSS Filter support](https://caniuse.bitsofco.de/image/css-filters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
