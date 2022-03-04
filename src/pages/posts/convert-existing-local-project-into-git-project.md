---
layout: ../../layouts/Post.astro
title: 'Convert existing local project into git project'
metaTitle: 'Convert existing local project into git project'
metaDesc: 'How to turn a local folder into a git versioned project and push to GitHub'
image: /images/03-01-2021.jpg
date: 2021-01-03T03:00:00.000Z
tags:
  - git
---

I'm pretty sure we've all been here at some stage, you have a local folder with a quick project. The project soon turns out to be pretty useful so you actually wanted version control on it.

So how do we convert this folder into a git versioned project and even push it to GitHub?

First of all, we should have this local project somewhere on our computer, for me, it's a folder called `local-gitter` which contains a very basic website.

![Local gitter folder structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1609219462023/hF-ige9Ha.png)

## Creating the GitHub project

Now let's head over to GitHub and create a new empty project.

![GitHub new project](https://cdn.hashnode.com/res/hashnode/image/upload/v1609219537088/pRlLTIUem.png)

On the next screen, you can fill out the name of your project, and add a description.

You can optionally choose to create it with a readme or gitignore file.

![GitHub new repo settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1609219585089/TfNBSGhH5.png)

Once we have this repository, it's important to note the URL.

![GitHub repo url](https://cdn.hashnode.com/res/hashnode/image/upload/v1609219674336/11rnWr03B.png)

## Pushing our existing files to this repository

Now let's open our [favorite terminal](https://daily-dev-tips.com/posts/getting-started-with-the-terminal/) and follow these steps

- Navigate to the project folder.
- `git init` (start new git project)
- `touch .gitignore` (add ignore the file, add files you don't want in git here)
- `git add .` or `git add ${all relevant files}` (the dot adds everything, else add all files you want in git)
- `git commit -m "first message"` (Make it a good message)
- `git remote add origin git@github.com:rebelchris/local-gitter.git` (change with your URL)
- `git push -u origin master`

> Note: The gitignore file is super useful to not push stuff like `node_modules` for instance, always make sure to add these in the gitignore.

And we are done, now if we head over to GitHub we should see all the files we just committed.

![GitHub with all our files](https://cdn.hashnode.com/res/hashnode/image/upload/v1609220191370/fMtix6xYe.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
