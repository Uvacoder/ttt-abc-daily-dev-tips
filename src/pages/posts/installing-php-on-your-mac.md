---
layout: ../../layouts/Post.astro
title: 'Installing PHP on your Mac'
metaTitle: 'Installing PHP on your Mac - Daily Dev Tips'
metaDesc: "Installing PHP on a mac used to be quite tedious but with Homebrew it's a breeze"
ogImage: /images/02-02-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/4e298140-eec6-4555-eea8-cdd2de55f700
date: 2021-02-02T03:00:00.000Z
top: true
tags:
  - php
  - mac
---

I've got a brand new Mac yesterday and noted that it states PHP will be removed from future Mac OS versions by default.

I'm pretty surprised they go this way. By default, it comes with PHP 7.3, and I needed 7.4 for my project so let me guide you through setting up PHP on your Mac!

Mac's warning looks like this:

```
WARNING: PHP is not recommended
PHP is included in macOS for compatibility with legacy software.
Future versions of macOS will not include PHP.
```

However, don't be scared. It's pretty easy to install PHP and even install multiple versions if you like.

## Installing Homebrew

When it comes to installing software on your Mac, we need only one package manager, and it's Homebrew.

It can install any package or software you want and even install specific versions.

Read more on [Homebrew - Package manager for Mac](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

Quick guide: Run the following command in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Installing PHP with Homebrew on Mac

To install PHP, we can run the following command:

```bash
brew install php
```

This will install the latest stable version of PHP (At the moment of writing, this is PHP 8.0).

Before running any brew commands, it's a good habit to run the following commands first. These will check if Homebrew is all up to date and running the latest versions.

```bash
brew update
brew doctor
```

### Installing PHP 7.4 with Homebrew

In my case, I wanted to install PHP 7.4 since it's the version our server is running.

To install a specific version, we can use the @ notation.

```bash
brew install php@7.4
```

This will run the installer, and it should end with a success notice in your terminal.

However, even though this installed PHP, it didn't change our running instance yet.

So if we run the `php -v` command, we might still see a different version like `PHP 7.3.14 (CLI)` or whatever you have installed.

To fix this, we need to link the correct PHP version.

## Switching PHP Versions with Homebrew on Mac

Now that we installed versions, we can easily switch between them using the `link` command.

First, check which version of PHP is currently running:

```bash
php -v

# PHP 8.0.1 (cli) (built: Jan  8 2021 01:27:28) ( NTS )
# Copyright (c) The PHP Group
```

Then we can unlink that version by using:

```bash
brew unlink php@8.0
```

The next step is to link the version we want:

```bash
brew link php@7.4
```

It will tell you to run a script to add the path:

```bash
echo 'export PATH="/opt/homebrew/opt/php@7.4/bin:$PATH"' >> ~/.zshrc
```

This will make sure the right PHP version is loaded, now if you run `php -v` again it should show:

```bash
# PHP 7.4.14 (cli) (built: Jan  8 2021 01:35:35) ( NTS )
# Copyright (c) The PHP Group
```

And there we go. We switched to the PHP version.

## Php -v is still showing the wrong version

I had the issue when upgrading from 7.4 to 8.0 for my demo that I kept seeing 7.4 when running `php -v`. Remove the old line in your `.zshrc` file to fix this manually.

```bash
nano ~/.zshrc
```

Remove the line that points to your old instance of PHP.

```
export PATH="/opt/homebrew/opt/php@7.4/bin:$PATH"
```

> Note: This is an example of my version. It might differ from what you installed before.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
