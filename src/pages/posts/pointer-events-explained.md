---
layout: ../../layouts/Post.astro
title: 'Pointer Events explained'
metaTitle: 'Pointer Events explained'
metaDesc: 'Explore how pointer-events can help your JavaScript'
image: /images/09-05-2020.jpg
date: 2020-05-09T03:00:00.000Z
tags:
  - css
  - javascript
---

In much of my code, you've seen the use of `pointer-events: none .` I've mentioned it is because we only want JavaScript to go off on the main element, but let's explain a bit better.

## HTML Structure

So for our demo, we will make a wrapping div setup.

```html
<div class="container center" data-name="container">
  <div id="wrapper" class="center" data-name="wrapper">
    <div class="inside center" data-name="inside">
      <i class="center" data-name="icon">🤟</i>
    </div>
  </div>
  <div id="response" class="center"></div>
</div>
```

We created multiple divs and gave all a `data-name` attribute. This will be printed in the response div as output.
But as you click around in our demo below, you will see each element, where we want the whole element to be treated as one.

## JavaScript setup

```js
const response = document.getElementById('response');
document.addEventListener('click', function (event) {
  response.innerHTML = event.target.dataset.name;
});
```

We get our response div and add a global [eventListener](https://daily-dev-tips.com/posts/vanilla-javascript-event-listener-on-multiple-elements/) to listen for all clicks. We then set the answer to show the [dataset](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/) name of the element we clicked on.

Try out this demo and see the response:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="BaorBRZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Pointer Events explained - started">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BaorBRZ">
  Pointer Events explained - started</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Adding pointer-events: none

So to fix this, we can add the following `CSS`.

```css
.container {
  > * {
    pointer-events: none;
  }
}
```

This tells us every child of the container div should have no `pointer-events`.

As you can see in the following demo, we will always get `container` in our response div!

Now try again:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="NWGYKqg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Pointer Events explained - none">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWGYKqg">
  Pointer Events explained - none</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
