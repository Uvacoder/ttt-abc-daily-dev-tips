---
layout: ../../layouts/Post.astro
title: 'Trying out a medusa webshop'
metaTitle: 'Trying out a medusa webshop'
metaDesc: 'Seeing which open source webshops are out there'
ogImage: /images/17-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/dc9d9599-be05-4113-8163-5894701eb800
date: 2022-09-17T03:00:00.000Z
tags:
  - webshop
---

In the following couple of articles, we'll be building a [medusa](https://medusajs.com/) webshop.

This idea was sparked from looking for alternatives for an existing WooCommerce webshop I was looking at transferring.

## Background

My brother-in-law has a pretty large webshop with beers. For those interested, it's [debiersalon.nl](https://www.debiersalon.nl/).

The webshop is built on top of WooCommerce, which worked relatively ok for when he started, but it's become relatively slow over time, takes a lot of work to keep up to date, and is quite a pain with designing custom things inside the theme.

However, it does come with many good things, at least for this specific webshop.

- Products out of stock are no longer shown
- All payment provider options included
- PayPal Zettle integration
- Discounts
- Multiple shipping methods
- Multiple attributes for filtering

I took these and some side things into consideration while evaluating new products.

## What's out there

The webshop world has quite a large variety of systems that one can use.
I started looking into Shopify as it was the one I knew from the top of my head.

However, they quickly realized their profit cut was ridiculous for small shops.

So back to the search again, I found there are some pretty amazing open source alternatives like:

- [OpenCart](https://www.opencart.com/)
- [Saleor](https://saleor.io/)
- [Vendure](https://www.vendure.io/)
- [Medusa](https://medusajs.com/)

They all look pretty good, and I gave them a demo spin-up.
For some reason, medusa looked the most appealing out of the box.

But I did have some concerns about medusa being a little bit limited for what the webshop I'm building needs.

## Calling medusa

When trying out medusa for the first time, I encountered issues with their onboarding tutorial.
Even the quickstart got me stuck by not working.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I started with the quickstart...<br><br>1,2,3 go well, then the curl command already does nothing...<br><br>I mean so far you have not convinced me to provide a great experience. <a href="https://t.co/zB8s8mZvqx">pic.twitter.com/zB8s8mZvqx</a></p>&mdash; Chris Bongers 🤘 (@DailyDevTips1) <a href="https://twitter.com/DailyDevTips1/status/1550465790830329856?ref_src=twsrc%5Etfw">July 22, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I tweeted about that as it turned me off initially.
I quickly got a response from Nicklas, and he set up a call with a member of the medusa team.

The call was with Oliver, and I explained what I was looking to do. Where he helped me to confirm my needs and explain how it could be done.

## Conclussion

So for me, at this point, medusa looks like the nicest tool, plus it seems well designed and has a lot of options to make it your own.

So for the upcoming articles, I'll look at setting it up and seeing how far it will take us.

Bear with me as I might stumble on some halts where more research is needed.
We could take a detour with some other articles in between the waiting periods.

Please subscribe to the mailing list if you want to learn about setting up a webshop with medusa.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
