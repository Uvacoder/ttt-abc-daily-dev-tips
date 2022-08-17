---
layout: ../../layouts/Post.astro
title: 'Making a footer stick to the bottom with CSS'
metaTitle: 'Making a footer stick to the bottom with CSS [2022]'
metaDesc: 'Tutorial using CSS Flexbox and CSS Grid to make a footer stick to the bottom of a page.'
image: /images/26-12-2020.jpg
date: 2020-12-26T03:00:00.000Z
tags:
  - css
---

Did you ever want to have a footer that's stuck to the bottom but will push down if the content is bigger?

For demonstration, I've created this image.

![CSS sticky footer](https://cdn.hashnode.com/res/hashnode/image/upload/v1608562932355/j_e64Jhh8.png)

What this illustrates is the following:

- left: Green box is the viewport, yellow is the content, which is very small, and the pink footer is stuck to the bottom
- right: Content is larger than the viewport, so it also pushed the footer down.

There are quite a few solutions for this specific problem, which all have pros and cons.

I'll demonstrate two of them because I think they are the most mainstream solutions.

The examples will be:

- [CSS Flexbox sticky footer](#heading-stick-footer-to-bottom-with-flexbox)
- [CSS Grid sticky footer](#heading-css-grid-sticky-footer)

## Stick footer to bottom with Flexbox

With Flexbox, we can easily make a sticky footer by expanding our content section.

This means we set our body as a flex element, and the content part will have the `flex: 1 0 auto` value.

This value forces the content to expand as the biggest element, so if we have a small content area, it will auto expand to fill the space.

For the HTML structure, we will be using this:

```html
<div class="content">Content goes here</div>
<footer>I'm a sticky footer</footer>
```

Now let's first add a flex property to our body:

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

This tells our body element to become a flex element, which flexes elements vertically.
Then we make the minimum height based on the viewport.

Then, we must add the following property to our content div.

```css
.content {
  flex: 1 0 auto;
}
```

That line will force the content block to space between the content and the footer.

### See this code action in this Codepen

You can use the button to toggle between no text and a lot of text.

<p class="codepen" data-height="389" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="gOwxzjO" style="height: 389px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS flexbox sticky footer">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOwxzjO">
  CSS flexbox sticky footer</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Grid sticky footer

Now with CSS Grid, we can stick a footer to the bottom with a similar setup. We use the same `HTML` for this method.

```html
<div class="content">Content goes here</div>
<footer>I'm a sticky footer</footer>
```

Next, for our body tag, we use the following styles:

```css
body {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
```

This will tell our body tag to behave like a grid and have a 2-row layout where the first row will use `1fr`, which means one fraction unit.

It comes down to the first row expanding to whatever it needs or can fill. The footer is set to `auto` and will refrain from the size of the text in the footer.

Then we don't even need any styling for our content div.

### See this code example in the following Codepen

Again you can click the button to toggle the copy.

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="yLaojmp" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS grid sticky footer">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/yLaojmp">
  CSS grid sticky footer</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

So these were two code examples to stick a footer to the bottom with CSS.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
