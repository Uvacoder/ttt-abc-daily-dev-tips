---
layout: ../../layouts/Post.astro
title: "Don't overcomplicate git 🙇‍♂️"
metaTitle: "Don't overcomplicate git 🙇‍♂️"
metaDesc: 'Use visual tools to commit your code'
image: /images/11-10-2020.jpg
date: 2020-10-11T03:00:00.000Z
tags:
  - developer
---

I recently talked to someone who was confused by git commands in the terminal, and it was not working.

I again was confused about why this person was trying to push a simple commit using terminal commands?

Call me lazy, but there are visual tools to do just this for you.

In this case, the person wasn't aware of these, so I'm writing this article.

> Use the right tools for the right job.

Don't get me wrong, I can commit and do a lot of stuff with the git terminal commands, but why not leverage visual interfaces?

Today I'll show you two ways to create commits without opening your terminal!

> Note: The article is based on Mac. There might be a difference in the Windows interface.

## 1. Using Visual Studio Code

My goto editor [Visual Studio Code](https://daily-dev-tips.com/posts/top-10-visual-studio-code-extensions-you-need-to-install/) comes with a build-in git interface, and it's so simple to push and commit code.

Let me show you how it works.

### Step 1. Finding the git window

To find the git window click the "tree" icon on the left. You will see all your changes that haven't been committed yet.

![Git window in Visual Studio code](https://cdn.hashnode.com/res/hashnode/image/upload/v1601806860751/ZPs4ahsfR.png)

Here we see all our changes that are not yet committed.

### Step 2. Selecting files to commit

You can either commit all files (default) or choose which files you want to commit.

I'll only commit the files that need to go live in my case.

Click the little plus if you hover a file.

![Stage changes](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807004601/ALvVOYlPb.png)

Once we clicked this plus, it will look like this.

![Stages vs. unstaged](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807040729/4hnRZul0W.png)

Only the top two files will be committed now. The other ones will stay on our local machine for now.

### Step 3. Writing the commit message

In the box up top, you'll see "message" this is where you write the commit message.

![Commit message](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807144544/a2zw5r5A8.png)

### Step 4. Commit your changes

Ok, now it's time to commit. There are two ways of doing that.

1. Click the checkmark icon
2. Or click the three dots -> Commit -> Commit

![Commit code](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807273558/YZt8h4qE7.png)

### Step 5. Pushing the commit

The last step in this process is to push the commit we just did.

Click the three dots again -> Commit -> Commit

![Commit in Visual Studio](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807361188/WX3_sM4qb.png)

That's it. We now did a visual commit to GitHub via Visual Studio Code.

## 2. Using the GitHub app

Another way to do this is by using the GitHub app, which has a similar experience.

[Download the GitHub desktop application](https://desktop.github.com/) first.

### Step 1. Selecting the repo and files to commit

First, make sure you're on the correct repository, or add it by browsing for the folder on your machine.

Then select the files you want to commit (Default is all)

![GitHub Desktop](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807690265/81ik6Tags.png)

### Step 2. Writing the commit message

We can then add our commit message and even add a description.

You see the little commit box at the left bottom of the application.

![GitHub desktop commit message](https://cdn.hashnode.com/res/hashnode/image/upload/v1601807828713/Mu5LT8hQn.png)

### Step 3. Commit the files

The next step is to commit the files.

Click the big button at the bottom.

Once you click that, the commit will be set. You'll see the number of commits on top now.

![Commit in GitHub desktop](https://cdn.hashnode.com/res/hashnode/image/upload/v1601808010609/4skuhzAM5.png)

### Step 4. Push the commit

Now we can click the button up top to push the actual commits.

You can push multiple commits at once.

![Push commit in GitHub desktop](https://cdn.hashnode.com/res/hashnode/image/upload/v1601808091855/ldVVByXZQ.png)

That's all. We now saw two ways to commit using a visual interface!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
