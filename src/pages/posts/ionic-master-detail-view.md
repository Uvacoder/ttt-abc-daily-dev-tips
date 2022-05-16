---
layout: ../../layouts/Post.astro
title: 'Ionic Master Detail view'
metaTitle: 'Ionic Master Detail view'
metaDesc: 'Detail views are an important part of many apps, in this article we explore how to add them.'
image: /images/08-02-2021.jpg
date: 2021-02-08T03:00:00.000Z
tags:
  - ionic
---

Yesterday we added [API results to our Ionic app](https://daily-dev-tips.com/posts/ionic-getting-pokemon-cards-from-an-api/). Let's see how we can introduce a detail view to this.

Meaning someone should be able to click on a specific card which should open up a detail screen with more information.

The result will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/ionic-master-detail_wdn1pz.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/ionic-master-detail_zjva6a.mp4" type="video/mp4" />
</video>

## Adding the detail page

Let's start by generating this detail page.

```bash
ng g page detail
```

Now let's make sure it's accessible as a sub route under our tab2.page.
Let's open up `tab2-routing.module.ts` and add the newly created route under a `:id` parameter.

```js
const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../detail/detail.module').then((m) => m.DetailPageModule),
  },
];
```

This will ensure we can access the route under the following URL: `tabs/tab2/:id`.

While we are at tab2, let's add the link to the route.
Open up `tab2.page.html` and add a router link to the image.

```html
<img [routerLink]="card.id" [src]="card.imageUrl" [title]="card.name" />
```

This will now navigate to the detail page, but there isn't much to see yet.

## Retrieving the data on the detail page

It's possible to send the data along, but imagine someone closing the app on the detail page, the in-store cache might get lost, and we now have no idea what card they are looking at.

Because of this, we will perform an API request based on the ID. For instance, it is an excellent practice to cache this locally using localStorage.

Open up the `detail.page.ts` file.

```js
export class DetailPage {
  card: Card;
  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ionViewWillEnter() {
    let id:string = this.route.snapshot.paramMap.get('id');
    this.cardService.get(id).then((card: Card) => this.card = card);
  }
}
```

We add a local card reference, which will be available for the HTML, then we inject our card service and the Router.

We use the view will enter to load the data correctly.
Then we first retrieve the card's ID from the URL and pass that to the card service get function. This will return a card which we update our local reference.

You might be thinking, but we don't have this get method yet, and you are right! So let's open up the `card.service.ts` and add this method:

```js
get(id: string): Promise<Card> {
  return PokemonTCG.Card.find(id);
}
```

All we need to do is render the HTML for the detail page.

```html
<ion-header>
  <ion-toolbar>
    <ion-title>{{card?.name}}</ion-title>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle
        >{{ card?.supertype }} - {{ card?.subtype }}</ion-card-subtitle
      >
      <ion-card-title>{{ card?.name }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <h4>{{ card?.ability?.name }}</h4>
      <p>{{ card?.ability?.text }}</p>
    </ion-card-content>
  </ion-card>
</ion-content>
```

As you can see, we use elements like `card?.property`. The question mark will make sure the element is available.
Else we might get errors saying something like: Trying to get property of undefined.

With this in place, you have the detail page setup.

![Ionic detail page](https://cdn.hashnode.com/res/hashnode/image/upload/v1612333297252/tVX9-cSMd.png)

You can find today's code on the following [GitHub Repo](https://github.com/rebelchris/ionic-firebase-login/tree/feature/master-detail).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
