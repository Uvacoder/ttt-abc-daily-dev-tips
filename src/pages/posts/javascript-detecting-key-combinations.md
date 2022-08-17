---
layout: ../../layouts/Post.astro
title: 'JavaScript detecting key combinations'
metaTitle: 'JavaScript detecting key combinations'
metaDesc: 'Detecting a combination of key presses in Vanilla JavaScript'
image: /images/16-04-2021.jpg
date: 2021-04-16T03:00:00.000Z
tags:
  - javascript
---

The other day we built this cool tool to [detect which key was pressed](https://daily-dev-tips.com/posts/javascript-detecting-which-key-is-pressed/).
And as you may have seen, it could only register one key at a time.

Today I want to look at how we can capture some combination of keys.

This version will be based on only modifier keys and one specific key.

The modifiers keys we get:

- `metaKey`
- `ctrlKey`
- `altKey`
- `shiftKey`

Although we can't combine the regular letters, we can make a combination of these modifier keys.

For instance: `metaKey` + `altKey` + `d`

## Detecting key combinations in JavaScript

We don't need to change much in our existing codebase from our normal key detection example.

On the KeyBoardEvent, we get specific data, including the boolean status of the four modifiers keys.

Check out this example where I pressed `Shift` + `Meta` + `f`.

![Meta key combination](https://cdn.hashnode.com/res/hashnode/image/upload/v1618294734993/aB6LjQKw1.png)

So let's first convert our HTML to have all the options available.

```html
<body class="mx-auto my-auto bg-gray-100">
  <div class="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
    <div>
      <p class="text-gray-600" id="info">
        Press a key combi to see the magic 🪄
      </p>
      <div id="keys" class="flex hidden">
        <div id="meta" class="hidden p-2 mx-2 border-2">Meta</div>
        <div id="ctrl" class="hidden p-2 mx-2 border-2">Ctrl</div>
        <div id="shift" class="hidden p-2 mx-2 border-2">Shift</div>
        <div id="alt" class="hidden p-2 mx-2 border-2">Alt</div>
        <div id="key" class="p-2 mx-2 border-2">Key</div>
      </div>
    </div>
  </div>
</body>
```

As you can see, I decided to add all the options and the one key, but they were all hidden at first.

We then need to define all these variables in JavaScript.

```js
const key = document.getElementById('key'),
  keys = document.getElementById('keys'),
  info = document.getElementById('info'),
  meta = document.getElementById('meta'),
  ctrl = document.getElementById('ctrl'),
  shift = document.getElementById('shift'),
  alt = document.getElementById('alt');
```

And as before, we want to listen to the `keyDown` event.

```js
document.onkeydown = function (e) {
  // Function here
});
```

We want to check that it is a combination call, not just the first hit on one of the modifier keys.

```js
if (
  (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
  e.key === 'Meta' ||
  e.key === 'Shift' ||
  e.key === 'Control' ||
  e.key === 'alt'
) {
  return;
}
```

If that's the case, we return the function to stop it.

If not, we have a key combination and can show the appropriate
keys.

```js
e.altKey ? alt.classList.remove('hidden') : alt.classList.add('hidden');
e.shiftKey ? shift.classList.remove('hidden') : shift.classList.add('hidden');
e.metaKey ? meta.classList.remove('hidden') : meta.classList.add('hidden');
e.ctrlKey ? ctrl.classList.remove('hidden') : ctrl.classList.add('hidden');
info.classList.add('hidden');
keys.classList.remove('hidden');
key.innerHTML = e.keyCode;
```

The above section will show or hide the modifier keys, and eventually, we will also add the specific key.

You might see in the demo below that it will show up as a weird character if you have certain combinations. The key code, however, will always be the same!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWdYgbQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript detecting key combinations">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWdYgbQ">
  JavaScript detecting key combinations</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
