---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript clone a DOM element'
metaTitle: 'Copy & Clone an Element Vanilla JS Tutorial [2022]'
metaDesc: 'Guide to explain how to clone an HTML DOM element with Vanilla Javascript. See the code examples in the Codepen!'
image: /images/03-04-2020.jpg
date: 2020-04-03T03:00:00.000Z
tags:
  - javascript
---

You may wonder, why do we want to clone a DOM element?

Let's say we want to build a drag-n-drop editor or a slider. We then need to make clones of HTML elements to achieve that.

So let's learn how to copy an element in `JavaScript`.

## HTML Structure example

```html
<div class="box blue" id="box1">Hi there!</div>
```

Let's say we need a copy of this div element. We want the id of the cloned element to be unique, e.g. `box2`, and the color class should be red instead of blue.

The result should look something like below when we are done:

```html
<div class="box blue" id="box1">Hi there!</div>

<div class="box red" id="box2">Hi there!</div>
```

## Clone a DOM element with Vanilla JavaScript

To clone an element, we will first use the most common way to get a specific element by using the `querySelector`:

```js
let elem = document.querySelector('#box1');
```

> The `#` is used to indicate an id; we could use a `.` to indicate a class.

We will now use the JavaScript `cloneNode()` function. The function accepts true as a parameter if you would like to clone every element inside it.

```js
let elem = document.querySelector('#box1');
let clone = elem.cloneNode(true);
```

Now we have an identical clone of the element.

## Vanilla JavaScript modify a copied object

As mentioned we will be looking into modifying the copy as well:

```js
let elem = document.querySelector('#box1');
let clone = elem.cloneNode(true);

clone.id = 'box2';
clone.classList.remove('blue');
clone.classList.add('red');

elem.after(clone);
```

As you can see, we modify the id of the box to be `box2`

Then we use the elements `classList` (array of all classes) and remove blue from it. Then we append red to the `classList`.

Finally, we insert the copied element into the DOM after the original element.

> Read more about the Vanilla JavaScript classList in [this article](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/).

### See the code examples in this Codepen

Feel free to play around with this.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="bGdZQyL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript clone a DOM element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGdZQyL">
  Vanilla JavaScript clone a DOM element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
