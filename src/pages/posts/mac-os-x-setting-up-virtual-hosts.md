---
layout: ../../layouts/Post.astro
title: 'Mac OS X setting up virtual hosts'
metaTitle: 'Mac OS X setting up virtual hosts'
metaDesc: 'Hosting a website on your Mac using Virtual Hosts'
image: /images/09-06-2021.jpg
date: 2021-06-09T03:00:00.000Z
tags:
  - mac
---

You might remember the days of MAMP/XAMP/WAMP? Well, for Mac OS X, we don't need these tools anymore.

It's actually possible to host a website on your local Mac, and it's not as hard as you would think!

Today, we'll set up a local PHP website that we can reach through our browser.

## Enabling virtual hosts on Mac OS X

The first step to making this work is enabling virtual hosts on Mac OS X.

To do this, we need to modify the `httpd.conf` file. Execute the following command in your terminal.

```bash
sudo nano /etc/apache2/httpd.conf
```

Look for the following line:

```bash
#Include /private/etc/apache2/extra/httpd-vhosts.conf
```

And below that, on a new line add the following:

```bash
Include /private/etc/apache2/vhosts/*.conf
```

This tells Apache to load all `.conf` files in this directory.

> Note: You could also add all the hosts in the `httpd-vhost` file, but I found this a cleaner method.

Now we need to make the configuration files, make sure the directory exist or create it.

```bash
mkdir /etc/apache2/vhosts
```

Now we can create our first configuration in that folder.

```bash
sudo nano /etc/apache2/vhosts/daily-dev-tips.conf
```

Place the following information inside:

```apache
<VirtualHost *:80>
    DocumentRoot "/Users/chrisbongers/www/daily-dev-tips"
    ServerName daily-dev-tips.local

    <Directory "/Users/chrisbongers/www/daily-dev-tips">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

You have to set the DocumentRoot to your own directory on your local machine. For me, it's a www folder at my user level.
Next, set the ServerName to the URL you want to serve it on.

Now we need to restart Apache

```bash
sudo apachectl restart
```

However, if we now visit: `http://daily-dev-tips.local` we don't see anything...

## Mapping the local domain

To make the local domain work, we need to map the domain to our local server.

Modify your host file.

```bash
sudo nano /etc/hosts
```

And add a line like this:

```
127.0.0.1       daily-dev-tips.local
```

Make sure you use the domain you set in the vhost file.

## Testing our website

If you open your website link, another app might point to the default page, depending on whether you already set up the folder.

I didn't, so create the folder in the place you provided in the vhost file and create a simple index.php inside.

```php
<?php
echo 'Hello world from my own Mac OS X server';
?>
```

Now open the website again and see the beauty of your server.

![Mac OS X Virtual Host server](https://cdn.hashnode.com/res/hashnode/image/upload/v1622892784431/zqB_N0Csw.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
