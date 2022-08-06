---
layout: ../../layouts/Post.astro
title: 'Creating a discord auto threading system'
metaTitle: 'Creating a discord auto threading system'
metaDesc: 'Creating a bot on discord that automatically created threads for every post'
image: /images/11-01-2022.jpg
date: 2022-01-11T03:00:00.000Z
tags:
  - javascript
  - discord
---

If you missed it, I launched a discord server for technical writers: [Technical Types Community](https://discord.gg/bfnmNMCTSJ).

The idea of this server is to create a dedicated space for technical writers, where we can collaborate, share ideas and ask questions.

This is an open-source, free and welcoming community.

I introduced a channel to get feedback on your work with this community. However, the realization quickly was that feedback gets buried if there are a lot of comments.

Threads would be a fantastic solution. However, it's difficult to force and monitor this behavior.

That leaves us with only one choice: Automate it!

![Automate all the things](https://cdn.hashnode.com/res/hashnode/image/upload/v1641093383809/xByZ1tpZK.jpeg)

## Making sure people can't spam the main channel

The first thing we need to take care of is to make sure people can only post one link per x hours.

Luckily for us, discord comes with this feature built-in, and it's called "slow mode" this allows a user to only post once per x hours on the main thread.

This is no longer applicable in the threads created, so ideal for what we want to achieve.

To enable slow mode for a channel, click the little gear icon next to the channel's name.

![Edit channel in discord](https://cdn.hashnode.com/res/hashnode/image/upload/v1641093668608/3Te80oZ58.png)

Then you want to set the slow mode slider to the max (6 hours).

![Slow mode enabled in discord](https://cdn.hashnode.com/res/hashnode/image/upload/v1641093754940/bGMMVLi3L.png)

This setting will ensure a user can only send one message every 6 hours on the main channel.

## Creating the auto threader bot

We want to ensure a thread is created for every post on this channel.

We won't be building this bot from scratch as a super awesome one already exists.

It's this [Discord needle bot](https://github.com/MarcusOtter/discord-needle).

However, I did make my version of this because I wanted it to work with `.env` variables.

Markus made some changes to his one based on my feedback, and you can use his `custom-config` branched version at the point of writing this.

To use my version, you must create a `.env` file that includes the following two variables.

```
API_TOKEN={DISCORD_API_TOKEN}
CHANNEL={CHANNEL_ID}
```

### Find the channel id

To find the discord channel id, you must enable developer mode in discord.

Click your user profile settings by clicking on the gear icon next to your profile.

![User settings in discord](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094151122/izpMDIHLX.png)

Then you can find the "Advanced" menu and toggle the developer mode on.

![Developer mode in discord](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094215732/X_q5nfDy1.png)

Once this is on, you can right-click any channel and click the "Copy ID" option.

![Discord copy channel ID](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094288763/K_cR_ehDk.png)

### Creating the discord bot

We have to create the discord bot by visiting the [Discord Developer portal](https://discord.com/developers/applications).

Create a new bot by clicking the "New Application" button.

Once you've done this, click the "Oauth2" item.
Select "Bot" as the scope and check the following permissions.

- View channels
- Send messages
- Send messages in threads
- Create public threads
- Read message history

![discord bot settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094693993/WfrqSarqM.png)

Click the copy button at the bottom and paste this into a new tab.
This will prompt a setup for this bot.
Select the server you want to add this bot to.

![Adding the discord bot](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094750090/9PYPMpfM6.png)

### Running the bot

Now it's time to run your bot.
To test the bot, you can run the local version using `npm start` in the project.

Or you can follow my guide on [running a bot on Railway app](https://daily-dev-tips.com/posts/hosting-a-discord-bot-on-railway/).

## Try it out

You should now post on this channel, and a thread will be automatically created for you!

![Auto threader bot in action](https://cdn.hashnode.com/res/hashnode/image/upload/v1641094965254/cBbNb8gOm.png)

Or even better, you can try it in real life on the [Technical Typers Discord server](https://discord.gg/bfnmNMCTSJ)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
