---
layout: ../../layouts/Post.astro
title: 'Adding pages in Ionic using App-Explore-Container'
metaTitle: 'Ionic generate page with app-explore-container [2022]'
metaDesc: 'Today we are adding a page to our new Ionic app'
image: /images/05-07-2020.jpg
date: 2020-07-05T03:00:00.000Z
tags:
  - ionic
---

What is an App without any pages?

Not much right, unless you are the person that made that [million-dollar app](https://en.wikipedia.org/wiki/I_Am_Rich) back in the day.

So today we'll learn how to generate pages in an Ionic application.

## Ionic page generator

Luckily we don't have to create the page and link it manually.
Ionic comes with an awesome generator to add pages.

We can easily **create a page using the following command**:

```bash
ionic generate <type> <name>
```

So for the page:

```bash
ionic generate page contact
```

This command generates an Ionic page and automatically adds it to our routing file.

## Navigate to an Ionic page with app-explore-container

So let's create a button on our first tab, which will link to the new page.

Open up `tab1.page.html` and **add below code before** the app-explore-container HTML element (`<app-explore-container name="Tab 1 page"></app-explore-container>`):

```html
<div class="button-container">
  <ion-button (click)="goToContact()">Contact</ion-button>
</div>
```

As you can see we define an ion-button with a click action which we will make in the `ts` file.

Then we add some `SCSS` in `tab1.page.scss`

```css
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}
```

Now open then `tab1.page.ts` file and add the click function:

```js
import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  goToContact() {
    this.navCtrl.navigateForward('contact');
  }
}
```

We are using the `NavController` and navigate forward to our `contact` page. This page is set up in our router by the Ionic generator.

## Navigate back to the homepage

Of course, we want to be able to go back to our home app with the tab-bar.

We can use the following `HTML` snippet inside `contact.page.html`

```html
<ion-content>
  <div class="button-container">
    <ion-button (click)="goBack()">Back</ion-button>
  </div>
</ion-content>
```

Then add the following `SCSS` to `contact.page.scss`:

```css
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
```

Then we make the goBack function in `contact.page.ts`:

```js
import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }
}
```

There you have it. This is how you generate a new page in an Ionic app and navigate back and forth. Run `ionic serve` and we should see the contact button on our first tab, and be able to navigate to the contact page and back.

### The example code for creating an Ionic page can be seen in this Github repository

[Link to Ionic code on Github](https://github.com/rebelchris/ionic-app/tree/article/adding-pages)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
