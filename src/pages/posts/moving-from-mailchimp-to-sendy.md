---
layout: ../../layouts/Post.astro
title: 'Moving from Mailchimp to Sendy'
metaTitle: 'Moving from Mailchimp to Sendy'
metaDesc: "Why i'm moving away from Mailchimp and converting to Sendy for my Mailing list."
image: /images/08-01-2021.jpg
date: 2021-01-08T03:00:00.000Z
tags:
  - mail
---

> Disclaimer: some links in this article are affiliate links. These help support the blog by allowing me to receive a bonus if you sign up.

It's time to say goodbye to Mailchimp, it served me well and did exactly what was expected of it.

It sends mails, they look great and are easy to create.

All true, but here comes the caveat.

I want to automate my mail sending...

Sounds easy enough right, a simple "schedule" would be fine and I assumed that wouldn't be a problem in the big giant called Mailchimp.

And that is correct, they do offer a schedule option.

![Mailchimp schedule mail](https://cdn.hashnode.com/res/hashnode/image/upload/v1609573347121/2_ce17l25.png)

I have to upgrade? But why? I just want to schedule a simple email for when I'm on a holiday.

That get's me it's just a principle question now. I literally only want the computer to press the damn button because I won't have reception.

## Finding Mailchimp alternatives

Don't get me wrong I don't mind paying for mailing service, but it needs to be reasonable.

With Mailchimp, I find it actually too expensive for what I'm getting.

I only send plain emails, not extended flows, no nothing.

My time as a digital marketeer learned me about a lot of tools, but none of them sparked me, they all had some kind of downside or privacy issue.

Until...

I heard about [Sendy](https://sendy.co/?ref=Y7kyy), a self-hosted, PHP based mail sending platform.

Sounded pretty good, and having a look at their website and demo made me feel good about it.

This might be the next best thing.

![Sendy screenshot](https://cdn.hashnode.com/res/hashnode/image/upload/v1609574544882/ctxRBMFAt.png)

## Calculating the cost for Sendy

[Sendy](https://sendy.co/?ref=Y7kyy) is a plain versions making use of Amazon SES to send your mails, so your sending costs will cut down a lot!

The tool itself costs \$69 once-off.

You will however need to host Sendy on a server that supports PHP and MySQL.

I've done some research and found one person hosting it on a free heroic tier, but they seemed to run in some cron and import issues. So I decided to go with the 5\$/month Digital Ocean droplet.

This will make Sendy cost me:

- Once off: 69\$ (Sendy fee)
- Monthly: 5\$ (Digital ocean droplet)
- Monthly: \<\$1 Amazon SES costs (\<10K emails a month)

Compare this to Mailchimp's cheapest monthly price: \$12,80 and we'll save money within a year!

For the first year this would end up being:

| Year | Sendy | Mailchimp |
| ---- | :---: | --------: |
| 1    | 141\$ |     153\$ |
| 2    | 72\$  |     153\$ |

And that is only if my mailing list will stay the same size, the bigger it gets the more financial sense Sendy will make.

## Mailchimp vs Sendy

So what are some of the pros/cons for each?

> Note: These are all very personalized, and may not resonate with everyone

### Mailchimp

**pro**

- Visual appealing
- Extended campaign
- Proven product
- Email editor is optimal

**cons**

- Get's pricey
- Data privacy not in your control
- Can get over-complicated

### Sendy

**pro**

- Self-hosted
- Low pricing
- Able to customize the dashboard
- Backup your own data

**cons**

- Can be hard to setup
- Technical knowledge needed
- No visual email editor
- No advanced campaign options

For me as a technical person, I feel ok setting up some hosting and don't backup to self-host this tool.

But I can imagine for some people it may look a bit scary to set up your own installation of Sendy.

> Sendy does offer an installation for you at a fixed price.

All and all, excited to start moving over and I'll keep you guys posted on my experiences with Sendy.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
