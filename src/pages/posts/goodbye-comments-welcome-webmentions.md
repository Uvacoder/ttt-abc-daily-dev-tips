---
layout: ../../layouts/Post.astro
title: 'Goodbye comments, welcome Webmentions 🙋🏼‍♂️'
metaTitle: 'Getting started with Webmentions ‍♂️ [2022 Tutorial]'
metaDesc: 'What are Webmentions? Find out here what they are and how the Webmentions protocol works. With code examples.'
image: /images/20-09-2020.jpg
date: 2020-09-20T03:00:00.000Z
tags:
  - developer
---

Finally, I made the switch to **Webmentions**. Not because I hated comments, but they didn't serve the platform.

You might be wondering, what are _Webmentions_?

Let me explain in some more detail.

![Webmentions example with Twitter likes, retweets, and replies](https://cdn.hashnode.com/res/hashnode/image/upload/v1600193851422/Xtv6JXvZ-.png)

## What are Webmentions?

Webmentions are an open standard for a protocol to notify a webpage about links, likes, or comments. It's currently in [W3C recommendation status](https://www.w3.org/TR/webmention/).

So when you add a link to a website, you can send a Webmention as a notification to the linked page. It's like a reference for the author about your reaction.

So authors can get notified when they receive a linkback, comment, or reply.

You can almost compare it to **pingbacks**! You know, from back in the day.

But Webmentions are way more remarkable since they can contain data!

For instance, the data in a Webmention can be likes, re-posts, comments, or other stuff.

## How do Webmentions work?

Webmentions work like this:

1. I write about Webmentions on this site.
2. Then John will write about Webmentions on his site but adds a link to my article.
3. John's publishing software will send a Webmention notification to my website.
4. My software verifies if the link has been placed and includes John's Webmention on my website.

In my case, you will see a lot of Webmentions from Twitter if you tweet and include a link to one of my articles.

## How to implement Webmentions on my site?

Of course, this is the million-dollar question, and there are a couple of **steps**:

1. Host a Webmention endpoint or use a third-party service [webmention.io](https://webmention.io/)

> Webmention.io is a free service made by the fabulous [Indieweb member Aaron Parecki](https://aaronparecki.com/). Check him out!

2. Sign up on Webmention.io using their [IndieAuth process](https://indieauth.com/)

3. You will now get two links you need to include in your HEAD tag.

```html
<link rel="pingback" href="https://webmention.io/daily-dev-tips.com/xmlrpc" />
<link
  rel="webmention"
  href="https://webmention.io/daily-dev-tips.com/webmention"
/>
```

4. Find a service that connects these Webmentions. [Bridgy](https://brid.gy/) is a fantastic service that turns your social mentions into Webmentions!

5. Bridgy will now analyze tweets, and if it finds any tweet that includes our URL, it will send a notification to our Webmentions endpoint.

The notification data will look like this:

```json
{
  "type": "entry",
  "author": {
    "type": "card",
    "name": "Ido Shamun",
    "photo": "https://webmention.io/avatar/pbs.twimg.com/d3cd0af823ba866fc0438b06151ace371d762e07bc61536fe895e7f4aca6520d.jpg",
    "url": "https://twitter.com/idoshamun"
  },
  "url": "https://twitter.com/idoshamun/status/1305098804597854213",
  "published": "2020-09-13T10:59:37+00:00",
  "wm-received": "2020-09-14T07:00:42Z",
  "wm-id": 851613,
  "wm-source": "https://brid-gy.appspot.com/comment/twitter/DailyDevTips1/1305027118166937600/1305098804597854213",
  "wm-target": "https://daily-dev-tips.com/posts/top-10-chrome-extensions-for-developers/",
  "content": {
    "html": "Thank you! 🤩\n<a class=\"u-mention\" href=\"https://daily-dev-tips.com/\"></a>\n<a class=\"u-mention\" href=\"https://twitter.com/DailyDevTips1\"></a>",
    "text": "Thank you! 🤩"
  },
  "in-reply-to": "https://daily-dev-tips.com/posts/top-10-chrome-extensions-for-developers/",
  "wm-property": "in-reply-to",
  "wm-private": false
}
```

## Ok, cool, now what?

So yes, we now have Webmentions and our sites accept them, but how do we show them?

Well, webmention.io comes with a fantastic API we can leverage.

### Request all Webmentions for a domain

We can run the following query to get all Webmentions for our domain:

```bash
curl --location --request GET 'https://webmention.io/api/mentions.jf2?domain={DOMAIN}&token={TOKEN}'
```

The domain will be: `daily-dev-tips.com`, for instance. And the token you can get from webmention.io.

### Get Webmentions for a specific URL

We can also use the public endpoint to get all Webmentions for one specific URL.

```bash
curl --location --request GET 'https://webmention.io/api/mentions.jf2?target=https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/'
```

> as [swyx](http://swyx.io/writing/clientside-webmentions) points out, the ending slash is significant!

We can then use JavaScript to show them on our website.

I wrote another article on [implementing Webmentions in an Eleventy blog](https://daily-dev-tips.com/posts/implementing-webmentions-on-a-11ty-blog/).

> Feel free to try them out and <a href="https://twitter.com/intent/tweet/?text=Chris%20wrote%20this%20amazing%20article%20https://daily-dev-tips.com/posts/goodbye-comments-welcome-webmentions/" target="_blank" rel="noopener noreferrer">tweet about this article</a>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
