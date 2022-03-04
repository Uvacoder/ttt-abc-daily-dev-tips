---
layout: ../../layouts/Post.astro
title: 'Ionic store data for a user in Firebase'
metaTitle: 'Ionic store data for a user in Firebase'
metaDesc: 'Creating a database to store data for a specific user in Firebase'
image: /images/05-02-2021.jpg
date: 2021-02-05T03:00:00.000Z
tags:
  - ionic
  - firebase
---

In the previous article, I added [Firebase to Ionic for authentication users](https://daily-dev-tips.com/posts/adding-firebase-google-authentication-to-an-ionic-app/). But more importantly, we want to store data for this specific user.

How do we go about this?

In the example today, we will be storing very basic data to see how we can use it.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fb-count_oh14iv.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fb-count_jxqbbs.mp4" type="video/mp4" />
</video>

## Adding the Firebase database

Let's create the Firebase database, head over to the [Firebase console](https://console.firebase.google.com/), and click the database section.

![New database](https://cdn.hashnode.com/res/hashnode/image/upload/v1612096088100/A1biTkrax.png)

Once you add the database, copy the link and add it to our `environment.ts` file.

```js
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'XXXXXXXXXXXXXXXXXX',
    authDomain: 'xxx.firebaseapp.com',
    projectId: 'xxxxxxx',
    storageBucket: 'xxxxx.appspot.com',
    databaseURL: 'https://xxxxxxxx-default-rtdb.firebaseio.com',
    messagingSenderId: 'xxxxxxxxx',
    appId: '1:xxxxxx:web:xxxxxxx',
    measurementId: 'G-xxxxx'
  }
};
```

Then, let's add the Firebase database module in our `app.module.ts` file.

```js
imports: [
	BrowserModule,
	IonicModule.forRoot(),
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebaseConfig),
	AngularFireAuthModule,
	AngularFireDatabaseModule
],
```

We can now head over to our `tab1.page.ts` file to add the logic for our database.

Let's add the new variables and add the database in our construct.

```js
ref: any;
count: Observable<any>;

constructor(public fireAuth: AngularFireAuth, public db: AngularFireDatabase)
```

Then we can change the subscribe on the user and see if we have a user.

```js
this.fireAuth.authState.subscribe(user => {
  this.user = user ? user : null;
  if (this.user !== null) {
    this.ref = db.object(user.uid);
    this.count = this.ref.valueChanges();
    this.count.subscribe(initial => {
      if (initial === null) this.ref.set(1);
    });
  }
});
```

This will create a reference to our database object for the current user. This is based on their user id.

Next, we have the `count`, which keeps track of the value directly from Firebase.

We also subscribe to it to see the initial value. If this is null, it means it doesn't exist, so we set the value to be `1`.

Now let's add a cool simple function that will increment this value.

```js
addCount() {
	this.ref.set(firebase.database.ServerValue.increment(1));
}
```

This concludes the JavaScript we need, so let's go to the HTML side to add this button.

```html
<ion-button (click)="addCount()" expand="block" color="success"
  >{{ count | async }}</ion-button
>
```

This button shows the count variable, and also, when we click it, it will execute the `addCount` function.

Before logging in, our database will look like this:

![Firebase empty storage](https://cdn.hashnode.com/res/hashnode/image/upload/v1612096577832/fq9xEA30p.png)

When logging in, the user object will be created:

![Firebase user id to 1](https://cdn.hashnode.com/res/hashnode/image/upload/v1612096605252/bCAZTyg0A.png)

And when the user clicks the button a couple of times, we get this result:

![Firebase button clicked](https://cdn.hashnode.com/res/hashnode/image/upload/v1612096639600/0hnhrMk8U.png)

You can find today's code on the following [GitHub repo](https://github.com/rebelchris/ionic-firebase-login/tree/feature/database).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
