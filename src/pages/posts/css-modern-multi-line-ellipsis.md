---
layout: ../../layouts/Post.astro
title: 'CSS Modern multi-line ellipsis'
metaTitle: 'CSS Modern multi-line ellipsis'
metaDesc: 'Looking at a modern solution to cut paragraphs to x lines in CSS'
image: /images/27-04-2021.jpg
date: 2021-04-27T03:00:00.000Z
tags:
  - css
---

I wrote an article on [truncating text with ellipsis](https://daily-dev-tips.com/posts/css-truncate-text-with-ellipsis/), and we used a fail-safe version for the multi-line ellipsis.

Today I'm looking into a more modern and straightforward approach to solve this truncate problem.

The end result:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="JjExdqO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Modern multi-line ellipsis">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/JjExdqO">
  CSS Modern multi-line ellipsis</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

The HTML for this assignment is super basic. We need one enormous paragraph.

```html
<p>
  Morbi rutrum lectus turpis, sit amet sollicitudin eros condimentum vitae.
  Integer consequat eros vel tortor tempor, et vulputate turpis pretium.
  Suspendisse vel metus sem. Aenean sollicitudin luctus est ac gravida.
  Curabitur eros tellus, scelerisque sit amet suscipit consequat, laoreet at
  quam. Nullam massa ante, tincidunt quis metus ut, consequat facilisis risus.
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus.
</p>
```

This is way bigger than just three lines, right.
Let's see how we can solve this in the modern-day age.

## CSS Truncate text on 3 lines

We'll be using `line-clamp` to solve this to get right to it.
Line-clamp will allow us to state how many lines the text should cut.

```css
p {
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

As you may have spotted, for now, this only works if the display method is `webkit-box`.

So far, this is by far the easiest way to achieve this, but it has some odds and ends, like having to use the display format.

## Browser support

I was surprised the browser support for this is quite good.
Most modern browsers support it out of the box.

![CSS webkit-line-clamp](https://caniuse.bitsofco.de/static/v1/mdn-css__properties__-webkit-line-clamp-1619253498523.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
