---
layout: ../../layouts/Post.astro
title: 'Ionic modals passing and receiving data'
metaTitle: 'Ionic modals passing and receiving data'
metaDesc: 'How to pass and receive data from modals in Ionic'
image: /images/04-03-2021.jpg
date: 2021-03-04T03:00:00.000Z
tags:
  - ionic
---

Yesterday we made a [modal in Ionic](https://daily-dev-tips.com/posts/adding-modals-to-an-ionic-app/), modals are really cool, but generally, we want to pass or receive data from them.

That will be what we'll be making today, a modal that passes, modifies, and returns data.

The result for today will look something like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/io-data_scsedq.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/io-data_ap7ngf.mp4" type="video/mp4" />
</video>

## Passing data to an Ionic modal

Let's first start by passing data to our modal. This is as simple as calling the `componentProps` on our modalController create function.

```js
number: number = 3;

const modal = await this.modalController.create({
  component: DetailPage,
  componentProps: {
    number: this.number,
  },
});
```

Then in the `DetailPage` we can retrieve these values by defining them inside our component!

```js
export class DetailPage implements OnInit {
  number: number;

  ngOnInit() {
    console.log(this.number);
  }
}
```

That is how easy it is to pass data to our modal component.

## Ionic modal dismiss receive data

Of course, we also want to be able to receive this data back in our main component (`tab1.page.ts`).

Before we pass the data back, let's add a function that can modify the number for us.

In our `detail.page.html`, we add the following markup:

```html
<ion-item>
  <ion-icon name="remove-circle" (click)="sub()" item-right></ion-icon>
  <ion-input
    type="number"
    min="1"
    class="ion-text-center"
    [value]="number"
    [(ngModel)]="number"
  ></ion-input>
  <ion-icon name="add-circle" (click)="plus()" item-right></ion-icon>
</ion-item>
```

Now let's add the `plus` and `sub` functions in the `detail.page.ts` file:

```js
plus() {
  this.number++;
}

sub() {
  this.number--;
}
```

This will modify our number, but we still need to pass it back to our initial `tab1.page`. For that, we need to alter the `dismiss` function.

```js
dismiss() {
  this.modalController.dismiss({
    number: this.number,
  });
}
```

This will send the number as the variable `number`.

In our `tab1.page.ts` we can receive this, but adding an `onDidDismiss` callback in the `presentModal` function:

```js
modal.onDidDismiss().then((data) => {
  this.number = data.data.number;
});
```

This will receive the data and update the number.
Then the next time we open the modal, the new number will reflect.

And there you have it, passing and receiving data in Ionic Modals.

You can find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/modal-data).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
