---
layout: ../../layouts/Post.astro
title: 'Running medusa in docker'
metaTitle: 'Running medusa in docker'
metaDesc: 'How to run the medusa server in Docker'
ogImage: /images/29-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/b1bf50ab-28ab-4aff-febe-e4c6f859e400
date: 2022-09-29T03:00:00.000Z
tags:
  - webshop
---

Now that we have medusa up and running, I wanted to move away from the default SQLite database as those are very limited.

The alternative would be Postgres, which medusa can efficiently work with.
However, I didn't want to set this up locally, as it can be a pain to manage.

Luckily, it's relatively easy to set up medusa in docker.
Even better, it kind of comes prepared for us!

Let's see how that works.

## Running medusa in docker

Once you installed the [medusa server project](https://daily-dev-tips.com/posts/setting-up-the-medusa-server/) you'll see that you have a `Dockerfile` and a `docker-compose.yml` file.

With those, we can spool up a running docker version of the medusa server.
This will spool up Redis, Postgres, and the server itself.

Run the following command:

```bash
docker-compose up --build
```

Once it's done, you should see the container with the part.

![Medusa docker images](https://cdn.hashnode.com/res/hashnode/image/upload/v1663606190231/OZ_QYSbcP.png)

This already would have run the migration, but you can always open up the specific server docker terminal and execute commands.

Sometimes you might want to connect to the database to see what's happening there.

To connect, use the following details:

- host: `127.0.0.1`
- user: `postgres`
- password: `postgres`
- database: `medusa-docker`
- port: `5432`

And once in you should see all the tables!

![Database connected medusa docker](https://cdn.hashnode.com/res/hashnode/image/upload/v1663606366162/VtN8KEUJu.png)

And that's it. Your actual server will be running on `localhost:9000` as you would expect, and you can do everything as before.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
