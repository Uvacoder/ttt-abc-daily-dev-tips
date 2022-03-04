---
layout: ../../layouts/Post.astro
title: 'An automated GitHub-Discord bot'
metaTitle: 'An automated GitHub-Discord bot'
metaDesc: 'Getting GitHub updates right in your discord channel with a bot'
image: /images/08-06-2021.jpg
date: 2021-06-08T03:00:00.000Z
tags:
  - developer
---

Today we are making a bot that will automatically update our discord channel with actions from GitHub.

I found it a nice addition to my workflow, where the whole team will get updates on the GitHub repo we are working on.

I know you can also set up the mails, but for some reason, it's almost easier getting them in Discord in that specific team channel.

## Making a discord webhook

We first have to own a discord channel to make this work, so go ahead and create one if you don't have one.

Then we should click the settings for that channel.

![Discord channel settings](https://d38f4b4ih4m51q.cloudfront.net/Screenshot_2021-06-05_at_08_27_10.png)

Next, we need to visit the Integrations section and make a new webhook.

![Discord create webhook](https://d38f4b4ih4m51q.cloudfront.net/Screenshot_2021-06-05_at_08_36_08.png)

We need to use the `Copy webhook URL` button to get the actual webhook.

![Webhook URL](https://cdn.hashnode.com/res/hashnode/image/upload/v1622875379486/Un5xCGTjZ.png)

## Setting up the events in GitHub

Now it's time to move over to GitHub to set up things on that side.
Open your project in GitHub and visit the settings page for that project.

Click the webhooks button on the menu.

![GitHub settings webhooks](https://cdn.hashnode.com/res/hashnode/image/upload/v1622875503852/hKE1QKmA1.png)

Create a new webhook and paste the URL you just got from Discord.

> Important: Add /github to the end of this webhook to omit errors

Set the content-type to `application/json`.
And choose which events you would like to receive.

![GitHub webhook settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1622875646924/LGv9zzAe9.png)

Now you can try it out by placing a comment, making a new push, or anything similar to that!

![Receiving GitHub actions in Discord bot](https://cdn.hashnode.com/res/hashnode/image/upload/v1622875780402/IrMtqyWYT.png)

And that's it. We now have our Github to Discord bot setup!
Super easy, right?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
