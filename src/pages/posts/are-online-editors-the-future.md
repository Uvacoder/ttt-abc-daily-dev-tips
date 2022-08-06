---
layout: ../../layouts/Post.astro
title: 'Are online editors the future?'
metaTitle: 'Are online editors the future?'
metaDesc: 'Lets look at online code editors and how viable they are in 2021'
image: /images/01-11-2021.jpg
date: 2021-11-01T03:00:00.000Z
tags:
  - developer
---

Recently Visual Studio Code also launched an online version of their editor. It is a lightweight version of the desktop application.

This is nothing new as GitHub has it built-in for their repos.

Let's have a look at these two options.

## GitHub VS Code editor in the browser

You can open any repository on GitHub and change the `.com` part of the domain to `.dev`.

Alternatively, you can press the `.` on any GitHub repo to open the online editor mode.

For instance, let's open the `daily.dev` repo in an online browser.

```
https://github.com/dailydotdev/apps
```

⬇️

```
https://github.dev/dailydotdev/apps
```

And we are welcomed by the entire repo as we would get in VS Code.

![Visual Studio code in GitHub repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1634792115043/-Mf0ZsyFa.png)

Pretty cool, right?
So what can we do with this?

- Review pull requests online with ease. You can press the `.` in a PR to open it for a more detailed overview in the editor.
- Super easy to search throughout the codebase. Yes, click-through works!
- It's super fast.
- Make changes and PRs directly online
- Extensions are available

All and all, it's a super powerful way to edit code.
The main downside is, of course, not being able to run it.

But for PR reviews, this is a good win!

### GitHub Codespaces

GitHub recently also launched GitHub Codespaces, a blazing fast cloud environment.
The look and feel are the same, but you are running on a VM.

The cool part about Codespaces is that you can run your code there.

![GitHub Codespaces](https://cdn.hashnode.com/res/hashnode/image/upload/v1634792515642/tPjH5b2_s.png)

This feature is only available to teams and organizations.
Visit the [GitHub Codespace website](https://github.com/features/codespaces) for more information.

## Visual Studio Code in the Browser

We recently got a new addition to the online editor family, being VS code themselves.

You can type `vscode.dev` in your browser to open a new editor, and a new editor will spool up.

The cool part is that this has wider use, as it can even load local files!

![Visual Studio Code in the browser](https://cdn.hashnode.com/res/hashnode/image/upload/v1634793147793/KGrV3MZu6.png)

It can also open GitHub links and even azure links!

You can take any link to those repos and prefix them with `vscode.dev`.

Some examples:

```
https://github.com/dailydotdev/apps
```

⬇️

```
https://vscode.dev/github.com/dailydotdev/apps
```

Or for azure dev:

```
https://dev.azure.com/daily-dev-tips/test
```

⬇️

```
https://vscode.dev/dev.azure.com/daily-dev-tips/test
```

Powerful if you ask me!

Some pro's of using the visual studio code one would be:

- Local file opening
- New projects from scratch, quickly share some project structure
- Azure dev-ops environment
- Again, many unique extensions are available

The downsides are, for now, no way to run and debug.

## What about the future?

We started this article by asking if these editors are the future?
And to be honest with you, I think it's very viable.

Our hardware becomes less and less critical (meaning whatever we have on it locally).

We can sign in to some online tools and take off from where we left.

This makes total sense in the current day and age.

There are some kinks to iron out for it to be entirely a solution on its own.
For me, those are:

Option to run docker images on the cloud (Codespaces/Vercel/etc)
Peer programming online 👀
Debug systems integrated

I'm sure these are even possible with some extensions, and very keen to see what this will bring over time!

How do you feel about these online editors?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
