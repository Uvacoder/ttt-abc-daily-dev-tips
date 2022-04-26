---
layout: ../../layouts/Post.astro
title: 'Mac installing MariaDB'
metaTitle: 'Install MariaDB on Mac Tutorial [2022]'
metaDesc: 'Learn in this guide how to install MariaDB on a mac and how to start and stop the service.'
image: /images/05-01-2021.jpg
date: 2021-01-05T03:00:00.000Z
tags:
  - mac
---

Yesterday we installed [MySQL on our Mac](https://daily-dev-tips.com/posts/mac-installing-mysql/). However, you might be thinking, what about **MariaDB**?

MariaDB has been known to be the next step. It's highly compatible to migrate your MySQL to MariaDB.

Luckily for us, this installation process is more straightforward than MySQL since we can use [Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

## Install MariaDB on Mac with Homebrew

To install MariaDB, we need to have **Homebrew** installed first.

If you don't have this installed, follow my guide on [installing Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

Open up your favorite terminal and execute the following command first to make sure Homebrew is up to date:

```bash
brew update
```

Then we can install MariaDB with this command:

```bash
brew install MariaDB
```

This will start a series of cool lines in your terminal, making you look like a hackerman! Afterward, MariaDB should run on your Mac.

![Hackerman gif](https://media.giphy.com/media/QbumCX9HFFDQA/giphy-downsized-large.gif)

Once it is done, we have successfully installed MariaDB.

We can now **start** or **stop** the MariaDB service using Homebrew:

```bash
brew services start mariadb
brew services stop mariadb
```

## Connecting to the MySQL server

Once you start the server you can run the following command to connect to the database:

```bash
mysql -uroot -p
```

It will ask for your password, and if correct, it will show the following:

![MariaDB connection](https://cdn.hashnode.com/res/hashnode/image/upload/v1609397158028/gV_WVkSuk.png)

We can also use a tool like [TablePlus](https://tableplus.com/) to connect to our MariaDB.

Add a new MariaDB connection using the following settings.

- `host`: 127.0.0.1
- `user`: root
- `password`: You choose this in the installation
- `port`: 3306 (default)

![MariaDB TablePlus connection](https://cdn.hashnode.com/res/hashnode/image/upload/v1609397272772/9Mtf9ftOD.png)

## Help, the password is wrong

I had the issue where my password didn't work because of the running instance of MySQL. First of all, stop running MySQL instances using the Settings => MySQL interface.

Now you can run the following command:

```bash
sudo mysql_secure_installation
```

The sudo is important here to generate a new root password.
In my case, I just made it the same as what I had.

Follow the steps it prompts. Everything can be answered with Yes.

Now you should be able to log in again.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
