---
layout: ../../layouts/Post.astro
title: 'Browser extensions -  DevTools extension'
metaTitle: 'Browser extensions -  DevTools extension'
metaDesc: 'How to create a DevTools browser extension for Chrome'
ogImage: /images/31-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/0fb14fb9-bc30-4992-447a-597276204800
date: 2022-08-31T03:00:00.000Z
tags:
  - browser-extensions
---

Today's article will look at creating a Chrome dev tools extension.

It will be a basic setup. For now, that doesn't do anything yet. It just shows you how we can inject something into the dev tools.

The result will look like this:

![Browser extensions -  DevTools extension](https://cdn.hashnode.com/res/hashnode/image/upload/v1661080129941/bf0i4t_Bd.png)

## Creating a Chrome DevTools extension

To create the extension, create a new folder called `devtools-extension`, and open it up in your favorite editor.

Start by adding the brains of the operation, a file called `manifest.json`.

```js
{
  "name": "DevTools extension",
  "version": "1.0",
  "manifest_version": 3,
  "devtools_page": "devtools.html"
}
```

This is all a basic dev tools extension needs. The most important part here is the `devtools_page` which defines which page it should inject.

Let's add this basic base as well.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="/devtools.js"></script>
  </head>
</html>
```

Yep, we'll only use it to inject a JavaScript file. That file will, in return, be the source of adding the dev tools menu.

```js
chrome.devtools.panels.create('DDT', null, '/panel.html', null);
```

The options in this panel create function are:

- Name
- Icon (optional)
- HTML file
- function (on panel creation, this get's invoked)

As we only want to display something we are good with the following, we can now go ahead and add this `panel.html` file.

```html
<html>
  <head></head>
  <body>
    <h1>Basic devtools panel</h1>
  </body>
</html>
```

To add a dev tools extension, we can use the same process as we do for regular browser extensions.

[Read more about testing browser extensions](https://daily-dev-tips.com/posts/browser-extensions-new-tab-extension/#testing-the-extension)

And once done, head over to any random website, and you should be able to see your extension in the extra tools now.

You can also find this project on [GitHub](https://github.com/rebelchris/devtools-extension).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
