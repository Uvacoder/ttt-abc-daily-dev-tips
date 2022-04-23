---
layout: ../../layouts/Post.astro
title: 'Handling errors in Remix'
metaTitle: 'Handling errors in Remix'
metaDesc: "Remix supports multiple error boundaries let's explore how they work"
image: /images/03-05-2022.jpg
date: 2022-05-03T03:00:00.000Z
tags:
  - remix
---

It's always annoying if your application throws unforeseen errors.

In general, it's good advice to build in the most common error catching early on. However, there might be some generic errors you can't always see coming.

Luckily for us, Remix will catch most of these errors and can render them to the closest `ErrorBoundary` box we define.

## Creating a root error boundary

From my perspective, you'll always want to add a root error boundary to your code, this is the topmost level, so if an error is thrown top-level, this one will always be able to catch it.

To create one of these root error boundaries, open up the `root.tsx` file.

According to the docs, it's best to render a full HTML for the root error boundary as it will mount and unmount on the render of this error.
By having access to the `<Meta />, <Links />, and <Script />` tags, it might be able to re-render.

Let's add the following function to this root file:

```js
export function ErrorBoundary({ error }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className='m-4'>
        <h1 className='text-2xl'>Something went wrong!</h1>
        <p>{error.message}</p>
        <Scripts />
      </body>
    </html>
  );
}
```

Let's try it out and see what happens; I added this particular error in `app/routes/admin/posts/index.tsx`.

```js
export function loader() {
  throw new Error('I am a failure!');
}
```

And if we now open this page, we get hit by the following error.

![Error boundary in Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1650692691711/uPMq3rbcc.png)

This is already way better than not throwing a custom error.
The downside is blocking the complete page while our error is only thrown down the line.

## Adding nested error boundaries

And this is where Remix kind of blows my mind. It supports multiple error boundaries!

Remix will start looking for the closest error boundary to render the error when an error is thrown.

We could add an error boundary in the same file we throw it in in our case.

```js
export function ErrorBoundary({ error }) {
  return (
    <div className='bg-red-100 border border-red-300 p-4'>
      <h1 className='text-2xl'>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

Now refresh the page and see what happens.

![Nested error boundary](https://cdn.hashnode.com/res/hashnode/image/upload/v1650692826699/5MlYwCOEQ.png)

Wow, the error is only shown in the specific nested route!
The other parts of our application are still working as expected.

You can find this example code on [GitHub](https://github.com/rebelchris/remix-starter/tree/error-handling).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
