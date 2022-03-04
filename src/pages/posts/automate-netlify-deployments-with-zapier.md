---
layout: ../../layouts/Post.astro
title: 'Automate Netlify deployments with Zapier'
metaTitle: 'Automate Netlify deployments with Zapier'
metaDesc: 'Automating my deployment process with Zapier and Eleventy actions.'
image: /images/07-01-2021.jpg
date: 2021-01-07T03:00:00.000Z
tags:
  - static
  - netlify
---

One of my goals for the new version is that I'll be able to auto-deploy my website.

I love to go remote camping, which means no internet for 3 days, it's amazing don't get me wrong.
But I still want to be able to deploy my website and send out my emails and perhaps even tweet about it.

The first part to me is the most important one, getting the site redeployed.

As you may know, my site is [built on Eleventy](https://daily-dev-tips.com/posts/building-a-static-blog-with-11ty/) and [hosted on Netlify](https://daily-dev-tips.com/posts/hosting-a-static-blog-on-netlify/), which works great.

Eleventy allows me to post an article with future dates, those will only be rendered on the day they should be active. So literally all we need to do is trigger a redeploy.

![Netlify redeploy](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567189220/a42i8FGWk.png)

This button is literally all that needs to be pressed.

## Zapier auto-deploy Netlify

Luckily for us Zapier the amazing automation collection tool has a Netlify integration!

We can use Zapier to trigger a deployment on set times.

Head over to the [Zapier website](https://zapier.com/) and signup for a free account.

Once you created the account, you'll be brought to your dashboard where we can create a new Zap.

![Create zap in zapier](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567516009/PY9V1Eq0d.png)

We will need a scheduled event to trigger the Netlify deployment.
So pick the Schedule button or search for the Zapier Schedule event.

![Zapier schedule event](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567658161/1dGxwlLE0.png)

I want this schedule to trigger every day, so in the next selection pick every day.

![Zapier schedule options](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567713865/Oy4jcGGMg.png)

You can then state if it should run on weekends, and what time you want the trigger to run.
I post even in the weekends, so yes, and want it auto deployed every morning at 07:00 SAST.

![Zapier time trigger](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567874544/WahJLUlR1.png)

For the action, we search for Netlify.

![Zapier Netlify app](https://cdn.hashnode.com/res/hashnode/image/upload/v1609567938729/933Vy0ZYX.png)

There is only one action and that is `Start Deploy`.

![Netlify Zapier start deploy](https://cdn.hashnode.com/res/hashnode/image/upload/v1609568012831/2ZjGOEeCR.png)

On the next screen, you are asked to sign in to your Netlify account.

![Zapier sign in to Netlify](https://cdn.hashnode.com/res/hashnode/image/upload/v1609568079520/_S1y8yBjR.png)

After connecting you can choose for which site your action should run.

![Netlify choose auto-deploy site](https://cdn.hashnode.com/res/hashnode/image/upload/v1609568159033/ihsxhDXAm.png)

We can then test our actions.

If we head over to our Netlify deploy section we should see the deployment.

![Zapier - Netlify auto-deployment on time](https://cdn.hashnode.com/res/hashnode/image/upload/v1609568246025/SRa6b8q94.png)

It worked, we now auto-trigger a Netlify deploy using a Zapier scheduled time hook.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
