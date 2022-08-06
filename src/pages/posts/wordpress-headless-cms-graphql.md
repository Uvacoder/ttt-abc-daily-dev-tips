---
layout: ../../layouts/Post.astro
title: 'WordPress Headless CMS + GraphQL'
metaTitle: 'WordPress Headless CMS + GraphQL'
metaDesc: 'How to use WordPress as a headless GraphQL CMS'
image: /images/24-09-2021.jpg
date: 2021-09-24T03:00:00.000Z
tags:
  - wordpress
  - graphql
---

We converted our WordPress installation into a [headless CMS](https://daily-dev-tips.com/posts/using-wordpress-as-a-headless-cms/), but this was using the WordPress rest API.

Today we'll check out how we can advance this by enabling GraphQL, which is simply said a query language for our API.

Meaning we can use it to query our API.

## Installing GraphQL in WordPress

Let's get this party going and install GraphQL for WordPress. This is, luckily for us, just a simple plugin install away.

Open your WordPress admin system and go to the plugin section.
Search for "[WP GraphQL](https://www.wpgraphql.com/)".

![WP GraphQL plugin](https://cdn.hashnode.com/res/hashnode/image/upload/v1631857902656/gS1i0H-O9.png)

Install the plugin and activate it.
You should now have a side menu added for GraphQL.

We got some basic settings, which are fine as they come for most cases.

This plugin comes with a super cool thing is the `GraphiQL IDE` an easy way to try out queries on our WordPress installation.

Let's see, for instance, if we want to query our posts.

![Query data WordPress GraphQL](https://cdn.hashnode.com/res/hashnode/image/upload/v1631858098543/akeznKemn.png)

## Trying it out in a GraphQL client

Now that we have this working in WordPress, let's see how this would work in a GraphQL client.

I'm using [Altair](https://altair.sirmuel.design/#download) for this purpose.

Open the application and fill in your WordPress URL + the endpoint in my case:

```
http://localhost:8000/graphql
```

Then we paste the query like so:

```js
query MyQuery {
  posts {
    edges {
      node {
        id
        title
      }
    }
  }
}
```

And we get a result like so:

![GraphQL in client result](https://cdn.hashnode.com/res/hashnode/image/upload/v1631858657442/6i4QNEN2Z.png)

Pretty cool stuff. Now we have our graphQL setup and ready to use in any frontend.
We'll get to use it in another article as we will try it in different applications.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
