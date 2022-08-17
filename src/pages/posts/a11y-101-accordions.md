---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Accordions'
metaTitle: 'A11Y 101: Accordions'
metaDesc: 'A look at modern accessible accordions'
image: /images/04-06-2022.jpg
date: 2022-06-04T03:00:00.000Z
tags:
  - accessibility
---

Regarding accessibility, you'll always hear the following sentence: [Semantic HTML always wins](https://daily-dev-tips.com/posts/a11y-101-semantic-html-always-wins/).

Accordions are sections of content grouped by headers. The user can then collapse or close these sections to show/hide more information.

![HTML Accordion on Wikipedia mobile website](https://cdn.hashnode.com/res/hashnode/image/upload/v1653459020012/4csaYmDyN.png)

Regarding these accordions, this might be the one exception to the semantic HTML rule.

But, this is a bit controversial.
In HTML5, we were introduced to the `details` & `summary` elements, which is precisely this!

However, they didn't have full support, so many people would argue that a custom setup is still the way to go.

As I write this, the browser support is still lacking on IE11, older Edge, and Opera mini.

Lacking, meaning they don't support the toggle and will fall back to showing the whole content piece.

## Testing details summary

To set up the details & summary setup, we can use the following markup.

```html
<details>
  <summary>Introduction</summary>
  <p>The text inside this will be shown on click.</p>
  <p>You can even add multiple lines in here.</p>
</details>
```

The code snippet above will render a native toggle.

<!-- ![Accordion action visually represented](https://cdn.hashnode.com/res/hashnode/image/upload/v1653459405249/bCJRlWppt.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1653459463/accordion_bdli3t.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1653459463/accordion_bbwyot.mp4" type="video/mp4" />
</video>

Then I tested the code on IE11, which is unsupported, and we got the following result.

![Accordion showing open on IE11](https://cdn.hashnode.com/res/hashnode/image/upload/v1653459691747/FzbiFY3Gj.png)

## So what is good?

We should use the semantic HTML as intended. If we show these elements as open to older browsers, that is the way it is.

They work perfectly fine on modern browsers and act as expected.

The cool part about using the semantics is that they evolve. They will get better and more advanced support.

## How accessible is this, then?

As mentioned, the semantic elements support screen readers and other use-cases perfectly.
The summary element is handled as a button and can be toggled using the enter or space keys.

It also indexes nicely in the rotor from our screen reader.

And those using older technology get to see the entire content. And that's perfectly fine.

Are you looking to try it out?

Use the following CodePen to see how it works.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBxVEqb" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/qBxVEqb">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Bonus!

The old ways of creating accessible accordions always relied on introducing some JavaScript to handle states.

In this version, we can ship it with 0 JavaScript, which is another win for semantic HTML.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
