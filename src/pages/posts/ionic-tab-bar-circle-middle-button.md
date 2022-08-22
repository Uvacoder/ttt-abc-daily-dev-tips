---
layout: ../../layouts/Post.astro
title: 'Ionic tab bar circle middle button'
metaTitle: 'Ionic tab bar circle middle button'
metaDesc: 'Making the center tab button stand out in Ionic'
image: /images/19-05-2021.jpg
date: 2021-05-19T03:00:00.000Z
tags:
  - ionic
---

Today I'll show you how to make a circle middle button inside a tab bar.

It's a way to make a button stand out more from the tab bar and can be your center of attention inside your app.

![Ionic tab bar circle middle button](https://cdn.hashnode.com/res/hashnode/image/upload/v1621167888069/uE8pRg5vI.png)

## Circle middle tab bar button

We won't be making everything from scratch, so if you plan to work with me on this article, download the [Ionic tab bar starter](https://daily-dev-tips.com/posts/creating-segment-tabs-in-ionic/) from [GitHub](https://github.com/rebelchris/ionic-app/tree/segments).

From there, open up the project in your editor of choice.
If we run the application, we will get a basic tab bar, and we will focus on changing this tab bar.

![Ionic basic tabbar](https://cdn.hashnode.com/res/hashnode/image/upload/v1621167346918/16BpF6X3o.png)

Open up the `tabs/tabs.page.html` file.

For our example, we will make five buttons in our tab bar. The middle one will be outstanding.

Let's start by adding the five buttons and making the middle one an empty one.

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="triangle"></ion-icon>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="ellipse"></ion-icon>
      <ion-label>Tab 2</ion-label>
    </ion-tab-button>

    <ion-tab-button></ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="square"></ion-icon>
      <ion-label>Tab 4</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="egg"></ion-icon>
      <ion-label>Tab 5</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

This will result in the following:

![Ionic 5 tabs](https://cdn.hashnode.com/res/hashnode/image/upload/v1621167568524/TM72TjTOj.png)

You might think, cool, but we are missing that bottom one!
And you're right, so we'll add a FAB button for that.

It will take place outside of our tabs and look like this.

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button>
    <ion-icon name="leaf"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

And this will give us the following:

![Middle fab button tab bar Ionic](https://cdn.hashnode.com/res/hashnode/image/upload/v1621167818482/9RHxSaLDVq.png)

Cool and simple right?
You can also find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/circle-middle-button)!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
