---
layout: ../../layouts/Post.astro
title: 'HTML5 Starting boilerplate template'
metaTitle: 'HTML5 boilerplate template to start out'
metaDesc: 'The boilerplate to our HTML templates. You will need it each time you start a project'
image: /images/31-12-2020.jpg
date: 2020-12-31T03:00:00.000Z
tags:
  - html
---

Today I want to go back to the basics when we start our websites: the **boilerplate template**.

What a boilerplate stands for is a quick copy-paste `HTML` document that is the bare minimum to get started.

In this article, I'll share my version of the `HTML5` boilerplate with you guys and explain the parts that are to it.

## HTML5 Boilerplate template

Without further ado, this is my boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Daily Dev Tips Boilerplate</title>
    <meta name="description" content="Basic HTML boilerplate" />
    <meta name="author" content="Daily Dev Tips" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <!-- Your content goes here -->
    <script src="js/main.js"></script>
  </body>
</html>
```

You can also download the raw template file directly from this GIST.

[Download the HTML5 boilerplate](https://gist.github.com/rebelchris/f13c5acc2c5a833042137540b63b7633)

## What is in this boilerplate

It's a basic boilerplate, with only the bare minimum code that would come back in 99% of the projects.

**Generic elements**

- Doctype: The doctype is very important as it tells a browser what kind of document it's looking at. In our case, an essential HTML document
- The `<html>` tag is the most crucial part and our main wrapper for everything. We define a `lang` attribute. In my version, it's `en` (English).

**Head section**

We then come to the head section, which can be vastly extended. For me, these are the basics that constantly recur.

- Meta charset, in all cases, `UTF-8` is the character encoding we use, so I like to have it set to that.
- Title: What is our document called? This is the page title that shows in your tab
- Meta description: A short description of our page
- Meta Author: The author's name is not a mandatory field, but I like to include this.
- Meta viewport, I tend to include these since they ensure your page behaves well on mobile. This one is the most generic one that will scale to the device size.
- Link to our stylesheet. In this case, the stylesheet is called style.css and sits in the css folder.

**Body section**

Then the main part where most of our content will go is the body of our HTML document.

- I've added an HTML comment where you can start your site's structure.
- Then, I add the script as low as possible. It loads a script called main.js from the js folder.

That's it.

A basic HTML template, but you'll need boilerplate HTML all the time.
You can even use tools to have this as a shortcut.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
