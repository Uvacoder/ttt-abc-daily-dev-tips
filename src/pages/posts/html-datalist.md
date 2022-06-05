---
layout: ../../layouts/Post.astro
title: 'HTML Datalist, a select alternative'
metaTitle: 'HTML Datalist, a select alternative'
metaDesc: 'Lets see what HTML Datalist tag is and what it can do'
image: /images/25-06-2020.jpg
date: 2020-06-25T03:00:00.000Z
tags:
  - html
---

Confession time: I have never used the Datalist before!
Therefore I thought it was about time I researched what it could be used for.

The Datalist specifies a list of pre-defined options which can be used for an input field.

This means it can be used as an autocomplete for input fields.

Let's see how to use it:

## HTML Structure

```html
<label for="looney"
  ><input list="looneys" name="looneys" id="looney" /> is my favorite Looney Tune!</label
>

<datalist id="looneys">
  <option value="Bugs Bunny"></option>
  <option value="Daffy Duck"></option>
  <option value="Elmer Fudd"></option>
  <option value="Foghorn Leghorn"></option>
  <option value="Marvin the Martian"></option>
  <option value="Porky Pig"></option>
  <option value="Road Runner"></option>
  <option value="Speedy Gonzales"></option>
  <option value="Sylvester"></option>
  <option value="Tasmanian Devil"></option>
  <option value="Tweety"></option>
  <option value="Wile E. Coyote"></option>
  <option value="Yosemite Sam"></option>
</datalist>
```

Wow, that is all! Amazing right?

We need to define `list=""` on our input, and then we can define a `datalist` with the same `id` as the `list`.

This will generate an input with autocomplete functionality.
It's basically a better select element.

You can view it in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="abdwzQQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Datalist">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/abdwzQQ">
  HTML Datalist</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Datalist downsides

It can not replace a select fully, so people will be able to type whatever they want in the box, and we can't stop them unless we are doing some `JavaScript` magic.

## Browser Support

I'm pretty surprised how well it is supported. We can even find a [polyfill](https://github.com/mfranzke/datalist-polyfill) for IE9\<.

![Datalist support](https://caniuse.bitsofco.de/static/v1/mdn-html__elements__datalist-1593006288777.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
