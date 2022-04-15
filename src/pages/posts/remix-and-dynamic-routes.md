---
layout: ../../layouts/Post.astro
title: 'Remix and dynamic routes'
metaTitle: 'Remix and dynamic routes'
metaDesc: "In this article we'll look into creating dynamic routes in Remix"
image: /images/25-04-2022.jpg
date: 2022-04-25T03:00:00.000Z
tags:
  - remix
---

Now that we have our [post overview page in Remix](https://daily-dev-tips.com/posts/remix-and-data-loading/) let's see how we can add the individual pages from this data.

We are already able to click on the posts on the overview and go to each respective page like:

- `posts/post-1`
- `posts/post-2`

But for now, they are non-existing, so let's see how we can make those work dynamically.

If you would like to follow along, download [this GitHub repo](https://github.com/rebelchris/remix-starter/tree/data-handling) as your starting point.

## A quick recap

We've added a posts model in the previous article, which acts as our data source. You can find it here: `app/models/post.server.ts`.

For now, it simply outputs an array of posts, but eventually, we'll work to make this load from an external source.

To load these posts on the overview page, we use the `useLoaderData` hook built into Remix.

We are going to apply the same concept to create our dynamic pages.
Like many of these modern frameworks, we have an option to create one file that can serve as a dynamic file.

In Remix, we use a dollar sign to make a file dynamic.
Create the dynamic post file: `app/routes/posts/$slug.tsx`.

```js
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/post.server';

type LoaderData = {
  post: Awaited<ReturnType<typeof getPost>>,
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    post: await getPost(params.slug),
  });
};
```

This will now find the post matching this param based on the slug.

However this `getPost` function doesn't exist yet, so let's open our `model` and create it quickly.

```js
export async function getPost(slug: string | undefined): Promise<Post> {
  const posts = await getPosts();
  return posts.filter((post) => post.slug === slug)[0];
}
```

As you can see, this is based on the existing function that retrieves all the posts, but we limit it to match based on the slug.

And then, we can return some HTML and render our post title, for instance.

```js
export default function PostSlug() {
  const { post } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        The post title: {post.title}
      </h1>
    </main>
  );
}
```

Let's try it out and see what happens.

<!-- ![Remix and dynamic routes](https://cdn.hashnode.com/res/hashnode/image/upload/v1650011642440/JW29M8qA1.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1650011726/remix-route_z0fdwf.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1650011727/remix-route_ozmznq.mp4" type="video/mp4" />
</video>

Yes, we did it.
We now have managed our dynamic routes in Remix.

You can find the completed code on [GitHub](https://github.com/rebelchris/remix-starter/tree/dynamic-routes).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
