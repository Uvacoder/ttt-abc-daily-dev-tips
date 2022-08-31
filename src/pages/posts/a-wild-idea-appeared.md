---
layout: ../../layouts/Post.astro
title: 'A wild idea appeared'
metaTitle: 'A wild idea appeared'
metaDesc: 'A wild idea to make a Google Action for my blog'
ogImage: /images/10-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/770f5963-9c2d-4ba8-6866-afd1dad6f000
date: 2022-09-10T03:00:00.000Z
tags:
  - google-actions
---

I got this crazy idea a while ago that it would be super cool to have a custom Google Action that I could load onto my Google home device.

My idea is to be able to ask it for the latest dev tip, and it will prompt back the latest article I've written.

At first, it seemed impossible, but I decided to give it a go.
In the following few articles, I'll dive into this quest, and hopefully, we'll be able to create it.

## Getting started

For this article in specific, we'll get started with the rough setup and gather the pieces we'll need.

The first thing you'll need is a [Google Action developer account](https://console.actions.google.com/). You can simply follow the steps on the page.

Once logged in, you can create your first action on the webpage.
You can pick and of the existing samples to get started.

Once you have created one, you'll be able to get into the visual editor of Google Actions.

For now, we'll be using that.
If you go to the Settings tab, you'll be able to choose the display name. This will be the name of your application.

In my case, I went with "Daily Dev Tip".

![Google Actions display name](https://cdn.hashnode.com/res/hashnode/image/upload/v1661924686695/C1frmPxw1.png)

Then we can move on to the main invocation, which will be the action that happens when users interact with our app.
In my case, I dummy-mocked what I wanted to happen.

In the Invoke tab, I added the following YAML to mock the actions that should happen.

```yml
candidates:
  - first_simple:
      variants:
        - speech: Here is the latest dev tip
    content:
      card:
        title: Some article
        text: Summary
        image:
          URL: 'https://developers.google.com/assistant/assistant_96.png'
          alt: Article description
```

This will result in Google first saying: "Here is the latest dev tip", and showing the rich article card.

This will look something like this:

![Google action testing](https://cdn.hashnode.com/res/hashnode/image/upload/v1661924997845/ifDvhRqSn.png)

That is already perfect but, of course, still super static. We'll need to figure out how to query our endpoint to get the latest article.

More on that in the following articles.
If you are keen to learn with me, don't forget to subscribe to my newsletter not to miss any articles.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
