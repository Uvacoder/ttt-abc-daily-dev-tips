---
layout: ../../layouts/Post.astro
title: 'JavaScript Proxy the Fetch API'
metaTitle: 'JavaScript Proxy the Fetch API'
metaDesc: "Let's see how we can proxy the Fetch API in JavaScript"
ogImage: /images/11-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f86f933c-9854-4eea-ccd3-33f46bbebe00
date: 2022-07-11T03:00:00.000Z
tags:
  - javascript
---

If you go on and google search for JavaScript Proxy, you'll see many articles explaining the core concepts.

But there is one powerful thing almost nobody tells you about.
That one thing is:

You can use Proxy to overwrite existing APIs!

I know it makes sense. It can extend any object, array, or function, so it is logical. But let me explain by a real-world example in which I used the Proxy object.

## Extending the Fetch API with a Proxy

You have heard of the [Fetch API](https://daily-dev-tips.com/posts/fetch-api-in-vanilla-javascript/), a native wrapper to efficiently perform requests to URLs.

Let's say our app has a file that handles all API calls, and they all use the Fetch API.

An example, we got the following class to handle API calls for our Todos.

```js
class TodoAPI {
  getTodos = async () =>
    await fetch('https://jsonplaceholder.typicode.com/todos');
  getTodo = async (id: number) =>
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
```

To use it, we can use the following code.

```js
const API = new TodoAPI();

(async () => {
  await API.getTodos()
    .then((data) => data.json())
    .then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3)
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Nothing crazy yet. We can call our API middleware which uses the fetch request.

This code works perfectly on our website, but when introducing it to a Chrome extension, we quickly notice we can't directly use the fetch method.
CORS issues are blocking it as we inject it on different websites.

We should still accept all the Fetch request data but send it via a background worker.

So one idea is to create a new function that mimics the Fetch API, which could work.
But what happens when the Fetch API changes props?

So a better way to tackle this is to leverage the Proxy object!

Yes, we can Proxy the Fetch API.

In a super simple example, it would look like this:

```js
(async () => {
  const fetchHandler = {
    apply(target, thisArg, args) {
      console.log(args);
    },
  };

  const proxiedFetch = new Proxy(fetch, fetchHandler);

  await proxiedFetch('https://jsonplaceholder.typicode.com/todos/3')
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Let's see what's going on here.
We create a proxy handler that accesses the apply trap.
Then instead of performing the request, we log the arguments.

We then proxy the fetch function and apply our handlers.
And then, we can use it as the standard Fetch API!

The cool part about this is that all the Fetch arguments stay the same, so there is no need to change any existing implementation formats.

Now let's move this into our function that will become able to switch between regular fetch and our proxied fetch!

We first have to introduce a constructor in our class that will define which method of fetching we should use.

```js
constructor(fetchMethod = (...args) => fetch(...args)) {
	this.fetchMethod = fetchMethod;
}
```

This function can set the fetch method with all its arguments. By default, we set it to be `fetch`.

Then we can modify our existing calls to use the preferred fetch method.

```js
getTodos = async () =>
  await this.fetchMethod('https://jsonplaceholder.typicode.com/todos');
```

As you can see, not much has changed. We moved `fetch.` to `this.fetchMethod.` and all our props and callbacks stay the same.

However, the example still uses the regular old fetch.

Let's set a new version to use a custom proxy fetch.

```js
const proxyFetch = {
  apply(_, __, args) {
    console.log(args);
    return { message: 'proxy done' };
  },
};
const proxiedFetch = new Proxy(fetch, proxyFetch);

const API = new TodoAPI(proxiedFetch);

(async () => {
  await API.getTodos().then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3).then((res) => console.log(res));
})();
```

We create a new proxy fetch that, in our case console logs all requests and then returns that it's done.

Then we pass this proxied fetch version to our class so that it will use this one.

Feel free to try it on this CodePen. You can switch between passing the proxied fetch or leaving it empty.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="ExEarjV" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExEarjV">
  JavaScript Proxy the Fetch API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## The background worker example

I described a background worker example for an extension, and we mock the fetch request to send all requests it receives via the browser runtime messages.

The code looks like this:

```js
const proxyFetch = {
  apply(_, __, args) {
    browser.runtime.sendMessage({
      type: 'FETCH_REQUEST',
      url: args[0],
      args: args[1],
    });
    return null;
  },
};

export const proxiedFetch = new Proxy(fetch, proxyFetch);
```

As you can see, it's a similar concept as we saw in the main article.
We proxy the existing fetch method but overwrite what it executes.
In this example, we send a message to the browser runtime.

## Conclusion

With the Proxy object, we can proxy existing APIs like, for instance, the Fetch API.

This can become super powerful as we don't have to mock the entire function but proxy it to do what we need.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
