---
layout: ../../layouts/Post.astro
title: 'CSS Pseudo-classes: Links'
metaTitle: 'CSS Pseudo-classes: Links'
metaDesc: 'CSS Pseudo classes to manipulate links a full tutorial [2022]'
image: /images/22-01-2022.jpg
date: 2022-01-22T03:00:00.000Z
tags:
  - css
---

We already had a look at [CSS pseudo-elements](https://daily-dev-tips.com/posts/css-pseudo-elements/) and even how to use [pseudo-elemtns in Tailwind CSS](https://daily-dev-tips.com/posts/tailwind-css-pseudo-elements/).

But then I realized I've never talked about pseudo-classes, which are pretty substantial as we use them in web development.

So this article is dedicated to pseudo-classes.

Pseudo-classes can be used to style based on a specific state of an element.
States could be that the user hovers an element or is an element invalid.

I've split this up into a series of four, where this is the first part about link pseudo-states.

The other parts:

- _Link pseudo-states_ (this one 💖)
- [Form pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-forms/)
- [Element state selectors](https://daily-dev-tips.com/posts/css-pseudo-classes-element-states/)
- [Other pseudo states](https://daily-dev-tips.com/posts/css-pseudo-classes-other-states/)

## Link pseudo-states

One of the more common use-cases is to apply styling to link elements.

The options we get here are as follows:

- `:link`: Unvisited links
- `:visited`: Visited links
- `:active`: Currently interacting with it, like a click
- `:hover`: Mouse hovers over it
- `:target`: When a user clicks an anchor target like `#section-1`
- `:focus`: Tabbed to this element or input has the focus
- `:focus-within`: If a child element has the focus
- `:focus-visible`: Can be used to apply focus styles on keyboard events only

### `:link` & `:visited`

The `:link` selector can be applied to indicate which pages have already been visited by the user.

It's often used to make a link appear less bright, so the user knows he already visited that page.

In the following example, I've made the default links blue, and once you visit them, they turn gray.

```css
a:link {
  color: blue;
}
a:visited {
  color: darkGray;
}
```

> Note: Try visiting some links and come back to this page.

<p class="codepen" data-height="355" data-default-tab="result" data-slug-hash="bGoQXoo" data-user="rebelchris" style="height: 355px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGoQXoo">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:active` & `:hover`

These two can be used to indicate user interactions with a link.
Hover is when we hover our mouse over an element and are active when clicking on it.

In your CSS, it's good to know that the active state should always come **after** the hover state.
Else the hover will take priority of it.

In this example, we'll make the hover links have a purple background and white text, and once we click, they turn red.

```css
a:hover {
  background: purple;
  color: white;
}
a:active {
  background: transparent;
  color: red;
}
```

Try it out in this example.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="oNGQKpX" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/oNGQKpX">
  `:active` &amp; `:hover`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `target`

This one is super cool and often overlooked.
It can indicate which element is clicked on and navigated to.

This works for one-pages that link to a specific section with something like the following setup:

```html
<section id="section-1">
  Hi I'm section one
  <br />
  <a href="#section-2">Go to section two</a>
</section>
<section id="section-2">And I'm the second section</section>
```

When you click this button, you will navigate to the second section.

As for the magic part 🪄

```css
#section-2:target {
  background: pink;
}
```

Try to scroll to the second section manually first. It should just show a white section.
If you scroll back up and click the button, it should move and make it pink.

Pretty cool stuff, right!

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="dyVQxmG" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dyVQxmG">
  `:active` &amp; `:hover`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:focus`, `:focus-within`, & `:focus-visible`

Let's try and spread these out a bit. The first one is `:focus`. It can be used to indicate if an element received focus. Generally, this would work well for input fields, but you can use it for `buttons`, which will be our vibe today.

For the default focus state, we can use the following CSS.

```css
button:focus {
  outline: 2px dashed purple;
  outline-offset: 2px;
}
```

> Note: Try to click on the "Focus button" in the CodePen below. You can also tab to it.

As for `:focus-within`, this is an excellent pseudo-class to use, and I even dedicated a whole article to why [focus-within is amazing](https://daily-dev-tips.com/posts/why-css-focus-within-is-amazing/).

Let's try out a small example with another button that could show a helper text on focus.

```html
<div class="focus-wrap">
  <button class="button">Focus within</button>
  <div class="helper">Click me</div>
</div>
```

And we can then add the following CSS to make this helper only show if the button has focus.

```css
.helper {
  display: none;
}
&:focus-within .helper {
  display: block;
}
```

> Note: You can try this by focusing on the "Focus within" button below.

The last one is `focus-visible`, and it can be used to target only keyboard events.

We want to show a state on click but appear different on the keyboard tab.

```css
button.visible:focus-visible {
  outline: 1px solid black;
}
```

Try and click on this button. You should see the dashed border, but it should show a solid border once you use the tab navigation.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="BawGXPm" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/BawGXPm">
  `target`</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
