---
layout: ../../layouts/Post.astro
title: 'Hosting Angular Universal on a server'
metaTitle: 'Hosting Angular Universal on a server'
metaDesc: 'How to host our Angular Universal application on a server'
image: /images/17-02-2021.jpg
date: 2021-02-17T03:00:00.000Z
tags:
  - angular
---

By now, you've seen how we [converted our Angular application to Angular Universal](https://daily-dev-tips.com/posts/converting-a-regular-angular-application-into-angular-universal/). And we [optimized this Angular Universal app for SEO](https://daily-dev-tips.com/posts/optimizing-angular-universal-for-seo/).

That means it's time to put our hard word to rest and put the website online.

When trying to do this a while ago, I couldn't find many articles describing how that would work.

A plain overview of why this is slightly different:

Jim wants to view your website and asks the internet for yourawesomewebsite.com. The DNS will point that domain to your server's IP address.

By default, your server would serve these websites on port 80 or 443 for SSL.
With our Angular Universal application, we have to start a node server that runs in the background.

```bash
node /home/user/domain/dist/server/main.js
```

Now our server is running on `localhost:4000` on the server.
By this time, I had some question marks and regrets for moving to Angular Universal.

However, we can use proxies on a server to redirect our domain to that port internally.

I'll be showing you a preferred way and an alternative way. The alternative way was my only solution since our server wouldn't allow modifications on the vhost level.

## Deploying the Angular script on the server

There are multiple ways to get the Angular Script on the server.

1. Deployment on the server

You will pull the latest git branch on the server and let the server install all the dependencies.

This is a great way to deploy, but small servers with not much power can crash on the install and build.

```bash
npm install
npm run build:ssr
```

2. Deployment via GitHub

This would be ideal. We can have GitHub build all the files and artifact the dist folder as a zip, which we can transfer to the server.

I might come back on this in a future article.
For now, you could read more on this concept on [Philo's article](https://philo.dev/how-to-use-github-actions-build-matrix-to-deploy-artifacts-to-multiple-servers/)

3. Local deployment

This is one way I've used as a middle-layer between the two methods.

This is powerful when your server can't handle the deployment for whatever reason, and GitHub can't transfer the artifact to your server.

What it means is we build everything locally on a `deploy` branch.

```bash
npm install
npm run build:ssr
```

That will give us the correct dist.
Now we will specifically add this dist to the deploy branch.

```bash
# Force add the dist folder
git add -f dist/
git commit -m "Add build files"
git push -f origin production
```

Then on the server, you can checkout and pull the `deploy` branch, and you will have your build files ready.

> Note: This is not a preferred method and should only be used if the above two options don't work for you.

## Running the Angular Server forever

You might remember above that we started the Angular Universal server with a node script, that will however, stop running if we terminate the script.

We can use systems like [PM2](https://pm2.keymetrics.io/) to run this script forever, and it allows us to monitor it, restart it, etc.

On your server, install the pm2 script globally.

```bash
npm install pm2 -g
```

Now we can start the same script with pm2 and even give it a name:

```bash
pm2 start /home/user/domain/dist/server/main.js --name yourappname
```

After this, you'll be able to stop it and restart it using the name.

```bash
pm2 stop yourappname
pm2 restart yourappname
```

## Angular Universal over a proxy pass

Once we have Angular deployed and running on our server, we need to find a way to proxy the default domain to show the localhost:4000.

This depends on which server you are using, but let's say you use apache.

Find the Virtual Host file for this domain, and add the following lines:

```bash
ProxyPass / http://localhost:4000/
```

> You would be able to find or create a new virtual host in this folder: `/etc/apache2/conf-available` [Read more](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-18-04#step-four-%E2%80%94-create-new-virtual-host-files)

What this line will do is say every request should redirect internally to localhost:4000.

Do make sure you have the `proxy` and `proxy_http` modules enable.

```bash
sudo a2enmod proxy_http
```

After adding this, you should also restart apache.

```bash
sudo service apache2 restart
```

## Angular Universal proxy with htaccess

This is the alternative way, and from what I've seen online, it's not recommended. However, I'm not sure for what exact reason.

For me, this works fine, especially if you don't have access to the vhost files or any server setup.

So with no access to the vhost files, I ended up using the htaccess method, which in essence does the same thing.

Open up your `.htaccess` file and add the following lines.

```bash
<IfModule mod_rewrite.c>
RewriteEngine on

# Redirect Public ports to NodeJS port
RewriteRule ^$ http://localhost:4000 [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:4000/$1 [P,L]
</IfModule>
```

These lines will make sure all requests are served to the localhost:4000 internal server.

You can now verify if your website is running.
Let me know if you have any ideas, questions, or remarks on this article on Twitter.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
