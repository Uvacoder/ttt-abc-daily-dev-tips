---
layout: ../../layouts/Post.astro
title: 'Remix forms a deeper look'
metaTitle: 'Remix forms a deeper look'
metaDesc: 'How do forms work in Remix and what options do we have to use those forms'
image: /images/08-05-2022.jpg
date: 2022-05-08T03:00:00.000Z
tags:
  - remix
---

We looked at [creating new posts with Remix](https://daily-dev-tips.com/posts/remix-and-creating-new-posts/) based on the form actions.

We set up a Remix Form (the notable difference is the capital F), and hooked it into this data with the action function.

```js
export const action = async ({ request }) => {
  // Do a action
};

export default function NewPost() {
  return <Form method='post'>...</Form>;
}
```

The above example is the main setup. However, we can do quite a lot more with this!

## Changing the method

In the above example, we used a post method, but we can change this to a GET request by changing the method:

```js
// post
<Form method='post'>

// get
<Form method='get'>
```

The post will make an actual post request to the same URL, where the get will push query strings to the URL.

The main difference is how we handle these two and retrieve their data.

```js
// handle post
export const action = async ({ request }) => {
  // Do a action
};

// handle get
export const loader = async ({ request }) => {
  // Do a action
};
```

The main difference between these is the action name, being `action` or `loader`.

## Retrieving the get data

Let's briefly look at how we could leverage the GET data.

Some of you might wonder when I use the GET vs. the POST method.
And to give a super generic answer.

- `GET`: Viewing something without changing it
- `POST`: Changing something/Sensitive data

Let's use a search form for the GET example. We want to view search results for a specific query.

Our form could look like this:

```js
export default function Search() {
  return (
    <main>
      <h1>Search page</h1>
      <Form method='get'>
        <input type='text' name='query' placeholder='Search for something' />
      </Form>
    </main>
  );
}
```

To retrieve this query, we can use the loader function.

```js
export let loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  return json({ search: search.get('query') });
};
```

In an ideal world, you would call some function and return the JSON of your search results.

We can then hook into this data with the `useLoaderData` function.

```js
export default function Search() {
  const data = useLoaderData();
  // Do something with data in the HTML
  ...
}
```

However, the query will stay in the URL when you refresh the page, but the form field is empty.

To fix this, we can hook into another fantastic function.

```js
export default function Search() {
	...
  const [params] = useSearchParams()

  return (
    <main>
      <Form method='get'>
        <input ... defaultValue={params.get("query")} />
      </Form>
    </main>
  );
}
```

We can set the default value for a form by using these search parameters.

## Retrieving post data

We mainly saw how this works, but let's do a quick recap.

For the post, let's state a login form.

```js
export default function Login() {
  return (
    <Form method='post' className='flex flex-col'>
      <label>
        Username: <input type='text' name='username' />
      </label>
      <label>
        Password: <input type='password' name='password' />
      </label>
      <button type='submit'>Login</button>
    </Form>
  );
}
```

To retrieve this data, we have to hook into the action function.

```js
export const action = async ({ request }) => {
  const formData = await request.formData();

  // Do something with the data

  // Redirect or simply return JSON
  return json({ success: true });
};
```

A typical response for action would be to redirect to another page or show a message to the user about what's happening.

Tomorrow we'll take a deeper look at handling form errors for the post method.

You can find today's example code on [GitHub](https://github.com/rebelchris/remix-starter/tree/forms).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
