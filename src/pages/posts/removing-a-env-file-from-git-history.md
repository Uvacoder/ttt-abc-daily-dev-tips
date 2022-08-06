---
layout: ../../layouts/Post.astro
title: 'Removing a .env file from Git history'
metaTitle: 'Removing a .env file from Git history'
metaDesc: 'How to remove a file from git history altogether'
image: /images/10-11-2021.jpg
date: 2021-11-10T03:00:00.000Z
tags:
  - git
---
I'm sure this happens to everyone sometimes. You accidentally pushed a file with secrets or a password that shouldn't have gotten into the Git history.

In the following example, I "accidentally" pushed my `.env` file to Git simply because I forgot to [add it to me `.gitignore` file](https://daily-dev-tips.com/posts/git-basics-ignore-files-from-being-committed/).

![Removing a secret file from Git history](https://cdn.hashnode.com/res/hashnode/image/upload/v1635576880897/T3V0EKt1o.png)

> Note: If you accidentally pushed secret keys to a repo, you should always revoke them and generate fresh keys!

## Removing the file right away

The best thing to do now is to remove the file right away and add it to your `.gitignore` file.

In my case, I added the following to the `.gitignore`.

```
# Secret file
.env
```

Let's try and push that to see what happens.

![Gitignore doesn't work on existing files](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577020667/RI8Em9uCt.png)

Yep, the `.gitignore` file doesn't untracked already committed changes. So how can we fix this now?

## Removing a file from Git only

You can remove a file from Git by running the following command.

```bash
git rm -r --cached .env
```

If we then push this change, you will see that the file is gone in GitHub.

![Removing a file from Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577175978/MPGXB39KG.png)

However, this didn't completely solve our issue. If we look at our Git history, we can still find the file and expose the secrets!

![Exposing secrets through Git history](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577465128/VVukCpfUd.png)

## Completely remove a file from Git history

To remove the file altogether, we can use the following command.

```bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD
```

You will get some warnings about this messing up your history as this goes through your whole history and 100% removes its occurrence.

To push this, you have to run the following command.

```bash
git push --force
```

If we look at our history, we can still see the commits that include this `.env` file, but the content is empty.

![Fully removed file in Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577747098/p840Qj48P.png)

Few, thanks for having our back Git!

You can find the repo it tried this in on [GitHub](https://github.com/rebelchris/git-test).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
