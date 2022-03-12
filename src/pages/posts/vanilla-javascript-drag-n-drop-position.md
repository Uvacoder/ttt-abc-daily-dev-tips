---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Drag n Drop Position'
metaTitle: 'Vanilla JavaScript Drag n Drop Position'
metaDesc: 'Lets add a position check to our Drag n Drop editor'
image: /images/19-05-2020.jpg
date: 2020-05-19T03:00:00.000Z
tags:
  - javascript
---

We've been working on this Drag 'n Drop editor for a couple of days now, and we set up the [basic Drag 'n Drop](https://daily-dev-tips.com/posts/vanilla-javascript-drag-n-drop/).

Then we made sure we could [remove elements](https://daily-dev-tips.com/posts/vanilla-javascript-removing-an-element/).

Now we will look at how we can drop it at a specific position.
We drop it at the top half of the other element, which it should insert above. And if we drop on the bottom half, it must appear under it.

## HTML, CSS Changes

The good part is we don't need any `CSS` or `HTML` changes for this!

## JavaScript position detection

We are going to work inside the `onDrop` function.

Let's replace the following code.

```js
dropzone.appendChild(clone);
```

With this:

```js
const dropElementY = event.y;

// Get all main tables in the dropzone and get those positions based off the y position
const compTables = dropzone.querySelectorAll('.actual-comp');

if (compTables.length >= 1) {
  for (i = 0; i < compTables.length; i++) {
    const compTablesY1 =
      compTables[i].getBoundingClientRect().y +
      compTables[i].getBoundingClientRect().height / 2;
    const compTablesY2 =
      compTables[i].getBoundingClientRect().y +
      compTables[i].getBoundingClientRect().height;

    // Check if dropElementY is smaller then compTablesY1 (insert above)
    if (dropElementY <= compTablesY1) {
      compTables[i].parentNode.insertBefore(clone, compTables[i]);
      break;
    }
    // Check if dropElementY is smaller then compTablesY2 (insert below)
    if (dropElementY <= compTablesY2) {
      compTables[i].parentNode.insertBefore(clone, compTables[i].nextSibling);
      break;
    }
    dropzone.appendChild(clone);
  }
} else {
  // No tables yet
  dropzone.appendChild(clone);
}
```

Let's look at what we are going here.

```js
const dropElementY = event.y;
```

Here we are getting the vertical position of our dropped element.

```js
const compTables = dropzone.querySelectorAll('.actual-comp');

if (compTables.length >= 1) {
  // code
} else {
  // No tables yet
  dropzone.appendChild(clone);
}
```

Then we get all the component tables that we already added.
If there are none, it's the first element, and we append it as we did before.

```js
const compTablesY1 =
  compTables[i].getBoundingClientRect().y +
  compTables[i].getBoundingClientRect().height / 2;
const compTablesY2 =
  compTables[i].getBoundingClientRect().y +
  compTables[i].getBoundingClientRect().height;
```

Then we loop through each element we added, defining a Y1 (top half of the element) and Y2 max height of the element.

```js
// Check if dropElementY is smaller then compTablesY1 (insert above)
if (dropElementY <= compTablesY1) {
  compTables[i].parentNode.insertBefore(clone, compTables[i]);
  break;
}
// Check if dropElementY is smaller then compTablesY2 (insert below)
if (dropElementY <= emailTableY2) {
  compTables[i].parentNode.insertBefore(clone, compTables[i].nextSibling);
  break;
}
dropzone.appendChild(clone);
```

We then check if our dropped element vertical position is smaller than the Y1 we insert it before.
If it's smaller than the Y2 we add it after, and else we add it after anyway.

Check it out on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="QWjZvqL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Drag 'n Drop - Position">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/QWjZvqL">
  Vanilla JavaScript Drag 'n Drop - Position</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or download on [GitHub](https://github.com/rebelchris/drag-n-drop/tree/feature/position).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
