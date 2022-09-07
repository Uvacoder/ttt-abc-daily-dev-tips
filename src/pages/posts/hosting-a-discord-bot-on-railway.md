---
layout: ../../layouts/Post.astro
title: 'Hosting a discord bot on Railway'
metaTitle: 'Hosting a discord bot on Railway'
metaDesc: 'An easy solution to hosting your discord bot for free'
image: /images/10-01-2022.jpg
date: 2022-01-10T03:00:00.000Z
tags:
  - javascript
---

Now that we have our super cool [discord bot that can respond to our slash commands](https://daily-dev-tips.com/posts/show-and-hide-a-header-based-on-scroll-direction/), we need a way to host it.

Until now, we just used it by starting a local node instance, which means the process stops every time we close our computer.

Because I'm Dutch, I went the cheapskate way and found this fantastic hosting service called [Railway](https://railway.app/). Their free tier ($5 a month) is enough to host a simple discord bot.

In this article, I'll guide you through setting this up.

## Hosting a discord bot on Railway

Make sure you log in with your favorite social provider.
Then we can click the `New Project` button to add a new project.

![New project on Railway app](https://cdn.hashnode.com/res/hashnode/image/upload/v1641011337459/aj2I65Ezc.png)

They then provide fantastic options we can choose from (including databases).

We will choose `Deploy from repo` from the options.

![Deploy from repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1641011423144/yg6n60C8E.png)

Select the git project from the select field. Once this is done, click the `Add Variables` button and add the variables you used.

![Add variables to Railway app](https://cdn.hashnode.com/res/hashnode/image/upload/v1641014541624/VdFcsuWyT.png)

In the case of the slash command bot, you will need the following two:

```
APP_ID={APPLICATION_ID}
TOKEN={YOUR_BOT_TOKEN}
```

Once you've added them click the create button, it will take a minute to set up, and you should see the logs for what's happening.

And once this is done, your bot is already up and running!

Yes, it can be that easy 🤯.

Big shoutout to the Railway app for making this possible and so simple.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
