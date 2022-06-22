---
layout: ../../layouts/Post.astro
title: 'Setting up a free PostgreSQL database on Heroku'
metaTitle: 'Setting up a free PostgreSQL database on Heroku'
metaDesc: 'How to get a free postgres database on Heroku'
image: /images/22-10-2021.jpg
date: 2021-10-22T03:00:00.000Z
tags:
  - postgres
---

Recently I wanted to explore Postgres databases for a specific use case. However, this use case needed the database to be hosted online.

Then I discovered you could quickly set up a free Postgres database on Heroku!

In this article, I'll show you how you can also create your own free Postgres database.

Do note this database will be limited to the free plan. It's easy for prototyping but might be too limited for your existing apps.

## Set up Heroku and your first app

First, we must create or log into our Heroku account. To do this, head over to their website and follow the login/signup process.

[Heroku website](https://id.heroku.com/login)

Once your log in, add a new app by clicking the "new" button.

![Heroku add new app](https://cdn.hashnode.com/res/hashnode/image/upload/v1634015661134/0ghl_rPa1.png)

Give this app a name and pick a region that works for you.

![Heroku new app](https://cdn.hashnode.com/res/hashnode/image/upload/v1634015743108/4Ep29LId_.png)

Once your app is set up, we need to visit the resource panel and search for 'Postgres' to add this add-on.

![Add Postgres to Heroku](https://cdn.hashnode.com/res/hashnode/image/upload/v1634015864103/pgrXYktQJ.png)

In the next step, picking the hobby tier is crucial as this is the only free one.

![Hobby tier Postgres on Heroku](https://cdn.hashnode.com/res/hashnode/image/upload/v1634015908670/XajK7DgYm.png)

## Viewing the database credentials

To find the database credentials click on the Postgres add-on in your resource overview.

![Open up Postgres details](https://cdn.hashnode.com/res/hashnode/image/upload/v1634016013250/p1VIV_34A.png)

This will open up a new page where you can view the actual Postgres database in more detail.
To find the credentials open up the settings menu.

![Credentials for Postgres on Heroku](https://cdn.hashnode.com/res/hashnode/image/upload/v1634016085277/yW4MwU3fz.png)

For instance, use these credentials in a [database explorer](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/) to connect to it. (I'll be using TablePlus)

![Connect to Postgres on Heroku](https://cdn.hashnode.com/res/hashnode/image/upload/v1634016412652/0ydck_QKn.png)

And there you go, we now have a free Postgres database we can use!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
