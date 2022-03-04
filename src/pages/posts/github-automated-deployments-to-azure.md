---
layout: ../../layouts/Post.astro
title: 'GitHub automated deployments to Azure'
metaTitle: 'GitHub automated deployments to Azure'
metaDesc: 'Learn how to automate our Node deployment to Azure using GitHub Actions'
image: /images/26-09-2020.jpg
date: 2020-09-26T03:00:00.000Z
tags:
  - nodejs
  - azure
  - github
---

Yesterday we created an Azure account and published our very first [Azure App Service](https://daily-dev-tips.com/posts/deploying-a-node-app-to-azure/) 🥳.

We deployed using the Azure Visual Code extension, but how cool would it be to integrate automated deployments using GitHub?

Luckily Azure has a super cool workflow for this already, and we will be able to integrate easily.

![GitHub Actions details](https://cdn.hashnode.com/res/hashnode/image/upload/v1600770288633/eiW8Tb5UE.png)

## Azure connecting to GitHub

First, we need to connect our GitHub account to our Azure environment.

Login to Azure and find your created App Service, then click on the `Deployment Center` button.

![Azure deployment center](https://cdn.hashnode.com/res/hashnode/image/upload/v1600766944969/wBe2ZkOCq.png)

### Step 1 Source Control

Click on the `GitHub` icon, as you can see circled in the screenshot above.

You will then be prompted with a GitHub authentication flow.

### Step 2 Build provider

Once connected, we will go to a second step to choose what kind of Build provider we want to use.

You can choose `GitHub Actions` here.

![Azure GitHub actions](https://cdn.hashnode.com/res/hashnode/image/upload/v1600767151833/vsd41zDJj.png)

> GitHub's actions are very useful and can be used to create automated workflows.

### Step 3 Configure

On step three, we can configure our settings.

Select your repository and branch you want to publish from. In my case, this is the `master` branch.

I've set the Build to our Node environment.

![GitHub action configure](https://cdn.hashnode.com/res/hashnode/image/upload/v1600767315944/qEex6LE-p.png)

### Step 4 Summary

On step four, you will see the summary of what we created, you will be able to see the GitHub action that will be made for us.

You can click the `finish` button, and it will add this to our repository and run the first deployment.

![Azure GitHub Actions](https://cdn.hashnode.com/res/hashnode/image/upload/v1600767405908/I_btqlczu.png)

## Checking our Actions in GitHub

The next step is to log in to our GitHub to see this newly created GitHub action.

Go to your repository and check the `Actions` tab.

![GitHub Actions tab](https://cdn.hashnode.com/res/hashnode/image/upload/v1600767547009/9aPmK15m-.png)

As you can see, our first deployment failed, so click on this row to inspect what went wrong.

As you can see in this screenshot, `no test specified`, which is correct because our app does not have a test.

![Failed GitHub Action](https://cdn.hashnode.com/res/hashnode/image/upload/v1600767891807/ahLLRAdZd.png)

If we now go back to our files and modify this GitHub workflow, we can remove the `npm run test` line for now.

![Fixing the test run](https://cdn.hashnode.com/res/hashnode/image/upload/v1600768035714/LmfeDw_UU.png)

Once we save this file, a new Action will be triggered, so let's see if this fixes our deployment.

![Successful Workflow](https://cdn.hashnode.com/res/hashnode/image/upload/v1600768081741/hQ0xVUQaV.png)

Yes, we got a successful workflow!

## Pushing to GitHub Action via Visual Studio Code

Let's now try and change our project in Visual Studio Code.
We are going to add a new route called `/chris` and push that to our `master` branch.

![Change code in Visual Studio Code](https://cdn.hashnode.com/res/hashnode/image/upload/v1600768170791/pVBZryx6a.png)

You can push this to the master, and then our web-app will show this `/chris` route!

![Chris route](https://cdn.hashnode.com/res/hashnode/image/upload/v1600768211786/mtkUPMbiQ.png)

Awesome!

You can find the full project on my [GitHub](https://github.com/rebelchris/Node-url-shortener).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
