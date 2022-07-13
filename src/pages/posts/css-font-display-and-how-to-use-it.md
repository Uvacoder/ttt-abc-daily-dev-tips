---
layout: ../../layouts/Post.astro
title: 'CSS Font-display and how to use it'
metaTitle: 'CSS Font-display and how to use it'
metaDesc: 'What is font-display and how to use it?'
image: /images/04-05-2020.jpg
date: 2020-05-04T03:00:00.000Z
tags:
  - css
---

Yesterday we included a [custom Google Font](https://daily-dev-tips.com/posts/how-to-use-google-fonts/) on our website and briefly mentioned the `font-display` option.
Let's dive deeper into what it is and how it works.

As we saw yesterday, custom fonts load slowly and block the browser from defining when your website is ready.
This, in turn, makes Google think your website is slow, and nobody wants that.

So in modern browsers, we can use the `font-display` function.

## Font Display options

- `auto`: This is the default value and leaves the decision up to the browser. In most cases, it will be `block`.
- `block`: This tells the browser to hide the text until the font has fully loaded. This is the flash you see when it swaps on some sites.
- `swap`: It will start with the fallback font and swap once the font is loaded.
- `fallback`: This is a compromise between `auto` and `swap`. It will start with hiding the font briefly and then go into the `swap` routine.
- `optional`: This is much like the `fallback` method. It tells the browser to start with a hide and then transition into the fallback font. The excellent option here is that it allows the browser to see if the custom font is even used. If, for instance, a slow connection appears, they are less likely to see the custom font.

## How to use font-display

As seen in the previous example, we can use it as such:

```css
h1 {
  font-size: 40px;
  font-family: 'Amatic SC', cursive;
  font-display: swap;
}
```

## What is a fallback font?

So we talked about fallback fonts quite a bit, but what are those even?

```css
h1 {
  font-family: 'Amatic SC', 'Times New Roman', Times, serif;
}
```

So in the above example, the custom font is `Amatic SC` the system font is `Times New Roman` or `Times`, so in the case of using `swap`, we will first see `Times New Roman` and when the custom font has loaded it will show `Amatic SC`.

## Browser Support

Not all browsers support this, but I encourage you to use `font-display`. The browsers that don't support it will decide for you.

![3d transform support](https://caniuse.bitsofco.de/image/font-loading.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
