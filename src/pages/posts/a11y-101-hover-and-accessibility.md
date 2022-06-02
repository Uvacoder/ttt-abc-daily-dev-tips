---
layout: ../../layouts/Post.astro
title: 'A11Y 101: hover and accessibility'
metaTitle: 'A11Y 101: hover and accessibility'
metaDesc: 'What should we be aware of when using hover in our websites'
image: /images/01-06-2022.jpg
date: 2022-06-01T03:00:00.000Z
tags:
  - accessibility
---

When creating impressive designs, we often choose to implement certain features to only show on hover.

This often creates excellent ascetics, and designers tend to love this.

However, we should always opt for alternatives when it comes to accessibility.

The main concern here:
Is everything accessible **without** hovering?

This could mean no hidden elements or fallback for keyboard/mobile users.

## What about focus?

For some elements like, for instance, buttons of cards, we can leverage `:focus` states.
And although this works for most cases, it has some downsides of only working in specific fields.

In the example of cards, we need to wrap our whole card in a link, and while that works, we then lose some other opportunities.

I won't go too much into detail. There are some solutions to using [`focus-within`](https://daily-dev-tips.com/posts/why-css-focus-within-is-amazing/), but more on that at a later stage.

For the basics, never remove the default focus from your elements. Many people tend to remove it, but how will mobile and keyboard users know which element is active?

## Do you need hover?

Besides the apparent button and link indicators, you might have certain display elements that only show when users hover?

Like a more options menu that only appears on hovering a card.
I would advise against this as it's not super inclusive.

Most screen readers will even ignore your content (depending on what solution you used).

So, do you need to hide that button?
Then, why was it there in the first place?

If you find yourself having a good reason for that, make sure you atleast [show it to screen readers](https://daily-dev-tips.com/posts/a11y-101-hiding-content/) and even mobile users!

A small note on this topic, there is even a way to detect if a browser has mouse support.

> Note: This is not a 100% way of doing it, as people might choose not to use a mouse even when it's attached!

```css
/* The primary input mechanism of the device includes a 
	pointing device of limited accuracy. */
@media (pointer: coarse) {
  ...;
}

/* The primary input mechanism of the device 
	includes an accurate pointing device. */
@media (pointer: fine) {
  ...;
}

/* The primary input mechanism of the 
	device does not include a pointing device. */
@media (pointer: none) {
  ...;
}

/* Primary input mechanism system can 
	hover over elements with ease */
@media (hover: hover) {
  ...;
}

/* Primary input mechanism cannot hover 
	at all or cannot conveniently hover 
	(e.g., many mobile devices emulate hovering
	when the user performs an inconvenient long tap), 
	or there is no primary pointing input mechanism */
@media (hover: none) {
  ...;
}

/* One or more available input mechanism(s) 
	can hover over elements with ease */
@media (any-hover: hover) {
  ...;
}

/* One or more available input mechanism(s) cannot 
	hover (or there are no pointing input mechanisms) */
@media (any-hover: none) {
  ...;
}
```

(Big shoutout to [Blackbam for this complete answer](https://stackoverflow.com/a/52854585))

## Prevent traps!

Besides all those optimization things, the worst thing that could happen is that you create a trap!

You often see this kind of thing with auto-modals. Think about one of these fashion websites. They usually popup a zoomed-in image preview on hover, right?

Sometimes this happens when you scroll on your mobile and tap once. The website doesn't provide the right ways of getting out of this modal.

Hence, you are trapped!
The only way out is to refresh the website.

This is, of course, bad!
We never want to get a user stuck on a specific part of our website.

The same can happen with tooltips on forms.
And yes, this happens all the time.

You are filling out a form, and the form has some autosuggestions tooltips on the field. Super lovely they are trying to help us, but sometimes they pop up on the field.

And now we lost input controls, we can no longer exit the info tooltip, and we can't even focus on the field anymore.

This also happens when you use some autofill mechanisms on select lists, for instance, the country ones.
The website is trying to help us with a autocomplete, but it sits on top of the field, and we just lost control of the input.

## So, how can I improve?

The main objective is to use your website as a keyboard and mobile user.

Try it out on a physical device. Are you able to use all the options as intended?

Are you able to fill out a form without getting blocked?

If you can use your website to the fullest, you are succeeding on this level.
Well done 👏

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
