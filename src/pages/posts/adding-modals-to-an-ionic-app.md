---
layout: ../../layouts/Post.astro
title: 'Adding modals to an Ionic app'
metaTitle: 'Adding modals to an Ionic app'
metaDesc: 'Modals are a big part of apps, let me show you how to use them in Ionic.'
image: /images/03-03-2021.jpg
date: 2021-03-03T03:00:00.000Z
tags:
  - ionic
---

Modals are a big thing in apps. You see them almost everywhere for small detail transactions.

In this article, I'll show you how to add your modal to an Ionic app.

The result will look like this.

![Ionic Modal component](https://cdn.hashnode.com/res/hashnode/image/upload/v1614318788454/wbT-ar541.gif)

> This tutorial will pick up from our [starting Ionic app](https://daily-dev-tips.com/posts/our-first-ionic-app/), which you can download from [GitHub](https://github.com/rebelchris/ionic-app).

## Modals in an Ionic app

We will be adding a modal to our first tab page.
Open up the `tab1.page.ts` file.

Start by creating a function that we can call through the HTML in a second.
This function will be an `async` function and call the modalController to create a certain modal.

```js
async presentModal() {
  const modal = await this.modalController.create({
    component: DetailPage
  });

  return await modal.present();
}
```

We do have to register the `modalController` in our constructor.

```js
constructor(public modalController: ModalController) {}
```

And you might have spotted we use a component called `DetailPage`, so let's go ahead and create that one.

```bash
ng g page Detail
```

This will generate the DetailPage for us. (Make sure you import the detail page in the tab1.page.ts)

### Calling the modal

We can call the `presentModal` function from our `tab1.page.html` file to prompt the modal.

```html
<ion-button (click)="presentModal()" expand="block">Show Modal</ion-button>
```

This will create a button that will open the detail modal on click.

However, when this happens, you might have spotted there is no way to close the modal now.

Luckily we can leverage a global `modalController` by injecting it into the `detail.page.ts` file.

```js
constructor(public modalController: ModalController) {}
```

Then we can create a dismiss function, which will handle the dismissal of the modal.

```js
dismiss() {
  this.modalController.dismiss();
}
```

It's pretty common to have a back button on the detail page that will dismiss the modal so let's add one in `detail.page.html`.

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button color="white" (click)="dismiss()">
        <ion-icon name="arrow-back"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Detail</ion-title>
  </ion-toolbar>
</ion-header>
```

We can add a button on the page that will dismiss the modal.

```html
<ion-content fullscreen class="ion-padding">
  <ion-button (click)="dismiss()" expand="block">Dismiss Modal</ion-button>
</ion-content>
```

This button will do the same, dismiss our modal.

And there you go, modals in Ionic are super easy and helpful.
They can even pass and return data, which we'll discuss in another topic.

You can find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/modal).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
