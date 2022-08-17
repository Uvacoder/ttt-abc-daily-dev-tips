---
layout: ../../layouts/Post.astro
title: 'CSS Pseudo-classes: Forms'
metaTitle: 'CSS Pseudo-classes: Forms'
metaDesc: 'CSS Pseudo classes to manipulate forms a full tutorial [2022]'
image: /images/23-01-2022.jpg
date: 2022-01-23T03:00:00.000Z
tags:
  - css
---

Yesterday we started looking at pseudo-classes that relate to links. In this article, we'll take a look at form-related pseudo-classes.

I've split this up into a series of four, where this is the second part about form pseudo-states.

The other parts:

- [Link pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-links/)
- _Form pseudo-states_ (this one 💖)
- [Element state selectors](https://daily-dev-tips.com/posts/css-pseudo-classes-element-states/)
- [Other pseudo states](https://daily-dev-tips.com/posts/css-pseudo-classes-other-states/)

## Form pseudo-states

Another significant use case for pseudo-classes is forms.
We already had a glimpse at the `focus` states, which can also be used on form elements.

But there are some more we can leverage:

- `:disabled`: Element is disabled
- `:enabled`: Element is active. However, is the default case so rarely used
- `:checked`: Checkbox/radio is checked
- `:indeterminate`: Checkbox/radio is not true or false
- `:placeholder-shown`: Placeholder is active and has no value
- `:valid`: Field is valid
- `:invalid`: Field is invalid
- `:in-range`: Number field is in a range of options
- `:required`: Field is required
- `:optional`: Field is optional, again a default state so rarely used

### `:disabled` & `:enabled`

As mentioned in the descriptive text for `:enabled`, it's also a default state, so it's not often used. As we instead use the main selector to style on.

We can use the `:disabled` state to indicate when a form field is disabled, and the user can't change anything.

Let's say we have a button that is disabled until they fill out all fields, for instance.
It's an excellent way to showcase that it's not yet valid to the user.

```css
button:disabled {
  background: lightGray;
  color: #333;
  cursor: not-allowed;
}
```

You can see the difference in the following CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="QWqzBbW" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/QWqzBbW">
  `:focus`, `:focus-within`, &amp; `:focus-visible`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:checked` & `:indeterminate`

The checked and indeterminate pseudo-classes can help style checkboxes and radio buttons.

The checked class will fire if the element is on, and indeterminate is funny as it targets non-binary states.

What does that even mean?
A checkbox can be on/off right, but there are rare cases where it can be neither. And that's precisely where indeterminate kicks in.

> Note: To be honest never needed it in my life

How can we style with the `checked` state?

```css
input[type='checkbox']:checked {
  box-shadow: 0 0 0 3px hotpink;
}
```

I'm using the box-shadow here as this is one view that works well for checked states.

If you plan to style the checkbox further, it might be best to opt for a [custom checkbox](https://daily-dev-tips.com/posts/css-custom-checkbox/).

As for the `indeterminate`, it's not worth going into detail here as it's such a niche use case.

[CSS-tricks has an excellent article](https://css-tricks.com/indeterminate-checkboxes/) on it if you wish more information.

Try it out in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="NWaeBGQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWaeBGQ">
  `:disabled` &amp; `:enabled`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:placeholder-shown`

Before, I dedicated a more detailed article about the [CSS `:placeholder-shown` pseudo class](https://daily-dev-tips.com/posts/css-placeholder-shown-class/).

It can be used to indicate which fields have their placeholder showing.

```css
input:placeholder-shown {
  border: 5px dashed teal;
}
```

This results in this:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="mdBajOa" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/mdBajOa">
  `:checked`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Note: Try and add a value in the bottom input. It should change the appearance.

### `:valid`, `:invalid`, & `:in-range`

These are validation classes and can be used to showcase a un valid field.

Let's use an email field. It's the easiest to showcase both the invalid and the valid states.

We can add a red/green border and shadow based on the validation state like so:

```css
input:invalid {
  border: 2px solid red;
  box-shadow: 0 0 2px red;
  outline: red;
}
input:valid {
  border: 2px solid green;
  box-shadow: 0 0 2px green;
  outline: green;
}
```

You can try it out in the below CodePen by adding a non-email and email value.

The `in-range` one is in line with these two and can be used for number fields to determine if they are in the correct range.

```css
input:in-range {
  border: 2px solid green;
  box-shadow: 0 0 2px green;
  outline: green;
}
```

You can also try this one out, but pick a number between 1 and 10. (Which is the range for the number input)

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="poWqZey" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/poWqZey">
  `:placeholder-shown`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:required` & `:optional`

This can be used to determine if a field is required or not. The optional state is the default state, so it is unnecessary to state this explicitly.

```css
input:required {
  background: orange;
}
```

This will give all required fields an orange background.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="xxXmJrp" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxXmJrp">
  `:valid`, `:invalid`, &amp; `:in-range`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
