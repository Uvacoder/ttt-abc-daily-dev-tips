---
layout: ../../layouts/Post.astro
title: 'HTML output element'
metaTitle: 'HTML output element'
metaDesc: 'Defining the output for inputs in HTML'
image: /images/11-12-2020.jpg
date: 2020-12-11T03:00:00.000Z
tags:
  - html
---

I've seen this element around a couple of times in articles but never needed it or decided to see what it can do.

In general, it's supposed to be used as an output for other input elements.

Sounds pretty cool for certain use-cases.

Let's say we need to build a VAT calculator?

The end result:

![HTML Output element](https://cdn.hashnode.com/res/hashnode/image/upload/v1607258888953/Acjx4CyY4.gif)

## Using the HTML output element

To use this element we can simply write `<output name="output"></output>`.

But that doesn't mean it actually does anything.

To make it work, it needs a form wrapped around it and some inputs to mix values from.

Let's start by doing that.

```html
<form
  onsubmit="return false"
  oninput="output.value = parseInt(inputOne.value) + parseInt(inputTwo.value)"
>
  <input name="inputOne" type="number" value="2" /> +
  <input name="inputTwo" type="number" value="3" /> =
  <output name="output">5</output>
</form>
```

You might think, oh well, but that's cheating you just put some values in there.

The magic comes in running this code. Try and change the input values!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="zYKqjEz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML output element">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYKqjEz">
  HTML output element</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

As you can see it does rely on JavaScript to actually render a new value in the output element.
In this case we state that `output.value` (the name output) equals a parsed one + two.

> Note: Their names reference the elements used.

## HTML output VAT calculator

Let's say we need an VAT calculator, these general have an input number and a vat percentage.

```html
<form
  onsubmit="return false"
  oninput="output.value = price.valueAsNumber + (price.valueAsNumber * vat.valueAsNumber)"
>
  <input name="price" type="number" value="20" /> +
  <input name="vat" type="number" value="0.2" step="0.1" max="1" /> =
  <output name="output">24</output>
</form>
```

As you can see we are no longer using the `parseInt` method.
Instead we can use the `valueAsNumber` on input types. This makes it easier to use decimals.

Then we define the sum function as follows:

`output = price + (price * vat)`

The names above are all the names used in our HTML.

As you can see, not fancy scripts were needed, and we can fully style this any way we would like!

I hope you learned some good practical use cases for the HTML output element.

Feel free to have a play with this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="WNGwJBx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML output element ~ VAT">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNGwJBx">
  HTML output element ~ VAT</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser Support

This output element is pretty well supported and goes back to pretty old versions. We do run into issues on IE and Opera mini.

![HTML Output element](https://cdn.hashnode.com/res/hashnode/image/upload/v1607259030517/ty585ebjJ.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
