---
layout: ../../layouts/Post.astro
title: 'Eleventy creating a static JavaScript search'
metaTitle: 'Eleventy creating a static JavaScript search'
metaDesc: 'A fully static website JSON search in Vanilla JavaScript'
image: /images/19-06-2021.jpg
date: 2021-06-19T03:00:00.000Z
tags:
  - eleventy
---

Today we'll be making a fully static website JavaScript search.
Meaning we won't be using any additional software like Lunr, Algolia, or Elasticsearch to power our search.

Yesterday we made a great start by [creating a JSON endpoint](https://daily-dev-tips.com/posts/eleventy-json-endpoint-with-posts/) with all our posts titles and links.

My main goal for the search page is not to influence the other pages in speed, so I decided on a custom JavaScript that will only fire on the search page.

## Creating the search page

Let's start by making the actual search page endpoint.

I'll create a file called `search.njk` in our project's `src` directory.

The content of this page will render a search form:

```html
---
title: Search
metaTitle: 'Search for daily dev tips'
metaDesc: 'You can search for daily dev tips topics on this live search'
permalink: /search/
---

{% extends 'layouts/base.njk' %} {% set pageType = 'About' %} {# Intro content
#} {% set introHeading %}Search for Daily Dev Tips 🕵️{% endset %} {% set
introHeadingLevel = '2' %} {% block content %} {% include
"partials/components/intro.njk" %}
<main id="main-content" tabindex="-1">
  <section class="[ post__body ] [ pad-top-700 gap-bottom-900 ]">
    <div class="[ inner-wrapper ] [ sf-flow ]">
      <h3>Search for anything in more than 500 development articles!</h3>
      <input
        autocomplete="off"
        type="search"
        id="search"
        placeholder="Search for tips"
      />
      <ul id="results"></ul>
    </div>
  </section>
</main>
<script defer type="text/javascript" src="/js/components/search.js"></script>
{% endblock %}
```

As you can see above, I include a javascript file with the defer type, this means it will only load after the whole page is loaded.

## Vanilla JavaScript search from JSON data

Let's get started on the JavaScript part of it.
We'll start by building in a DOM load. This will make sure the script is only executed once everything is loaded, so we can be sure that we can find the elements.

```js
document.addEventListener('DOMContentLoaded', function (event) {
  // code here
});
```

The next step is to define all variables, we want to use.
In our case:

```js
const search = document.getElementById('search');
const results = document.getElementById('results');
let data = [];
let search_term = '';
```

- `search`: The search input field
- `results`: The `ul` in our HTML
- `data`: An empty array we'll fill with our JSON
- `search_term`: The words the person is searching for

Then it's time to do our JSON call:

```js
fetch('/search.json')
  .then((response) => response.json())
  .then((data_server) => {
    data = data_server;
  });
```

This uses the fetch method to grab our `JSON` and parse the JSON inside. Then we set our local variable with this data.
At this point, our data variable is filled with the whole JSON!

Now we can go ahead and attach an event listener for our search input field.

```js
search.addEventListener('input', (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});
```

This listens to an input event and gets the lowercase version of what the person wants to look for.
Then it calls a function called `showList`.

This `showList` function will look for the search_term inside our data variable.

```js
const showList = () => {
  results.innerHTML = '';
  if (search_term.length <= 0) return;
  const match = new RegExp(`${search_term}`, 'gi');
  let result = data.filter((name) => match.test(name.title));
  if (result.length == 0) {
    const li = document.createElement('li');
    li.innerHTML = `No results found 😢`;
    results.appendChild(li);
  }
  result.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${e.url}">${e.title}</a>`;
    results.appendChild(li);
  });
};
```

Looks like a lot, right?
Let's see in-depth what it does.

We start by removing the previous search results:

```js
results.innerHTML = '';
```

Then we check if the search term is not empty (when the uses cleared the field).
If we don't do this, the user will see all our posts when not searching.

```js
if (search_term.length <= 0) return;
```

Then we make a new regular expression to match the search string globally.

```js
const match = new RegExp(`${search_term}`, 'gi');
```

> Looking for more information on this approach: [Vanilla JavaScript live search](https://daily-dev-tips.com/posts/vanilla-javascript-live-search/)

Now comes the actual part, where we will [filter](https://daily-dev-tips.com/posts/javascript-filter-method/) our original data on data that matches the regular expression match.

```js
let result = data.filter((name) => match.test(name.title));
```

> Here, we have a match based on the title field. You could modify this to include multiple fields.

Now we need to check if we even have results.
If that's not the case, let's prompt the user with some information we couldn't find anything.

```js
if (result.length == 0) {
  const li = document.createElement('li');
  li.innerHTML = `No results found 😢`;
  results.appendChild(li);
}
```

Else we can loop every result and show a friendly link to that article.

```js
result.forEach((e) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${e.url}">${e.title}</a>`;
  results.appendChild(li);
});
```

And that's it. We now have a super basic static website search.
It's not the most powerful, but it will do the job for now.

If you want to see the full JavaScript file, [check out this gist](https://gist.github.com/rebelchris/f252a845dc4a4a4d66ca707ad3f5b0c5).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
