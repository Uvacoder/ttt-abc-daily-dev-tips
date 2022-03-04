---
layout: ../../layouts/Post.astro
title: 'Starting your first Laravel project'
metaTitle: 'Starting your first Laravel project'
metaDesc: 'Laravel is a great PHP framework and super easy to get setup on your device'
image: /images/21-02-2021.jpg
date: 2021-02-21T03:00:00.000Z
tags:
  - php
---

Today I'll be showing you how easy it is to get started with a Laravel project.

Laravel is a PHP framework. For me, it focuses on good practices and clean code.

The super cool part about Laravel 8.0 is that it now comes with a simple terminal command to build an app that runs in Docker!

Before we start, make sure you have Docker desktop installed.

[Download Docker desktop](https://www.docker.com/products/docker-desktop)

## Installing Laravel

Once you have Docker installed and setup, we can open the terminal and execute the following command.

```bash
curl -s https://laravel.build/laravel-app | bash
```

Running this command will create a `laravel-app` folder in the current folder you in.

You can change the name to whatever you need it to be, so your projects need to be called `client-website` run the following command.

```bash
curl -s https://laravel.build/client-website | bash
```

With this command, it will setup all the packages and even set your application key for you.

To run the application, we can simply cd into the directory and run the following command.

```bash
cd laravel-app
./vendor/bin/sail up
```

The first time the sail up command will take quite a while but don't worry any time after that, it will be quick.

> Note: If you're on the new Mac M1, you need to change the `docker-compose.yml` file. Change `image: 'mysql:8.0'` to `image: mariadb:10.5.8`

Once everything is installed, you should see the following in your Docker desktop app.

![Screenshot 2021-02-16 at 08.21.49.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613456611624/Tymbmo5zu.png)

And we should be able to view the application going to `http://localhost`.

> Note: you might have to change the port if you already have a server running on port 80

![Laravel app running via Docker](https://cdn.hashnode.com/res/hashnode/image/upload/v1613456664314/z3x8CzBe_.png)

And we even get a default Mailhog installation on port 8025:

![Screenshot 2021-02-16 at 08.21.34.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613456708992/aZcp3woGi.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
