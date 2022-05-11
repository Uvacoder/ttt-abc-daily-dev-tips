---
layout: ../../layouts/Post.astro
title: 'JavaScript lightbox effect without using plugins'
metaTitle: 'JavaScript lightbox effect without using plugins'
metaDesc: 'Today we are learning how to make a cool Lightbox without any plugins!'
image: /images/19-11-2020.jpg
date: 2020-11-19T03:00:00.000Z
tags:
  - javascript
---

Lightboxes are amazing! I remember the first time seeing them in the jQuery days and thinking, WOW, someone spent a lot of time building this.

Over the years, I've realized it can be made in Vanilla JavaScript and some CSS.

So today, I wanted to show you how you can build your image Lightbox effect without using any plugins!

> A while ago, we did a [vanilla javascript modal](https://daily-dev-tips.com/posts/vanilla-javascript-modal-pop-up/), which is quite similar but uses a different approach.

The result is this excellent effect:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/lightbox_xhd256.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/lightbox_z3h3hk.mp4" type="video/mp4" />
</video>

## HTML Structure

We will start by laying out the HTML building blocks of our application.

```html
<div class="container">
  <div class="col">
    <img
      src="https://images.unsplash.com/photo-1605347220242-04d3b97ceee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      onClick="openLightbox(this)"
    />
  </div>
  <div class="col">
    <img
      src="https://images.unsplash.com/photo-1605306030698-6e966cc142b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      onClick="openLightbox(this)"
    />
  </div>
  <div class="col">
    <img
      src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      onClick="openLightbox(this)"
    />
  </div>
</div>

<!-- Actual Lightbox -->
<div id="lightbox" class="hidden lightbox">
  <div onClick="closeLightbox()" class="close">❌</div>
  <div class="lightbox-content">
    <img id="lightbox-image" />
  </div>
</div>
```

The top part contains the layout the user will see, in this case, a container with three columns, each containing one image.

The image has an `onClick` function, which calls the `openLightbox`. (We will create this in a bit)

Then at the bottom, we have the actual Lightbox.
Inside the Lightbox, we add a simple emoji-powered close button, which `onClick` calls the `closeLightbox` function.

And inside the Lightbox, we also see an empty image which we'll use to place our image.

> This article does not focus on accessibility and is not optimized for that purpose

## Adding some styling to our Lightbox

Let's make our application look better by adding some basic styling to it.

First, we will use [`flexbox` to center our columns](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/), and next, we will add a border and box-shadow to make the image pop more.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  background: url('https://images.unsplash.com/photo-1558051815-0f18e64e6280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80')
    no-repeat center center;
  background-position: cover;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.container .col {
  width: 30%;
  margin: 1.6%;
}
.container .col img {
  cursor: pointer;
  border: 5px solid #fff;
  box-shadow: 0 0 1rem #aaaaaa;
  max-width: 100%;
  max-height: 100%;
}
```

As for our Lightbox goes, we need it to span over the whole page and be fixed starting from the top.

```css
.lightbox {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
```

We are using opacity and visibility to animate the fade-in and fade-out effects.

Now let's add the hidden class.

```css
.lightbox.hidden {
  opacity: 0;
  visibility: hidden;
}
```

And to top it up, we style the button, content, and image inside the Lightbox.

```css
.lightbox .close {
  position: absolute;
  right: 2.5%;
  top: 2.5%;
  font-size: 2rem;
  cursor: pointer;
}
.lightbox-content {
  display: flex;
  margin: 5%;
  align-items: center;
  justify-content: center;
}
.lightbox-content img {
  max-width: 100%;
  max-height: 100%;
  border: 5px solid #fff;
}
```

## JavaScript Lightbox effect

On to our JavaScript, this is the part that will hook everything up and make it work.

What we want to happen:

- User clicks on an image. We get the src of the image to append it to our Lightbox image and remove the hidden class from our Lightbox
- User clicks the close button. We re-add the hidden class to our Lightbox.

Let's define the variables we need to make it work:

```js
const lightbox = document.getElementById('lightbox');
const lightboxHolder = document.getElementById('lightbox-image');
```

We define our basic Lightbox element and the image element inside it.

Now let's create the function that will show the Lightbox.

```js
openLightbox = (element) => {
  lightboxHolder.src = element.src;
  lightbox.classList.remove('hidden');
};
```

Wait, that's it? Yes, we retrieved the image's src the user clicked on and added it to our Lightbox.
Then we remove the hidden class, and the user sees our Lightbox!

Now we need the close function.

```js
closeLightbox = () => lightbox.classList.add('hidden');
```

And now we have a fully functional Lightbox without using any plugins.

You can try this Lightbox out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="gOMqvEK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript lightbox effect without using plugins">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/gOMqvEK">
  JavaScript lightbox effect without using plugins</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
