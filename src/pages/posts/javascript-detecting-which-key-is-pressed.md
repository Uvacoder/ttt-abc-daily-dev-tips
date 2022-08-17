---
layout: ../../layouts/Post.astro
title: 'JavaScript detecting which key is pressed'
metaTitle: 'JavaScript detecting which key is pressed'
metaDesc: 'Detecting which key is pressed with Vanilla JavaScript'
image: /images/13-04-2021.jpg
date: 2021-04-13T03:00:00.000Z
tags:
  - javascript
---

You might find yourself in a situation where certain keypresses might do something for your application or game.

Today we'll be looking at how we can detect which key is pressed in JavaScript.

The end result is this cool little playground:

![JavaScript detect keypress](https://cdn.hashnode.com/res/hashnode/image/upload/v1617951849345/d-f651Yu_.gif)

## Detecting keys in JavaScript

Let's start with the basics. We will need a way for JavaScript to be aware any key is pressed.

```js
document.onkeydown = function (e) {
  console.log('key down');
  console.log(e);
};
```

This will log all key down events, which is what we are looking for.

The `e` variable will contain the actual KeyBoardEvent, and it has quite the information inside.

![KeyBoardEvent log](https://cdn.hashnode.com/res/hashnode/image/upload/v1617950084879/qhTg11Mu-.png)

There are a couple things we can use that are helpful in there.

- key: A string representation of the key pressed
- keyCode: The number associated with the key. This is mainly used to identify keys in code
- code: A combination to identify which side a key was pressed (leftMeta/rightMeta)

Knowing that, let's make a cool visual tool that will output these three elements for the user.

## HTML Structure

I'm going to be using Tailwind to make a quick styled application, the main setup will be:

```html
<body class="mx-auto my-auto bg-gray-100">
  <div class="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
    <div class="flex justify-center hidden -mt-16">
      <div
        class="flex items-center justify-center object-cover w-20 h-20 text-3xl bg-white border-2 border-indigo-500 rounded-full"
        id="keyCodeLarge"
      ></div>
    </div>
    <div>
      <p class="text-gray-600" id="info">Press any key to see the magic 🪄</p>
      <p class="hidden mt-4 text-gray-600">key: <span id="key"></span></p>
      <p class="hidden mt-2 text-gray-600">code: <span id="code"></span></p>
      <p class="hidden mt-2 text-gray-600">
        keyCode: <span id="keyCode"></span>
      </p>
    </div>
  </div>
</body>
```

As you might have noted, I've added some ids based on which we will add the represented value with JavaScript.

I've also added an information paragraph for when we don't have any keypress yet.

## Assigning the keypress to our front-end

We start by defining the variables we are going to be needing.

```js
const key = document.getElementById('key'),
  code = document.getElementById('code'),
  keyCode = document.getElementById('keyCode'),
  keyCodeLarge = document.getElementById('keyCodeLarge'),
  info = document.getElementById('info'),
  hiddenElements = document.querySelectorAll('.hidden');
```

This is a mix of the key information we will place and the hidden fields we need to show.

Now in our keyDown function, we can act on this and place the right information.

```js
document.onkeydown = function (e) {
  [].forEach.call(hiddenElements, function (el) {
    el.classList.remove('hidden');
  });
  info.classList.add('hidden');
  key.innerHTML = e.key;
  code.innerHTML = e.code;
  keyCode.innerHTML = e.keyCode;
  keyCodeLarge.innerHTML = e.keyCode;
};
```

That is as simple as it gets!

You can try it out in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="eYgePZZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript detecting which key is pressed">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYgePZZ">
  JavaScript detecting which key is pressed</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
