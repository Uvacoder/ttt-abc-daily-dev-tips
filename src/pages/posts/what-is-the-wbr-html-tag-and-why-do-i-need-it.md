---
layout: ../../layouts/Post.astro
title: 'What is the wbr HTML tag and why do I need it?'
metaTitle: 'What is the wbr HTML tag and why do I need it?'
metaDesc: 'How the wbr HTML tag can help you out!'
image: /images/09-12-2020.jpg
date: 2020-12-09T03:00:00.000Z
tags:
  - html
---

So, a straightforward explanation of the `<wbr>` tag in HTML stands for a work break. It doesn't mean it will break every time, but it will break every time it needs to.

You might think, huh, but CSS can do this using `word-break: break-all`, and yes, that will work, but we will have zero control.

To quickly show you the difference:

![wbr vs css](https://cdn.hashnode.com/res/hashnode/image/upload/v1607059142377/q1f2sTA5U.png)

As you can see right away, the `<wbr>` version is way more readable because we control where it breaks! The `CSS` solution will just break every time.

Of course, you can't go and edit every content piece on your website, but I find this method super useful for headers!

## How the HTML `<wbr>` tag works

It's super easy to use this tag. We simply place it in the long word where it might have a breakpoint!

```html
super<wbr />long<wbr />word<wbr />that<wbr />needs<wbr />to<wbr />break<wbr />better
```

You can see this is just a bogus word, but if we run this in our demo, you will see it breaks only on these points if it needs to!

It is an empty element meaning it doesn't have an end tag and doesn't need to self-close.

In the example above, we can have multiple breaks in one word.

> Note: If you go smaller than the smallest breaks, it will not show!

## Demo

I created this demo on Codepen to demonstrate the difference between the `<wbr>` HTML tag and the `CSS` `word-break` method.

You can resize these boxes horizontally to see the breakpoints.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="PoGZQzG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="What is the &amp;lt;wbr&amp;gt; HTML tag and why do I need it?">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/PoGZQzG">
  What is the &lt;wbr&gt; HTML tag and why do I need it?</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

Full support!! Since IE is dead 💁‍♂️!
I really like to use this super cool `HTML` attribute to fix minor responsive design issues.

![HTML wbr support](https://caniuse.bitsofco.de/image/wbr-element.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
