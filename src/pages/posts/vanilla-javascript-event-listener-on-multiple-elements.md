---
layout: ../../layouts/Post.astro
title: 'Vanilla JS add event listener on multiple elements'
metaTitle: 'Add Event Listener on Multiple elements (Vanilla JS)'
metaDesc: "Learn three different ways to use JavaScript's addEventListener for multiple HTML elements in."
image: /images/30-04-2020.jpg
date: 2020-04-30T03:00:00.000Z
tags:
  - javascript
---

So the other day Svondervoort asked [in the comments](https://daily-dev-tips.com/posts/animated-hamburger-side-menu/#heading-2-comments-on-this-page) why I was using the global JavaScript event listener instead of adding it to the specific element.

I thought it was an excellent question, and to be honest, it's one of these things that also have a preferred way of working.

So in `Vanilla JavaScript`, there are multiple ways of adding `event listeners` to elements. So let's look at some Vanilla JS examples for the addEventListener method and apply it to HTML elements.

## Add event listener to one single element

So of course, we can use add event listener directly on an HTML element using, for example the following code:

```js
const btn = document.getElementById('btn-section-3');
btn.addEventListener('click', function (event) {
  console.time('id');
  event.preventDefault();
  const element = document.getElementById(event.target.dataset.target);
  element.scrollIntoView();
  console.timeEnd('id');
});
```

As you can see, very easy to understand, we get the element based on its `ID` CSS selector and then use `addEventListener` to listen for the click event.

Then we start a [performance timer](https://daily-dev-tips.com/posts/vanilla-javascript-timing-functions/) to keep track of the speed.

We then do a simple [scrollIntoView](https://daily-dev-tips.com/posts/vanilla-javascript-element-scrollintoview/) to have some animation.

This is a good way of binding to the element, but it's very narrow. You can only attach to that specific element, and it will stop there. There is also no way to bind to multiple elements.

## Vanilla JS use addEventListener in a for loop

So how can we use `addeventlistener` on multiple elements?

We can use a _for-loop_. There are many ways to loop in JavaScript, but let's try this one:

```js
document.querySelectorAll('.more-class').forEach((item) => {
  item.addEventListener('click', (event) => {
    console.time('more');
    event.preventDefault();
    const element = document.getElementById(event.target.dataset.target);
    element.scrollIntoView();
    console.timeEnd('more');
  });
});
```

So the same thing as above, we use `querySelectorAll` to get all items that match the class `more-class` and loop through the elements. Then we use `addEventListener` and add it again to each element.

> Keep in mind we are only timing the click. We also used the `forEach-loop`, which takes up time!

## Add event listener to multiple items using event bubbling

The method I use most is called _event bubbling_.

"Event bubbling" means that every DOM element will have an event listener and bubbles through each child. In the event, we have to filter out which elements we want to react to.

At first, this method seems very slow and sloppy, but it's one of the most versatile methods and quick!

```js
document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn-scroll-into')) return;
  console.time('bubbling');
  event.preventDefault();
  const element = document.getElementById(event.target.dataset.target);
  element.scrollIntoView();
  console.timeEnd('bubbling');
});
```

So here, we use `addEventListener` on all elements to listen to clicks anywhere in the DOM. The JavaScript code will check through all the children if the target elements match the class `btn-scroll-into`.

If this is not the case, we `return;`. The return will stop the function.
If not, we do the same code we did before.

## Which one should you use?

I honestly think it's up to you. I prefer the `event bubbling` method when I have to listen to many elements because it is easiest to apply without worrying about performance. But you will see me use a variety of these in projects.

I hope you learned something about adding event listeners across many elements and hope you can use these in your upcoming Vanilla JavaScript projects.

### Try the addEventListener code examples in this Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="jObLOqw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript event listener on Multiple elements">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jObLOqw">
  Vanilla JavaScript addEventListener on Multiple elements</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
