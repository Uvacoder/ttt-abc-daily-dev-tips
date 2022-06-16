---
layout: ../../layouts/Post.astro
title: 'You don’t always need a CMS'
metaTitle: 'You don’t always need a CMS'
metaDesc: "Here is why you don't always need a CMS to power your website"
image: /images/08-03-2022.jpg
date: 2022-03-08T03:00:00.000Z
tags:
  - developer
---

When it comes to websites, blogs, and whatnot, we often expect to find a CMS to power these systems.

I get a lot of questions about what CMS powers my blog.
And I'll explain that while telling you why you don't always need a CMS.

## What is a CMS

Let's first take a look at what a CMS is. It stands for "Content Management System"; as the name implies, it can be used to manage the content for a website.

Some famous CMSs are WordPress, Contentful, Wix, Shopify, etc.

There is a big rise in "headless" CMS, which means a CMS that serves as an API.
You have this system, and your website calls this API to retrieve the content.

CMSs are great for people who want to edit content and don't particularly know what to do with markdown, uploading files to a server, etc.

So when building websites for clients, it's often an excellent solution to pick a CMS that works for them.

## What I run my blog on

I run my blog on a low-tech solution.
It has no CMS, but plain markdown files are parsed to basic HTML and uploaded to a server.

However, this is automated, so I don't have to do that physically, but there is still no content management system to alter the content.

So how does this work, you ask?

I open my project in my IDE (Visual Studio Code or WebStorm) and start changing my markdown files.
Either edit the existing ones or create new ones for new blog posts.

Once I'm done, I push the changes to my git branch, automatically triggering a GitHub action.

This GitHub action starts the build command on my Eleventy project (soon to be Astro), which converts all these markdown to HTML output.
Once this process is done, the HTML files get placed in a "static" branch.

Which triggers Cloudflare pages to pull the latest changes from this branch.
Cloudflare will do a git pull on this branch; voila, the new changes are online!

This all happens in about a minute or so.

## Why you don't always need a CMS

And for me, that's the main reason I don't need a CMS. It can be such an over-engineered solution.

I like to write content, markdown is the easiest way to write anyway, so I prefer it.

And once the content is written, I don't want to hassle logging in to a system, copy-pasting the content, and pressing publish.

(Although this is roughly the same amount of time)

Another downside to these systems is that they need upkeep. The CMS gets a new version, and you need to update it.
Something goes wrong, and you won't be able to push new content.
And worse of all, they can get hacked, meaning your website could be at risk.

Not saying it's impossible, but a static website is harder to hack. You would need to hack my GitHub repo or my Cloudflare account, which are pretty complex challenges.

## Conclusion

I don't want to hate on CMS. They are a fantastic system that should be used.

But if you are a developer, consider if you need it?
Perhaps you can make your life easier by going low-tech as well.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
