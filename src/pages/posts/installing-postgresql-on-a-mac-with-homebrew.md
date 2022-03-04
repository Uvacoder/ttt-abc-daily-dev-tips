---
layout: ../../layouts/Post.astro
title: 'Installing PostgreSQL on a Mac with Homebrew'
metaTitle: 'Installing PostgreSQL on a Mac with Homebrew'
metaDesc: 'How to install a PostgreSQL database on Mac using Homebrew'
image: /images/12-01-2022.jpg
date: 2022-01-12T03:00:00.000Z
tags:
  - postgres
---

Suppose you had a look at the 2021 stack overflow developer survey results. In that case, you might have seen that PostgreSQL, or Postgres for short, is now the second most loved database.

And I've been loving Postgres myself, so time to dedicate an article on how to set it up on a Mac.
This article will guide you through installing Postgres on your Mac and exploring the first database.

![Stack overflow most loved databases 2021](https://cdn.hashnode.com/res/hashnode/image/upload/v1641188878297/C7_WTaD8t.png)

In this article, I'll be using Homebrew. If you haven't used it before, check out my [article on using Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

## Installing Postgresql with Homebrew

The first thing we want to do is install Postgres.

Before running any install command in Homebrew, it's good to make sure you are up to date.

```bash
brew update
```

Now it's time to install Postgres, and you can run this command.

```bash
brew install postgresql
```

Once it's done, you should see this output line amongst some other stuff.

```bash
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /opt/homebrew/var/postgres
```

That means you are set!

## Managing the Postgres database

To start the database, you can simply run the following command in your terminal:

```bash
brew services start postgresql
```

And to stop the Postgres database from running:

```bash
brew services stop postgresql
```

Once it's up and running, we want to create a root user to log in and interact with the database.

```bash
psql postgres
```

This will log you into the Postgres server.

![Postgres server login](https://cdn.hashnode.com/res/hashnode/image/upload/v1641191010341/Zl0poJBew.png)

From here, you can create a new user with a password.

```bash
CREATE ROLE chris WITH LOGIN PASSWORD 'password';
ALTER ROLE chris CREATEDB;
```

My user's name here is `chris`, and my password is super secure as it is: `password`.

> Note: Use secure passwords, please this is just a demo setup.

## Connecting to the Postgres database

I find it easiest to use visual database connection tools.

If you are unsure what client to use: I've written down [my top 5 database clients](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/).

We'll use [TablePlus](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/#heading-1-tableplus) to connect to our newly created Postgres database.

Open the app, and create a new connection.
For the type, you can choose "PostgreSQL".

![TablePlus new PostgreSQL database connection](https://cdn.hashnode.com/res/hashnode/image/upload/v1641191501895/Ti70cDCWY.png)

As for the connection details, you should use:

- User: The one you just created, in my case `chris`.
- Password: The password you set in my case `password`.
- Database: This will be `postgres`.

The rest of the data should already be set up correctly.

You can then test the connection by clicking the "Test" button at the bottom. It should turn everything green.

![Postgres connection green](https://cdn.hashnode.com/res/hashnode/image/upload/v1641191620692/AFJ_RcDW9.png)

And that's it you are now connected to your Postgres database.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
