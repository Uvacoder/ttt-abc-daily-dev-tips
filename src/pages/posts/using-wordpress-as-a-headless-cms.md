---
layout: ../../layouts/Post.astro
title: 'Using WordPress as a headless CMS'
metaTitle: 'Using WordPress as a headless CMS'
metaDesc: 'How to use WordPress as a headless CMS API system'
image: /images/17-09-2021.jpg
date: 2021-09-17T03:00:00.000Z
tags:
  - wordpress
---

WordPress is still a widely used system, and it works for many clients since they are so used to it.

And to be quite honest, there is something about the admin panel that just makes sense.
It's visual, easy to grasp, and well known.

However, what comes out of it, is somewhat of a nightmare sometimes.
It's bloated, slow, and just not speed optimized.
Sure we could opt to add yet another 20 plugins to make it quick, but is that a good approach?

Luckily WordPress comes as a headless CMS out of the box. Yes you heard me. It's already built-in (talk about bloated).

## What does WordPress Headless CMS mean?

As plain as it gets, it means you are still using the WordPress backend to create your content but use REST API endpoints to retrieve the data in an external system.

You do lose your theme and plugin functionality, but let's take static site generators as our "front-end" they are blazing fast, secured, and might not even need all these plugins.

That will be my proof of concept to see how quickly we can make a WordPress headless CMS website.

But before diving into building something, let's take a good look at the API and what kind of data we can get out of it.

## Trying out the WordPress Headless CMS

Before we start, the are two ways of calling the API.

1. You have set up canonical pretty URL's
2. You did not set this up

For option one, which will be the most common and advised use case, we get an API on the `http://yoursite.com/wp-json/` endpoint.

For the second option, we would have to query the API like this: `http://yoursite.com/?rest_route=/`.

However, I would recommend going with option one. You can enable this by going to the backend and visit the `Settings/Permalinks` section.

In there, click any of the structures, but not the plain one!

Time to try it out!
I'll be using `Insomnia` to query the API, but you can use any [API client tool](https://daily-dev-tips.com/posts/testing-api-calls-in-insomnia/).

![Calling the WordPress headless CMS](https://cdn.hashnode.com/res/hashnode/image/upload/v1631171830279/JkzLgia0X.png)

This basic call will give us all the available options we have.
But we are more interested in retrieving pages and posts.

Let's have a look at the [WordPress API reference](https://developer.wordpress.org/rest-api/reference/) to see what's available.

You can see we can call the `posts` through: `/wp/v2/posts`.
Let's give that a try.

![WordPress API for posts results](https://cdn.hashnode.com/res/hashnode/image/upload/v1631171988075/XN9JkoFeB.png)

Pretty cool, right! This endpoint returns all our posts in nice JSON format.

For the `pages` we see the `/wp/v2/pages` endpoint. Let's also try that one:

![WordPress page API](https://cdn.hashnode.com/res/hashnode/image/upload/v1631172060593/kWXU-SAst.png)

Pretty cool to see how extended the API is and what kind of data we can extract.
And even if data is missing, we can add our endpoints for it.

In another article, I'll write about including this headless CMS as the data source for an Astro website.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
