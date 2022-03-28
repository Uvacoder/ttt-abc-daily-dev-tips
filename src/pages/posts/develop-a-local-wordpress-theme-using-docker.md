---
layout: ../../layouts/Post.astro
title: 'Develop a local WordPress theme using Docker'
metaTitle: 'Develop a local WordPress theme using Docker'
metaDesc: 'Learn how to link a local WordPress theme in your docker instance'
image: /images/11-10-2021.jpg
date: 2021-10-11T03:00:00.000Z
tags:
  - wordpress
  - docker
---
A while ago, we learned how easy it could be to [set up WordPress using Docker](https://daily-dev-tips.com/posts/guide-to-set-up-your-wordpress-site-in-docker/). 
However, this setup didn't allow for customization.

So let's have a look at how we could develop our WordPress theme using Docker.

## The file structure

As we could see before, all we needed was a `docker-compose.yml` file.

In our new setup, we want to include a `themes` folder without specific themes.

In the example case, we have one theme called `fooserama`.

![Custom WordPress theme](https://cdn.hashnode.com/res/hashnode/image/upload/v1633175864576/vOUAjCIpZ.png)

> Note: This will overwrite all themes, so you will lose any themes you already loaded in WordPress (including the default ones)

## Changing the Dockerfile

Next up, we have to change our `docker-compose.yml` file to reflect this data.

The first part we want to change is the volume part for the WordPress image.
Before, this was set up like so:

```yaml
wordpress:
	volumes:
	  - wordpress_data:/var/www/html
```

And then in the `volumes` section, we had this:

```yaml
volumes:
  db_data: {}
  wordpress_data: {}
```

What we want is to change the `volumes` for the WordPress image like so:

```yaml
wordpress:
	volumes:
	  - ./themes:/var/www/html/wp-content/themes
```

And we want to remove this link for the `volumes` so it will look like this:

```yaml
volumes:
  db_data: {}
```

If we reboot out the Docker image, we should have our custom theme available on the WordPress website.

```bash
docker-compose up -d
```

![Custom WordPress theme loaded in Docker](https://cdn.hashnode.com/res/hashnode/image/upload/v1633176305674/71aNtE6Pt.png)

This same approach could be used to handle plugins or even uploads if you wanted to.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
