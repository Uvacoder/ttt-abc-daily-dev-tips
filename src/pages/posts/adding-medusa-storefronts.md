---
layout: ../../layouts/Post.astro
title: 'Adding medusa storefronts'
metaTitle: 'Adding medusa storefronts'
metaDesc: 'Adding the medusa Gatsby and NextJS storefronts'
ogImage: /images/20-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/b871c517-a42d-487e-b4c3-416d7b6f6400
date: 2022-09-20T03:00:00.000Z
tags:
  - webshop
---

Now that we have our [medusa server](https://daily-dev-tips.com/posts/setting-up-the-medusa-server/) and our [medusa admin](https://daily-dev-tips.com/posts/adding-the-medusa-admin-dashboard/). Let's look at the most critical part, the actual storefront.

The storefront is the system customers will use to order the products.

Luckily for us, medusa comes with two ready-made starters, and you can use these for inspiration and make your system.

The two systems out of the box are:

- Next.js storefront
- Gatsby storefront

## Installing the Next.js medusa storefront

Let's start with the Next.js storefront, as this will most likely be the one I'll be using.

Open your terminal and navigate to the directory where you place your projects.
Run the following command:

```bash
npx create-next-app -e https://github.com/medusajs/nextjs-starter-medusa medusa-store
```

The `medusa-store` parameter will be the project folder in which we create the project.

Now you can go inside this folder and run `npm run dev`. This should spool up your Next.js storefront!

![Next.js storefront for medusa](https://cdn.hashnode.com/res/hashnode/image/upload/v1662789474986/mf53GMO6h.png)

## Installing the Gatsby storefront

Perhaps you are more a fan of Gatsby?
Well, no problem. Let's also give that a try so that we can evaluate both of them.

First, ensure that you have the Gatsby CLI installed.

```bash
npm install gatsby-cli -g
```

Then we can run the following command in our main project directory to install the project.

```bash
gatsby new medusa-gatsby https://github.com/medusajs/gatsby-starter-medusa
```

Again the `medusa-gatsby` is the folder name we will install the project into.

Once it's done installing, you should copy the environment default to a local one.

```bash
mv .env.template .env.development
```

And now run the server:

```bash
gatsby develop
```

Now visit `http://localhost:8000/`, and you should see this pretty cool storefront.

![Gatsby medusa storefront](https://cdn.hashnode.com/res/hashnode/image/upload/v1662790088999/rJROsr-fu.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
