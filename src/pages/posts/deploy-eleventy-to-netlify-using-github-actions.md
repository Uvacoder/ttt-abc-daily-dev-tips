---
layout: ../../layouts/Post.astro
title: 'Deploy Eleventy to Netlify using GitHub actions'
metaTitle: 'Deploy Eleventy to Netlify using GitHub actions'
metaDesc: 'Learn how to use GitHub actions to auto deploy Eleventy to Netlify'
image: /images/15-01-2021.jpg
date: 2021-01-15T03:00:00.000Z
tags:
  - netlify
  - eleventy
  - github
---

The other day I talked about how easy Zapier was to [automatically deploy my Eleventy website](https://daily-dev-tips.com/posts/automate-netlify-deployments-with-zapier/).

As a reference, I needed a daily deployment to deploy my articles while I might be on a trip or whatever the case is.

I got some feedback from [Waylon](https://twitter.com/_WaylonWalker) and [Nacho](https://twitter.com/nachoiacovino), stating GitHub's actions was maybe a better way to go.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did you know you can use Zapier to automatically deploy on Netlify?<a href="https://t.co/rOXdr1LGAt">https://t.co/rOXdr1LGAt</a> <a href="https://t.co/JYi1Er65Sa">pic.twitter.com/JYi1Er65Sa</a></p>&mdash; Chris Bongers 🤓💻⚡️ (@DailyDevTips1) <a href="https://twitter.com/DailyDevTips1/status/1347184697391124485?ref_src=twsrc%5Etfw">January 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I completely forgot that GitHub Action had the option of scheduling!!

But they do, so a couple of hours later, I was working on getting my website built using GitHub!

## Setting up a new action

On your GitHub repo, click the Actions button, and you'll get to the following screen.

![GitHub actions](https://cdn.hashnode.com/res/hashnode/image/upload/v1610197586702/4ZxhKwKnG.png)

On here, you see some already made actions that you can pick. I choose to build my action, however.

Click the button, and you will get to the action workflow screen.

It will look like this:

![GitHub Workflow details](https://cdn.hashnode.com/res/hashnode/image/upload/v1610197671892/O2vXrQg4U.png)

It has some detailed structure, but I'll guide you through what we will build and use in the following steps.

## Building an Eleventy website using GitHub actions

The first step of an Action is defining what it should be called. In my case, that is the Deploy website:

```bash
name: 🍃 Deploy website
```

The next step is to control when the action should run. We want it to build every time we push to our main branch so let's add that piece:

```bash
# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
```

Then we get to the job section:

```bash
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # All our steps
```

The jobs define all the things our action will do and what it runs on. Here, we run a ubuntu server.

Now let's create the steps.

The first step is to check out the workspace.

```bash
# Steps represent a sequence of tasks that will be executed as part of the job
steps:
  # Checks out your repository under $GITHUB_WORKSPACE, so your job can access it
  - uses: actions/checkout@v2
```

Then we want to set up Node as a step.

```bash
# Set up node version 12
- name: Set up Node
  uses: actions/setup-node@v1
  with:
    node-version: "12.x"
```

Once Node is installed, we can run `npm install`, which will install all the dependencies.

```bash
- name: NPM Install
  run: npm install
```

Then for Eleventy, we need to run `npm run production`.

```bash
- name: Build 11ty
  run: npm run production
```

This created our dist folder, so let's store the dist folder in a specific branch.

```bash
- name: Deploy to Netlify branch
  uses: crazy-max/ghaction-github-pages@v2
  with:
    target_branch: netlify
    build_dir: dist
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This is usually used to build GitHub pages, but we can extract only the dist folder from our build and deploy it to a branch called `netlify`.

You can now go ahead and save this workflow. It will then run.
You should now see a new branch if it succeeds.

![Deployment center](https://cdn.hashnode.com/res/hashnode/image/upload/v1610198168277/5Ijs3dk40.png)

![GitHub branch](https://cdn.hashnode.com/res/hashnode/image/upload/v1610198194561/KSzo4a2_O.png)

Then we can head over to Netlify and change our deployment based on this `netlify` branch with no specific command!

This saved our Netlify build minutes since those are limited to 300.
Whereas GitHub private repos gives us 2000 build minutes!

## Adding a schedule of GitHub actions

You might be wondering, but where is this schedule, since that was your whole goal?

Well, on the workflow, we can add the following `on`:

```bash
# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  schedule:
    - cron:  '0 4 * * *'
```

This runs every day at 04:00 UTC.

There you go, we automated our Eleventy build using GitHub actions and were even able to schedule these.

I also made a screencast of me building this action. If you like video explanations better, check it out.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DEN7DB3mKlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
