---
layout: ../../layouts/Post.astro
title: 'Hosting a Static Blog on Netlify'
metaTitle: 'Hosting a Static Blog on Netlify'
metaDesc: 'How to host a Static Website on Netlify'
image: /images/21-04-2020.jpg
date: 2020-04-21T03:00:00.000Z
tags:
  - eleventy
---

In Yesterday's post, we learned how to [create a static blog with eleventy](https://daily-dev-tips.com/posts/building-a-static-blog-with-11ty/), but having a blog local doesn't really bring us much fun, does it?

To give you some recap [Netlify](https://www.netlify.com/) is an awesome static host. There are about a million more options, but I like to explore Netlify today since that is what I am using.

And the best of all they offer a free tier, see more on their [pricing page](https://www.netlify.com/pricing/).

So let's see how we can host our created blog on Netlify.

## Deploying our Static blog with Netlify

### Creating an account on Netlify

Head over to [Netlify Signup](https://app.netlify.com/signup) and log in using your preferred method of authentication.

I am using GitHub because my project is on GitHub.

### Creating a new site on Netlify

Once we set up and created our account on Netlify we can go ahead and add a new site from Git.

This way, our website can incorporate automatic deployments later on.

I'm choosing GitHub here as an option; it will now ask you to authenticate with GitHub and asks you which repository you would like to use. Let's choose the blog we created [yesterday](https://daily-dev-tips.com/posts/building-a-static-blog-with-11ty/).

### Netlify build settings

Netlify is amazing enough to help us get started to it will help us set a build command:

    npx eleventy

And set the Publish directory to be `_site` for our project.

Now click **Deploy site** and wait a couple of seconds.

### Netlify extra's

Netlify comes with some amazing options

- We can set up a custom domain like https://daily-dev-tips.com
- We can secure the website (Highly recommended!)
- We can add [Forms](https://www.netlify.com/products/forms/)
- We can even add [Netlify functions](https://www.netlify.com/products/functions/)

## Viewing our deployed website

Once the project is deployed, click and visit your website.

[See our website here!](https://romantic-torvalds-af350e.netlify.app/)

Want to learn how to [add a page to this blog](https://daily-dev-tips.com/posts/adding-pages-to-eleventy/)?

## Auto deployment

Because we linked Netlify to our GitHub project every time we publish to the Master branch, we will automatically deploy to Netlify, isn't that just great? 🔥

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
