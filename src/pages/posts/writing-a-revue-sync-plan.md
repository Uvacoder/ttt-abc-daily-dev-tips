---
layout: ../../layouts/Post.astro
title: 'Writing a Revue sync plan'
metaTitle: 'Writing a Revue sync plan'
metaDesc: "Let's see how we can sync our Revue subscribers to Sendy"
image: /images/24-06-2022.jpg
date: 2022-06-24T03:00:00.000Z
tags:
  - developer
  - revue-sync
---

As you might have seen in the previous article, I'm a bit frustrated by the [Revue lock-in on Twitter](https://daily-dev-tips.com/posts/vendor-lock-in-sucks/).

I'm using [Sendy](https://daily-dev-tips.com/posts/moving-from-mailchimp-to-sendy/), and I want to keep using that to send my newsletter.

So let's take matters into our own hands and write a plan on how we can achieve just that.
This article will be a collection of ideas on how we'll tackle the process.

In further articles, we'll build the tool to start syncing them.

## Desired outcome

I think it's always a good starting point to look at the desired outcome.
When are we happy with the result?

In my case:

- Revue subscribers should sync to Sendy and be subscribed
- People unsubscribing on Revue should also unsubscribe on Sendy
- Subscribe from Sendy should subscribe to Revue
- Unsubscribe from Sendy should unsubscribe from Revue

If I hit these goals, I'm happy with the product.

In an ideal world, I'd also like to be able to sync the subscribers from Sendy to Revue, but at this point, Sendy does not have an open API to retrieve all subscribers.

To write it out in more detail, we would like to run the following scripts in order.

- Get all unsubscribes from Revue, sync them to Sendy to unsubscribe them there
- Get all subscribers from Revue and sync them to Sendy to subscribe to them
- Subscribe on Sendy should trigger a webhook to subscribe on Revue
- Unsubscribe on Sendy should trigger a webhook to unsubscribe on Revue

## Sketching the picture

Let's quickly sketch this idea out to see if that will work.

| Sendy          | Revue          |
| :------------- | :------------- |
| Jim@mail.com   |                |
| Anita@mail.com |                |
|                | Chris@mail.com |

In our sync, we want to move all subscribers from Revue to Sendy.

So after our run, the table should look like this:

| Sendy          | Revue          |
| :------------- | :------------- |
| Jim@mail.com   | Jim@mail.com   |
| Anita@mail.com | Anita@mail.com |
| Chris@mail.com | Chris@mail.com |

As you can see, both systems now have all users.

Let's say Chris decided to unsubscribe from Revue. He will be marked there as unsubscribed so that we will get this information from Revue on the next run.

Our new data structure will then look like this:

| Sendy          | Revue          |
| :------------- | :------------- |
| Jim@mail.com   | Jim@mail.com   |
| Anita@mail.com | Anita@mail.com |

If Chris then decides to join via Sendy, a webhook will be triggered that subscribes him to Revue automatically.

Meaning our data will look like this again:

| Sendy          | Revue          |
| :------------- | :------------- |
| Jim@mail.com   | Jim@mail.com   |
| Anita@mail.com | Anita@mail.com |
| Chris@mail.com | Chris@mail.com |

## Side notes

I'm thinking of adding a flag to users coming from Revue. This way, once Sendy opens up an API to list all subscribers, we can quickly sync the two.

Sendy does come with subscribe and unsubscribe webhooks, so perhaps we can also look at how we can sync those to Revue.

## The start

In the following article, we'll start this process.
The first step will be creating a clean slate, meaning both systems need an equal starting point.

Because Sendy is my central database, I want to unsubscribe everyone there to import to Revue.

Subscribe to the mailing list to keep updated on this project.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
