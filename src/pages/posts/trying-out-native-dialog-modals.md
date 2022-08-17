---
layout: ../../layouts/Post.astro
title: 'Trying out native dialog modals'
metaTitle: 'Trying out native dialog modals'
metaDesc: 'Taking a look at the native dialog element'
ogImage: /images/08-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/509da15d-d403-4597-b722-b05d51082500
date: 2022-08-08T03:00:00.000Z
tags:
  - html
---

I wrote an article on [creating your modal](https://daily-dev-tips.com/posts/vanilla-javascript-modal-pop-up/) instead of using a plugin.

I reposted it the other day on Twitter, and [Jhey](https://twitter.com/jh3yy/status/1549693451033354241?s=20&t=uzoz7lR0NfpkxyjExJuZUw) made a good comment that it could quickly be done with the dialog element these days.

I made a [Astro version powered by dialog](https://daily-dev-tips.com/posts/reusable-modal-component-in-astro/) but haven't written down the plain version for you all.
So in this article, we'll create a modal with the dialog element.

## The dialog element

The main element we'll be working with today is the dialog element.
This is an HTML element that, by default, is a dialog (not a modal).

It can take an open state, indicating whether it's open or not.

```html
<dialog open>
  <p>Hello from the dialog</p>
</dialog>
```

The code above will render the dialog directly on our page like this.

![Dialog in HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1659074641491/UFGDYDvNs.png)

You'll notice that it's not a modal and doesn't have a backdrop this way.

## Dynamically opening the modal

We usually want to open the dialog with some action.

Luckily for us, the dialog comes with a JavaScript API.
If you give your dialogs a specific ID, we can target them.

```html
<dialog id="mydialog">
  <p>Hello I only show on click</p>
</dialog>
```

We can then use JavaScript to open up the modal like this.

```js
window.mydialog.show();
```

However, I'd recommend using the more explicit `showModal` function.
This one makes it a modal, allowing us to have a backdrop and centering the dialog on the page.

```js
window.mydialog.showModal();
```

It's, of course, pretty rare to show a dialog directly in the browser so let's only show it on button click.

```html
<button onclick="window.mydialog.showModal();">show modal</button>

<dialog id="mydialog">
  <p>Hello I only show on click</p>
</dialog>
```

## Closing the modal

There are two ways of closing the modal. The first one is to use the `close` function on the dialog like so:

```js
<button onclick='window.mydialog.close();'>close modal</button>
```

Alternatively, you can use an HTML way of closing the dialog.
You can put a form with the method dialog inside the dialog element.

```html
<form method="dialog">
  <button>Close</button>
</form>
```

## Styling the modal backdrop

The last part of why the dialog is cool is that you can style some custom elements.

We get a new pseudo-element called `::backdrop` to style the backdrop the modal has.

```css
dialog::backdrop {
  background: rgba(255, 0, 0, 0.1);
}
```

We should now get a pinkish backdrop color when we open the modal.

Then, of course, you can style every element of the dialog as you see fit.

## Accessibility concerns

It's good to note that to this day, there are still some accessibility concerns raised.

But from trying it out, most browsers these days also got the full support of the focus within the dialog, and it's looking to be a full-blown accessible solution.

[Read more about the concerns](https://www.scottohara.me/blog/2019/03/05/open-dialog.html).

## Conclusion

The dialog element, exposed APIs, and styling options are a great way to create modals these days.

I'm sure to be trying them out on a project very soon.

If you want to play with the dialog element, I've created this CodePen for you to try out.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="LYdOQYX" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYdOQYX">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
