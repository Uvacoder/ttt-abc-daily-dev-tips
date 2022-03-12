---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript playing Audio'
metaTitle: 'Vanilla JavaScript playing Audio'
metaDesc: 'See how easy it is to play Audio with Vanilla JavaScript'
image: /images/12-04-2020.jpg
date: 2020-04-12T03:00:00.000Z
tags:
  - javascript
---

For me, audio and video are elements you would normally go and look for a library. But actually, it's really easy playing audio in `Vanilla JavaScript`. Let me guide you through playing a song in the browser with nothing but `Vanilla JavaScript`.

## Playing Audio with Vanilla JavaScript

For the `HTML` part we use the following markup:

```html
<a
  href="https://freesound.org/data/previews/511/511919_919187-lq.mp3"
  class="js--music-player"
  >▶️ Play</a
>
<br />
<a
  href="https://freesound.org/data/previews/511/511749_9271295-lq.mp3"
  class="js--music-player"
  >▶️ Play</a
>
```

In this case we choose to use a `js--music-player` class so we can experiment with doing multiple players on one page.

> We could also have chosen to go with a data-attribute selector, read more about that in [this article](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/).

For the `JavaScript` part, we use the following code which we will go through step by step.

```js
// Loop through all elements with class js--music-player
Array.from(document.querySelectorAll('.js--music-player')).forEach(function (
  player
) {
  // We initially set a Audio element with the contents of our href
  player.audio = new Audio(player.href);

  // Add click event to this element
  player.addEventListener('click', function (event) {
    // Check if this player is playing 😎
    if (event.target.classList.contains('playing')) {
      // Playing so pause our audio track
      event.target.audio.pause();
      // Remove our playing class
      event.target.classList.remove('playing');
      // Set the content to play again
      event.target.innerText = '▶️ Play';
    } else {
      // Not playing so we can start playing
      event.target.audio.play();
      // Add the class of playing
      event.target.classList.add('playing');
      // Change text to Stop
      event.target.innerText = '🛑 Stop';
    }

    // Prevent from going to the actual link
    event.preventDefault();
  });
});
```

Let's walk through each item in detail

```js
// Loop through all elements with class js--music-player
Array.from(document.querySelectorAll('.js--music-player')).forEach(function (
  player
) {});
```

As you can see we are using `document.querySelectorAll(".js--music-player")` as our selector to get all elements on our page that have the class `js--music-player`. We pass these elements inside a native `Array.from...forEach` function. This function will create an array of our elements and loop through them.

The only action we do in this loop is the following:

```js
// We initially set a Audio element with the contents of our href
player.audio = new Audio(player.href);
```

The `player.audio()` line will set a new Audio element with the content of our player's URL (mp3).

Next, we add a click listener to our element with the following code:

```js
// Add click event to this element
player.addEventListener('click', function (event) {});
```

Since we are already looping over our elements, we might as well use this opportunity to add this listener now, instead of doing another eventListener.

Inside the click we do two important parts

```js
// Check if this player is playing 😎
if (event.target.classList.contains('playing')) {
  // Playing so pause our audio track
} else {
  // Not playing so we can start playing
}

// Prevent from going to the actual link
event.preventDefault();
```

First, we check if the player's classList contains the class `playing` we check this to maintain a track of which one is playing or not.

Then we run `event.preventDefault();` to stop the link from actually going to the file.

> classList has multiple options like add/remove/contains. Read more about it in [this article](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/).

If our player does not have the class of `playing` we need to make sure it starts playing:

```js
// Not playing so we can start playing
event.target.audio.play();
// Add the class of playing
event.target.classList.add('playing');
// Change text to Stop
event.target.innerText = '🛑 Stop';
```

We set the audio (we set in the initial loop) to play(). You will now hear the music play.

Then we add the class we where initially looking for of `playing`, and then we change the text of our player to contain Stop.

So if we click this link again, it will now have the class of `playing` and we run the following code:

```js
// Playing so pause our audio track
event.target.audio.pause();
// Remove our playing class
event.target.classList.remove('playing');
// Set the content to play again
event.target.innerText = '▶️ Play';
```

This pauses the audio from playing, will remove the playing class from the element and change the text back to what it was before.

You can see this in action here:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="gOaYeOe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript playing Audio">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOaYeOe">
  Vanilla JavaScript playing Audio</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
