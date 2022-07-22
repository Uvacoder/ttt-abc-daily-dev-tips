---
layout: ../../layouts/Post.astro
title: 'GitHub basics: What are actions?'
metaTitle: 'GitHub basics: What are actions?'
metaDesc: 'What are GitHub actions and what can we use them for?'
image: /images/23-11-2021.jpg
date: 2021-11-23T03:00:00.000Z
tags:
  - git
---

Now that we have a broad understanding of [what Git is](https://daily-dev-tips.com/posts/git-basics-what-is-git/) let's dive deeper into some more specific topics.

IN this article, I'll explain what GitHub actions are and how you can use them.

I choose GitHub as the platform to highlight because I love to use it, and it's the biggest.

## What are GitHub actions

Actions are actions that take place on certain activities on GitHub. You can use these actions to automate specific tasks within your development cycle.

These actions can trigger specific events. Some examples might be: After each commit, when a new PR is created, etc.

Let's have a look at the high-level overview of an action:

- Event
  - Job
    - Step
      - Action

Let's go through these elements as they are pretty essential to understand.

### GitHub action event

The event is the actual trigger for the workflow. There can be multiple triggers for one action.

Let's say we want to trigger the action when a new push is made to:

```yaml
on: push
```

Or run the same action on multiple actions:

```yaml
on: [push, pull_request]
```

You can also use a cronjob as an event [I use this in my automated deployment process](https://daily-dev-tips.com/posts/deploy-eleventy-to-netlify-using-github-actions/).

```yaml
on:
  schedule:
    - cron: '0 4 * * *'
```

Many more events can trigger these actions, including comments, labels, and more.

You can find the [complete event list on GitHub](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows).

### Jobs inside your action

A job is a list of steps run on the same runner. If you have multiple jobs in your action, they will run parallel by default. (You can change this behavior)

We could, for instance, run a lint job, a test job, and a build job.

Jobs also need to run on a specific system.
GitHub comes with a complete set of already made runners. They are virtual machines.

For instance, we can run Windows, Ubuntu, or Mac!

Jobs can also have specific names. Let's set up the three jobs we described above.

```yaml
jobs:
  runs-on: ubuntu-latest
  lint:
    # steps
  test:
    # steps
  build:
    # steps
```

### Steps inside the action job

A step is a group of actions inside a specific job. Each item inside a step can share data between them.

An example of a step would be:

```yaml
jobs:
  runs-on: ubuntu-latest
  build:
    steps:
      step-1:
        # Actions
```

### Actions inside the action job

Actions are the brains behind the operation. They start to do something.

Let's say we want to add an action that says hello.

```yaml
jobs:
  runs-on: ubuntu-latest
  build:
    steps:
      step-1:
        run: echo "Hi there! 👋"
```

## How does a complete workflow look like?

Let's take the last example and make this into a complete workflow.

The first thing we need to do is set a name for our workflow.

```yaml
name: Our very first GitHub Action
```

Then let's determine when our action must run. I want it only to run when we manually tell it to.

```yaml
on: workflow_dispatch
```

And the last part is to add jobs and action to it.

```yaml
jobs:
  Testing-Actions:
    runs-on: ubuntu-latest
  steps:
    - name: A action is born
      run: |
        echo "I'm walking! 🚶‍♀️"
        echo "Actually, I'm running on ${{ runner.os }} 🏃"
        echo "I'm done! My status: ${{ job.status }} 🎉"
```

Open a new repo on GitHub.

Then click the actions tab on top to add your first action.

![Add a new GitHub action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636695625249/XfyEVWIog.png)

Paste the complete workflow we created above:

```yaml
name: Our very first GitHub Action
on: workflow_dispatch
jobs:
  Testing-Actions:
    runs-on: ubuntu-latest
  steps:
    - name: A action is born
      run: |
        echo "I'm walking! 🚶‍♀️"
        echo "Actually, I'm running on ${{ runner.os }} 🏃"
        echo "I'm done! My status: ${{ job.status }} 🎉"
```

To run this workflow, click on the specific workflow and press the "Run workflow" button.

![Run workflow action](https://cdn.hashnode.com/res/hashnode/image/upload/v1636696522444/5Rl3RMNX_w.png)

Once done, you can open up the workflow and see what went on.
You should be able to see the job we defined and the steps it took.

![GitHub action done running](https://cdn.hashnode.com/res/hashnode/image/upload/v1636696619356/tO6U3oREw-.png)

And that's it. We have a working GitHub action.
This is a super basic setup, and the workflow possibilities are endless!

You can also view [my demo on GitHub](https://github.com/rebelchris/github-actions/actions).

What kind of workflow would you like to see?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
