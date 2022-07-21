---
layout: ../../layouts/Post.astro
title: 'The importance of canonical URLs'
metaTitle: 'The importance of canonical URLs'
metaDesc: 'What exactly are canonical URLs and why would you need them?'
ogImage: /images/31-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f1a2bbc2-c001-46e8-450a-d2d58c4ee900
date: 2022-07-31T03:00:00.000Z
tags:
  - blogging
---

I noticed I'm always talking about canonical tags when advising fellow bloggers, but I never wrote this down on paper.

So here we go, an article explaining why you should always use canonical tags when republishing your content elsewhere.

Let's first set a use case.

You are reading this article from one of the following three sources.

- my blog (daily-dev-tips.com)
- hashnode
- dev.to

All these three sources have the same content.
Now our good friend Google comes into play, and it wants to help people find the correct answer to their questions.

Let's say your blog does just that. How does Google know which blog to redirect to?

If you don't provide a canonical tag, Google might even think you are spamming the internet and not showing any of the three sites!

However, you can use this canonical tag to set which site is the primary source for this article.

So what do I do, you ask?
I use my blog as my primary source of truth. It's what I want to rank on Google in the long term.

## Setting canonical URLs

So how do we set these canonical URLs

If you are not using a custom website as your primary source, you can set the canonical URL by adding the following tag in your HTML head.

```html
<link rel="canonical" href="https://daily-dev-tips.com/your-article-name" />
```

This will tell the search engines they can find the original content on the address you provide there.

Most blogging platforms offer a more visual way of adding these canonical tags.

For instance, on Hashnode, they have the following widget in the sidebar.

![Canonical URLs on Hashnode](https://cdn.hashnode.com/res/hashnode/image/upload/v1658425577924/z2vYxdgOu.png)

And the same kind of graphical element exists on dev.to.

![Dev.to canonical URL setting](https://cdn.hashnode.com/res/hashnode/image/upload/v1658426356680/4dbnmnorO.png)

A small side note is that my good friend Graham suggests you wait two weeks before reposting your content.
He says it could happen that Google will crawl Hashnode before yours and rank that content higher.

This is, in theory, true.
I don't follow the advice and have yet to experience this happen, but I want to put it out as a disclaimer, as multiple sources advise.

## Conclusion

Reposting content is a great way to reach a broader audience, but it can hurt your SEO if you don't use canonical tags.

Do use canonical tags to indicate to search engines which is your original content.

Do not mix the canonicals to link to different articles from different sources.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
