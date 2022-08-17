---
layout: ../../layouts/Post.astro
title: 'Animating a gradient border in CSS'
metaTitle: 'Animating a gradient border in CSS'
metaDesc: 'How to animate a border gradient in CSS'
image: /images/02-12-2021.jpg
date: 2021-12-02T03:00:00.000Z
tags:
  - css
---

I made this cool [animated Multi-colour text effect in CSS](https://daily-dev-tips.com/posts/multi-colored-text-in-css/).
I was re-looking this article and thought we could use some of these learnings to make a cool animated border effect!

The result for today will be this cool animated border gradient.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="porBNgg" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/porBNgg">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Setting up the basis for a gradient border

Gradient borders in CSS are tricky, as we need to leverage the `border-image` property. It's not a super well-known property and comes with some caveats.

However, let's give it a go.

We'll first make a single div in our HTML setup.

```html
<div></div>
```

Let's give this div a big width and height so we can have a good demo.

```css
div {
  width: 50vmin;
  height: 50vmin;
  border: 1rem solid;
}
```

This will create a div that is half the width of our viewport. And give this div a `1rem` border.

The next thing we want to add is the actual border-image. We can pass an actual image or set SVGs or a gradient as this gets rendered as an image.

```css
div {
  width: 50vmin;
  height: 50vmin;
  border: 1rem solid;
  border-image: linear-gradient(0deg, #12c2e9, #c471ed, #f64f59) 1;
}
```

We should now have our basic border setup, which should look like this.

![CSS Border image](https://cdn.hashnode.com/res/hashnode/image/upload/v1637493141958/AcfbgjnBU.png)

Pretty close already. Now we need to animate this!
Let's use some [CSS variables](https://daily-dev-tips.com/posts/how-to-use-css-vars/) to make the position animatable.

```css
div {
  --angle: 0deg;
  width: 50vmin;
  height: 50vmin;
  border: 1rem solid;
  border-image: linear-gradient(var(--angle), #12c2e9, #c471ed, #f64f59) 1;
}
```

This introduces a new `--angle` variable. This is nothing that CSS knows about but our variable.

We can then add a basic animation query as well.

```css
animation: 5s rotate linear infinite;
```

And the rotate animation will look like this:

```css
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
```

However, nothing will happen!
The value will change, but since it's not a know CSS variable, we need to define it as a changeable property.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

And now we got our working animated border in CSS!

## Browser Support

For browser support, we have to look at multiple properties technically. Still, this one below should give you an excellent example of how good the support is.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/border-image-1637493765759.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/border-image-1637493765759.png" />
<img src="https://caniuse.bitsofco.de/static/v1/border-image-1637493765759.jpg" alt="Data on support for the border-image feature across the major browsers from caniuse.com" />
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
