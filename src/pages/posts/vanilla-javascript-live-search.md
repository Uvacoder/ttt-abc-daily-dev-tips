---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript live search'
metaTitle: 'Vanilla JavaScript live search'
metaDesc: 'Adding live search functionality to a Vanilla JavaScript project. 2020 Tutorial with code examples.'
image: /images/06-11-2020.jpg
date: 2020-11-06T03:00:00.000Z
tags:
  - javascript
---

Today we will work on a more real-world scenario, implementing a live search in JavaScript!

In our example, we will use an array of names and countries. We will then have a search bar. On input, it filters the array to showcase only matching search results.

## Find the example code in this Codepen

Try and search for something (e.g., Japan or Abel)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="WNxzmeY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript live search">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNxzmeY">
  Vanilla JavaScript live-search</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Step 1: HTML Structure for search input

```html
<h1>JavaScript live search</h1>
<input
  autocomplete="off"
  type="search"
  id="search"
  placeholder="Search for a country or name!"
/>
<ul id="results"></ul>
```

In today's article, we are more focused on the JavaScript part than actual the HTML structure or styling, so a basic setup.

We use an input field on which we will base the results.
And define an empty `<UL>` with the ID `results`.

## Step 2: CSS styling to make it pretty

As for the CSS, we added some basic styling to make it all [centered with Flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) and look a little bit nicer.

```css
body {
  display: flex;
  min-height: 100vh;
  align-items: center;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  flex-direction: column;
}
input {
  width: 250px;
  text-align: center;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
```

## Step 3: JS code for the live search function

Now on to the magic part. In this example, I prepared a random array of data consisting of the following structure:

```js
const data = [
  { name: 'Ryan', country: 'Saint Lucia' },
  // 99 more
];
```

Then we need to define the variables we are going to use.

```js
const search = document.getElementById('search');
const results = document.getElementById('results');
let search_term = '';
```

The search variable is our input element, results are our `ul` list, and the search_term is whatever we input in our search field.

Now let's create a JavaScript function to capture the search input.

```js
search.addEventListener('input', (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});
```

Here we add an input listener to our search and capture the value (in lowercase), then we call a function called `showList` which we will build now.

```js
const showList = () => {};
```

In there, we start with clearing whatever is on the list already.

```js
const showList = () => {
  results.innerHTML = '';
};
```

Now we want to loop over all our data elements:

```js
data.filter((item) => {
  // todo
});
```

We make use of the filter ES6 function.

In there, we want to check if the country's name matches our search string.

```js
data.filter((item) => {
  return (
    item.country.toLowerCase().includes(search_term) ||
    item.name.toLowerCase().includes(search_term)
  );
});
```

As you can see, we match either on country OR (||) on the name.
Now in the filter, we get a single item from our array.
We then check if the value in lowercase matches (includes) our search term.

If so, we return this. Remember that filter will then modify on its own.

The last step is to append a new list item to our `ul`.

```js
data
  .filter((item) => {
    return (
      item.country.toLowerCase().includes(search_term) ||
      item.name.toLowerCase().includes(search_term)
    );
  })
  .forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`;
    results.appendChild(li);
  });
```

There you go! All that's left is to call the method initially.

Place the following at the bottom of your scripts.

```js
showList();
```

### Thank you for reading this tutorial, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
