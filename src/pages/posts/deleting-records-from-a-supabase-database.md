---
layout: ../../layouts/Post.astro
title: 'Deleting records from a Supabase database'
metaTitle: 'Deleting records from a Supabase database'
metaDesc: 'How to delete single records from a Supabase database in Next.js'
image: /images/07-12-2021.jpg
date: 2021-12-07T03:00:00.000Z
tags:
  - nextjs
---

I'm sure you saw this article coming after we learned [how to insert records in a Supabase database](https://daily-dev-tips.com/posts/adding-new-records-to-a-supabase-database/).

We accidentally added the wrong country that we want to remove...

How do we go about that?

## Rendering a delete button

The first thing we want to add is a delete button, so we have something to click on.

We'll use a button with the raw `svg` from a [Fontawesome icon](https://fontawesome.com/v6.0/icons/trash-can?s=solid).

```jsx
<button onClick={() => deleteCountry(country.id)}>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    focusable='false'
    role='img'
    viewBox='0 0 448 512'
    width='0.75rem'
  >
    <path
      fill='currentColor'
      d='M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z'
    />
  </svg>
</button>
```

You might have spotted the `deleteCountry` function above. We pass the country id to this function.

So let's go ahead and create the function.

## Deleting records from Supabase

This delete country function is super easy, as we can leverage our Supabase setup and simply execute a delete query.

```js
const deleteCountry = async (countryId) => {
  try {
    await supabase.from('countries').delete().eq('id', countryId);
    setCountries(countries.filter((country) => country.id != countryId));
  } catch (error) {
    console.log('error', error);
  }
};
```

Here, the delete query is as simple as calling the `delete()` method on a row that equals this id.

Then we filter the country from the existing list of countries we show to the user.

And all this will result in the following action:

<!-- ![Deleting records from a Supabase database](https://cdn.hashnode.com/res/hashnode/image/upload/v1637937459640/vjWsKHtGN.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637937501/supa-del_jw35qg.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1637937500/supa-del_saqlkj.mp4" type="video/mp4" />
</video>

I hope you enjoyed this article. I've uploaded everything to [GitHub](https://github.com/rebelchris/next-supabase/tree/supabase-delete-row) if you wish to look at your own pace.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
