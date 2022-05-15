---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript data attribute filters'
metaTitle: 'Select by data attribute Vanilla JS Tutorial [2022]'
metaDesc: 'In this tutorial we will learn how to select and filter elements based on data attributes using pure Vanilla JavaScript.'
image: /images/26-10-2020.jpg
date: 2020-10-26T03:00:00.000Z
tags:
  - javascript
---

Today we will be creating a custom filter element based on **data attributes** in Vanilla JavaScript.

This means that we will have a filter mechanism select list and a list of elements with specific data attributes.

### See the result in this Codepen

(Choose an option to see the effect)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="oNLzgeg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript data attribute filters">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNLzgeg">
  Vanilla JavaScript data attribute selection</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

We need a select list for the dropdown and a `ul` with random list ratings as values for the attributes.

It will look something like this:

```html
<select id="rating">
  <option value="">Choose a rating</option>
  <option value="5">Minimum 5 stars</option>
  <option value="4">Minimum 4 stars</option>
  <option value="3">Minimum 3 stars</option>
  <option value="2">Minimum 2 stars</option>
  <option value="1">Minimum 1 stars</option>
</select>

<ul>
  <li data-rating="4"><span>item 1</span><i>rating 4</i></li>
  <li data-rating="2"><span>item 2</span><i>rating 2</i></li>
  <li data-rating="3"><span>item 3</span><i>rating 3</i></li>
  <li data-rating="1"><span>item 4</span><i>rating 1</i></li>
  <li data-rating="4"><span>item 5</span><i>rating 4</i></li>
  <li data-rating="1"><span>item 6</span><i>rating 1</i></li>
  <li data-rating="4"><span>item 7</span><i>rating 4</i></li>
  <li data-rating="4"><span>item 8</span><i>rating 4</i></li>
  <li data-rating="1"><span>item 9</span><i>rating 1</i></li>
  <li data-rating="5"><span>item 10</span><i>rating 5</i></li>
  <li data-rating="1"><span>item 11</span><i>rating 1</i></li>
  <li data-rating="2"><span>item 12</span><i>rating 2</i></li>
  <li data-rating="3"><span>item 13</span><i>rating 3</i></li>
  <li data-rating="1"><span>item 14</span><i>rating 1</i></li>
  <li data-rating="3"><span>item 15</span><i>rating 3</i></li>
  <li data-rating="5"><span>item 16</span><i>rating 5</i></li>
  <li data-rating="3"><span>item 17</span><i>rating 3</i></li>
  <li data-rating="5"><span>item 18</span><i>rating 5</i></li>
  <li data-rating="1"><span>item 19</span><i>rating 1</i></li>
  <li data-rating="2"><span>item 20</span><i>rating 2</i></li>
</ul>
```

Let's get cracking on making the CSS look a little bit better.

## CSS Styling

```css
select {
  margin: 50px auto;
  display: block;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ba3b46;
  flex-direction: column;
  height: 100px;
}
ul li.hidden {
  display: none;
}
ul span {
  font-weight: bold;
  margin-bottom: 20px;
}
```

We set some margin on the select element to space it out a little bit better.
Then we convert the `ul` [into a grid](https://daily-dev-tips.com/posts/css-grid-container/) with four columns.
And make the list items more excellent, and a bit more spacious.

## Vanilla JavaScript data-attribute filter

Now, let's enter the magic part, JavaScript.

First, we want to get the select item by its ID.

```js
const rating = document.getElementById('rating');
```

The next thing we need is a list of items. We use a `querySelectorAll` to get them.

```js
const elements = document.querySelectorAll('li');
```

Let's add an [`eventListener`](https://daily-dev-tips.com/posts/vanilla-javascript-event-listener-on-multiple-elements/) to our select item. It will be called every time the value changes.

```js
rating.addEventListener('change', function () {
  // Code here
});
```

Inside that, we need to get the value of the rating first.

```js
let value = rating.value;
// 1,2,3,4, or 5
```

Then we want to loop over all our list items.

```js
[...elements].forEach((element) => {
  // Code here
});
```

We want to check if we have a value at all within this block. Else we need to reset all the items.

Once we have a value, we must check if the rating is lower than the attribute value.

```js
if (value === '') {
  // Select empty option
  element.classList.remove('hidden');
} else {
  // Get the rating for this list item
  const rating = element.dataset.rating;
  // Check if the rating is lower than the value
  if (!rating || rating < value) {
    // Hide the element
    element.classList.add('hidden');
  } else {
    // Show the element
    element.classList.remove('hidden');
  }
}
```

The whole code will look like this:

```js
const rating = document.getElementById('rating');
const elements = document.querySelectorAll('li');

rating.addEventListener('change', function () {
  let value = rating.value;
  [...elements].forEach((element) => {
    if (value === '') {
      element.classList.remove('hidden');
    } else {
      const rating = element.dataset.rating;
      if (!rating || rating < value) {
        element.classList.add('hidden');
      } else {
        element.classList.remove('hidden');
      }
    }
  });
});
```

There you go. We now have a Vanilla JS filter based on data attributes.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
