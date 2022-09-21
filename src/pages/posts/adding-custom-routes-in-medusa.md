---
layout: ../../layouts/Post.astro
title: 'Adding custom routes in medusa'
metaTitle: 'Adding custom routes in medusa'
metaDesc: 'Custom storefront and admin routes for our medusa server'
ogImage: /images/21-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/859eb8f2-e0dd-46b8-8603-03e9d2159f00
date: 2022-09-21T03:00:00.000Z
tags:
  - webshop
---

The cool part about medusa is that we get the option to customize a lot of things.
One of them is routes. This article will show you how to add a store and an admin route.

When it comes to these routes, we add all of them to our server project.
Go ahead and open your server project in your favorite IDE.

## Adding a store route

Custom routes are added in the `src/app` directory. In our case, we'll add an `index.js`.

```js
import { Router } from 'express';

export default () => {
  const router = Router();

  router.get('/store/ping', (req, res) => {
    res.json({
      message: 'Pong from the server!',
    });
  });

  return router;
};
```

This will inject a new route under `store/ping`, which the storefront can use.

> Note: the store prefix is according to medusa conventions. You can modify it and return a direct route.

Now let's restart our server and test the endpoint in Insomnia.

![Ping request to medusa server](https://cdn.hashnode.com/res/hashnode/image/upload/v1662877863903/QtXpd7lad.png)

There you go, it works!

## Adding an admin route

We can use this same principle to prefix admin routes.
However, the route is now prefixed with `admin`.

```js
import { Router } from 'express';

export default () => {
  const router = Router();

  router.get('/admin/ping', (req, res) => {
    res.json({
      message: 'Pong from the server!',
    });
  });

  return router;
};
```

You can go ahead and try this endpoint as well.

![Custom admin route in medusa](https://cdn.hashnode.com/res/hashnode/image/upload/v1662877985249/r2m8oCJpb.png)

And that's it. We now learned how to add custom routes to our medusa server.
These routes will come in handy while exploring other options for our admin and front end.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
