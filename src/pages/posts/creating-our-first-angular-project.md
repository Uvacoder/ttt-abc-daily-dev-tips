---
layout: ../../layouts/Post.astro
title: 'Creating our first Angular project'
metaTitle: 'Creating our first Angular project'
metaDesc: 'Getting into the basics of setting up an Angular project'
image: /images/13-10-2020.jpg
date: 2020-10-13T03:00:00.000Z
tags:
  - angular
---

Over time I made quite a few first applications like [Ionic](https://daily-dev-tips.com/posts/our-first-ionic-app/) and [React](https://daily-dev-tips.com/posts/our-first-react-application/).

Today we'll be looking at starting our first Angular project.

We will be creating a fundamental application that looks like this:

![Angular routing gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1601962584230/Ijbr8LPpS.gif)

## What is Angular?

Angular is a framework that can be used to create single-page applications.
It can also be used in mobile applications like Ionic.

Angular is a component-driven framework like we see in React as well.

It's written in Typescript, making our lives easier and using HTML as its primary front end.

## Installing the Angular CLI

To start, we must first set up the Angular CLI (Command Line Interface). This is a tool we can run in our terminal and can be used to generate specific components for us.

Open your favorite terminal ([iTerm2 is mine]()) and run the following command.

```bash
npm install -g @angular/cli
```

Now that our Angular CLI is installed, we can verify it works by running the following command.

```bash
ng v
```

We should then see a response close to this. (Versions may differ)

![Angular CLI running](https://cdn.hashnode.com/res/hashnode/image/upload/v1601961559630/TW8WsaHq7.png)

## Starting our first Angular project

Once the Angular CLI is installed, we can use the following command to generate our first app.

```bash
ng new angular-app
```

This will ask you if you want to use Routing and which stylesheet pre-processor you wish to use.

I choose Yes for Routing and `SCSS` for the stylesheet.

Now we can navigate to our application and run the `ng serve` command to start our app up.

```bash
cd angular-app
ng serve
```

We can then open a browser at `localhost:4200` and see our first application.

![First Angular app](https://cdn.hashnode.com/res/hashnode/image/upload/v1601961975956/D9TCFDjDI.png)

## Adding components

Angular is a component-based framework, so let's add a new component.

We can use the Angular CLI to generate this for us.

```bash
ng generate component welcome
```

This will generate our welcome component, but we won't be able to do anything with it just yet.

Let's first add a new route for this component.

Open your editor and find the following file: `src/app/app-routing.module.ts`.

Add the import for the welcome component up top and change the routes.

```js
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [{ path: 'welcome', component: WelcomeComponent }];
```

Now let's edit our `app.component.html` to look like this.

```html
<h1>Our first angular app</h1>
<nav>
  <ul>
    <li><a routerLink="/" routerLinkActive="active">Empty homepage</a></li>
    <li><a routerLink="/welcome" routerLinkActive="active">Welcome</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```

Here we create our navigation that will link to the empty homepage and the welcome page.

Then at the bottom, we have our `router-outlet`, which will show the router output.

This will result in the following.

![Angular routing gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1601962584230/Ijbr8LPpS.gif)

There we go. We created our basic Angular app and added a custom component that we can route to.

We can build many more pages and create a fully functional website from here!

You can find more information on the [Angular website](https://angular.io/) or download this project from [GitHub](https://github.com/rebelchris/angular-starter-demo).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
