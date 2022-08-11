---
layout: ../../layouts/Post.astro
title: 'Adding SSL to our Azure Node app'
metaTitle: 'Adding SSL to our Azure Node app'
metaDesc: 'How can we make our Azure App secure?'
image: /images/01-10-2020.jpg
date: 2020-10-01T03:00:00.000Z
tags:
  - azure
---

So far, we have had some cool introductions to Azure, exploring the following topics.

- [Deploying a Node app to Azure](https://daily-dev-tips.com/posts/deploying-a-node-app-to-azure/)
- [GitHub automated-deployments to Azure](https://daily-dev-tips.com/posts/github-automated-deployments-to-azure/)
- [Adding a custom domain to Azure App Service](https://daily-dev-tips.com/posts/adding-a-custom-domain-to-azure-app-service/)

In this article, we will learn how to bind an SSL to our custom domain in the Azure App.

Having an SSL on a domain is very important. Most browsers are blocking non-secure websites, so it's a no-go not to have an SSL.

> Note: Like the custom domain, this is not available on the free tier!

## SSL Options

There are quite a few options for adding an SSL to a domain.

The simplest way is to buy an SSL from an authority like [Comodo](https://comodosslstore.com/) or your domain provider.

For me, I'm going with a free alternative 💸.

We can go for [Let's Encrypt](https://letsencrypt.org/), but it's a bit difficult to get that working on Azure, so in our instance, we are using [ZeroSSL](https://zerossl.com/).

## Getting our SSL from ZeroSSL

Let's start by getting our actual certificate from ZeroSSL.
Visit the [Zero SSL website](https://zerossl.com/) and fill out your domain in the header section.

![ZeroSSL step 1](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930220499/b4jQ0prRW.png)

We can then create a free account.

![ZeroSSL free registration](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930280522/qihVIhbjq.png)

In the following section, we can finalize the details for our SSL certificate. In the first section, we select the 90-day option since that's free.

> We do have to re-enter every 90 days (us cheapskates)

![ZeroSSL options](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930373551/ITkXTRsZf.png)

In step two, we check the option to generate the CSR automatically. We don't want to do this ourselves.

![ZeroSSL auto CSR](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930453408/gILMHPFCy.png)

In step three, we select the free option.

![ZeroSSL free SSL](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930496627/wUKqgLFs8.png)

In the next step, we select our verification method. For me, using the DNS option is the quickest way, so I'm choosing that one.

![ZeroSSL verification](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930562411/9hgTqQGUm.png)

## Verifying the SSL via CNAME

At this point, we need to go to our domain registrar ([Netlify](https://netlify.com/) for me) and visit our DNS section.

Add a new DNS record that will have the following setup.

- Type: CNAME
- Name: What ZeroSSL gave you
- Value: The value ZeroSSL provided you
- TTL: 3600 or less

![DNS Settings](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930707038/3PFVhEsdw.png)

Once we added this, head back to ZeroSSL and click "Verify Domain".

You can then download the default ZIP from here.

![ZeroSSL Download SSL Certificate](https://cdn.hashnode.com/res/hashnode/image/upload/v1600930842445/vO83oSACu.png)

## Adding the SSL to our Azure App Service

Now that we have our SSL, we can add it to our Azure App Service.

Go to your App Service in Azure and click the "Custom Domains" option.

![Azure Custom domain section](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931131521/eF5xCOzLX.png)

If you do not already have a custom domain, view this article on [adding an Azure custom domain](<(https://daily-dev-tips.com/posts/adding-a-custom-domain-to-azure-app-service/)>).

We can then click on the "Add Binding" option. A side-draw will open up.

![Azure SSL Binding](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931211553/XPm9vNSE1.png)

As you can see, in the above screenshot, it's asking for a `PFX Certificate`.
We did not receive that from ZeroSSL, so we need to convert our existing certificate.

Visit [SSL Shopper Converted](https://www.sslshopper.com/ssl-converter.html) and upload the received documents.
As output, you can choose `PFX`.

We need to provide the following details:

- Certificate file: certificate.crt
- Private key file: private.key
- Chain certificate file: ca_bundle.crt
- Type of current certificate: Standard PEM
- Type to convert to: PFX/PKCS#12
- PFX Password: `{Whateveryouwant}`

> You must use a password to make it valid for Azure.

![SSL Converter](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931371539/u9kymnp4r.png)

Now head back to Azure and click `Upload PFX Certificate`.

Choose the PFX certificate and password you used above.

![Azure SSL PFX](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931633226/2WQEdxuuh.png)

> Be aware; It might take some time before it's valid (5-10 minutes)

In the next step, select the options from the dropdown.

![Azure SSL Options](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931726986/aTRR6LG_n.png)

Now, if we click Finish, we have a secure domain!

![Azure Secure domain](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931777307/HPa9MwjV6.png)

And if we visit our secure domain, we can inspect our certificate to see if it works.

![Chrome inspect SSL Certificate](https://cdn.hashnode.com/res/hashnode/image/upload/v1600931821877/s-Mulc-i9.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
