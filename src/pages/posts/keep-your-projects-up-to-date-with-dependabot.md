---
layout: ../../layouts/Post.astro
title: 'Keep your projects up to date with Dependabot'
metaTitle: 'Keep your projects up to date with Dependabot'
metaDesc: 'Mainting projects and doing security updates are essential, Dependabot can help you with this.'
image: /images/20-02-2021.jpg
date: 2021-02-20T03:00:00.000Z
tags:
  - git
---

Dependabot is a super fantastic tool that can check your GitHub projects for any dependencies that need updating.

It looks for multiple things, including security issues, compatibility, and more.

As developers, we should all be wanting to keep up dependencies up to date, but as many will know, it's hard work. Especially projects that you build a year ago and are not actively updating.

Dependabot does a lot of this work for us. It can even go as far as making a PR for us! How much easier do you want your life to be?

![Dependabot pull request in GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1613368349438/X4Iq2bmA-.png)

## Setting up Dependabot

Now for the cool part, Dependabot doesn't need any fancy setup scripts or hard to understand installations.
Even better, it's built into GitHub!

On GitHub, visit your settings page, and click the Security & analysis tab.

This is where you can enable Dependabot.

![Dependabot settings in GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1613368490192/9S_v78tfi.png)

> Note: You can also switch to your team and enable Dependabot for team repos!

You will see a couple of options here:

- Dependency graph: This shows a graph of dependencies based on your package.json, composer.json, etc. (This is by default enabled for public repo's).

You can find the dependency graph on your repo -> Insights -> Dependency graph:

![GitHub dependency graph](https://cdn.hashnode.com/res/hashnode/image/upload/v1613368836649/jnqrDWIge.png)

- Dependabot alerts: This function will send you notifications if any of your dependencies have a vulnerability and needs updating. (You'll also get emails and notifications for these)

![GitHub dependabot alerts](https://cdn.hashnode.com/res/hashnode/image/upload/v1613368945320/V9EAzVmOh.png)

- Dependabot security updates: My favorite function, since it can update non-vulnerable dependencies itself! It will still create PR's for you.

![Dependabot security updates](https://cdn.hashnode.com/res/hashnode/image/upload/v1613369254893/HpkYRuFmL.png)

## Conclusion

Dependabot is an essential part of the development pipeline to ensure projects stay safe and are not exposed to vulnerabilities.

I would strongly urge you to enable Dependabot for your team and personal account if you haven't done it already.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
