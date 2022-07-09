---
layout: ../../layouts/Post.astro
title: 'Git basics: Changing your last commit message'
metaTitle: 'Git basics: Changing your last commit message'
metaDesc: 'How can we change the last commit message in Git?'
ogImage: /images/19-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/feda1e7a-a19c-4f97-09d1-499a7d462300
date: 2022-07-19T03:00:00.000Z
tags:
  - git
---

You might accidentally make a typo while writing your commit message.
Or because you quickly tried to solve a bug, you accidentally left the old commit message and pushed that.

It's a good practice to keep the message meaningful, so you'll know what you change in which commit.

I made a wrong commit message on my GitHub repo to showcase how it works.

![Wrong git commit message](https://cdn.hashnode.com/res/hashnode/image/upload/v1657347172860/0cIuhVSKI.png)

In the image above, we see I committed some changes with the message: "fix: image name wrong message".

Let's see how we can fix that.

## Fixing a non-pushed commit message

If you haven't pushed your code yet, it's easier to fix.

You can run the following command.

```bash
git commit --amend
```

This will open up a vim editor where you can change the commit's message.

![Editing wrong commit message](https://cdn.hashnode.com/res/hashnode/image/upload/v1657347525992/wcl3WPzrY.png)

To edit the text, press the `i` key, and to stop, press `esc` then `wq` to save the file.

However, a faster way is to use the `-m` property, which can be used to amend the commit message.

```bash
git commit --amend -m "fix: image name correct message."
```

We can see the commit message altered without pushing a new commit.

![Altered commit message](https://cdn.hashnode.com/res/hashnode/image/upload/v1657347670214/I9lgb4_pn.png)

## Fixing a pushed commit message

However, what happens if we already pushed the wrong message to GitHub, for instance.

![Wrong commit message on GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1657347913051/lGc_stSHQ.png)

No worries, we can still fix it without messing things up.

If we are addressing the last commit, we can again run the following command:

```bash
git commit --amend -m "fix: image name"
```

The next step is to push while overwriting the previous commit message.
For that to work, use the following command:

```bash
git push --force-with-lease origin your-branch

# in my case:

git push --force-with-lease origin master
```

And that's it. We now changed the already pushed commit message.

![Changes pushed commit message on GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1657348741134/V2WVkoM_K.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
