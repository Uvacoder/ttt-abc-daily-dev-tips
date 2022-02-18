---
layout: ../../layouts/Post.astro
title: 'Azure App Service: Add a custom domain'
metaTitle: 'Add a custom domain to Azure App Service [2022]'
metaDesc: 'These Azure apps are cool. In todays tutorial we will learn how to link them to a custom domain.'
image: /images/27-09-2020.jpg
date: 2020-09-27T03:00:00.000Z
tags:
  - azure
---

We created our [Node hosted Azure app](https://daily-dev-tips.com/posts/deploying-a-node-app-to-azure/) and learned how to [auto-deploy from GitHub](https://daily-dev-tips.com/posts/github-automated-deployments-to-azure/).

Today we will be looking at running the web app on a **custom domain**.

> Be aware: Custom domains are not on the free-tier, so you'll need to have a paid account for this! 😭

Custom domain names are very important to define your project. It's all cool if it's a demo or testing environment, but an actual web app should run on its own domain.

## How to add a custom domain to Azure App Service

First, let's open our Azure App Service and click the `Custom domains` option on the left:

![Azure custom domains](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774467881/fRlVE4hHG.png)

This will open up the **custom domains menu**. We will be prompted to upgrade out tier if we are on the free tier.

Once you upgrade to a small service, click **add domain**:

![Azure web app add domain](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774551060/YzTj5du7h.png)

Clicking this will open a side drawer on the right, where we can choose our custom domain. In my example, I'm using `azure.daily-dev-tips.com`.

![Azure add domain settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774604700/eoQkWhSmw.png)

If you scroll to the bottom, you'll see the `domain ownership` section. These are the settings we need for our domain host:

![Azure domain ownership](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774647449/a-mcbMnqU.png)

> The txt is optional, it seems, I only did the CNAME, and that worked well.

## Adding the Azure CNAME records to your domain registrar

This section is going to be different for wherever your domain is hosted.

My domain is hosted on [Netlify](https://netlify.com/), so this might be different than your host.

Go to your domain settings.

![Netlify Domain Settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774739619/NNdbN8vcI.png)

> Your domain registrar might say something like: "DNS Management"

Now we need to add a **DNS record** for Azure.

![DNS Record settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774801547/fBNbwNiqK.png)

My settings include this:

- Type: CNAME
- Name: azure (azure.daily-dev-tips.com)
- Value: dailydevtips.azruewebsites.net (what Azure gave us)

Save these settings.

Now we need to go back to Azure to verify the domain.

![Azure verify custom domain](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774872520/Zf5Vn1yYE.png)

Now, we need to do the following actions.

1. Click validate; This will show the `Domain ownership` marked correct
2. Then we need to click the `Add custom domain` button to complete

And we are done! Now we added our custom domain to the Azure app service. Go visit your new domain to verify it works!

![Azure custom domain](https://cdn.hashnode.com/res/hashnode/image/upload/v1600774962178/BgGwGhqMl.png)

> I turned my custom domain off, to not pay for it 😅

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
