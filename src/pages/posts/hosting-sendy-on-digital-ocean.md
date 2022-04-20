---
layout: ../../layouts/Post.astro
title: 'Hosting Sendy on Digital Ocean'
metaTitle: 'Hosting Sendy on Digital Ocean'
metaDesc: 'How to host Sendy on a Digital Ocean lamp stack.'
image: /images/09-01-2021.jpg
date: 2021-01-09T03:00:00.000Z
tags:
  - mail
---

> Disclaimer: some links in this article are affiliate links. These help support the blog by allowing me to receive a bonus if you sign up.

If you want to know what [Sendy](https://sendy.co/?ref=Y7kyy) is and why I'm [moving from Mailchimp to Sendy](https://daily-dev-tips.com/posts/moving-from-mailchimp-to-sendy/) read all about it here.

I'm going to host Sendy on DigitalOcean's 5\$ a month droplet. This should be more than enough to host a simple mailing tool.

I'll guide you through this process and all the little things I might encounter.

The result is Sendy on our domain 🥳

![Send self-hosted on Digital Ocean](https://cdn.hashnode.com/res/hashnode/image/upload/v1609597397138/FDF0TWZoZ.png)

## Setting Digital ocean up

In case you don't have a Digital Ocean account yet, head over to their website and create an account.

Feel free to use my referral link and get 100\$ free credit.

[Create Digital Ocean account](https://m.do.co/c/ce6753e11b9e)

You might need to link your account to a payment provider on the first setup. I'm using Paypal to put credit in my account.

## Creating the Digital Ocean droplet

I'm creating a project first, to have it more organized. This step is optional and can be omitted by directly going to the droplet section.

![Digital Ocean project](https://cdn.hashnode.com/res/hashnode/image/upload/v1609575199401/WPtvkxnHG.png)

Fill out the name and purpose, and click on the `Create Project` button.

The next step you can skip since we don't have any resources yet.

![Digital Ocean resources](https://cdn.hashnode.com/res/hashnode/image/upload/v1609575321616/Ua19duMjL.png)

Once the project is set up, we can click the `Get started with a Droplet` button.

![Digital Ocean new droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609575382381/0mT9_AAVU.png)

You can open the `Marketplace` tab and search for the current LAMP stack.

We will use the LAMP stack on a Basic plan for 5\$/month.

![Digital Ocean LAMP stack](https://cdn.hashnode.com/res/hashnode/image/upload/v1609577804082/EoA9X31cH.png)

You can then select a data center that is compliant with your location policy and serves you best. (I choose New York 3)

![Hashnode data region](https://cdn.hashnode.com/res/hashnode/image/upload/v1609578002128/sb3ryCO7Q.png)

As for authentication, you can choose between SSH and Password. I strongly urge you to use the SSH one.
It's way safer and eventually easier to use.

For this, you will need to get your SSH key. If you are using GitHub, you likely will already have one.

Find it by running the following command in your terminal.

```bash
cat ~/.ssh/id_rsa.pub
```

![Digital Ocean Authentication](https://cdn.hashnode.com/res/hashnode/image/upload/v1609578104924/PdBdPaxbI.png)

You can then press the create button, and it will start to create your droplet.

![Digital Ocean droplet creation](https://cdn.hashnode.com/res/hashnode/image/upload/v1609578183336/pfFr4Km6S.png)

Once it's done, it will look like this.

![Digital ocean droplet complete](https://cdn.hashnode.com/res/hashnode/image/upload/v1609578544183/U55-93aZy.png)

Now that droplet is done, let's connect to it and install everything we need.

## Connecting to our droplet

If you set up your droplet to authenticate via SSH, you can now open your favorite terminal and ssh right into it.

You can find your IP address on the droplet screen.

```bash
ssh root@104.131.30.131
```

> Note: Change the IP above to your droplet's IP

The first time it will prompt you if the host should be accepted. Choose yes.

You will now be logged in.

![SSH into Digital ocean droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609578451313/XF52nv5mh.png)

## Installing our packages for the droplet

Now we can go ahead and install the packages we need for Sendy.

Let's first inspect what PHP version is installed.

```bash
php -v
```

This returns the currently installed PHP version.
At the time of writing, that is.

`PHP 7.4.3 (cli) (built: May 26 2020 12:24:22) ( NTS )`

That's fine for us.

Next up, we'll need to install some software that Sendy will need.

The first thing we need for Sendy is Curl.
This example shows how to install it for our PHP version (7.4).

PHP 7.4 needs the external ondrej repo so that we can add that, and then we'll be able to install Curl.

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install php7.4-curl
```

The next one we need is the PHP XML package which we can install by running the following command.

```bash
apt-get install php-xml
```

The last step is to restart Apache to make these activated.

```bash
systemctl restart apache2
```

## Having a custom domain

I won't be using this server for anything else so that we can leverage the already setup structure.

The files served when viewing the droplet are in the following folder.

```bash
/var/www/html
```

For now, we know the IP of our droplet is `104.131.30.131`, and I want a subdomain to point to this IP.

Head over to your DNS settings for the domain. (In my case Netlify)

You can add the subdomain A record here and point it to the IP of your droplet.

![DNS record for Digital Ocean droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609579180453/cgPP2iG49.png)

Now, if we visit sendy.daily-dev-tips.com we should see the default landing page.

![Custom domain droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609579244751/s6XbqzEQF.png)

Nice, we now have our custom domain pointed to our Digital Ocean droplet.

## Adding HTTPS to our Digital Ocean droplet

Of course, we want to have the domain secured. Luckily for us, Digital Ocean droplet comes with Certbot installed.
This allows us to generate SSL certificates on the droplets.

You need to be in the terminal connected to your droplet and execute the following command to generate the certificate.

```bash
certbot --apache -d sendy.daily-dev-tips.com
```

The program will ask you for an emergency email. Enter a valid email there.

It will then ask you to agree to the terms and eventually generate the certificate.

As one of the last steps asks if you want to force all traffic to HTTPS I choose option 2 (yes) here.

Congrats, you now have SSL enabled.

![Digital Ocean SSL on droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609579569297/tRD0D_Tx3.png)

## Adding a MySQL database for Sendy

The cool part about our LAMP droplet is that it comes with MySQL installed. We need to add a database for Sendy.

Run the `mysql` command in the terminal to open the MySQL mode.

![Digital Ocean MySQL mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1609579715184/LWKDldBef.png)

Now run the following query to create the database.

```bash
create database sendy;
```

Next up, let's create a user to connect to this database with.

```bash
CREATE USER 'sendy_admin@localhost' IDENTIFIED BY '{PASSWORD}';
```

Now we need to give this user access to our Sendy database.

```bash
GRANT ALL PRIVILEGES ON *.* TO 'sendy_admin'@'%';
```

> Note: To exit the MySQL mode, type: `exit;`

If the grant does not work you can try this alternative method:

```bash
USE sendy;
CREATE USER 'sendy_admin'@'localhost' IDENTIFIED BY '{PASSWORD}';
GRANT ALL ON . TO 'sendy_admin'@'localhost';
FLUSH PRIVILEGES;
```

## Setting up Sendy configuration

Once you've purchased [Sendy](https://sendy.co/?ref=Y7kyy) from their website, you will receive an email containing the files. Download those locally.

You should unzip the file and open the `includes/config.php` file. We will add our database connection and domain there.

Fill out the information for the following fields.

```php
define('APP_PATH', 'https://sendy.daily-dev-tips.com');

$dbHost = 'localhost'; //MySQL Hostname
$dbUser = 'sendy_admin'; //MySQL Username
$dbPass = '{password}'; //MySQL Password
$dbName = 'sendy'; //MySQL Database Name
```

> Note: the APP_PATH should be without a trailing slash!

That's it, all the configuration we need for Sendy.
We just need to find a way to upload it to our Digital Ocean droplet.

## Uploading Sendy to Digital Ocean droplet

There are multiple ways of uploading the files to Sendy. You could use a Git repo and pull it on the server.
But I'm personally a big fan of the `rsync` command. It's quick and easy to move files once you have an SSH connection setup.

The command we will be using:

```bash
rsync -av www/sendy/ root@104.131.30.131:/var/www/html/
```

This copy all the files in `www/sendy/` to our droplet `/var/www/html/`.

> Note: Atlernative option is using FTP: [Read more on Digital Ocean](https://www.digitalocean.com/docs/droplets/how-to/transfer-files/)

We can now check our droplet by running the following command in our droplet:

```bash
ls /var/www/html/
```

This should return the file list.

![Sendy files in our Digital Ocean droplet](https://cdn.hashnode.com/res/hashnode/image/upload/v1609580612916/gNvuvdkGR.png)

We now have to make sure the uploads folder on the droplet is writeable.

Execute the following command.

```bash
chmod 777 /var/www/html/uploads/
```

When we open our domain again, we should be automatically redirected to the `_install.php` file.

![Sendy installation screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1609582140510/fOmLSlYtx.png)

You will see the server compatibility checklist on the left, which shows you if all the extensions are correct.

You can then fill out the form on the right to install everything needed.

After filling out the details, we should be able to log in and see the following screen.

> Note: I skipped the Amazon SES setup in this step

![Sendy login screen](https://cdn.hashnode.com/res/hashnode/image/upload/v1609582282698/3ziSCAxEV.png)

## Setting up Amazon SES

Now it's time to set up our Amazon SES account and link it to our Sendy instance.

[Head over to Amazon](https://console.aws.amazon.com/console/home) and create an account or log in to your existing account.

You can now follow the instructions provided by Sendy on how to create the user.

[Creating IAM user](https://sendy.co/get-started#step5)

Once you get the API credentials, add them to your Sendy settings.

You'll note you're in the Amazon SES "Sandbox" as they call it. You will need to log a support case with Amazon to enable you to send more than 200 emails a day.

This might take up to 2 days, so when switching from another tool, bear this in mind.

With that done, we set up Sendy to be our new self-hosted marketing platform.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
