---
layout: ../../layouts/Post.astro
title: 'Creating a Notion page through a Node express app'
metaTitle: 'Creating a Notion page through a Node express app'
metaDesc: 'How to create a notion page through our node express front end app'
image: /images/12-09-2021.jpg
date: 2021-09-12T03:00:00.000Z
tags:
  - nodejs
---

Now that we have seen how to update a Notion page through our Node express front-end website, I thought it would be cool to see how we can add a new page.

This is a series on building a Node powered Notion API:

- Part 1: [Getting started with the Notion API](https://daily-dev-tips.com/posts/getting-started-with-the-notion-api/)
- Part 2. [Configure Tailwind JIT for a node express app](https://daily-dev-tips.com/posts/configure-tailwind-jit-for-a-node-express-app/)
- Part 3: [Node express query Notion database](https://daily-dev-tips.com/posts/node-express-query-notion-database/)
- Part 4: [Node express showing Notion results in the front end](https://daily-dev-tips.com/posts/node-express-showing-notion-results-in-the-front-end/)
- Part 5: [Updating a Notion page through a node website](https://daily-dev-tips.com/posts/updating-a-notion-page-through-a-node-website/)
- Part 6: [Creating a Notion page through a Node express app](https://daily-dev-tips.com/posts/creating-a-notion-page-through-a-node-express-app/) _You are here 💖_

For this, we will use the following flow of events:

- User types name of a movie
- JavaScript handles form submit
- Submits a post request to our Node server
- Node server calls our Notion script
- Notion API executes create function
- We refresh our movies

And the complete example will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/post_difgzs.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/post_cws9rt.mp4" type="video/mp4" />
</video>

## Creating the Notion API post function

Let's start by creating the actual function first. In our case, we'll only focus on creating a page based on one field, the title.
However, we can opt to enhance this later on.

Open up the `modules/notion.js` file and create a new function called `createMovie`. This function takes one argument being the title.

```js
createMovie: async (title) => {
	await notion.pages.create({
	  parent: {
	    database_id: databaseId,
	  },
	  properties: {
	    Name: {
	      title: [
	        {
	          text: {
	            content: title,
	          },
	        },
	      ],
	    },
	  },
	});
},
```

This is quite the nesting going on, and in this case, it's needed to set the actual title fields value.
As you can see, it takes the parent, in our case, our table id. And the properties, in our case, the `Name` field.

We can now use this function in the following way:

```js
const {createMovie} = require('./modules/notion');

await createMovie(req.body.title);
```

## Creating the middleware Node post method

Now let's create a node post route that our front end can use to post actual data.

Open up your `server.js` file and create a new `POST` route.

```js
// Add the createMovie export
const {getDatabase, toggleMovie, createMovie} = require('./modules/notion');

// New post route
app.post('/movie', async (req, res) => {
  await createMovie(req.body.title);
  res.json('done');
});
```

Nothing crazy here. It's the implementation as described above.

## Creating a new Notion page through our node express front end

Now it's time to focus on the front-end. Let's first add a small input header that we can use as our input.

```html
<header class="flex justify-center">
  <form
    action="/movie"
    method="post"
    id="create-movie"
    class="flex p-6 m-6 bg-gray-200 rounded-lg shadow-xl"
  >
    <input
      type="text"
      name="title"
      id="movie-title"
      class="flex-1 p-4 mr-2 border-2 rounded-lg"
    />
    <input type="submit" value="Add" class="px-4 text-white bg-green-400 rounded-lg" />
  </form>
</header>
```

I've created a form element and inside added input and button.
We will hijack the form submit based on the form's ID and get the title value from our input field.

Now we need to make some changes to our front-end script.

Let's start by creating a post-movie function that we can use to post to our node server.

```js
const createMovie = async (title) => {
  await fetch(`http://localhost:8000/movie/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: movieTitleField.value}),
  });
};
```

This function does the basic `POST` to our node API.

Let's also define the two elements we need, being the form and the title field.

```js
const form = document.getElementById('create-movie');
const movieTitleField = document.getElementById('movie-title');
```

Next up, we'll need to hijack the form, submit and do our JavaScript posting.

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  createMovie(movieTitleField.value).then((success) => {
    showMovies();
  });
  movieTitleField.value = '';
});
```

We add a new event listener to our form and attach it to the submit event.
Then we use the `preventDefault` form the actual form submitting.
Then we call our `createMovies` function and pass the value of our title field.
And as a callback, we call the `showMovies` function again. This will reload the movies, including our newly added one.

We can use this to quickly add a new movie and update information on our Notion page.

I like how easy it is to use the Notion API and how fun it is to build something with it.

I hope you also enjoyed this article and got some inspiration for building with the Notion API.

You can find the complete code on [GitHub](https://github.com/rebelchris/notion-app/tree/post-to-notion).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
