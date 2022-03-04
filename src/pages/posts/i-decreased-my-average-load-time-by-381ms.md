---
layout: ../../layouts/Post.astro
title: "I decreased my average load time by 381ms"
metaTitle: "I decreased my average load time by 381ms"
metaDesc: 'How I cut down my loading time by 381ms by moving google analytics'
image: /images/16-11-2021.jpg
date: 2021-11-16T03:00:00.000Z
tags:
  - developer
---
Thanks for stopping by, not just a clickbait title, as I went from an average load time of 507ms to 126ms.
A whopping win of 381ms!

![Decreasing my load time from 507ms to 126ms](https://cdn.hashnode.com/res/hashnode/image/upload/v1636092298213/kKPf4rWUd.jpeg)

Let's talk about how this came to be.

For those who don't know me, I'm a bit obsessed with making my website faster and optimizing whatever I can on it.

Quite a while ago, I learned that my biggest downfall is Google Analytics. And heck, even a Google product complains about...

![Pagespeed insights complaining about Gtag](https://cdn.hashnode.com/res/hashnode/image/upload/v1636090841782/4RxqPZYs3.png)

Yep, this is Pagespeed insights complaining about a google tag. It's just a plain google tag to load your analytics.

And it slows down your loads.

## Do I even need Google Analytics

This whole topic came about when I started to think if I even needed Google Analytics.

Their numbers are off, as they can be blocked, and it's just vanity metrics for me at the end of the day.
I don't optimize anything based on their numbers. I just get a kick out of looking at the numbers and seeing the site is growing.

At the time of writing this, I even moved to Cloudflare analytics to test them out.

> Inside: So far, they seem to be doing super well and show a more realistic number.

## Optimising the Google Analytics load

With that in mind, I thought, why not play around with this google analytics loading to see what we can optimize.

Everyone on the internet will tell you to place that code in your head.

And it makes sense because people might close your page before even loading the footer.

But then realize putting it there slows down your page by a massive 381ms!
Maybe that's **WHY** they are even leaving in the first place?

And to be honest, who cares that you didn't track that person who didn't wait on your page to load?

It's not like Google Analytics is a realistic number of users anyway.

So I decided to move my implementation.

Before, I loaded it in the head like everyone else.

![Google analytics loaded in the head](https://cdn.hashnode.com/res/hashnode/image/upload/v1636091187957/3rSXK001-.png)

I then placed this code at the last space before closing the body like so:

![Screenshot 2021-11-03 at 10.25.18.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1636091228307/xlHXZNGUX.png)

You might have spotted I replaced the google tag manager loading to a normal loading of only the analytics as this is all that's loaded anyway.

And that made a difference!
A 381ms difference.

This is not based on one load, but an average load of all pages over a week!

## Conclusion

Think about your analytics. Do you use it? 
Should it be in the head, or can you move it down to make your site faster?

And if you do, you might lose that odd person that doesn't wait for your website, but who cares? 🤷‍♂️

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
