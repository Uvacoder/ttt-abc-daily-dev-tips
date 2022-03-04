---
layout: ../../layouts/Post.astro
title: 'Using alerts in Ionic'
metaTitle: 'Using alerts in Ionic'
metaDesc: 'Adding alerts to prompt users for specifc actions or inputs in Ionic.'
image: /images/07-03-2021.jpg
date: 2021-03-07T03:00:00.000Z
tags:
  - ionic
---

So far, we have seen [Modals in Ionic](https://daily-dev-tips.com/posts/adding-modals-to-an-ionic-app/), [Toast messages for Ionic](https://daily-dev-tips.com/posts/ionic-adding-toast-messages/), so let's look at alerts messages today.

Alerts are a great way to have a bit more in your face toast message.
They require user action to be dismissed, and they can even prompt to ask for data!

A typical alert in Ionic will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/ionic-alerts_niu1yn.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/ionic-alerts_m5cw9x.mp4" type="video/mp4" />
</video>

## Adding alerts in Ionic

Let's start by using our default [ionic starter app](https://daily-dev-tips.com/posts/our-first-ionic-app/) again.
We'll start by adding a button in our `tab1.page.html` first.

```html
<div class="ion-padding">
  <ion-button expand="block" (click)="showAlert()">Show alert</ion-button>
  <ion-button expand="block" (click)="showPrompt()">Show prompt</ion-button>
</div>
```

This will create two buttons. They both have their own actions, which we'll make separately.

First, we have to load the `alertController` into our `tab1.page.ts` file.

```js
import { AlertController } from "@ionic/angular";

export class Tab1Page {
  constructor(public alertController: AlertController) {}
}
```

Let's start by adding the default `showAlert` function. This will just show an alert with one button.

```js
async showAlert() {
	const alert = await this.alertController.create({
	  header: "Alert",
	  subHeader: "Subtitle",
	  message: "This is an alert message.",
	  buttons: ["OK"],
	});

	await alert.present();
}
```

This will result in the following:

![Ionic default alert](https://cdn.hashnode.com/res/hashnode/image/upload/v1614667828108/mfQ5TLxon.png)

As you can see, the user will have to click the button to continue. This is perfect if you want the user to be aware of something that happened.

## Capturing button clicks on Ionic alerts

In many cases, you might want to render multiple buttons and capture which buttons were clicked. Imagine an accept/decline option and how we can capture that?

```js
async showOptions() {
	const alert = await this.alertController.create({
	  header: "Alert",
	  message: "Choose an option below",
	  buttons: [
	    {
	      text: "Decline",
	      role: "cancel",
	      handler: () => {
	        console.log("Declined the offer");
	      },
	    },
	    {
	      text: "Accept",
	      handler: () => {
	        console.log("Accepted the offer");
	      },
	    },
	  ],
	});

	await alert.present();
}
```

This function will also show an alert, but in this case, it will have two buttons.
As you might see, I've added the `role: cancel` to one. This is the callback that's called when someone clicks the backdrop to close the alert.
If we run this code, we can see in the console which button was clicked.

![Ionic alert options](https://cdn.hashnode.com/res/hashnode/image/upload/v1614668265297/PUy0F8nF_.png)

## Adding input options to Ionic alerts

Another thing we can use alerts for is showing prompts to the user. Let's say we want to capture a specific name inside an alert.

```js
async showPrompt() {
	const alert = await this.alertController.create({
	  header: "Prompt!",
	  inputs: [
	    {
	      name: "name",
	      type: "text",
	      placeholder: "Your name",
	    },
	  ],
	  buttons: [
	    {
	      text: "Cancel",
	      role: "cancel",
	      handler: () => {
	        console.log("Confirm Cancel");
	      },
	    },
	    {
	      text: "Ok",
	      handler: (data) => {
	        console.log(`The name is ${data.name}`);
	      },
	    },
	  ],
	});

	await alert.present();
}
```

This will prompt an alert with an input field.
Once we fill the field and click the Ok button, we see the name logged in our console.
If we click the Cancel button, we won't read the name.

![Ionic prompt form](https://cdn.hashnode.com/res/hashnode/image/upload/v1614668564198/sJnzylBGe.png)

You can find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/alert).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
