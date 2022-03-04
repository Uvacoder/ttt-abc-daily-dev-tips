---
layout: ../../layouts/Post.astro
title: 'Git basics: What is Git?'
metaTitle: 'Git basics: What is Git?'
metaDesc: 'Lets explore Git, what it is and how it works'
image: /images/03-11-2021.jpg
date: 2021-11-03T03:00:00.000Z
tags:
  - git
---

**Statement:** Git is the most powerful tool in modern development.

It doesn't matter in what language you develop.
If you work on any development, you need Git!

Let's have a look at what Git even is and why it's so important.

This is a series around Git, Git commands, GitHub, and more ❤️

## What is Git?

Git is a free open source VCS (Version Control System), which means it's a way to keep track of every change in your software.

There are more VCS in existence like CVS, SVN, and more. However, Git is by far the most used one.

You can even use Git locally on your computer to keep track of changes you make throughout the code.
This is a great way to maintain a good overview of certain things that break over time.

## Why do I need Git?

But far more important is that it can be distributed, meaning you can host your Git repository on an external system like GitHub, GitLab, etc.

When you do this, you can give other developers, colleagues, teammates the option to develop asynchronous with you and see the changes you have made.

This makes Git a perfect system for developers to collaborate and work together on one codebase.

Within this series, we'll also look at branching, merging, and all those fancy terms which make Git even more powerful!

## A Git use case

To conclude the important, let's take a look at how things were before Git.

Chris would have some large project he is maintaining. Then Paul also wanted to work on the system.

Chris would have to put his system on an FTP, USB or transfer it via a link.

Paul would then start working, but during this time, both Chris and Paul might have changed the same file, but in a slightly different way.

By the time they are both done, the files will be shared back again, but which file is the right one now?
There should be some combination, right!

Well, that's a massive problem.

With Git, this would have been prevented as Paul would have been able to get the codebase from a distributed Git provider, and Git would have kept track of all changes.

When both would need to merge the code, Git would tell them which lines are conflicting.

A lifesaver, thank you, Git!

## How to install Git?

Git is super easy to install on any system. I've written down how to install Git for the following platforms:

- **OSX**: `brew install git`
- **Windows**: [Download the installer](https://gitforwindows.org/)
- **Linux (apt)**: `sudo apt-get install git`
- **Linux (yum)**: `sudo yum install git`

Once you follow these steps, run the following command to check if Git is installed correctly:

```bash
git --version
```

It should return a specific Git version like: `git version 2.33.0`.

## Summary

Git is a free and open-source way to keep track of your code changes.
Git is also a way for multiple developers to work on the same code base in an asynchronous manner.
Git can be used locally, but the real power lies in a managed solution like GitHub, GitLab, etc.

I hope you learned the importance of Git. Keep an eye out for the next article in this series! 👀

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
