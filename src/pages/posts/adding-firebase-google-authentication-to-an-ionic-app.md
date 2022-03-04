---
layout: ../../layouts/Post.astro
title: 'Adding Firebase Google authentication to an Ionic app'
metaTitle: 'Adding Firebase Google authentication to an Ionic app'
metaDesc: 'How to add firebase Google authentication to an Ionic app'
image: /images/04-02-2021.jpg
date: 2021-02-04T03:00:00.000Z
tags:
  - firebase
  - ionic
---

Today we are going to be adding Firebase authentication to an Ionic app.

I'm working on a new mobile app, that needs some kind of authentication, and what better than using social authentication.

Luckily for us, Firebase comes with these pre-build making our lives easier, and today we will be adding this to an Ionic mobile app.

We will be using Google to authenticate to our application, the main goal for today is to be able to connect to Google and return our user object.

It will look like this:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/firebase_ek3rcv.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/firebase_zlj5ty.mp4" type="video/mp4" />
</video>

## Ionic project setup

I won't go into full detail about setting up Ionic, you can find my full tutorial in this article: [Our first Ionic app](https://daily-dev-tips.com/posts/our-first-ionic-app/).

However, we can run the following command once you have Ionic setup:

```bash
ionic start firebase-login tabs
```

This will create a basic starter for Ionic with the tabbar, for the example, it doesn't really matter if you have this, but it's my default one.

Then we can `cd` into our directory and run the ionic serve command:

```bash
cd firebase-login
ionic serve
```

We can then view our app in the browser by visiting `http://localhost:8100`.

![Default tab Ionic](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007134788/MmTH9EqvO.png)

## Creating the app in Firebase

Let's first head over to [Firebase](https://console.firebase.google.com/u/0/) and create our first application there.

![Adding a new project in Firebase](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007605463/JA5qVCP57.png)

This will ask for a name

Once the project is created, you need to click the Web config button.

![Web config button](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007722976/NZ5QGtg_L.png)

You can give the app a nickname to remember it by.

In the next step, you can the firebaseConfig, for our project we only need the variables.

![Firebase variables](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007817436/HheOTJfIl.png)

The last step on the Firebase side is to head over to Authentication and click the "Get started" button.

![Firebase Authentication](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007902355/QYO4mo8Gc.png)

On the next screen click the Google provider it will open a popup on which you will have to click the enable button on top.

![Authentication Google in Firebase](https://cdn.hashnode.com/res/hashnode/image/upload/v1612007936739/MwH2KcGtM.png)

Once this is done, people will be able to authenticate with Google in our Ionic app.

### Access to the Firebase config

Now that we have Firebase setup so far, we can go back to our application and first modify our `environment.ts` file so that Firebase is configured.

```js
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'XXXXXXXXXXXXXXXXXX',
    authDomain: 'xxx.firebaseapp.com',
    projectId: 'xxxxxxx',
    storageBucket: 'xxxxx.appspot.com',
    messagingSenderId: 'xxxxxxxxx',
    appId: '1:xxxxxx:web:xxxxxxx',
    measurementId: 'G-xxxxx'
  }
};
```

These are the detail you got from enabling the Web app on the Firebase side, you can always go back there and get the config back.

## Adding Firebase to our app

Now we can go ahead and add Firebase to our application.
Run the following command to get the package.

```bash
npm install firebase @angular/fire --save
```

Next up, we should enable the Angular modules in our `app.module.ts` file.

```js
// All the other imports
import {environment} from './../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // Other imports
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    // Other providers
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Now that we enabled Firebase with the settings from the environment file we should be able to use Firebase to Authenticate people.

Let's open up our `tab1.page.ts` file to add the logic we want.

```js
export class Tab1Page {
  user = null;

  constructor(public fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
    });
  }

  login() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }
}
```

We create an empty user variable, next we pass the fireAuth to our constructor.
And subscribe to the authState, this will return a value each time the authState in Firebase changes.

Once we receive a user we set the current user to that object.

Then we add a login function that will call the Firebase authentication and pass a new Google authenticator.

The last function is the logout, which will log out the person from our app.

With this, we can start working on the frontend.
Open `tab1.page.html`.

Let's add the content.

```html
<ion-content>
  <form *ngIf="!user">
    <ion-row>
      <ion-col>
        <ion-button type="submit" color="success" (click)="login()" expand="block"
          >Login with Google</ion-button
        >
      </ion-col>
    </ion-row>
  </form>

  <ion-card *ngIf="user">
    <ion-img [src]="user.photoURL"></ion-img>
    <ion-card-header>
      <ion-card-subtitle>{{user.email}}</ion-card-subtitle>
      <ion-card-title>{{user.displayName}}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-button (click)="logout()" expand="block" color="danger">Logout</ion-button>
    </ion-card-content>
  </ion-card>
</ion-content>
```

We have one section for is the user is not known, this will render a form with a button calling our `login` function.

If we do know the user we render a card, this card includes the profile picture of the user, as well as his email and display name.

We also include the logout button for them.

And that's it, as you can see it's pretty quick to enable social login for your Ionic apps using Firebase.

If you want to view the demo files for today's article please follow this [GitHub link](https://github.com/rebelchris/ionic-firebase-login).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
