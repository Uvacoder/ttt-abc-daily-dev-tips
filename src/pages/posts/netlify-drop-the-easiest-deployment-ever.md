---
layout: ../../layouts/Post.astro
title: 'Netlify Drop - the easiest deployment ever'
metaTitle: 'Netlify Drop - the easiest deployment ever'
metaDesc: 'This must have been the easiest deployment ever, using Netlify drop!'
image: /images/01-03-2021.jpg
date: 2021-03-01T03:00:00.000Z
tags:
  - static
---

We now made a super cool [HTML starter with tailwind](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/), but how can we host this somewhere online, so people can view it?

As you may know, this website is [hosted on Netlify](https://daily-dev-tips.com/posts/hosting-a-static-blog-on-netlify/), and I love it!
The website is hosted through Git push and [GitHub actions](https://daily-dev-tips.com/posts/deploy-eleventy-to-netlify-using-github-actions/).

But for this one, I wanted to try Netlify Drop, the simple drag n drop deployment.

## Preparing the website upload

Before deploying anything, we must ensure our upload file is ready.

If you are using the demo project ([HTML Starter](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/)), we'll be using the `src` directory as the contents we'll upload.

Before that, we need to ensure all the CSS is in place.

Run the following command to build all the assets.

```bash
npm run build
```

Now the files inside the `src` directory are up to date.

## Uploading a static website to Netlify

Now let's head over to [Netlify Drop](https://app.netlify.com/drop).

![Netlify drop interface](https://cdn.hashnode.com/res/hashnode/image/upload/v1614148795623/GpZL_B8Rs.png)

Now, drop the `src` folder on that field above.

![Upload on Netlify done](https://cdn.hashnode.com/res/hashnode/image/upload/v1614149025928/TbLCJQWLv.png)

And there we go, nothing fancy needed, just a simple drag n drop, and our website is up and running.

My website here is [HTML Tailwind starter hosted on Netlify](https://wonderful-brahmagupta-0a70c9.netlify.app/).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
