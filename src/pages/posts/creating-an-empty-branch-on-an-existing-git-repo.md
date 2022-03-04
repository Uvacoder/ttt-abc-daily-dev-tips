---
layout: ../../layouts/Post.astro
title: 'Creating an empty branch on an existing git repo'
metaTitle: 'Creating an empty branch on an existing git repo'
metaDesc: 'Creating a completly empty git orphan branch'
image: /images/14-11-2021.jpg
date: 2021-11-14T03:00:00.000Z
tags:
  - git
---

Sometimes you need a separate empty branch for your project.
In my case, because I'm going to switch frameworks. And it's easier to start with an empty repo and work my way up from there.

This repo should have nothing in it, and if it has no git history, that's a win!

## Introducing git orphan branches

For this purpose, we can use orphan branches.
These branches are created with nothing in them, as they are orphaned from their ancestor.

Let's go through this process on our existing git test project, which you can find [here on GitHub](https://github.com/rebelchris/git-test).

![Git branch with files and history](https://cdn.hashnode.com/res/hashnode/image/upload/v1635918397239/BVfj0dfXI.png)

As you can see in the image, it has some files and a commit history here.

From our terminal, navigate to the root of this project.
You can run the following command to create an orphan branch.

```bash
git checkout --orphan version-2
```

We need to remove all files that might have been staged in this process by running the following command.

```bash
git rm -rf .
```

Then we have two options. We could add a new readme file or push an empty commit.
You already know the steps for a readme, so let's try out an empty commit.

```bash
git commit --allow-empty -m "Starting a new version"
```

And then we can push this new branch.

```bash
git push origin version-2
```

![Fully empty git orphan](https://cdn.hashnode.com/res/hashnode/image/upload/v1635918638195/f-CU0lTxu.png)

As you can see, this branch is empty and has no git history!
This is a perfect way to get started on a new framework or complete rework of your application.

You can view the branch on [GitHub](https://github.com/rebelchris/git-test/tree/version-2).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
