---
layout: ../../layouts/Post.astro
title: 'PM2 Startup script, always keep processes running'
metaTitle: 'PM2 Startup script, always keep processes running'
metaDesc: 'PM2 can automatically startup node process on Linux systems'
image: /images/22-06-2021.jpg
date: 2021-06-22T03:00:00.000Z
tags:
  - nodejs
---

I briefly introduced [PM2, a process manager for Node scripts](https://daily-dev-tips.com/posts/why-pm2-is-the-process-manager-youre-missing/). However, there is one big thing we didn't cover yet, and that's startup scripts.

These are PM2 scripts we can generate, so the processes running will restart themselves on an unexpected reboot of your server.

Before a server rebooted for software updates, we had this issue, but our node-driven websites would not start automatically.
This is where PM2 startup scripts shine.

## Generating a PM2 startup script

To generate a startup script for PM2, we can run this command.

```bash
pm2 startup
```

Running this will return the following:

```
[PM2]
To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/Users/chrisbongers/.nvm/versions/node/v14.15.4/bin /Users/chrisbongers/.nvm/versions/node/v14.15.4/lib/node_modules/pm2/bin/pm2 startup launchd -u chrisbongers --hp /Users/chrisbongers
```

When you copy that line, you'll be done with this part!

If you ever need to redo the startup script fully, you can run `pm2 startup and then`pm2 startup` again.

## Saving all running PM2 processes

Make sure you have all the PM2 processes running you want on startup.

Now we can run:

```bash
pm2 save
```

This will create a `dump.pm2`, which will auto startup our scripts.

Now, whenever your server reboots, your processes will automatically restart as well 🤗.

If you ever need to reboot all processes manually, you can execute the following command.

```bash
pm2 resurrect
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
