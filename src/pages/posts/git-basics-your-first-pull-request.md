---
layout: ../../layouts/Post.astro
title: 'Git basics: Your first pull request'
metaTitle: 'Git basics: Your first pull request'
metaDesc: 'How to handle and perform pull requests in GitHub'
image: /images/08-11-2021.jpg
date: 2021-11-08T03:00:00.000Z
tags:
  - git
---

Pull requests are a vital part of using Git. This article will look at making a pull request for our repository.

You should have a good understanding of how pull requests work and the steps needed to take.
After this, we can look into creating pull requests for external repositories.

## Making our feature

A pull request is a way to notify other people that a feature is done and ready to be merged into another branch.

You'll create a pull request; generally, another developer will review your code and give you comments on the code.

Let's take the demo project we just created. It's a plain simple empty git project.

Let's add a new file to it called `index.js`.

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Helo World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

This is just a super simple node server. It doesn't matter for this example. I did make a typo. (Did you spot it?)

Let's [commit and push these changes to a new branch](https://daily-dev-tips.com/posts/git-basics-branches-and-strategies/).

```bash
# Create a new branch
git checkout -b feature_node

# Add changes
git add .

# Commit the code
git commit -m "Added a node server"

# Push to the branch
git push origin feature_node
```

If we head over to GitHub, we can see the branch there, and GitHub is already asking us if we want to create a new PR with this branch.

![GitHub PR button](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399359193/VDWrz1bEt.png)

## Creating the pull request

Click that green button to create a pull request.

A pull request always merges from one branch to another. In our case, we want to merge into the master branch.

You should add a descriptive title and some content about this pull request.

![Creating a pull request in GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399496152/UTE7NRdn-.png)

At the bottom, you can even see what files are changed to have a quick look to see if everything is fine.
If that's the case press the green button to create a pull request.

> Generally, you would assign one of your team members here.

The pull request is now created. It's up to your team member to evaluate what you made and add a review.

![Created pull request](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399602455/cd5sAVjI7.png)

You can also review it if you open the files changed tab.
You can click on lines or select some lines to write comments.

![Review a PR](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399692612/dijMZnE30.png)

Don't forget to press the start review button.
Once you are done with all the review items, you can press the "Finish your review" button to add a general remark and approval or change request.

![Pull request review](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399815717/7h8OYVQpF.png)

For your own PRs, you can only comment, but when reviewing someone else, you can approve/request changes.

You will now be prompted to add these changes in the PR overview.

![Review inside the pull request screen GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399890557/lB8QZA5x2.png)

Head back to your code and add the proposed change, after which you can resolve the issue and re-request a review.

Once the other reviewer approves your change, you can press this merge button, and the file will be merged into the main branch!

![Merge into a branch](https://cdn.hashnode.com/res/hashnode/image/upload/v1635399992645/CFH5Qp6uD.png)

I left this pull request open so you can view it on [GitHub](https://github.com/rebelchris/git-test/pull/1).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
