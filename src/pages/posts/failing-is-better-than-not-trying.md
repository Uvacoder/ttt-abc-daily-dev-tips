---
layout: ../../layouts/Post.astro
title: 'Failing is better than not trying'
metaTitle: 'Failing is better than not trying'
metaDesc: "Sometimes we fail at something we want to do, and that's totally fine"
ogImage: /images/08-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/227a767a-0b06-4763-a2a0-6abf5c825700
date: 2022-09-08T03:00:00.000Z
tags:
  - developer
---

I've wanted to optimize my website even more for the longest time.
Every weekend I try to dedicate some time to see where I can optimize it even more.

This weekend it was all around CSS loading.
It's already pretty optimized, and there were only two items I could think of.

- Page by page loads
- Preloading stylesheets

## Page by page loads

Unfortunately, this is not supported with Tailwind in Astro as we get one generic output CSS.
For my website, it doesn't make the biggest difference as the post pages only have a couple of lines of extra CSS compared to the homepage.

However, still looking at how I can optimize what's used even more.

**Conclusion**: Nothing to optimize for a quick win. More research is needed.

## Preloading stylesheets

I wasn't sure if this one would help, but we could declare the main stylesheet as important by adding a `rel="preload"` link.
This would indicate that the page should try and fetch this with the most priority.

It sounded easy to try out, but it took a lot of research and trying out things.

I went over the Astro docs and found out you can load the stylesheets as a plain URL by appending a `?url` parameter.

Then, we can load it directly like this:

```js
---
import stylesUrl from '../styles/main.css?url';
---
<link rel="preload" href={stylesUrl} as="style">
<link rel="stylesheet" href={stylesUrl}>
```

The dev version worked perfectly, but then I tried outputting this as a build, and I noticed it base64 encoded the whole CSS file.

It is documented in the docs this can happen, and we have to disable this Vite config.
I added the following to my `astro.config.mjs` file:

```js
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
```

I reran my build output and ended up with a compiled CSS like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
.some-of-my-custom-css {
  // ...
}
```

Ugh, not really what I wanted as our Tailwind is not processed now.

I took one of my existing build compiled CSS files for option three and put them in my project.

> Note: My CSS doesn't ever change, so that it could be a viable option.

I changed my imports to load this CSS file, and voila, it worked!

Eagerly I went to try my tests again to see how fast it was loading.
To my disappointment, it went backward. It now took another 2ms longer to load the first byte.

And thus, back to the drawing board with CSS optimizations.

## Conclusion

Sometimes you might have put a lot of work into something that does not work as you expected.

It's totally fine, and it happens to everyone.
At least you learned something, and you tried it out.

I generally don't write as much about my failed experiments, but I thought it might help other people not to feel bad when something doesn't work on the first try.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
