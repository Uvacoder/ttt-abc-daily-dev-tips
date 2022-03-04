---
layout: ../../layouts/Post.astro
title: 'Ionic adding infinite scroll to our list'
metaTitle: 'Ionic adding infinite scroll to our list'
metaDesc: 'How to add infinite loading to our list in Ionic.'
image: /images/01-11-2020.jpg
date: 2020-11-01T03:00:00.000Z
tags:
  - ionic
---

Yesterday we created an [API powered list in Ionic](https://daily-dev-tips.com/posts/ionic-showing-api-results-in-a-list-view/), but let's see how we can add an infinite scroll to it.

Infinite scrolls are proven to be very good on mobile phones. I think they have an addicting pattern in them.

You as a person are not forced to load a new page, and the timeline becomes endless.

A goto example would, of course, be Facebook or Instagram, but many more use this Principle.

Today we will be making an infinite loading list in Ionic, that will work as you can see in the screenshot below.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/infinite_etdcay.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/infinite_axsre8.mp4" type="video/mp4" />
</video>

## High-level overview

In a high-level overview, it comes down to old-school pagination.

Once we hit a certain scroll amount (almost at the bottom), we fire an event that will fetch our new results from the API.

In the meantime, we keep track of paging and how many results we can still load.

In the demo API that we are using our endpoint returns a result like this.

```json
{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "name": "cerulean",
      "year": 2000,
      "color": "#98B2D1",
      "pantone_value": "15-4020"
    }
    // Other data
  ]
}
```

We see there are two pages in total, so we can use our infinite loading once.

Enough to demo it out to you guys.

## Adding the infinite scroll

Our starting point for this tutorial is the end result of yesterday. You can find the code on [GitHub](https://github.com/rebelchris/ionic-app/tree/feature/lists).

Now, let's start by adding the infinite loading component to our `tab1.page.html`.

```html
<ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
  <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Loading more data..."
  >
  </ion-infinite-scroll-content>
</ion-infinite-scroll>
```

So this piece of code will call the `loadData` call, but that call is not ready to load paginated results.

Let's make some adjustments to `tab1.page.ts`.

First let's add a page number variable.

```js
page: number = 1;
```

Now we can modify our `loadData` method.

```js
loadData(event = null) {
  this.http
	.get<{ data: any[] }>(`https://reqres.in/api/unknown?page=${this.page}`)
	.subscribe((resp: { data: any; total_pages: number }) => {
	  if (this.page !== resp.total_pages) {
	    this.page++;
	  } else {
	    if (event) event.target.disabled = true;
	  }
	  this.data = this.data.concat(resp.data);
	  if (event) event.target.complete();
	});
}
```

We are now calling the API with page parameters, on the response we check if this page is the last page.

Then we add one to our page counter. Else we disable the infinite load since we are done.

Else we concat the existing data with this new data.
And tell the infinite loading this call is done.

There we go!

Ionic infinite loading list data from an API.

You can find this project code on [GitHub](https://github.com/rebelchris/ionic-app/tree/feature/infinite-load).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
