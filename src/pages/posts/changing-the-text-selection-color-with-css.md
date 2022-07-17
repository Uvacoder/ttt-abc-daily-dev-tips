---
layout: ../../layouts/Post.astro
title: 'Changing the text selection color with CSS'
metaTitle: 'Changing the text selection color with CSS'
metaDesc: 'Did you know you can change the selection color in CSS?'
image: /images/05-11-2020.jpg
date: 2020-11-05T03:00:00.000Z
tags:
  - css
---

Did you know a CSS property can change the user selection behavior?

It got some excellent support lately and is one of these cool gimmicks. It doesn't break anything for the browser that doesn't support it.

The result will look like this.

![CSS Selection selector](https://cdn.hashnode.com/res/hashnode/image/upload/v1604210622068/L3DOj1XcS.gif)

## HTML Structure

For our demo, we will have multiple paragraphs that each do something different.

```html
<div>
  <h3>Select this paragraph in yellow marker</h3>
  <p class="yellow">Content here</p>
</div>

<div>
  <h3>Select this paragraph in black/white</h3>
  <p class="black">Content here</p>
</div>

<div>
  <h3>Select this paragraph in shadow text</h3>
  <p class="shadow">Content here</p>
</div>
```

## CSS Selection selector

Now we are going to use the selection attribute selector.

The default selector is written like this:

```css
::selection {
  color: red;
}
```

Then we can add a Mozilla specific one:

```css
::-moz-selection {
  color: red;
}
```

For our instance let's start with the yellow marker one:

```css
p.yellow::selection {
  background: #ffff00;
}
p.yellow::-moz-selection {
  background: #ffff00;
}
```

This will make the background of the selection a yellow color.

Now if we move on to our black and white selector:

```css
p.black::selection {
  background: #000;
  color: #fff;
}
p.black::-moz-selection {
  background: #000;
  color: #fff;
}
```

This will make the background black and the text color white.

Lastly, I wanted to show you can do more than primary color selection and even add a text shadow!

```css
p.shadow::selection {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
p.shadow::-moz-selection {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
```

Have a play around on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="jOrxWMq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Changing the text selection color with CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOrxWMq">
  Changing the text selection color with CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The browser support for the `::selection` has improved lately and can be used safely.

![CSS selection support](https://caniuse.bitsofco.de/image/css-selection.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
