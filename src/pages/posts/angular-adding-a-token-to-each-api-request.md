---
layout: ../../layouts/Post.astro
title: 'Angular adding a token to each API request'
metaTitle: 'Angular adding a token to each API request'
metaDesc: 'Automatically adding a token to every API request'
image: /images/25-10-2020.jpg
date: 2020-10-25T03:00:00.000Z
tags:
  - angular
---

Alright, so usually, when making API requests, we need some token to validate our request.

In our case, we just learned [how to Log in as a user](https://daily-dev-tips.com/posts/angular-authenticating-users-from-an-api/) and ensured the [routes are secured](https://daily-dev-tips.com/posts/protecting-routes-in-angular/).

So from here, how can we manipulate API calls always to include the token we stored in our user object?

We don't want to add a header to every object call like this.

```js
const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});
return this.http.get(apiUrl, { headers: headers });
```

Don't get me wrong. This will work, but it's repeating itself, so let's create an interceptor that will do just this for us!

## Creating our interceptor

As usual, let's open the terminal and find our project folder.
Now execute the following command to generate our token interceptor.

```bash
ng generate service interceptors/TokenInterceptor
```

This will create a `token-interceptor.service.ts` file in our interceptors folder.

```js
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { token } = this.authService.userValue;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
```

So, we register the authService as a provider in our service.
Then we implement the `HttpInterceptor` from which we will extend the `intercept` function.

This intercept function has a request and a next object.

What we do is get the token from our user object.
If this is set, we clone the request being made and add a header.

In this case, we add a `Bearer` token with the actual token attached to it (yes, I know this is not an oAuth token)

Then we return the request and catch if we get a 401 (unauthorized) back.

If that is the case, we log out of the current user since our token is expired and throw an error back.

## Implementing the interceptor

So we now have to ensure all our calls are logged with this interceptor.

Open up your `app.module.ts`, and add the following in the providers' section.

```js
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
],
```

This tells Angular that we made our own `HTTP_INTERCEPTOR` and which service it should load this from.

## Trying out our interceptor

Let's make a quick demo to see if it works.

Open the `home.component.ts` and make it look as such:

```js
export class HomeComponent implements OnInit{
  currentUser: User;
  constructor(private authenticationService: AuthService, private http: HttpClient
) {
  this.authenticationService.user.subscribe(user => this.currentUser = user);
 }
 ngOnInit() {
   this.getUsers().subscribe(result => {
     console.log(result);
   })
 }
 getUsers() {
  return this.http.get<any>(`${environment.apiUrl}api/users`);
 }
}
```

We are just doing a simple in-component API call to check if our interceptor is working.

Now, if you open your console network tab, you should see the following request!

![Angular Custom header](https://cdn.hashnode.com/res/hashnode/image/upload/v1603087803536/IvN8wybLr.png)

There you go, we now added our custom header, and it will be added to every single one of our calls.

You can also find this code on [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/token).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
