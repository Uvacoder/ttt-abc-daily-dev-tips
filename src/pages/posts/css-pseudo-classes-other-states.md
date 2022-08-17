---
layout: ../../layouts/Post.astro
title: 'CSS Pseudo-classes: Other states'
metaTitle: 'CSS Pseudo-classes: Other states'
metaDesc: 'CSS Pseudo classes to manipulate other states a full tutorial [2022]'
image: /images/25-01-2022.jpg
date: 2022-01-25T03:00:00.000Z
tags:
  - css
---

This is the last series in the CSS pseudo-class exploration.
These are pseudo-classes that did not fit any of the previous categories.

I've split this up into a series of four, where this is the last part about other pseudo-states.

The other parts:

- [Link pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-links/)
- [Form pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-forms/)
- [Element state selectors](https://daily-dev-tips.com/posts/css-pseudo-classes-element-states/)
- _Other pseudo states_ (this one 💖)

## Other state selectors

As for the other ones, we have the following that we can explore.

- `:is`
- `:not`
- `:has`

### `:is`

This selector can be used to match multiple elements on the go.

You might have seen the following in standards CSS before:

```css
div strong,
div i {
  color: hotPink;
}
```

This will make all strong and italic elements in a div pink.
However, we can leverage the `:is` selector to make this a bit cleaner.

```css
div :is(strong, i) {
  color: hotPink;
}
```

I like this selector and have been using it more lately. It cleans up classes.

Try it out in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="xxXMBOq" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxXMBOq">
  `:is`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:not`

Much like the above `:is` selector, this one does the opposite and fires if it's NOT one of the mentioned elements.

We want to style all elements, but the strong and italic ones.

```css
div :not(strong, i) {
  color: hotPink;
}
```

And another cool thing we can do with this selector is validating on even more queries.

```css
img:not([alt]) {
  outline: 10px solid red;
}
```

The above example will put a big red outline around images missing the `alt` attribute.

> Note: check out this article for more information about [CSS attribute selectors](https://daily-dev-tips.com/posts/css-attribute-selectors/)

Try both out in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWaoJbV" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWaoJbV">
  `:is`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I also have a complete article on the [CSS `:not` selector](https://daily-dev-tips.com/posts/css-not-selector/) if you want more details.

### `:has`

This is not a stable solution yet, but super excited this is coming out!

So far, you can only use this in the Safari Technology preview version.
But it's super exciting to see what we can do with it.

We can target a parent that contains certain children.

```css
div:has(p) {
  background: yellow;
}
```

This would select all divs that have paragraph elements.

Some use-cases would be to remove margin from a header if it has a subtitle, for instance:

```css
.header {
  margin: 1;
}
.header:has(.subtitle) {
  margin: 0;
}
```

Keep an eye out for this one, as it will become a big change for what we can do with CSS.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
