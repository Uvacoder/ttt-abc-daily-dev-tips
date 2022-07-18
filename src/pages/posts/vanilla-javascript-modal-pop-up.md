---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Modal Popup Box'
metaTitle: 'How to make a Vanilla JS Popup Modal [2022]'
metaDesc: 'Learn how easy it is to make your own JavaScript Modal! In this tutorial we will create a popup box to show the user important information.'
image: /images/17-08-2020.jpg
date: 2020-08-17T03:00:00.000Z
tags:
  - javascript
---

In today's tutorial, we'll look at another famous feature that can easily be self-made: the **popup modal** - and we will build it in Vanilla JavaScript.

Once you click a button or link, a popup box with text or an image appears.

This is easy to code with some simple `CSS` and `JavaScript`.

## HTML Structure

```html
<div class="container">
  <a data-modal="modal-one">Open Modal</a>
</div>

<div class="modal" id="modal-one">
  <div class="modal-bg modal-exit"></div>
  <div class="modal-container">
    <h1>Amazing Modal</h1>
    <h2>Pure Vanilla JavaScript</h2>
    <button class="modal-close modal-exit">X</button>
  </div>
</div>
```

As for our `HTML` we have just the modal button visible and our modal down in our structure.

## CSS Modal popup

The `CSS` is not our primary focus, but let's walk through it.

```css
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }
  &-bg {
    position: absolute;
    background: teal;
    width: 100%;
    height: 100%;
  }
  &-container {
    border-radius: 10px;
    background: #fff;
    position: relative;
    padding: 30px;
  }
  &-close {
    position: absolute;
    right: 15px;
    top: 15px;
    outline: none;
    appearance: none;
    color: red;
    background: none;
    border: 0px;
    font-weight: bold;
    cursor: pointer;
  }
}
```

As you can see, nothing fancy, some basic styling. The only thing worth mentioning is that the popup is, by default, not visible and on a zero opacity.

Once the popup modal gets the open class, we set the visibility and make it full opacity. Then the modal appears.

## Vanilla JS Popup Code example

The most amazing part is the `JavaScript` code example for our popup!

```js
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});
```

So what we are doing is selecting all the `data-modal` attributes elements and loop over them. These are our triggers, so we need to add an `eventListener` for the click trigger.
Once the click is triggered, we find the modal based on the dataset and add the open class to it.
We then search for all the modal-exit classes within the modal.
Which are the background and the cross button.

There you go, a simple popup in Vanilla JavaScript that you can customize and style as you wish. No big libraries, no weird code you don't understand.

> Note: This code is not accessible but showcases the Vanilla JavaScript code. To make it accessible, you can use a plugin like [Details Dialog](https://github.com/github/details-dialog-element)

## View the example and the code for the pop-op modal on Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="MWyyLXR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Modal Pop-up">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWyyLXR">
  Vanilla JavaScript Modal Pop-up</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
