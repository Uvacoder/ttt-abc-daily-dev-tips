---
layout: ../../layouts/Post.astro
title: 'First look at medusa-extender'
metaTitle: 'First look at medusa-extender'
metaDesc: 'Taking a look at the medusa-extender and how to install it'
ogImage: /images/28-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/b75ce48e-1b71-4110-edb6-e2d4b55ed700
date: 2022-09-28T03:00:00.000Z
tags:
  - webshop
---

As we have seen in the previous articles, medusa offers many fantastic customizable options.
However, sometimes we might even want to go beyond that, and that's precisely where medusa-extender comes in.

We can use medusa-extender to extend things out of the box more efficiently as it handles most of the logic.

In this article, we'll look at installing it and how to enable it in our project.

## Installing medusa-extender

If you are following along, please ensure you have the [medusa server](https://daily-dev-tips.com/posts/setting-up-the-medusa-server/) setup.

From there, open your terminal, navigate to the project root, and run the following command.

```bash
npm i medusa-extender
```

From there, we can run the init function, which does all the heavy lifting.

```bash
./node_modules/.bin/medex init
```

This command will ensure all our packages are there. We are running the project in TypeScript mode and changing our package commands.

You'll also note a new `modules` folder is created in your `src` directory.
This contains some examples of a module/router and service.

By inspecting these files, we quickly learn that there are many cool things we can use out of the box.
For example, the router has a `requiredAuth` function built in.

We can quickly spool up our server in dev mode: `npm start` and check out this new route. (`localhost:9000/admin/custom-route`)

You can try and change the auth required to see the change from it being required, yes or no.

## What can medusa-extender create?

Let's look at all the things medusa-extender can help us with.

- **Entity**: Create a new entity representing a custom database row. We can even override existing ones
- **Repository**: A whole repo to interact with custom entities
- **Migration**: A migration file for managing our database
- **Service**: To more easily create services, and we can even overwrite existing services
- **Middleware**: With this, we can create custom middleware as, for example the logged-in user check
- **Router**: Create custom routes quickly
- **Validator**: A custom field validator, which is super handy for re-usable checks
- **Subscriber**: Create a custom subscriber, but more easily with some more formatting
- **Module**: A custom module that can incorporate multiple modules and components into one place.

In the coming articles, we'll look closely at some of these and how they will work.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
