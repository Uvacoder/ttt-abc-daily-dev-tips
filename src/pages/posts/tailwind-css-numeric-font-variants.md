---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS Numeric font variants'
metaTitle: 'Tailwind CSS Numeric font variants'
metaDesc: "Let's see how we can leverage the CSS numeric font variant property in Tailwind CSS"
image: /images/09-03-2022.jpg
date: 2022-03-09T03:00:00.000Z
tags:
  - css
  - tailwind
---

Did you know there is a CSS property to adjust how numeric values are displayed?

It's called the `font-variant-number` property, which is used to distinguish how a particular font should render specific numeric values.

Tailwind CSS has this support built-in, so let's look at our options and what they output.

> Note: Not all fonts support this property, so be aware it might not work when you try this on custom fonts

You can use the `normal-nums` class to reset the value to `normal` whenever you want the default behavior.

## Ordinal markers

You want to show ordinal markers like in `1st`. The `st` should show smaller on the top line.

We can use the `ordinal` class, which in CSS terms would add the following piece of CSS:

```css
font-variant-numeric: ordinal;
```

Let's see how our HTML section would look in Tailwind:

```html
<p class="ordinal">1st</p>
```

You can see the demo at the bottom linked CodePen.

## Slashed zero

Sometimes you might want to distinguish between zero and the letter `O' clearly. We can achieve this by using the`slashed-zero` class.
This will add the following CSS class.

```css
font-variant-numeric: slashed-zero;
```

Making our HTML available like this:

```html
<p class="slashed-zero">0</p>
```

> Note: Small note here is that Google fonts do not yet support the glyph for slashed zero's, so only self-hosted/CDN fonts work

You can see the demo at the bottom linked CodePen.

## Align numbers

Let's see how we can align numbers to match the heights of each other.

Adding the `lining-nums` class will ensure the numbers are aligned by their baseline.

It adds the following CSS:

```css
font-variant-numeric: lining-nums;
```

And the Tailwind code will look like this:

```html
<p class="lining-nums">1234567890</p>
```

Compared to `oldstyle-nums` which have an alternative alignment that will be dependent on the font style.

Which will add the following CSS:

```css
font-variant-numeric: oldstyle-nums;
```

And it looks like this in Tailwind:

```html
<p class="oldstyle-nums">1234567890</p>
```

You can see the demo at the bottom linked CodePen.

## Proportional vs. Tabular

Another option we get is to display the font proportional or tabular.

Proportional means the numbers show in their width, where tabular makes every number the same width.

To make them proportional, we can add the `proportional-nums` class, which adds the following CSS:

```css
font-variant-numeric: proportional-nums;
```

In Tailwind, that means adding the following class.

```html
<p class="proportional-nums">1212</p>
<p class="proportional-nums">9090</p>
```

And for the tabular nums, we can add the `tabular-nums` class, which adds the following CSS:

```css
font-variant-numeric: tabular-nums;
```

To make this work in Tailwind add the following HTML:

```html
<p class="tabular-nums">1212</p>
<p class="tabular-nums">9090</p>
```

In the CodePen linked below, you can see the difference between the two renders as the tabular one is slightly spaced out.

## Fragments

Sometimes we want to render fragments so they showcase a bit nicer.
This is a super cool feature, but not many fonts support this, so be aware of that when testing it out.

We can either choose to show `diagonal-fractions` which will show the fraction numbers divided with a slash.

The `stacked-fractions` option will showcase it as a horizontal divider between the two numbers.

Add the `diagonal-fractions` class to add the following CSS code:

```css
font-variant-numeric: diagonal-fractions;
```

In Tailwind that would look like this:

```html
<p class="diagonal-fractions">1/2 3/4 5/6</p>
```

Or, if you rather have the stacked fractions, you can add the `stacked-fractions` class which will add the following CSS:

```css
font-variant-numeric: stacked-fractions;
```

And in Tailwind you can add it like so:

```html
<p class="stacked-fractions">1/2 3/4 5/6</p>
```

I could not find a free font that supports it in my research.
But for instance, [Surveyor](https://www.typography.com/fonts/surveyor/styles) does.

Which makes it look like this:

![Stacked fractions support in a font](https://cdn.hashnode.com/res/hashnode/image/upload/v1646028775166/Aj9Bc2f4E.png)

## Conclusion

Although not many fonts support this, it can be beneficial to display numeric values in a better way.
Let's hope we get some more fonts supporting this excellent CSS utility.

You can see the working examples in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="jOaeBLb" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOaeBLb">
  Tailwind CSS Numeric font variants</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
