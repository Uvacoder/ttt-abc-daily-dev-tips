---
layout: ../../layouts/Post.astro
title: 'Updating a Notion page through a node website'
metaTitle: 'Updating a Notion page through a node website'
metaDesc: 'How to update a notion document through a node express app'
image: /images/10-09-2021.jpg
date: 2021-09-10T03:00:00.000Z
tags:
  - nodejs
---

By now, we have created a website to showcase movies from our Notion database.
That already is pretty awesome, but let's take a step further and add the option to update these Notion pages.

This is a series on building a Node powered Notion API:

- Part 1: [Getting started with the Notion API](https://daily-dev-tips.com/posts/getting-started-with-the-notion-api/)
- Part 2. [Configure Tailwind JIT for a node express app](https://daily-dev-tips.com/posts/configure-tailwind-jit-for-a-node-express-app/)
- Part 3: [Node express query Notion database](https://daily-dev-tips.com/posts/node-express-query-notion-database/)
- Part 4: [Node express showing Notion results in the front end](https://daily-dev-tips.com/posts/node-express-showing-notion-results-in-the-front-end/)
- Part 5: [Updating a Notion page through a node website](https://daily-dev-tips.com/posts/updating-a-notion-page-through-a-node-website/) _You are here 💖_
- Part 6: [Creating a Notion page through a Node express app](https://daily-dev-tips.com/posts/creating-a-notion-page-through-a-node-express-app/)

What we'll do is add a checkbox to indicate whether we saw a movie or not.

This will send a request to our Node express server and update the Notion document page with the value of the checkbox.

To write down the steps that need to happen:

- Render checkbox for each movie
- Click checkbox
- Call Node server PUT movie endpoint with a checkbox value
- Node server executes Notion update call

In total, it should look something like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/update_pum7h3.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/update_nekdn2.mp4" type="video/mp4" />
</video>

## Creating the Notion update call

Let's start with the Notion update call first.

Open the `modules/notion.js` document and create a new function called `toggleMovie`.

```js
toggleMovie: async (id, value) => {
	await notion.pages.update({
	  page_id: id,
	  properties: {
	    Watched: { checkbox: value },
	  },
	});
},
```

We add two parameters to this call: the `id` and the `value`.
The id is the unique page id.

Then we call the Notion page update query and pass the property we want to change, the `Watched` property checkbox value.

We can now use this function in the following manner.

```js
const {toggleMovie} = require('./modules/notion');

await toggleMovie('UNIQUE-ID', true | false);
```

## Calling the toggleMovie function from our Node app

Then we introduced some middleware in the form of our Node express app.

Let's import the `toggleMovie` function:

```js
const {getDatabase, toggleMovie} = require('./modules/notion');
```

Then we need to enable express to handle post requests:

```js
app.use(express.json());
```

Then we make a `put` request:

```js
app.put('/movie/:id', async (req, res) => {
  await toggleMovie(req.params.id, req.body.checked);
  res.json('done');
});
```

As you can see, it includes a part `:id`. This is a dynamic route, and we can retrieve that by using the `req.params.id` method.
Where id refers to the variable name in `:id`.

## Binding it together in the front end

Now it's time to bind everything together in the front end.

Let's create a function that will call our Node API, to begin with.

```js
const updateMovie = async (id, checked) => {
  await fetch(`http://localhost:8000/movie/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({checked: checked}),
  });
};
```

This is a fetch call that performs a `PUT` request to our movie id endpoint.
And it passed a variable checked value.

Now let's add the checkbox to our front end. The first goal is to render this in a way that shows the current state.

```js
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = movie.watched;
checkbox.className = 'absolute w-5 h-5 -top-2 right-4';
textCardDiv.appendChild(checkbox);
```

The initial value is set by the `movie.watched` variable, which refers to the boolean value.

Since the checkbox is absolute, we need to add a relative class to the parent div.

```js
textContainerDiv.className = 'relative z-10 px-4 -mt-8';
```

The last part is to bind a change event to our checkbox. This will fire every time our checkbox changes value. And it's what will execute our calls.

```js
checkbox.addEventListener('change', (event) => {
  updateMovie(movie.id, event.currentTarget.checked);
});
```

We pass the movie id to our function, as well as the current checkbox value. This already reflects the changed value, so we don't need to invert it for this method.

And that's it. We now have the option to update a Notion page through our own Node express website.

You can find the complete code example on [GitHub](https://github.com/rebelchris/notion-app/tree/update-notion).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
