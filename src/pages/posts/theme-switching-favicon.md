---
layout: ../../layouts/Post.astro
title: "Theme switching Favicon? \U0001F64A"
metaTitle: How to make a theme switching Favicon?
metaDesc: Learn how we can make our favicon switch based on the theme?
date: 2020-03-28T03:00:00.000Z
image: /images/28-03-2020.jpg
tags:
  - javascript
---

Yes, we can make these; even better, we could use the prefers-color-schema media queries to do it based on user preference!
For my use case, I'm using the theme switcher because I want to give you a controllable option instead then your global settings.

So which options do we have to switch favicons?

1. SVG
2. Vanilla JavaScript

## Switching your favicon with SVG's

As written by [Thomas Steiner](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/) we can now in modern browsers use inline svg media queries!!

```
<!-- icon.svg -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <style>
    circle {
      fill: yellow;
      stroke: black;
      stroke-width: 3px;
    }
    @media (prefers-color-scheme: dark) {
      circle {
        fill: black;
        stroke: yellow;
      }
    }
  </style>
  <circle cx="50" cy="50" r="47"/>
</svg>
```

```
<!-- index.html -->
<link rel="icon" href="/icon.svg">
```

You can find the demo [here](https://dark-mode-favicon.glitch.me/)

## Swapping favicon based on media queries

Because the previous method is only cutting edge browsers and doesn't give me the effect I want when toggling between themes I went with a `VanillaJS` version.

```
<!-- index.html -->
<head>
<link rel="icon" class="light" href="favicon_light.ico" type="image/x-icon">
<link rel="icon" class="dark" href="favicon_dark.ico" type="image/x-icon">
</head>
<body>
	<button onclick="toggleSetting()">Toggle</button>
</body>
```

Nothing special, only we add two Favicon's instead of one and give them appropriate classes.

The needed `JavaScript`

```js
const links = collectLinks();
let theme = 'dark';

function collectLinks() {
  return Array.prototype.slice.apply(
    document.head.querySelectorAll('link[rel*="icon"]')
  );
}

function toggleSetting() {
  theme = theme === 'dark' ? 'light' : 'dark';
  for (i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.classList.value !== theme) {
      document.head.removeChild(link);
    } else {
      document.head.appendChild(link);
    }
  }
}
```

What this does is collects all links in the document head containing a rel="icon" which will be both the light and dark icon in our case.
Then we define our "default" theme, which is dark in this case.

The collectLinks function returns an array of elements (in our case two)

Then we call toggleSettings function on button click with `onclick="toggleSetting()"`, which will first change the theme variable based on what the current value is.
We then loop through all the links we defined in the collectLinks function and see which link's class name matches the current theme.
It will remove the link that is not the current theme and append the favicon that is matching our current theme.

Basic solution, but it works for a dynamic theme switcher!

You can find this project on [GitHub](https://github.com/rebelchris/favicon-switch).

### Try it out and let me know!

So try and switch the theme on this website and see it in effect.
Let me know on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1) what you think about this solution.
