---
layout: ../../layouts/Post.astro
title: 'Making htaccess work on Mac OS X'
metaTitle: 'Making htaccess work on Mac OS X'
metaDesc: 'Enable mod_rewrite on Mac OS X so htaccess will work'
image: /images/10-06-2021.jpg
date: 2021-06-10T03:00:00.000Z
tags:
  - mac
---

Yesterday we learned how to [set up virtual host on Mac OS X](https://daily-dev-tips.com/posts/mac-os-x-setting-up-virtual-hosts/), and today I'll show you how to make htaccess work so we can have SEO friendly URL's.

SEO-friendly URLs are a big part of your online presence, and a lot of times, you want to rewrite ugly things like index.php?id=121212 to something like /hello-world.

## Enabling mod_rewrite on Mac OS X

In order to make it work, we first have to enable mod_rewrite so we can use RewriteRules.

Open your terminal and open the `httpd.conf` file.

```bash
sudo nano /etc/apache2/httpd.conf
```

Now search for the following line and remove the `#` in front of it.

```
#LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

Now close the terminal and restart apache.

```bash
sudo apachectl restart
```

We already enabled the AllowOverride in our virtual host yesterday so we don't need to worry about that.

## Testing if mod_rewrite works

For this example, we want to see if it works by redirecting any request to our index.php file.

So let's say someone wants to request the following URL: `http://daily-dev-tips.local/fuu`.

This will now give us a 404 Not Found.

But let's change that so that it will serve our index.php file.
Create a `.htaccess` file at the root of your project.

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```

Now refreshing our fuu link should show our index.php, and with this, we know the mod_rewrite and `.htaccess` file are working as expected.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
