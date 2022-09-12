---
layout: ../../layouts/Post.astro
title: 'Using services in custom medusa routes'
metaTitle: 'Using services in custom medusa routes'
metaDesc: 'How to use services in custom medusa routes to retrieve information'
ogImage: /images/22-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d352c2b4-68cb-4c28-fb50-bf7ed9466e00
date: 2022-09-22T03:00:00.000Z
tags:
  - webshop
---

Another cool part about medusa is that we can use services to interact with existing functionality.

For instance, we can access the `ProductService` from there. We can retrieve products but also create and update them.

Let's see how we can use these services inside our custom routes.

## Using services in Medusa routes

For this example, I'll be using the `ProductService`. First, we'll want to add a [custom route endpoint](https://daily-dev-tips.com/posts/adding-custom-routes-in-medusa/).

Inside our custom route, we can start by assigning this service like this.

```js
const productService = req.scope.resolve('productService');
```

Let's say we want to list all products. We can easily do that with the following command.

```js
router.get('/store/test', async (req, res) => {
  const productService = req.scope.resolve('productService');
  productService.list().then((products) => {
    res.json(products);
  });
});
```

If you now restart your server and query this endpoint, you should be able to see a list of your products. (My database only has one effect).

![Custom service call in medusa route](https://cdn.hashnode.com/res/hashnode/image/upload/v1662961377007/7KgvkNbvd.png)

This is, of course, not super beneficial as we already have an endpoint to retrieve precisely this information.
The cool part is that we can choose to manipulate this data.
Let's say we only want items that have stock.

```js
router.get('/store/test', async (req, res) => {
  const productService = req.scope.resolve('productService');
  productService.list({}, { relations: ['variants'] }).then((products) => {
    res.json(
      products.filter((product) =>
        product.variants.some((variant) => variant.inventory_quantity >= 0)
      )
    );
  });
});
```

We have quite a few changes here. Let's take a closer look.
The first one is that we pass arguments to the products list function.
These arguments are as follows:

- `{}`: The first option is the params to query on. In our case, nothing in particular
- `{relations:['variants']}`: This can be used to add specific options to the query. We want to add the variants

Once we have this, we filter all products and only return products where at least one variant has stock.

You can play with adjusting the stock levels in the query.

And that's it, we super powerful way of querying from service in medusa.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
