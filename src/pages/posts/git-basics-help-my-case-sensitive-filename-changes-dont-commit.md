---
layout: ../../layouts/Post.astro
title: "Git basics: Help my case-sensitive filename changes don't commit"
metaTitle: "Git basics: Help my case-sensitive filename changes don't commit"
metaDesc: 'How to commit case-sensitive changes to Git'
image: /images/22-11-2021.jpg
date: 2021-11-22T03:00:00.000Z
tags:
  - git
---

We have a file called `timezone.js`, and we commit this file to Git. All good and well.

![File added to Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608305170/AocvoV9oC.png)

But then we realized the whole repo used "time zone" with a space.

> Apparently, there are three correct spellings of timezone: timezone, time zone, and time-zone.

With this in mind, we might want to uniform our file system and rename this file to `timeZone.js`. Let's go ahead and make that change.

![File changed to git change](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608448886/ZHwTJEZyy.png)

I renamed the filename in the above image but only changed the case sensitivity.
Git doesn't pick this up.

So how can we commit this filename change?

## Committing a single filename change

If it's just one file, running the following command is the easiest way to do this.

```bash
git mv timezone.js timeZone.js
```

This means `move` and can be used to move or rename a file.

![Change detected in git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608602476/wdxvFeHF3.png)

You can now commit and push this change, and it will reflect in Git as well.

## Handling multiple case-sensitive file changes

If you do changes on more than one file, you can use option one to do all of them by hand.

Or you can follow the following steps.

1. Remove all of git cache

```bash
git rm -r --cached .
```

This command will remove the Git cached version of all files/folders in this directory.
You will see all files in your git changes, but don't worry. The next step will fix it.

![Remove git cache](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609080967/CNJjyme_5F.png)

2. Re-add current status

```bash
git add --all .
```

This command re-adds all the files, making only the ones with changes appear.

![Case sensitive file git commit](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609143536/iFN7mgFst.png)

You can now go ahead and commit and push this change to reflect on Git.

![Case sensitive file committed](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609214613/-xa9Wsw8q.png)

## So what about folders?

I've added a folder called `folder` to my git repo.

![Folder pushed to Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609324779/-EKvAikfP.png)

And now let's rename it to `Folder`.

Again, this change is not picked up by Git as we saw with the file.

So let's try option one:

```bash
git mv folder Folder
```

This hits us with the following message:

```
fatal: renaming 'folder' failed: Invalid argument
```

> This only happens on case insensitive systems like Mac.

As a fix for this option, we could run the following command.

```bash
git mv folder tmpFolder && mv tmpFolder Folder
```

This will work since we first rename it to something completely different.
Then rename it back but with the correct case sensitivity.

But let's try option two to see what happens.

```bash
git rm -r --cached .
git add --all .
```

![Capital folder](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609864331/Q9IMtb2_d.png)

And it worked! So, the safe bet is always to use the remove cache function.

There are some other ways of doing this as well.
What is your preferred way of renaming a case-sensitive file/folder in Git?

You can find my test on the following [GitHub repo](https://github.com/rebelchris/git-test/tree/timezone).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
