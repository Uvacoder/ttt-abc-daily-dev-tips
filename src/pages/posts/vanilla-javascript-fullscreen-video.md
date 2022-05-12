---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript Fullscreen Video'
metaTitle: 'Video to Fullscreen Vanilla JS Tutorial [2022]'
metaDesc: 'In this guide we will learn how to maximize a video to fullscreen with pure Vanilla Javascript. Try the Codepen example.'
image: /images/22-04-2020.jpg
date: 2020-04-22T03:00:00.000Z
tags:
  - javascript
---

Today I will teach you how to enlarge a video to fullscreen with just JavaScript code.

We will use a custom button, and after the button is clicked, we will expand the fullscreen video.

## HTML Structure

```html
<div id="video-container" class="container">
  <div class="btn" id="fullscreen">Fullscreen</div>
  <video width="400" autoplay playsinline>
    <source
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      type="video/mp4"
    />
    Your browser does not support HTML5 video.
  </video>
</div>
```

We start with a container tag. This time it's not just for entering. We will use the container tag to mimic the fullscreen effect for iOS devices.

We then add a button to go Fullscreen.

We also add the `HTML5` Video element. The video is set to `autoplay`, making it play automatically and `playsinline` to indicate it's playing inlined.

## CSS Markup for HTML5 Video

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
.container.fullscreen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  top: 0px;
  left: 0px;
}
.container .btn {
  background: #c1666b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}
```

Nothing fancy here. We use the container in this `CSS` file to center the video and button on the page.
We learned the centering method in [CSS Flexbox most easy center vertical and horizontal](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

Next, we add a fullscreen class. This is to mimic fullscreen mode on iOS, which does not support programmatic fullscreen 😭.

And we add some basic styling to the button.

## Vanilla JavaScript to enlarge the video to fullscreen

```js
document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn')) return;

  event.preventDefault();

  const fullscreenElement =
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement;
  if (fullscreenElement) {
    exitFullscreen();
  } else {
    launchIntoFullscreen(document.getElementById('video-container'));
  }
});

function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    element.classList.toggle('fullscreen');
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```

Let's walk through the script in more detail.

```js
document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn')) return;

  event.preventDefault();
});
```

We use `JavaScript` `event delegation` to bind to all click events. But then return if the element does not have a class of `btn`.

We then say `preventDefault()` to stop any default behavior.

```js
const fullscreenElement =
  document.fullscreenElement ||
  document.mozFullScreenElement ||
  document.webkitFullscreenElement ||
  document.msFullscreenElement;
if (fullscreenElement) {
  exitFullscreen();
} else {
  launchIntoFullscreen(document.getElementById('video-container'));
}
```

After the click, we need to check if we are already in fullscreen mode. We can use the selectors in the `fullscreenElement` variable.

If either of those exists we will call the function: `exitFullscreen()` else we will call the function `launchIntoFullscreen()`.

> || is an operator for `or`. It tells us it must be option one or option two etc.

```js
function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    element.classList.toggle('fullscreen');
  }
}
```

The `launchIntoFullscreen` function will use the native video fullscreen functions if they exist. Each browser has its fullscreen method. That's why we do the `if...else` statements.

If none of those exist (iOS, for example), we mimic fullscreen by toggling the `fullscreen` class on our video container div.

Learn more about [Vanilla JavaScript classList](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/).

```js
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```

To exit the fullscreen mode, we use another custom function. The exit function is the opposite of the launch function. It will call the native fullscreen functions for each browser.
We don't have to check iOS because it will never enter this exit function. It will toggle the fullscreen class.

So this is how you can programmatically enter a fullscreen mode for a video with JavaScript.

### See the code example on Codepen

You can find and play with this demo here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="OJyRqzG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Fullscreen Video">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/OJyRqzG">
  Vanilla JavaScript Fullscreen Video</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Unfortunately, the video fullscreen doesn't work on every browser. That's why we incorporated our nifty mimic function!

![Video Fullscreen browser support](https://caniuse.bitsofco.de/image/fullscreen.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
