---
layout: ../../layouts/Post.astro
title: 'Node express query Notion database'
metaTitle: 'Node express query Notion database'
metaDesc: 'Query a Notion database from a Node-express application'
image: /images/08-09-2021.jpg
date: 2021-09-08T03:00:00.000Z
tags:
  - nodejs
---

This article will query the Notion database using a Node express server.

This is a series on building a Node powered Notion API:

- Part 1: [Getting started with the Notion API](https://daily-dev-tips.com/posts/getting-started-with-the-notion-api/)
- Part 2. [Configure Tailwind JIT for a node express app](https://daily-dev-tips.com/posts/configure-tailwind-jit-for-a-node-express-app/)
- Part 3: [Node express query Notion database](https://daily-dev-tips.com/posts/node-express-query-notion-database/) _You are here 💖_
- Part 4: [Node express showing Notion results in the front end](https://daily-dev-tips.com/posts/node-express-showing-notion-results-in-the-front-end/)
- Part 5: [Updating a Notion page through a node website](https://daily-dev-tips.com/posts/updating-a-notion-page-through-a-node-website/)
- Part 6: [Creating a Notion page through a Node express app](https://daily-dev-tips.com/posts/creating-a-notion-page-through-a-node-express-app/)

## Creating the express server to query the Notion API

If you want to work with what we have got so far, head over to [GitHub and clone this repo](https://github.com/rebelchris/node-express-tailwind).

First of all, open your terminal and add the [Notion package](https://www.npmjs.com/package/@notionhq/client) with this command.

```bash
npm i @notionhq/client dotenv
```

We also add the `dotenv` package to keep our secrets there.
Quickly head over to your gitignore and add the `.env` file.

```
.env
node_modules
```

Now create this `.env` file in the root of your directory.

```
NOTION_API_KEY= YOUR KEY HERE
NOTION_API_DATABASE= DATABASE ID
```

Then we can create a `modules` folder, and inside, let's create a file called `notion.js`.

This file will keep the logic for the Notion connection.

The first thing we need to do in this file defines all the variables we need:

```js
require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;
```

As you can see, we load the env, define a new notion client, and define our database ID.

I then chose to create an export since we will be using the functions from another file.

```js
module.exports = {
  getDatabase: async () => {
    // Function code
  },
};
```

This allows us to load this function in another file like such:

```js
const { getDatabase } = require('./modules/notion');
```

Let's not get ahead of ourselves and create this function first.

Inside this function, we want to query the notion database. This JavaScript SDK has a built-in function for that:

```js
const response = await notion.databases.query({ database_id: databaseId });
```

This will give us the complete object, as we saw in our postman example.
However, we want to map it into more useable data.

```js
return response.results.map((page) => {
  return {
    id: page.id,
    name: page.properties.Name.title[0]?.plain_text,
    tags: page.properties.Tags.multi_select.map((tag) => tag.name),
    watched: page.properties.Watched.checkbox,
    banner: page.properties.Banner.files[0].external.url,
  };
});
```

Let's see what happens for each element.

- `id`: Returns the unique ID for this element
- `name`: We return the plain text version for the first title we find
- `tags`: We map an array of tag names, as the name is the only element we need.
- `watched`: This is a checkbox in Notion, so it returns true or false
- `banner`: Returns external image URLs

If you are curious to see what this Notion data looks like, here is the public [Notion document for this Movie setup](https://dirt-numeric-8e6.notion.site/Movies-24a8a23f117a4972aeeb73bbef9fc89c).

## Calling our Notion express endpoint from our server

Now that we created this function, we need some way to call it from our server.

Head over to your `server.js` file and add the function:

```js
const { getDatabase } = require('./modules/notion');
```

Now, let's define a route to get all entries in our database. This route will be available on the `/movies` endpoint.

```js
app.get('/movies', async (req, res) => {
  const movies = await getDatabase();
  res.json(movies);
});
```

Then let's run our server and see if we can open up this endpoint.

```js
npm start

# Open http://localhost:8000
```

This will show us a JSON result:

![Express JSON result Notion API](https://cdn.hashnode.com/res/hashnode/image/upload/v1630562327463/eaH76a9ww.png)

And there you go, we now created a middleware notion function to retrieve all our movies from the Notion database.
And we created a public endpoint to retrieve these results.

Keep an eye out for the next article where we return this data to our front end.

You can find today's complete code on [GitHub](https://github.com/rebelchris/notion-app/tree/database-query).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
