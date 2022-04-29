---
layout: ../../layouts/Post.astro
title: 'Handling errors in Remix forms'
metaTitle: 'Handling errors in Remix forms'
metaDesc: 'Returning errors to the users in Remix forms'
image: /images/09-05-2022.jpg
date: 2022-05-09T03:00:00.000Z
tags:
  - remix
---

Now that we have seen [how to create forms](https://daily-dev-tips.com/posts/remix-forms-a-deeper-look/), let's see how we can help the user catch errors and handle them accordingly.

Until now, our app would [throw a root error](https://daily-dev-tips.com/posts/handling-errors-in-remix/) that something might be missing.

But we can make this flow a bit nicer.

If you want to work with me on this one, please start from this [GitHub repo](https://github.com/rebelchris/remix-starter/tree/create).

## Seeing the current problem

Let's run our application and visit the following URL: http://localhost:3000/posts/new.

Now try and submit the form without filling any of the fields.

The first one might work but now try again.
We quickly get an error like this:

![Error in Prisma Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1651211800160/9sMD1f3kM.png)

This is pretty normal, as we added an empty row and now trying to add another empty one.
This means our database constraints are not unique.

## Adding error catching in Remix

But! We don't even want that first empty row.
So let's make sure we add some basic validation.

In your action function, add the following check.

```js
const errors = {
  title: !title,
  slug: !slug,
  content: !content,
};

if (Object.values(errors).some(Boolean)) {
  const values = Object.fromEntries(formData);
  return json({ errors, values });
}
```

This is a trivial example, as we would typically have some fancier error checks.
But for now, this will throw an error only when these fields are empty.

You can see we return the error object and the actual form values.

## Handling the errors in Remix

We can now try out the form and see we don't get the basic error, but we also don't see anything else happening.

We need to catch these errors and act on them manually.

In the main component use the action loader like this:

```js
export default function NewPost() {
  const actionData = useActionData();

  ...
}
```

This action data has access to both the errors and the values object.

We can use the errors to display an error message for each item and the values to set the default values.

```js
return (
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          <input
            type="text"
            name="title"
            className={inputClassName}
            defaultValue={actionData?.values.title}
          />
        </label>
      </p>
      {actionData?.errors?.title && (
        <p className='text-red-400'>
          Please fill our your name
        </p>
      )}
      <p>
      ...
	  </Form>
  )
}
```

Repeat this process for the other fields. Make sure to change the error catcher to the correct variable.

Now when we run our app and leave everything empty, we should be able to see the errors.

![Remix error messages](https://cdn.hashnode.com/res/hashnode/image/upload/v1651214560821/y3RM8xW02.png)

And that's it. We now have our basic error handling setup.
It's a breeze how the Remix hooks enhance each other.

You can find the completed code on this [GitHub repo](https://github.com/rebelchris/remix-starter/tree/form-errors).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
