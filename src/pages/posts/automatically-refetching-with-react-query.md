---
layout: ../../layouts/Post.astro
title: 'Automatically refetching with React Query'
metaTitle: 'Automatically refetching with React Query'
metaDesc: 'Adding a option to React Query to automatically refetch data'
image: /images/07-02-2022.jpg
date: 2022-02-07T03:00:00.000Z
tags:
  - react
---

A super cool feature of React Query is that we can auto refetch on a specified interval.

This could be useful if you quickly change data that needs to be rechecked every minute.

In our example, we'll call a random API endpoint, meaning every request has new data, and showcase whatever is in that refetch.

It will look like this:

<!-- ![Automatically refetching with React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643438032817/xuVmzD3br.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643438043/refetch_mqqzwl.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643438042/refetch_xklxcm.mp4" type="video/mp4" />
</video>

## Using auto refetching in React Query

To use the auto refetch mode, you can pass an optional parameter to the React Query hook called `refetchInterval`. The value is in milliseconds.

```js
const { isLoading, data } = useQuery(
  'vehicle',
  async () => {
    const { data } = await axios.get(
      'https://random-data-api.com/api/vehicle/random_vehicle'
    );
    return data;
  },
  {
    refetchInterval: 6000,
  }
);
```

The above example will query the random data API and ask for a random vehicle.
This call will refetch the data every 6000 milliseconds.

When implementing code like this, be aware that this can be heavy on your API, and one should be wise about when to use this approach.

## Other refetching options

React Query comes with more of these refetch functions that we can leverage.

By default, it will auto refetch every time the window focuses, for instance, let's take a look at what other options there are:

- `refetchInterval`: See the above example
- `refetchIntervalInBackground`: When set to true, the above function will even call when the tab is in the background
- `refetchOnMount`: You can set this to false to don't do the initial mount loading
- `refetchOnWindowFocus`: Will refetch every time the window focus is set. You can set this to false
- `refetchOnReconnect`: Will refetch once a connection has been remade

Between all of these, you can mix when data should be loaded.

You can try the refetch out in this Sandbox.

<iframe src="https://codesandbox.io/embed/gifted-flower-opr8x?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="gifted-flower-opr8x"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
   
### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
