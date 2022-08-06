---
layout: ../../layouts/Post.astro
title: 'Revue - Sendy sync: Sendy calls'
metaTitle: 'Revue - Sendy sync: Sendy calls'
metaDesc: 'Calling the Sendy API from Node.js to subscribe and unsubscribe users'
ogImage: /images/27-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/be4e024d-4948-49bc-7a3c-72eb9e2b5d00
date: 2022-06-27T03:00:00.000Z
tags:
  - developer
  - revue-sync
---

Now that we have access to our Revue data, we can start processing it on Sendy.

In this article, I want to go over the two data sets we created in the [previous article](https://daily-dev-tips.com/posts/revue-sendy-sync-project-setup-revue-calls/) (unsubscribed users and subscribed users) and add/remove them from Sendy.

If you'd like to code with me, [this is the starting point code](https://github.com/rebelchris/revue-sendy-sync/tree/part-1-revue-api) for today.

## Calling the Sendy API from Node.js

In the previous article, we already set up the project and dependencies to leverage those things for this one.

However, when we queried [Sendy's API via our API platform](https://daily-dev-tips.com/posts/revue-sendy-sync-collecting-the-apis/#sendy-api), we learned that we'd need the following keys.

- Sendy API key (The actual API key)
- Sendy list ID (The list we subscribe to)

Once you have retrieved these, add them to the `.env` file.

```
REVUE_API_TOKEN={YOUR_TOKEN}
SENDY_API_KEY={YOUR_TOKEN}
SENDY_LIST={LIST_ID}
```

The first thing we want to be able to do is unsubscribe users.

Let's start with one item we get from Revue as an example.

```json
[
  {
    "id": 999999,
    "list_id": 305882,
    "email": "chris@dailydevtips.com",
    "first_name": null,
    "last_name": null,
    "last_changed": "2022-01-08T04:30:04.492Z"
  }
]
```

From this, we only need the email address.

For calling the Sendy API, we also learned we have to use form data to set the data attributes we want to POST.

Let's create a helper function that accepts an array and turns it into form data we can use.

> Note: You can use the `form-data` package, but I prefer native solutions as seen below

```js
const convertToFormData = (data) => {
  const formData = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    formData.set(key, data[key]);
  });
  return formData;
};
```

This function transforms an object by getting the keys from it and setting it as URL search parameters.
These can be used as form data.

We can use this function like this:

```js
const data = {
  api_key: 'test',
  key1: 'testing',
};
console.log(convertToFormData(data));

// URLSearchParams { 'api_key' => 'test', 'key1' => 'testing' }
```

Then we can go ahead and define a function that can call the Sendy API.
We can globalize this function again so we can re-use it easily.

```js
const callSendyAPI = async (endpoint, body) => {
  const response = await fetch(`https://sendy.daily-dev-tips.com/${endpoint}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body,
  }).then((res) => res.status);
  return response;
};
```

Compared to Revue, the main difference with this one is that we use the `POST` method.
We also set the content type to accept and pass the form data.

Let's call this function, but before we do, we can create a default object with data we always have to send to Sendy. (API key and List id)

```js
const sendyDefaults = {
  api_key: process.env.SENDY_API_KEY,
  list: process.env.SENDY_LIST,
};
```

To call the function, we can call it from our primary function.

```js
(async () => {
  const unsubscribeSendy = await callSendyAPI(
    '/unsubscribe',
    convertToFormData({
      ...sendyDefaults,
      email: 'info@daily-dev-tips.com',
    })
  );
  console.log(unsubscribeSendy);
})();
```

As you can see, we use the [spread operator](https://daily-dev-tips.com/posts/10-ways-to-use-the-spread-operator-in-javascript/) to use our default and add the email property to it.

We only get the status code when running this code, as the response is plain text.

However, when looking at my Sendy installation, I can see the action coming through!

![Sendy unsubscribe via API](https://cdn.hashnode.com/res/hashnode/image/upload/v1655445889947/Wny2rgVGH.png)

## Looping Revue unsubscribed users

We know the unsubscribe works, so now we can combine the two and loop over our revue unsubscribes to send this request to Sendy.

```js
(async () => {
  const revueUnsubscribed = await callRevueAPI('subscribers/unsubscribed');

  for (const unsubscriber of revueUnsubscribed) {
    const unsubscribeSendy = await callSendyAPI(
      '/unsubscribe',
      convertToFormData({
        ...sendyDefaults,
        email: unsubscriber.email,
      })
    );
    console.log(unsubscribeSendy);
  }
})();
```

This code will loop over our unsubscribed Revue users and unsubscribe them in Sendy.

## Subscribing users

The main benefit of the integration we are building is that people can sign up via Revue and automatically get added to our Sendy newsletter.

To achieve this, we can use a similar approach as the unsubscribe but simply pass some other fields.

```js
const subscribeSendy = await callSendyAPI(
  '/subscribe',
  convertToFormData({
    ...sendyDefaults,
    email: 'info@daily-dev-tips.com',
    silent: true,
  })
);
console.log(subscribeSendy);
```

On execution, we should get a `200` code; if we look in Sendy, the user should be subscribed.

![User subscribed in Sendy](https://cdn.hashnode.com/res/hashnode/image/upload/v1655446459514/a1uSRqZ8d.png)

## Looping Revue subscribed users

Let's finish it by looping over all the people in Revue who subscribed and adding them to Sendy.

> Note: This script will handle try and subscribe people every time. We currently don't check if they are already in the system.

```js
(async () => {
  const revueSubscribed = await callRevueAPI('subscribers');
  for (const subscriber of revueSubscribed) {
    const subscribeSendy = await callSendyAPI(
      '/subscribe',
      convertToFormData({
        ...sendyDefaults,
        email: subscriber.email,
        silent: true,
      })
    );
    console.log(subscribeSendy);
  }
})();
```

And that's it. Running this code will add all your Revue subscribers to Sendy.

> Note: You might want to wait and do an import into Revue first to sync the existing subscribers both ways.

You can find the code for this article on [GitHub](https://github.com/rebelchris/revue-sendy-sync/tree/part-2-sendy-api).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
