---
layout: ../../layouts/Post.astro
title: 'Git basics: Branches and strategies'
metaTitle: 'Git basics: Branches and strategies'
metaDesc: 'Using GitFlow and creating branches in Git'
image: /images/07-11-2021.jpg
date: 2021-11-07T03:00:00.000Z
tags:
  - git
---

Branches are an essential part of using Git. You can view a branch as separate versions of your project.

Generally speaking, it's a good thing always to have these two branches in place:

1. **master**: (main) This is the production version of your project
2. **development**: The testing version of your app

Besides these branches that are always there, you might encounter some other branches.
These other branches depend on the type of issue they solve.

## Branches for critical hotfixes

Your project is live, but you realized a typo or a minor styling issue.
It's always something that needs to be solved right away.

These hotfix branches can be merged directly into the master branch; however, don't forget to merge them into development to keep up to date.

## New features

More often, you'll be making new features. This could be a small feature or a bigger feature that might take a while to create.

In either way, you'll be using multiple feature branches. Each feature should be as small as possible, so it narrows down what that branch does.

Once you are finished with a feature, it should be merged into the development branch for testing purposes.

The testing should always be done on the individual/development branches. Once the tests are good and happy with the results, you can merge development into master.

If you want to be super fancy, you can introduce release branches. (For me, that's not a super high need)

## GitFlow

With this, we have something called a GitFlow.

This workflow created by [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/) describes the flow that should be taken when developing using Git.

This is an opinionated flow, but I've seen this success in a lot of different companies. Hence it's always the flow I choose for my projects.

See below for a visual representation of the model.

![GitFlow model](https://cdn.hashnode.com/res/hashnode/image/upload/v1635313947207/RULXcQpfO.png)

## How to create branches

This might all sound cool to you, and you have a good understanding of [committing code to Git](https://daily-dev-tips.com/posts/git-basics-your-first-commit-to-github/).
But we haven't used any branches other than the master branch till now.

Let's open up our project and create a development branch from whatever we have now.

```bash
git checkout -b development
```

This will create a new branch called `development`.

We can, however, also create a new branch of specific other branches.

```bash
git checkout -b feature_1 development
```

These branches will still be local and not pushed to GitHub.

To push a different branch, you can use the following command:

```bash
git push origin development

git push origin feature_1
```

And if we then go over to GitHub, we should see two new branches show up.

![GitHub multiple branches](https://cdn.hashnode.com/res/hashnode/image/upload/v1635314408871/gxYjCSid8.png)

Just be aware of which branch you are working on.
You can always switch to another branch by using the `checkout` command.

```bash
git checkout master
```

This command will reset you to the master branch. You can use any branch name instead of master.

And that wraps up branches in Git. I hope you learned something about Gitflow and how to make your first own branch.

You can view my [branches on GitHub](https://github.com/rebelchris/git-test/branches).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
