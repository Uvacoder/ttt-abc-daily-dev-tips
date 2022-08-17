---
layout: ../../layouts/Post.astro
title: 'Fading images using JavaScript'
metaTitle: 'Fading images using JavaScript'
metaDesc: 'How to fade replace images using JavaScript.'
image: /images/20-03-2021.jpg
date: 2021-03-20T03:00:00.000Z
tags:
  - javascript
---
The other day, I worked on a pretty simple HTML website and wanted to have some fading images but not bloatware of JavaScript plugins.

Hence I tried how easy this could be with some simple Vanilla JavaScript and CSS.

I'll show you the most straightforward way, which does involve background-images, we could achieve this with actual images, but we'll try that in another article.

You can see the result for this article in the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="dyOrKvL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Fading images using JavaScript">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyOrKvL">
  Fading images using JavaScript</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

Let's first look at the `HTML` structure we need for this.
It comes down to a simple placeholder.

```html
<div id="fadingImage" class="image-styled"></div>
```

As you can see, I added an `ID` to use as a JavaScript selector and a class to add some styling.

That will all for our HTML structure. You can work around this, as a single div will be all we need.

## Styling the image

Now let's add some styling to our image. As you could see in our HTML, I added the `image-styled` class.

This will be the final CSS:

```css
.image-styled {
  background-position: center;
  background-size: cover;
  background-image: url("img.jpg");
  display: flex;
  height: 75vmin;
  width: 75vmin;
  transition: background 0.5s linear;
}
```

The main elements are the background tags, which will style the image nice and centered in our div.
We then use flex and viewport queries to make it appeal nicely.
The last line with the `transition` will make sure it smoothly fades between the images.

You can leave the transition if you want a simple, immediate switch of the images.

## Replacing images with JavaScript

We will be using JavaScript to replace our image.
First, let's define an array of images, starting with the one we used in CSS.

```js
const images = [
  "img.jpg",
  "2.jpg", 
  "3.jpg"
];
```

Then, we'll also need to have a reference to the image element.

```js
const imageEl = document.getElementById("fadingImage");
```

The next part will bring it together. We will be using the setInterval method in JavaScript to execute code every x time.

In our case, 5000 milliseconds, you can alter this in any way you like.

```js
window.setInterval(changePicture, 5000);
```

That piece of code will call a function called `changePicture` every 5000ms. 
Let's create the `changePicture` function now.

```js
let i = 0;
function changePicture() {
  i++;
  if (i > images.length - 1) i = 0;
  imageEl.style.backgroundImage = `url(${images[i]})`;
}
```

What we do here is firstly create a variable counter that is set to the first element.

Then inside, we plus the counter, if it hits the number of images, we defined we reset it to zero.

> We use zero because arrays start at 0

Then we modify the background image of the div.
Because we used the transition in CSS, it will give us a fading effect.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
