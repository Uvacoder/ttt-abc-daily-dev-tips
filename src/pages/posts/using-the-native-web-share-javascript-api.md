---
layout: ../../layouts/Post.astro
title: 'Using the native web share JavaScript API'
metaTitle: 'Using the native web share JavaScript API'
metaDesc: 'What is the native web share API and how can we use it'
ogImage: /images/07-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/bddeb193-3bd8-4318-a31b-93965e047d00
date: 2022-07-07T03:00:00.000Z
tags:
  - javascript
---

Did you know there is a native share function you can invoke with JavaScript?

You might have seen them around on the internet.
If not, I've added a video demonstration of how it looks.

<!-- ![Using the native web share JavaScript API](https://cdn.hashnode.com/res/hashnode/image/upload/v1656312086327/vwYZtJ0Uc.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1656312094/web-share_dw08we.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1656312094/web-share_ydzosy.mp4" type="video/mp4" />
</video>

Interesting in adding this to your website?
Follow me along as we build it together.

## JavaScript native web share API

It's important to note this method does not work on every browser, it's mainly built for mobile devices, but some desktop variants like Safari also support it.

Remember that you should always create your fallback share method when you use this.

The first thing we need to do is see if the current user has support for the navigator.

We can use the [`in` method](https://daily-dev-tips.com/posts/javascript-check-if-property-exists-in-object/#using-in-to-see-if-an-object-has-a-property) to check if the navigator holds the share functionality.

The code to determine it looks like this:

```js
if ('share' in navigator) {
  console.log('native share available');
} else {
  console.log('provide fallback share');
}
```

Now we can go ahead and add a button to our webpage that we can attach a click to.

```html
<button id="share-button">Share me</button>
```

We can then fetch the button by its ID.

```js
const shareButton = document.getElementById('share-button');
```

And attach a listener to it.

```js
shareButton.addEventListener('click', (event) => {
  // Do the share action
});
```

Inside this function, we can invoke the native share or use our fallback share mechanism.

```js
shareButton.addEventListener('click', (event) => {
  if ('share' in navigator) {
    navigator
      .share({
        title: 'Look at this native web share',
        url: 'https://daily-dev-tips.com/posts/using-the-native-web-share-javascript-api/',
      })
      .then(() => {
        console.log('Callback after sharing');
      })
      .catch(console.error);
  } else {
    console.log('provide fallback share');
  }
});
```

Let's take a closer look at what's going on here.

- We attach a click handler to our button
- We check if we have the native share option
  - Yes: We invoke it with a title and URL
  - No: We should provide some fallback

As you can see, we can even attach callbacks to our native share API.
You might want to use it to thank the user for sharing or logging some analytics event.

If you are interested, you can try it out on this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="jOzNadp" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOzNadp">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Web share API options

In our example, we set the title and URL option. Let's see what else we can provide.

The web share API accepts the following options:

- title: a string that represents the title (may be ignored by the shared platform)
- URL: the URL of the sharable link
- text: a string representing some information about the share action
- files: an array of files it supports quite a wide variety of file options

In total you could provide a object like this:

```js
const file = new File([blob], 'picture.jpg', { type: 'image/jpeg' });

navigator.share({
  title: 'Web Share',
  text: 'Testing out the web share API',
  url: 'https://daily-dev-tips.com/posts/using-the-native-web-share-javascript-api/',
  files: [file],
});
```

## Browser support

Not all systems support this feature. However, most mobile browsers will support it.

Generally, it's recommended to have a custom fallback modal for the share options.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/web-share.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/web-share.png">
<img src="https://caniuse.bitsofco.de/image/web-share.jpg" alt="Data on support for the web-share feature across the major browsers from caniuse.com">
</picture>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
