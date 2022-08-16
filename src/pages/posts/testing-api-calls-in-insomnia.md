---
layout: ../../layouts/Post.astro
title: 'Testing API calls in Insomnia'
metaTitle: 'Testing API calls in Insomnia'
metaDesc: 'Testing APIs and automating environments and tokens is super easy in Insomnia'
image: /images/08-04-2021.jpg
date: 2021-04-08T03:00:00.000Z
tags:
  - developer
---

So far, we [setup an API in Laravel](https://daily-dev-tips.com/posts/laravel-basic-api-routes/), and a great way to explore your API is making use of API Clients.

Some clients you can consider:

- [Postman](https://www.postman.com/)
- [PAW](https://paw.cloud/)
- [Insomnia](https://insomnia.rest/)

It all does the same, depending on whichever you like best.
I recently moved from Postman to Insomnia.

So I'll be showing you how to use Insomnia.

## Authentication with our API

The first step is to authenticate with our API.
As you may have seen in our [API documentation article](https://daily-dev-tips.com/posts/protecting-our-laravel-api-with-sanctum/), we need to make a post to the `login` endpoint.

Let's open up Insomnia and add a new request.

![Insomnia add new request](https://cdn.hashnode.com/res/hashnode/image/upload/v1617521980378/YOzdeHMg7.png)

Give the request a good name, let's say Login.
On the right side, change the method to POST and the type to Multipart.

![Insomnia request builder](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522062631/CC1XPjwzI.png)

Once you've added the request, it appears in the detail view.
Fill out the endpoint you want to test.

In our case: `http://localhost:8084/api/login`.
In the form section, add two fields: `email` and `password`.

![POST request in insomnia](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522214742/ijPypjJKj.png)

As you can see on the right-hand side, we get our response.
This gives us an access_token we can use for further calls.

Let's add the `me` request next. This will be a GET request to the `/me` endpoint.

Only now do we have to open up the `Bearer` section and add the token we just received on the login call.

![Insomnia token request](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522343537/L5HHkmhb9.png)

And this way, we can make authenticated requests to our API.

## Managing environments

A cool thing most API clients can do is manage the environment.
You often have your local environment, a staging/testing, and a production environment.

In Insomnia, it's super easy to add these different variables so we can easily switch between them.

Click the No Environment button on the top left corner and click manage environments.

![Insomnia environments](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522731294/dvx7DvQSC.png)

Here you will find a Base environment with variables that will work for every single one.
But we'll add two new ones: a Production and a local one, which will only use a `URL` for now.

![Adding environments in Insomnia](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522860758/e5M17siLE.gif)

Now, if we go back to our request, we can change our URL to `{{url}}`; this will make it a dynamic variable.

![Variable environment](https://cdn.hashnode.com/res/hashnode/image/upload/v1617522930116/746glHcdD.png)

This makes it super easy to switch between our environments without changing the URL all the time.

## Automating our access token

Another thing we can automate is the access_token, it will expire, and we then manually need to do the login call again and re-set it.

But we can create another environment variable for this.

Go to the local environment, add an "access_token", start typing `response`, and show Body Attributes.

You can then click this section and open up the tag details.

Since that is the variable name, we will set the tag to request the login call and filter the \$.access_token.
We can then set a trigger behavior to resend when it's expired.

It will then automatically fetch a new token when needed.

![Set access_token dynamic](https://cdn.hashnode.com/res/hashnode/image/upload/v1617523964631/tgrJ4kAKt.png)

This newly created access token we can then set on our other request in the token field.

Open the `me` call, and type `_.access_token` in the Token field.

![Dynamic access token](https://cdn.hashnode.com/res/hashnode/image/upload/v1617524034793/u2KUn60W0.png)

And that's it. We now have an easy way to switch environments and even automatically set the access_token!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
