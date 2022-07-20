---
layout: ../../layouts/Post.astro
title: 'Undo wrong Git changes'
metaTitle: 'Undo wrong Git changes'
metaDesc: 'Made a mistake in your Git changes? No worry, we can fix that'
ogImage: /images/30-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/2b888938-c9ba-4ed5-ce25-a2b3468cf900
date: 2022-07-30T03:00:00.000Z
tags:
  - git
---

The other day I got a lovely email from one of my readers asking how to revert a commit that was made wrongly.
I looked back at my articles and realized I haven't ever noted this down, so here we go.

We'll be looking at a couple of levels of changes. Each one required a slightly different approach.

- You have not yet committed the changes
- Undo a commit that has not been pushed
- Undo a pushed commit

> Note: This article describes the commands. Most GUI's have a visual integration for these commands.

## Undo changes that you haven't committed in Git

It could happen that you have made some changes, but then you quickly realize that you did something that isn't right and should be reverted.

> Note: you can use `git status` to see all open changes

Take the file name of the file you want to revert and execute the following command.

```bash
git checkout filename.extension
```

This command will revert the file to what it used to be.

You can see an example below where I changed the `astro.config.mjs` file and reverted those.

![Undo changes in Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1658296110820/HymuT7wgt.png)

## Undo a commit that has not been pushed

Perhaps you got to the point where you already committed the changes.
Luckily you didn't push them yet.

This could have various reasons. Perhaps you noticed you didn't include all files, or you missed a chance.

Run the following command to revert the last commit.

```bash
git reset --soft HEAD~
```

> Note: You can specify multiple commits by placing a number at the end.

For instance, if we want to undo the last two commits, we can run the following command.

```bash
git reset --soft HEAD~2
```

You can see an example below where I committed two changes, then reset my commit so I could make changes again.

![Undo committed changes in Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1658296447755/xrpVeFjG6.png)

## Undo an already pushed commit

This one is the most common scenario and also the messiest.
You have committed and pushed code to Git.

Note that the option described below does _not_ remove the previous commit. It simply reverts it to what it was.

Step one is to ensure that you are on a clean working directory. You shouldn't have any open new changes.

Then you'll need to find the hash for the specific commit you are trying to undo. You can find them on your online Repo (like GitHub, for instance).

![GitHub commit hash](https://cdn.hashnode.com/res/hashnode/image/upload/v1658296712558/pTbQU65Fc.png)

Take this hash and then head back over to your terminal.
You can now revert this commit by executing the following command.

```bash
git revert f193a76 --no-edit
```

> Note: The `--no-edit` is optional. It won't prompt you to edit the commit message that way

Once executed, you'll note that it will do the opposite of the commit locally.

The command will return the files to what they used to be before.

Now all that's left is to push the reverted code.

```bash
git push
```

When you view your changes, you'll see the old commit is still there, but a new revert commit replaces the changes.

![Git revert pushed commit](https://cdn.hashnode.com/res/hashnode/image/upload/v1658296996486/ZcHtwrn-O.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
