---
layout: ../../layouts/Post.astro
title: 'Ionic adding toast messages'
metaTitle: 'Ionic adding toast messages'
metaDesc: 'Toast messages are a great way to give user feedback in Ionic mobile apps'
image: /images/06-03-2021.jpg
date: 2021-03-06T03:00:00.000Z
tags:
  - ionic
---

Toast messages are a great way to give the user feedback on actions. They are little popups that can auto-disappear and show a small description of what happened.

Some use-cases are generally action feedbacks like: "Item successfully saved", "Shared on Facebook", "Deleted this item". But they can also showcase more generic elements: "No internet connection", "API Call failed", and more.

Ionic makes it super easy to add these messages to our app, and I'll show you how to do it.

The result will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/toast_y16jhb.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/toast_z6pdfb.mp4" type="video/mp4" />
</video>

## Adding Toast messages to an Ionic app

Let's start with our basic Ionic started again. You can find this [Ionic starter on GitHub](https://github.com/rebelchris/ionic-app).

Let's open up our `tab1.page.html` file first and add some buttons that will open up our toast messages for now.

```html
<div class="ion-padding">
  <ion-button expand="block" (click)="topToast()">Top toast</ion-button>
  <ion-button expand="block" (click)="middleToast()">Middle toast</ion-button>
  <ion-button expand="block" (click)="bottomToast()">Bottom toast</ion-button>
  <ion-button expand="block" (click)="buttonToast()">Button toast</ion-button>
</div>
```

This will create four full-width buttons that we'll use to show specific toast messages.

Now, these all have click actions that we'll start adding in our `tab1.page.ts` file.

In order to use the Toast messages, we have to make them available in our `ts` file.

```js
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public toastController: ToastController) {}
}
```

Now we can use the toastController in this file to create toast messages.
Let's start by creating our first toast, the `topToast` that should show a toast message on the top of our screen.

```js
async topToast() {
	const toast = await this.toastController.create({
	  message: `Hi i'm the top toast`,
	  duration: 2000,
	  position: "top",
	});
	toast.present();
}
```

This will create a basic toast message. You can see we are using three of its properties.

- `message`: The actual messages that are displayed
- `duration`: The amount of milliseconds the toast is visible
- `position`: Where it's placed on the page

And with this, it will show a toast message for 2000MS on the top of the screen.

The middle and bottom one will look like this:

```js
async middleToast() {
	const toast = await this.toastController.create({
	  message: `Hi i'm the middle toast`,
	  duration: 2000,
	  position: "middle",
	});
	toast.present();
}

async bottomToast() {
	const toast = await this.toastController.create({
	  message: `Hi i'm the bottom toast`,
	  duration: 2000,
	  position: "bottom",
	});
	toast.present();
}
```

The last one we have in our demo is one with buttons on it.
This will look a little bit different.

```js
async buttonToast() {
	const toast = await this.toastController.create({
	  header: `Hi i'm a toast with buttons`,
	  message: "Close me",
	  position: "top",
	  buttons: [
	    {
	      side: "start",
	      icon: "heart-outline",
	      handler: () => {
	        console.log("I loved it clicked");
	      },
	    },
	    {
	      text: "Done",
	      role: "cancel",
	      handler: () => {
	        console.log("Cancel clicked");
	      },
	    },
	  ],
	});
	toast.present();
}
```

We have quite a few cool options here. As you can see, we no longer have a duration, which will make the toast stay on our screen.
Then we have the option to add multiple buttons. I've added two buttons for this demo. Clicking either one will close the toast.

This can be super useful to do quick feedback options.

And that's it. We've learned the essentials of using and creating toast messages in Ionic.

You can find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/toast).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
