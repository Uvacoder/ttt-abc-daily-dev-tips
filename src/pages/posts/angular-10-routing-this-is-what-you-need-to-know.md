---
layout: ../../layouts/Post.astro
title: 'Angular 10 routing this is what you need to know'
metaTitle: 'Angular 10 routing this is what you need to know'
metaDesc: 'Getting started with the Angular routing components'
image: /images/16-10-2020.jpg
date: 2020-10-16T03:00:00.000Z
tags:
  - angular
---

When it comes to routing in Angular, there are some concepts we need to understand.

I will break down the following router-related topics in this article for you.

- Initial router setup
- Navigating to a route
- Fallback routes
- Redirect
- Child routes

There are some more elements, but we need to learn these are fundamental route-related topics.

Check out this article if you are looking at how to [set up an Angular project](https://daily-dev-tips.com/posts/creating-our-first-angular-project/).

> This article is written based on Angular 10

## Angular initial router setup

The Angular router is what makes Angular a Single page application. The browser never refreshes between routes. (Unless you program it as such).

If you have [set up the default Angular starter](https://daily-dev-tips.com/posts/creating-our-first-angular-project/), you will have a file called `app-routing.module.ts` in your `src/app` folder.

This one file is responsible for managing our routes.

There, we have a routes const; there, you see an array of routes, which now looks like this.

```js
const routes: Routes = [{ path: 'welcome', component: WelcomeComponent }];
```

Let's start by adding another route so we can see its effects.

Run the following command in your terminal.

```bash
ng generate component second
```

This will generate a second component.

Now we can add this component to our `app-routing.module.ts` file.

```js
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'second', component: SecondComponent },
];
```

Awesome, we can now run our app and manually visit the `localhost:4200/welcome` and `localhost:4200/second`.

> To run, open the terminal, go to the folder, and run `ng serve.

## Navigating to a route

We must ensure we can navigate each route from within the application.

To navigate a user to a route, we can use the `routerLink` on a href.

Let's open our `app.component.html` (our entry point) and modify it to look like this.

```html
<h1>Our first angular app</h1>
<nav>
  <ul>
    <li><a routerLink="/">Empty homepage</a></li>
    <li><a routerLink="/welcome">Welcome</a></li>
    <li><a routerLink="/second">Second</a></li>
  </ul>
</nav>
<hr />
<router-outlet></router-outlet>
```

Here we see the router links to our routes and a `<router-outlet>` used to render our actual page.

So what happens, the top part will always stay, and our welcome and second routes will be opened inside the `router-outlet` below.

Run this code and click the links. You should see the content change, as you can see in this GIF below.

![Angular routes](https://cdn.hashnode.com/res/hashnode/image/upload/v1602221667753/Ujy62Gry-.gif)

## Fallback routes

As you can see, we are using the router link to `/`, which is not a registered route. We can use fallback routes to catch these unexciting routes.

This also will work if someone manually types `/third` in their browser.

To set up this wildcard (404) route, we can use the `**` for the route.

Let's generate our 404 component to catch all these routes.

```bash
ng generate component notFound
```

Now let's add the route.

```js
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'second', component: SecondComponent },
  { path: '**', component: NotFoundComponent },
];
```

![Angular route not found](https://cdn.hashnode.com/res/hashnode/image/upload/v1602221919741/ZCpimDcVa.png)

## Redirect

Very cool, but we are now also getting this route not found on our initial page `localhost:4200/`..

What if we want our welcome component to be our primary component?

We can add a redirect route.

```js
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirect: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
```

Here on the third route, we say if the main page is called (empty string), we `redirect` the `/welcome` route.

You will see your URL change if you now go to your main page!

## Child routes

The last fundamental to Angular routing is the use of child routes.

Image an `admin` route or a `blog-post/category/post` setup.
We will make a child component under the second route in this case.

Let's generate our child component first.

```bash
ng generate component child
```

Then on our routing file, we can add the `children` element to our `second` route.

Every element in this children's array will be prefixed with the parent route.

```js
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'second',
    children: [
      { path: '', component: SecondComponent },
      { path: 'child', component: ChildComponent },
    ],
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
```

There is a difference in using a component in the parent, we can do this, but then we need another `router-outlet` in that parent.

We will make use of the same router for all our routes.

Let's now add the link in our app component as well.

```html
<ul>
  <li><a routerLink="/">Empty homepage</a></li>
  <li><a routerLink="/welcome">Welcome</a></li>
  <li><a routerLink="/second">Second</a></li>
  <li><a routerLink="/second/child">-> Second ~ Child</a></li>
</ul>
```

![Angular child route](https://cdn.hashnode.com/res/hashnode/image/upload/v1602222496206/s2sGpP7z2.png)

As mentioned, we can also use a second router outlet. Let me also show you that version, and let's create an about component for our welcome.

```bash
ng generate component about
```

And add it under our routes.

```js
const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [{ path: 'about', component: AboutComponent }],
  },
  {
    path: 'second',
    children: [
      { path: '', component: SecondComponent },
      { path: 'child', component: ChildComponent },
    ],
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
```

Now, if we try and visit this route, we see the welcome component.

![About not working](https://cdn.hashnode.com/res/hashnode/image/upload/v1602222663083/Zhp-NBBnc.png)

Hmm, weird, right? Well, not really. In this setup, we are stating that the main component will have a `router-outlet` for us to sub-render.

Let's open the `welcome.component.html` file and make it look like this.

```html
<h1>Welcome page</h1>
<a routerLink="/about">About</a>
<hr />
<router-outlet></router-outlet>
```

If we now run our code and click the about link on our welcome page, we get the following result.

![Angular child router-outlet](https://cdn.hashnode.com/res/hashnode/image/upload/v1602222834812/V2XOi3UM0.png)

There we go. You will need to know these fundamental elements about routing in Angular.

I hope you learned something new. If you want a closer look at the code in this article, check out the [GitHub repo](https://github.com/rebelchris/angular-starter-demo/tree/feature/routing).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
