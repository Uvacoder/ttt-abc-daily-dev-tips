---
layout: ../../layouts/Post.astro
title: 'Google action learn more button'
metaTitle: 'Google action learn more button'
metaDesc: 'Adding a learn more button to a Google action response'
ogImage: /images/14-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e5e4cd84-6288-4d27-95ea-d0acf5948c00
date: 2022-09-14T03:00:00.000Z
tags:
  - google-actions
---

Now that we are able to fetch data from an RSS feed and show it in the Google Action, how about we add a button to learn more.

A thing to note is that depending on the device, the button might not be rendered.
For instance smart home devices won't show the button, the mobile assistant on the other hand will show them.

For this article i'll be using what we build yesterday, you can find the [article here](https://daily-dev-tips.com/posts/google-action-fetching-data-from-an-rss-feed/).

## Adding a learn more button to Google action

We can actually add the button component as part of our allready existiong card and leverage the RSS data we fetched.

The card can look like this:

```js
conv.add(
  new Card({
    title: jsonData.feed.entry[0].title._cdata,
    text: jsonData.feed.entry[0].content._cdata,
    image: new Image({
      url: 'https://daily-dev-tips.com/images/logo.png',
      alt: 'Daily Dev Tips logo',
    }),
    button: new Link({
      name: 'Read more',
      open: {
        url: jsonData.feed.entry[0].link._attributes.href,
      },
    }),
  })
);
```

Make sure your importing this new `Link` component like this:

```js
const { Link } = require('@assistant/conversation');
```

And if we now test our action on mobile phones for instance we should see the button that will link to the specific article.

Below is a screen recording on my mobile phone showing the full flow.

<!-- ![Google action learn more button](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2t55n28euqlj8s7vnq67.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1662273464/google-action_lrsgig.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1662273463/google-action_kdoyan.mp4" type="video/mp4" />
</video>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
