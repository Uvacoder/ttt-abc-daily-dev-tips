---
layout: ../../layouts/Post.astro
title: 'Adding the medusa admin dashboard'
metaTitle: 'Adding the medusa admin dashboard'
metaDesc: 'Adding the medusa admin dashboard to our medusa system'
ogImage: /images/19-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/15869280-2bfa-4574-d18b-62b05b4daf00
date: 2022-09-19T03:00:00.000Z
tags:
  - webshop
---

Now that we have the [medusa server up and running](https://daily-dev-tips.com/posts/setting-up-the-medusa-server/) let's go on and add the first visual system.

We'll connect the medusa admin dashboard to our server for this article.
The admin dashboard can perform all kinds of actions on your system data.
It provides a way to see/create/edit and delete your products, view orders, and so on.

## Medusa installing the admin dashboard

To get started, we can use the basic admin template provided by medusa.

```bash
git clone https://github.com/medusajs/admin medusa-admin
```

This will clone the admin panel into the `medusa-admin` directory.

Now navigate into the folder in your terminal and install all dependencies.

```bash
cd medusa-admin && npm install
```

Once installed, make sure to run our medusa server first.

```bash
// Navigate to medusa server
cd medusa-server

// Start server
medusa develop
```

Then you can run your dashboard project.

```bash
npm run start
```

You should be able to visit `localhost:7000` now and be able to see the login panel.

![Medusa admin login](https://cdn.hashnode.com/res/hashnode/image/upload/v1662706167927/ARnlnLQD8.png)

If you used the seed option on installation, you could log in with the base user: `admin@medusa-test.com` and password: `supersecret`.

And you'll now be able to explore the admin panel.

![Medusa dashboard product overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1662706298471/6v1hYWrgZ.png)

And that's it. Super easy to add a separate dashboard to our already existing medusa server.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
