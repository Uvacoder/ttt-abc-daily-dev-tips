---
layout: ../../layouts/Post.astro
title: 'Deploying a Node app to Azure'
metaTitle: 'Deploying a Node app to Azure'
metaDesc: 'Getting started with Azure App Service and deployments'
image: /images/25-09-2020.jpg
date: 2020-09-25T03:00:00.000Z
tags:
  - nodejs
  - azure
---

This article is not about building a `Node.js` app but about deploying your first app on Azure.

Azure is mighty, fast, and easier to start with than you think.

I recently made a sort-like application for a company and thought it would be good to show everyone how to go about hosting your first Node app on Azure.

Check my article on [starting your first Node.js app](https://daily-dev-tips.com/posts/basic-nodejs-express-application/).
Or download this starter package on [GitHub](https://github.com/rebelchris/Node-url-shortener).

## Registering on Azure

First, we need to get an Azure account, head to their [register page](https://azure.microsoft.com/en-us/free/), and follow instructions.

Once logged in, we see this.

![Azure portal homepage](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705271505/eJvibcUOQ.png)

Now click on the `App Services` since we will use it.

We then get a prompt to start our free Trial. If we have not already done this, please follow these steps.

![Azure free trial](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705396350/o3CnfzOYs.png)

## Creating our App Service in Azure

Our Node app will be running on an App Service on Azure. So from the App Services screen, click on create new.

![Create new App Service](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705461881/eE-akzlIY.png)

An App Service is a container that will run our application, and it can run several runtimes options.

For our instance, we are using the following settings.

![App Service settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705522748/NREOGDdh8.png)

> If you don't have a resource group yet, you can click the new button on Resource Group.

We won't be using any monitoring, so leave that to no.

![App Service Monitoring](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705588032/zvEBwlgMX.png)

We also won't use Tags, so click to the end and push `Create`!

![App Service Create](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705644345/XshQ4UFmZ.png)

There we go. We created an empty Azure App Service, which looks like this if we follow the URL.

![Azure App Service default page](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705688713/Qhhrn__k4.png)

## Uploading our Node app to Azure App Service

> You can use my Starter project from [GitHub](https://github.com/rebelchris/Node-url-shortener).

So there are multiple ways of pushing our code to our new App Service.

Let's start by exploring their Visual Studio code extension first!

You can [download the Azure Visual Studio code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) here.

Once installed, open your project in Visual Studio Code.

You will now see this side icon. Click it and authenticate with your Azure account.

![Visual Studio Code, Azure extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705808624/40Vhzi0kJ.png)

We can right-click our newly created App Service and click `Deploy to Web App`.

![Deploy web app](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705856714/nTixdG0S9.png)

Now visit your Azure-created URL.

![Azure hosted Node app](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705918623/GeJgkPRQ3.png)

And we can even visit another route.

![Azure Multi Pages](https://cdn.hashnode.com/res/hashnode/image/upload/v1600705964988/R_4wOX_dJ.png)

## Azure Web App deployments

We can find our recent push deployment in the following section in Azure.

![Azure Deployment Center](https://cdn.hashnode.com/res/hashnode/image/upload/v1600706012450/OMK-7aBvo.png)

There we go, we created a Node app hosted on Azure Web Services.

You can find the entire project on my [GitHub](https://github.com/rebelchris/Node-url-shortener)

Next time we will explore GitHub Deployments, Custom domains, and Storage options!

Check out this article to learn more about [serverless containers](https://geshan.com.np/blog/2019/11/why-use-google-cloud-run-5-compelling-reasons/).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
