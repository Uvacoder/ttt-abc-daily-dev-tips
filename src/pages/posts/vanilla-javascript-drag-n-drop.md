---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Drag and Drop'
metaTitle: 'Vanilla JS Drag and Drop with onDragOver Event'
metaDesc: 'Today we are making a JavaScript Drag-and-Drop editor.'
image: /images/17-05-2020.jpg
date: 2020-05-17T03:00:00.000Z
tags:
  - javascript
---

How cool are drag and drop Vanilla JS editors, right?

Ever wondered how many spaceship engineers you need to create one from scratch?
Let me help you: zero, everyone can build one, only using these three things; `HTML`, `CSS`, `Vanilla JavaScript`.

Let me first explain what we are going to make. We will make a template builder, so we will have blocks on the left side, which are our building blocks. \
Then on the right, we have our editor view. We can **drag and drop** these building blocks onto our JavaScript editor.
Once we drag an **element**, we will make it appear differently.

The actual content of our blocks will be placed in a hidden div.

## HTML Structure for draggable item

First, we will build our `HTML5` structure for this Vanilla JS drag and drop tutorial:

```html
<div class="container">
  <div class="col col-3">
    <div class="comp-holder">
      <div
        data-table="comp-01"
        class="comp js-draggable"
        draggable="true"
        ondragstart="onDragStart(event);"
        ondragend="onDragEnd(event);"
      >
        [Header component]
      </div>
      <div
        data-table="comp-02"
        class="comp js-draggable"
        draggable="true"
        ondragstart="onDragStart(event);"
        ondragend="onDragEnd(event);"
      >
        [Image component]
      </div>
      <div
        data-table="comp-03"
        class="comp js-draggable"
        draggable="true"
        ondragstart="onDragStart(event);"
        ondragend="onDragEnd(event);"
      >
        [Text component]
      </div>

      <div
        data-table="comp-04"
        class="comp js-draggable"
        draggable="true"
        ondragstart="onDragStart(event);"
        ondragend="onDragEnd(event);"
      >
        [Footer component]
      </div>
    </div>
  </div>
  <div class="col col-9">
    <h3>Dropzone</h3>
    <div
      id="dropzone"
      class="editor-view"
      ondragover="onDragOver(event);"
      ondrop="onDrop(event);"
    ></div>
  </div>

  <div class="hidden">
    <header class="actual-comp" id="comp-01">
      <a href="https://daily-dev-tips.com">
        <img src="https://daily-dev-tips.com/images/logo.png" height="50" />
      </a>
      <a href="#">Menu</a>
    </header>
    <div class="actual-comp" id="comp-02">
      <img
        class="image"
        src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
    </div>
    <div class="actual-comp" id="comp-03">
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis
        cursus massa, eget fringilla dolor. Praesent ligula libero, luctus sit
        amet urna a, semper scelerisque lorem. Curabitur efficitur, tortor in
        tempor elementum, orci quam mollis quam, nec fermentum lacus mauris eu
        nisl. Praesent elementum eros et justo faucibus, sed vestibulum mauris
        tincidunt. Aenean suscipit ultrices tellus, at aliquam diam. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vivamus non maximus mauris, nec finibus risus. Donec
        sit amet massa malesuada, mollis mi nec, condimentum justo. Pellentesque
        velit ligula, feugiat eget nisi quis, mattis eleifend sem. Proin pretium
        risus ligula, a aliquet elit commodo sit amet.
      </p>
    </div>
    <footer class="actual-comp" id="comp-04">&copy; Daily Dev Tips 2020</footer>
  </div>
</div>
```

### onDragStart and onDragEnd JS functions

The critical part here is the component structure:

```html
<div
  data-table="comp-01"
  class="comp js-draggable"
  draggable="true"
  ondragstart="onDragStart(event);"
  ondragend="onDragEnd(event);"
>
  [Header component]
</div>
```

We make this **draggable** (an HTML element property) and add `ondragstart` and `ondragend` functions that we will create in our `JavaScript`.

Then we tell our editor that it can accept draggable elements to be dropped.

```html
<div
  id="dropzone"
  class="editor-view"
  ondragover="onDragOver(event);"
  ondrop="onDrop(event);"
></div>
```

For the drag n drop functionality to work, we stop the default behavior by overwriting the `onDragOver` JS function.
Then we include an `onDrop` function that we will call in our Vanilla `JavaScript`.

## CSS Setup

We will need to incorporate some `CSS` to fix the layout. Let's start with the basic `CSS`:

```css
.container {
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  .col {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-9 {
    flex-basis: 75%;
    h3 {
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
  .editor-view {
    border: 2px dotted #efefef;
    min-height: 400px;
    width: 100%;
  }
}
.comp {
  background: teal;
  height: 50px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hidden {
  display: none;
}
```

We use CSS flexbox to simplify this and create a 1/4 - 3/4 column layout.
Then we give it some basic styling to show off what we can use.

Now let's move into the fun part, `JavaScript`!

## JavaScript events for drag and drop

```js
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.currentTarget.dataset.table);
  event.currentTarget.style.backgroundColor = 'yellow';
}
```

So when we start dragging our components, we can use the `dataTransfer API` to set data on our component. In this case we are setting our custom [`dataset attribute`](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/) (remember the data-table="comp-01".
We then set the element to have a different color to see we picked it up.

```js
function onDragEnd(event) {
  event.currentTarget.style.backgroundColor = 'teal';
}
```

The `onDragEnd` event will be called when we stop dragging the element. In this case, we use this to return the color to its original.

```js
function onDragOver(event) {
  event.preventDefault();
}
```

The above function gets called when we drag over our editor and prevent default events here.

```js
const dropzone = document.getElementById('dropzone');

function onDrop(event) {
  let id = event.dataTransfer.getData('text');

  const draggableElement = document.getElementById(id);
  const clone = draggableElement.cloneNode(true);

  dropzone.appendChild(clone);

  event.dataTransfer.clearData();
}
```

Then, once we drop our draggable element, we need to get the data we set in the `onDragStart` event function. We again use `dataTransfer API` to get data that will return the data-id.
We then find the original content (which sits in our hidden div) and clone it because we want to use it more often.
We then say dropzone, append a child element, the cloned element.
Voila, we added a clone to our editor.
We then clear the data set on our dropped element.

### Have a look at the code example with draggable items and try it out

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="KKdmWJV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Drag 'n Drop">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKdmWJV">
  Vanilla JavaScript Drag 'n Drop example</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Or download the drag and drop code on [GitHub](https://github.com/rebelchris/drag-n-drop)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
