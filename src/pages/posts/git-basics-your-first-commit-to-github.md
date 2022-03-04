---
layout: ../../layouts/Post.astro
title: 'Git basics: Your first commit to GitHub'
metaTitle: 'Git basics: Your first commit to GitHub'
metaDesc: 'Creating a new git repo and pushing to GitHub a walkthrough'
image: /images/05-11-2021.jpg
date: 2021-11-05T03:00:00.000Z
tags:
  - git
---

Now that we have a basic introduction into [what Git is](https://daily-dev-tips.com/posts/git-basics-what-is-git/) and [how GitHub works](https://daily-dev-tips.com/posts/git-basics-what-is-github/), let's make our first ever git repo and push it to GitHub!

Yes, we'll be doing all of that today.

The result is a repository on GitHub that you or someone else can use to keep track of your software.

## Initialise a git repository

A repository is a folder on your system. But that folder isn't aware it should be a git repository yet.

Let's change that. First make a testing folder on your local machine. I'll name my `git-test`.

```bash
mkdir git-test && cd git-test
```

The above commands will create a folder and navigate to that folder. You can run these commands in your terminal.

To initialize a new git repo, run the following command in that folder.

```bash
git init
```

We should see a response as follows.

![Git init succesfull](https://cdn.hashnode.com/res/hashnode/image/upload/v1635139826200/T9C1b4J8-.png)

From now on Git will keep track of changes and files we add, which is amazing!

## Adding files to the repository

Let's add a simple `README.md` file to our repository. You can use an editor for it.

Inside of this file I placed the following markdown to test with.

```md
# Hello GitHub
```

We can now check if Git tracked this change by using the status command.

```bash
git status
```

![File is changed, but not tracked in Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140058934/flKgWl9DX.png)

As you can see, the status mentions that the readme file is new or changed but isn't tracked yet.

To add a single file to Git we can use the `add` command like so:

```bash
git add README.md
```

You can also add all open files by using a `.`.

```bash
git add .
```

If we run the `status` command again, we should see that the readme file is now tracked.

![Adding a file to Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140201076/qHqJ1FOb8.png)

## Commit changes

This change is now tracked but not committed as a specific commit.
A commit is like a moment in time for your code, so let's say this is now the truth. We can commit this to Git to make it captured.

Committing can involve multiple files at once. It's not limited to every single file.

Run the `commit` command.

```bash
git commit -am "Describe your commit"
```

Let me explain some of the parameters here:

- `-a`: Means to commit all changes in the working directory
- `-m`: Pass a message as the commit message
- `"MSG"`: The text there is your commit message and should describe what you have done

![Git commit changes](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140522265/Y5gz-82JE.png)

If we would now rerun the status, we would see nothing is outstanding.

![Git status clean](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140568723/O4PCISf-sd.png)

By now, we can keep track of any changes locally, which is a great start. But the real thing we want to achieve is to keep track of it in a distributed system like GitHub.

## Add GitHub as a remote

Head over to [GitHub](https://github.com/new) and create a new repository.
Give this repository a descriptive name of your project.

![GitHub create new repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140706164/ql8FvPeN7.png)

Once that's done, you enter the empty repo on GitHub.
It has all the information we need, as we will be following the second paragraph of example code.

![GitHub empty repo description](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140780469/XtUegZPbD.png)

Head back to your terminal in the project folder we are working on.

Execute the following command you just got from GitHub. (Make sure this is your repo URL)

```bash
git remote add origin git@github.com:rebelchris/git-test.git
```

There is no real feedback for this step.

In the above step, we add a remote with the name `origin`. You can name this differently, but the origin is the default and most common one.

## Push git changes to GitHub

The last step we want to do is to push our code to GitHub.

Doing this will keep track of the changes we made and all the files we added.

To push to GitHub as we just set up, we need to run the following command.

```bash
git push origin master
```

Here we tell git to push to our `origin` remote on the `master` branch.

![Git push command feedback in terminal](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141007135/FTbA_6bxR.png)

And if you now head over to GitHub, you should see your code and commit show up there.

![GitHub showing our project code and commit](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141058782/phQ7q1_KHe.png)

## Making changes and committing them

Let's take some time to explore further how this works.

Modify the readme file and include some more content.

```md
# Hello GitHub

Hi GitHub, I'm Chris, and I just pushed code to you.
```

In the same breath, add another file to see how it works with multiple files.
I created a simple `test.txt` file and added some words to it.

Now let's follow the above steps again.

1. **Add the files**: `git add .`
2. **Make a new commit**: `git commit -am "Changed readme, added test file"`
3. **Push the changes**: `git push origin master`

![Git steps to commit new changes](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141302146/jhWHiUEyY.png)

And now we see our new file and second commit show up in GitHub.

![GitHub new commit](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141331443/I6SSQKhUQ.png)

I hope you enjoyed this article and made your first ever Git to GitHub experience!

You can find my demo project on [GitHub](https://github.com/rebelchris/git-test) if you want it as a reference.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
