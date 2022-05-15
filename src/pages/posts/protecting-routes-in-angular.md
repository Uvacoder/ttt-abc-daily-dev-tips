---
layout: ../../layouts/Post.astro
title: 'Protecting routes in Angular 👮‍♂️'
metaTitle: 'Protecting routes in Angular 👮‍♂️'
metaDesc: 'How to protect routes in Angular, some routes are just for logged in users.'
image: /images/24-10-2020.jpg
date: 2020-10-24T03:00:00.000Z
tags:
  - angular
---

Protecting specific routes in Angular is an everyday use case. Most applications will have some logged-in section.

Yesterday we [created a login service](https://daily-dev-tips.com/posts/angular-authenticating-users-from-an-api/), so that someone can log in to our application.

But having this, we can also go to the home route not being logged in.

That's weird because we don't have a user and see nothing.

![Home page available](https://cdn.hashnode.com/res/hashnode/image/upload/v1603003313238/FXp0yfcgm.png)

Let's fix that and make `home` a protected route.

## Creating our auth guard

First, let's open the terminal and generate a new service.

```bash
ng generate service guards/AuthGuard
```

This will generate the `auth.guard` service inside the guards folder.

```js
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'});
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authService.userValue;
      if (currentUser) {
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
```

We use the `CanActivate` method to intercept if this route can become active. We will place this in the routing in a second.

Then we overwrite this actual function and check if we have a current user value in our `authService`.

If we do, it's okay, and the route can return true (valid route).
Else we redirect the user to the login page.

## Implementing the auth guard

To implement the auth guard we just created, we need to modify our `app-routing.module.ts`.

```js
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  // Other routes
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
];
```

You see, it's as simple as passing the `canActive` option without custom `AuthGuardService`.

If we visit the home page without being logged in, we will be redirected to log in.

Once we log in, we will be able to see the page.

![Auth Guard in Angular](https://cdn.hashnode.com/res/hashnode/image/upload/v1603004398467/gyUqRPsIh.gif)

You can also find this code on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/auth).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
