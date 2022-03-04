---
layout: ../../layouts/Post.astro
title: 'Resetting a WordPress admin password'
metaTitle: 'Resetting a WordPress admin password'
metaDesc: 'Ever lost your WordPress password? Here is a way to reset it.'
image: /images/06-10-2020.jpg
date: 2020-10-06T03:00:00.000Z
tags:
  - wordpress
---

I'm not particularly eager to work on WordPress, but sometimes you inherit legacy code or have to support a client.

The worst thing is where you get access to the database, but nobody knows the login anymore.

So how do we go about changing the admin's password?

> Pre: You must have access to the database!

## Using phpMyAdmin to change the WordPress password

The first thing we need to do is log in to phpMyAdmin and find our database.

Then we need to open up the `wp_users` (wp can be underscored by something unique for your install).

![PhpMyAdmin for WordPress install](https://cdn.hashnode.com/res/hashnode/image/upload/v1600855104030/0OehEIFE5.png)

We need to click the `edit` button on the admin record.

In the password field, add the new password in a readable way and choose `MD5` as the Function.

![Reset WordPress password](https://cdn.hashnode.com/res/hashnode/image/upload/v1600855217658/USFjHqfzp.png)

> Please don't use passwords like this example above

Now you can click `save`, and we will be able to log in with our new password!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
