---
layout: ../../layouts/Post.astro
title: 'Deno Render HTML with view engine and ejs'
metaTitle: 'Render HTML with Deno view engine Tutorial [2022]'
metaDesc: 'Learn how to serve rendered html with the Deno and ejs rendered templates to serve a website!'
image: /images/11-08-2020.jpg
date: 2020-08-11T03:00:00.000Z
tags:
  - deno
---

Hey guys, so we got [started with `Deno`](https://daily-dev-tips.com/posts/getting-started-with-deno/), and created a [`Deno` API](https://daily-dev-tips.com/posts/deno-pokemon-api/).

But how to serve HTML files with `Deno`?

Today we'll be looking into `Deno` as a server option.

## Deno Server

In `Node`, you probably have heard of `Express`. This was the middle layer to render files. In `Deno`, we have something similar called `Oak`.

First we are going start by importing the deno modules we need:

```js
import {Application} from 'https://deno.land/x/oak@v6.0.0/mod.ts';
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from 'https://deno.land/x/view_engine@v1.3.0/mod.ts';
```

Now we must define our adapters.

```js
const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();
```

For this Deno project we are choosing the `ejs` template engine to render HTML but we could also use `handlebars` or `denjucks`.

Then we define our Oak adapter. Once we have the Oak adapter and the template engine readey, we pass them to the **Deno view engine**.

Now, we are going to **start the application**:

```js
const app = new Application();

app.use(viewEngine(oakAdapter, ejsEngine));
```

Next, we define a new `Deno` application and tell it to use the defined ejs view engine to render the pages.

We aren't using routes for this example. We will just return a one page:

```js
app.use(async (ctx, next) => {
  ctx.render('index.ejs', {data: {msg: 'Tips'}});
});
```

See the data attribute? We are going to pass a variable to our view, which `ejs` will use to render the page for us.

Now, all we have to do is spin up our app on port 8000.

```js
await app.listen({port: 8000});
```

### Deno with EJS Template engine

As for our `ejs` file, we use the plain bootstrap starter HTML for rendering:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Deno Server</title>
  </head>
  <body>
    <h1>Daily Dev <%= data.msg %></h1>
  </body>
</html>
```

Now are are ready too run our server by executing:

```bash
deno run --allow-net --allow-read server.ts
```

Now open a browser and locate: `http://localhost:8000` and see the `ejs` rendered HTML!

Find the code on [GitHub](https://github.com/rebelchris/deno/tree/server).

Learn more about the **Deno view engine** and **Oak** on [Deno land](https://deno.land/):

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
