---
layout: ../../layouts/Post.astro
title: 'Ionic adding a side menu'
metaTitle: 'Ionic adding a side menu'
metaDesc: 'Today we will be adding a sidemenu and a tabbar in one Ionic application'
image: /images/02-03-2021.jpg
date: 2021-03-02T03:00:00.000Z
tags:
  - ionic
---

The other day I had to make an Ionic application with a tab bar and a side menu.

Today, I'll be showing you how to create this yourself.

As the starter template, we will use the Ionic tabs, which you can find on my [Ionic start GitHub repo](https://github.com/rebelchris/ionic-app).

The result for today will look like this:

![Ionic tabbar with sidemenu](https://cdn.hashnode.com/res/hashnode/image/upload/v1614235408399/0JhQhrDvJ.gif)

## Adding the Menu component

We need to open up the `app.component.html` file. This is the main wrapper for our application, and currently, it looks like this:

```html
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

Inside the ion-router-outlet, our pages get loaded, and yes, this includes even the tab bar.

So this is where we can extend with an `ion-menu`.

It will look like this:

```html
<ion-app>
  <ion-menu side="start" contentId="content">
    <ion-header>
      <ion-toolbar>
        <ion-title class="menu-title">Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-menu-toggle auto-hide="true">
          <ion-item routerLink="/tabs/tab1" routerDirection="forward">
            <ion-label>Tab 1</ion-label>
          </ion-item>
          <ion-item routerLink="/tabs/tab2" routerDirection="forward">
            <ion-label>Tab 2</ion-label>
          </ion-item>
          <ion-item routerLink="/tabs/tab3" routerDirection="forward">
            <ion-label>Tab 3</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="content"></ion-router-outlet>
</ion-app>
```

Wow, quite a change, right? But don't worry, it's more markup than anything else.

As you can see, we added the `<ion-menu>` section above the router outlet.
Inside this, we add a header, the menu's header, once it's open.

The next thing we have is an `ion-content` section which holds an ion-list with items that link to each tab.
Clicking each item will navigate to the specific page.

However, we don't see a menu icon if we now run this. We can swipe the menu open. But that's not very clear to anyone.

## Adding the menu icon in Ionic

To add the icon, we need to modify our existing headers to reflect the header toggle.

Now we can open each `html` file where the menu icon should be visible and add the following to the `ion-toolbar`.

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Tab 1</ion-title>
  </ion-toolbar>
</ion-header>
```

I've done this for the following pages:

- tab1.page.html
- tab2.page.html
- tab3.page.html

And there you have it. We can now navigate through the tabs as well as the menu!

You can find the complete code for today's article on [GitHub](https://github.com/rebelchris/ionic-app/tree/side-menu).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
