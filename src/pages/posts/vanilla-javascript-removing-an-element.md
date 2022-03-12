---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Removing an Element'
metaTitle: 'Vanilla JavaScript Removing an Element'
metaDesc: 'Extending our Drag n Drop editor with a remove function'
image: /images/18-05-2020.jpg
date: 2020-05-18T03:00:00.000Z
tags:
  - javascript
---

Yesterday we started building a [`Vanilla JavaScript` Drag 'n Drop editor](https://daily-dev-tips.com/posts/vanilla-javascript-removing-an-element/). We just couldn't remove the elements we added, so let's look into adding a remove button and the function to remove an element.

We don't need to make HTML changes, so let's get started on the `CSS` first.

## CSS Changes

```css
.comp-remove {
  position: absolute;
  color: red;
  top: calc(50% - 12px);
  right: 15px;
  font-weight: bold;
  cursor: pointer;
  pointer-events: all;
}
```

We will add a div with the class `comp-remove`, which is the styling. It will sit on the right side of the component and be centered vertically.

## Vanilla JavaScript Remove Element

Inside our `onDrop` function, we are going to add the following after we define our `const clone`:

```js
const clone = draggableElement.cloneNode(true);

// New
const remove = document.createElement('div');
remove.classList.add('comp-remove');
remove.innerHTML = 'X';
clone.appendChild(remove);
```

Then at the bottom, we will add the function that will go off once we click this new element.

```js
document.addEventListener(
  'click',
  function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.comp-remove')) return;
    // Don't follow the link
    event.preventDefault();
    // Get the parent element
    const parent = event.target.parentNode;
    // Delete the actual table parent;
    parent.parentNode.removeChild(parent);
  },
  false
);
```

We saw this way of adding a [eventListener](https://daily-dev-tips.com/posts/vanilla-javascript-event-listener-on-multiple-elements/), and we listen to the specific `comp-remove` element.
Then we get the parent element and that parent again (this is the dropzone element).
We then say it should `removeChild` off the component.

You can try this out on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="OJyBpEQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Drag 'n Drop - Delete">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJyBpEQ">
  Vanilla JavaScript Drag 'n Drop - Delete</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or see if on [GitHub](https://github.com/rebelchris/drag-n-drop/tree/feature/remove).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
