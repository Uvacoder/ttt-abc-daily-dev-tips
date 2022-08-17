---
layout: ../../layouts/Post.astro
title: 'HTML Autocomplete sms code'
metaTitle: 'HTML Autocomplete sms code'
metaDesc: 'Learn how to help the used showing one-time-password codes in HTML.'
image: /images/09-03-2021.jpg
date: 2021-03-09T03:00:00.000Z
tags:
  - html
---

I'm sure you've seen these around, you have to enter an SMS code, and it pops up in the input field.

But did you know this is super easy to achieve in HTML?
Yes, HTML, no fancy JavaScript, nothing!

What I'm talking about looks like this:

![SMS autocomplete in HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1614841469854/LV7QqkChh.png)

## HTML Structure

For this to work we need a specific input element with some attributes:

```html
<input
  type="text"
  name="token"
  inputmode="numeric"
  pattern="[0-9]"
  autocomplete="one-time-code"
/>
```

As you can see, we render a numeric input to show the number keyboard on mobile devices.
But the proper magic is in the `autocomplete` field. The `one-time-code` is used to help the user.

> Note: The are multiple autocomplete values we can use: [Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)

You can find the full HTML structure on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="YzpvboM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Autocomplete code">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/YzpvboM">
  Autocomplete code</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

Unfortunately, this will only work in Safari and iOS at the moment.
The autocomplete, in general, has pretty good support.

![HTML autocomplete browser support](https://caniuse.bitsofco.de/image/input-autocomplete-onoff.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
