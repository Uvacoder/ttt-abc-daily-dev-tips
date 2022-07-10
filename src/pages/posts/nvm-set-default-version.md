---
layout: ../../layouts/Post.astro
title: 'NVM set default version'
metaTitle: 'NVM set default version'
metaDesc: 'How to change your default NVM Node version'
ogImage: /images/20-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/19659e78-260b-4790-7dd2-d2edc2ff9500
date: 2022-07-20T03:00:00.000Z
tags:
  - javascript
  - nodejs
---

In a previous article, we learned about [NVM, a great way of managing multiple node versions on your machine](https://daily-dev-tips.com/posts/managing-multiple-node-versions-with-nvm/).

However, you might have most projects running on a specific version of Node.
In that case, setting your default NVM version to this Node version might make sense.

## Setting a default NVM version

To set the default NVM version, you first have to make sure that version is installed in NVM.

As a reminder, you can install a version like this:

```bash
nvm install 16
```

We can then run the following command to set this as our default version.

```bash
nvm alias default 16
```

Remember, this is one specific query on a version type you can install.
Some valid alternatives are:

```bash
nvm alias default 16

nvm alias default lts

nvm alias default 12.14.3
```

You can check which versions you have installed by running the following command.

```bash
nvm ls
```

This will return a list of all the versions you have installed already.

## Returning to the system version

Perhaps at one stage, you might want to change to whatever your system uses.

We can run the following command to do that:

```bash
nvm alias default system
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
