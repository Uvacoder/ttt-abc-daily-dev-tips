---
layout: ../../layouts/Post.astro
title: 'CSS Truncate Text With Ellipsis'
metaTitle: 'CSS truncate Text with Ellipsis(...) [2022 Tutorial]'
metaDesc: 'How can we end a line and add the ellipsis...? See the code examples on the Codepen and read the tutorial step-by-step.'
image: /images/10-07-2020.jpg
date: 2020-07-10T03:00:00.000Z
tags:
  - css
---

> Note: I've written an updated, more modern article: [Read the full article here](https://daily-dev-tips.com/posts/css-modern-multi-line-ellipsis/)

At one stage, truncating text with CSS was hype instead of just showing the whole text, which could be one or multiple lines.
We ended up doing the ellipsis (...) for only one line.

This means it would show a text and truncate itself with the three dots.

## HTML Structure

```html
<h1>“In my experience there is no such thing as luck.” – Obi-Wan Kenobi</h1>
```

Nothing fancy, just a heading which we will make smaller and truncate.

## CSS to truncate the text with an ellipsis

To truncate the text, we use the following `CSS`.

```css
.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

That is the minimum requirement.

- `width`; needs to be defined since this will only work for a one-line
- `white-space: nowrap`; Wraps the line no matter where it ends
- `overflow: hidden`; Because we don't want to show the other text
- `text-overflow: ellipsis`; This is what adds the three dots.

### View this example to shorten text on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="KKVRoEa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Truncate Text With ...">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKVRoEa">
  CSS Truncate Text With ...</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Truncate Multiple Lines at the end in pure CSS

This works well, but what if we want to truncate multiple lines?

> Note: There are many options here, and I'm only going to walk through the CSS options. (NOT the `JavaScript` ones)

For the `HTML` part we are using the following code:

```html
<div class="content">
  <p>
    Morbi rutrum lectus turpis, sit amet sollicitudin eros condimentum vitae.
    Integer consequat eros vel tortor tempor, et vulputate turpis pretium.
    Suspendisse vel metus sem. Aenean sollicitudin luctus est ac gravida.
    Curabitur eros tellus, scelerisque sit amet suscipit consequat, laoreet at
    quam. Nullam massa ante, tincidunt quis metus ut, consequat facilisis risus.
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus.
  </p>
</div>
```

### Webkit Flexbox Truncate CSS

We can do one solution, which is by far the easiest, using the old webkit/flexbox way.

> Update: This is the most modern and advised way. [Read the full article here](https://daily-dev-tips.com/posts/css-modern-multi-line-ellipsis/)

```css
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

### Pure CSS Truncate

Another way that would be better supported but more difficult to set up is to use calculated heights to shorten a text.

```css
html {
  --lh: 1.4rem;
  line-height: var(--lh);
}
.content.truncate-overflow {
  --max-lines: 3;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
}
.content.truncate-overflow::before {
  position: absolute;
  content: '...';
  bottom: 0;
  right: 1rem;
  z-index: 1;
}
.content.truncate-overflow::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  background: #fff;
  z-index: 0;
}
```

Let's keep in mind what's happening here:

```css
html {
  --lh: 1.4rem;
  line-height: var(--lh);
}
```

We define the basic `line-height` and assign it to the property (we need it later on).

```css
.content.truncate-overflow {
  --max-lines: 3;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
}
```

Here we make a new variable to define the number of lines we want to show.
We then set the `max-height` of this element as the number of lines times the `line-height`.
And we set the `overflow: hidden`.
Next, we add a `padding-right`, where we will place the actual ellipsis effect.

```css
.content.truncate-overflow::before {
  position: absolute;
  content: '...';
  bottom: 0;
  right: 1rem;
  z-index: 1;
}
```

The before [Pseudo-element](https://daily-dev-tips.com/posts/css-pseudo-elements/) shows the actual dots to trim the word and is placed on the right side.

```css
.content.truncate-overflow::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  background: #fff;
  z-index: 0;
}
```

Then we add an after to place under the three dots, so they lay over any content that might be there still.

### You can find code examples to these CSS methods on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="VwexXOR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Truncate Text With ... (Multi-line)">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwexXOR">
  CSS Truncate Text With ... (Multi-line)</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
