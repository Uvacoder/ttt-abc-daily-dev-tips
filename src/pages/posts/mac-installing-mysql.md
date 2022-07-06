---
layout: ../../layouts/Post.astro
title: 'Mac installing MySQL'
metaTitle: 'Mac installing MySQL'
metaDesc: 'Learn how to install and connect to MySQL on your Mac'
image: /images/04-01-2021.jpg
date: 2021-01-04T03:00:00.000Z
tags:
  - mac
---

In this article, I'll guide you through the MySQL installation process on a Mac.

It's a straightforward installation, and we will need this when setting up our Mac for web development.

## Download MySQL for Mac

To install MySQL, we need to visit the MySQL website and pick the download we need.

[MySQL download page](https://dev.mysql.com/downloads/mysql/)

For most people, the top DMG archive will work.

You'll get an annoying screen if you click the download button because they want you to sign up. Just click the No thanks button at the bottom.

![MySQL download page](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343289381/DfrXsgMN5.png)

## Installation of the MySQL server

Once the download is done, you can click the DMG file, and you'll find the `pkg` file there.

Double-click this file.

![MySQL pkg file](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343449753/nu9G0UfCp.png)

This will open up the installer for MySQL.

![MySQL installer Mac](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343492102/scVd5-KKn.png)

Click Allow on the above step.

Follow all the steps it prompts.

At one stage, it asks for the install location. You can go ahead and use the default one.

![MySQL install location](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343570222/qFlHmjXSJ.png)

After clicking this, you'll be prompted for your password, enter it, and the installation begins.

Then you get a configuration screen. You can select strong password encryption.

It will then ask you to set the default password for the root user.

![MySQL set password](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343665314/pqvAL6aTk.png)

Once we set the password, the installation is done.

## Find the MySQL server on Mac

You can now find your MySQL server by opening the Settings application on your Mac.

![Mac Settings -> MySQL](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343785344/NXFSHfpCk.png)

If you click that, you have the option to Start and Stop the server.

![MySQL start/stop](https://cdn.hashnode.com/res/hashnode/image/upload/v1609343837498/8jOWSg-vn.png)

## Connecting to the MySQL server

We can also use graphic tools to connect to this MySQL server.

In my case, I'll be using [TablePlus](https://tableplus.com/), but any tool will work the same.

Add a new connection using the following settings.

- `host`: 127.0.0.1
- `user`: root
- `password`: You choose this in the installation
- `port`: 3306 (default)

Then you can test the connection and connect to it.

![Mac MySQL Connection](https://cdn.hashnode.com/res/hashnode/image/upload/v1609344081846/fVSQiM7uy.png)

That's it. We installed MySQL and can connect to it!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
