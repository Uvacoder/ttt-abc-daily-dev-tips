---
layout: ../../layouts/Post.astro
title: 'CSS custom numbered list styling'
metaTitle: 'CSS custom numbered list styling'
metaDesc: 'Using CSS counters for list styling'
image: /images/08-11-2020.jpg
date: 2020-11-08T03:00:00.000Z
tags:
  - css
---

The other day we made an [emoji list](https://daily-dev-tips.com/posts/css-emoji-list-style/). And I wanted to include another potent `CSS` property called `CSS` Counters.

This is the result in Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="OJXEMJd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS custom numbered list styling">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJXEMJd">
  CSS custom numbered list styling</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## What are CSS Counters?

They are variables controlled by `CSS`, whose values can increment by specific `CSS` rules.

We can use the following properties in `CSS`.

- `content` -> Used to place the `counter()` property.
- `counter-reset` -> Creates or resets an counter
- `counter-increment` -> Increment a specific counter
- `counter()` -> Adds the value to an element

## HTML Structure

Let's create a straightforward example using two lists. We want each list to re-start the counter.

```html
<div>
  <ol>
    <li>Item #1</li>
    <li>Item #2</li>
    <li>Item #3</li>
    <li>Item #4</li>
    <li>Item #5</li>
  </ol>
</div>
<div>
  <ol>
    <li>Item #1</li>
    <li>Item #2</li>
    <li>Item #3</li>
    <li>Item #4</li>
    <li>Item #5</li>
  </ol>
</div>
```

## CSS counter styling

So how do we now use `CSS` counters?

Let's start with the `<ol>` element.

```css
ol {
  counter-reset: custom;
  list-style-type: none;
  padding: 0;
  margin: 0px 20px;
}
```

We start by resetting the list counter called `custom`.
Then we remove the default list style since we will add this custom one.

Now we can move on to the `<li>` styling.

```css
ol li {
  counter-increment: custom;
  padding: 15px 0;
  display: flex;
  align-items: center;
}
```

Here we increment the custom counter and add some essential padding and alignment.

We need to use this counter in a [`before` pseudo element](https://daily-dev-tips.com/posts/css-pseudo-elements/).

```css
ol li:before {
  content: counters(custom, '.') ' ';
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: purple;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

As you can see, we place our custom counter in the content element.
We then added some basic styling to make it look slightly nicer.

I'm using many [flex options to style everything centered](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

## Some outstanding examples

Now that you have seen my introduction check what these incredible people made with this fantastic `CSS` property.

Check this cool gradient one made by [Mattia Astorino](https://twitter.com/equinusocio)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="equinusocio" data-slug-hash="OqpBKJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Gradient Counter List">
  <span>See the Pen <a href="https://codepen.io/equinusocio/pen/OqpBKJ">
  CSS Gradient Counter List</a> by Mattia Astorino (<a href="https://codepen.io/equinusocio">@equinusocio</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or this section layout one made by [Jonathan Snook](https://twitter.com/snookca)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="snookca" data-slug-hash="qYoLaq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Timeline CSS with Counters">
  <span>See the Pen <a href="https://codepen.io/snookca/pen/qYoLaq">
  Timeline CSS with Counters</a> by Jonathan Snook (<a href="https://codepen.io/snookca">@snookca</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or even this absurdly good Tic-Tac-Toe with counters by [Sαwsαn](https://twitter.com/saawsann)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="saawsan" data-slug-hash="wpXGWQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Pure CSS &amp;amp; Responsive Tic-Tac-Toe (Modern Browser Only)">
  <span>See the Pen <a href="https://codepen.io/saawsan/pen/wpXGWQ">
  Pure CSS &amp; Responsive Tic-Tac-Toe (Modern Browser Only)</a> by Sawsan (<a href="https://codepen.io/saawsan">@saawsan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

And the good news?

CSS Counters are fully supported! 🎉

![CSS counter support](https://caniuse.bitsofco.de/image/css-counters.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
