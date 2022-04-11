---
layout: ../../layouts/Post.astro
title: 'CSS :placeholder-shown class'
metaTitle: 'CSS :placeholder-shown class Tutorial [2022]'
metaDesc: 'Guide to teach you how to leverage the placeholder-shown pseudo class. See the code examples in the Codepen!'
image: /images/23-11-2020.jpg
date: 2020-11-23T03:00:00.000Z
tags:
  - css
---

Let's talk about **placeholders**. They are a wonderful addition to form elements.

Today we won't be talking about them as accessibility issues and hazards, but just about how to style the inputs that have them.

We can style the actual placeholder text in CSS using the `::placeholder` pseudo-element.

But did you know there is also a pseudo-class called `:placeholder-shown`? It will select the actual input field and style that we can all of a sudden add borders and other styles!

Our result will be an input field that is styled based on the placeholder is shown. Once we type text into it the placeholder styling should be removed.

![CSS placeholder-shown](https://cdn.hashnode.com/res/hashnode/image/upload/v1605677501390/gfG0zuBTl.gif)

## HTML Structure

First, let's start by creating a basic HTML to render two input fields. One will have a placeholder, and one will have a text value.

```html
<div class="container">
  <input type="text" value="I have a value" />
  <input type="text" placeholder="I have a placeholder" />
</div>
```

## CSS :placeholder-shown

Let's first add some basic styling to our page:

```css
body {
  min-height: 100vh;
  background: #efe9e7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background: #dae0f2;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container input {
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
}
```

By running this, we will get a basic form that will look like the image below.

![CSS Basic form](https://cdn.hashnode.com/res/hashnode/image/upload/v1605677040414/DvgCDvkYx.png)

How can we make the text field where the placeholder is active render differently? - We use the placeholder-shown pseudo-class like this:

```css
.container input:placeholder-shown {
  border: 5px dashed teal;
}
```

Now we should see a dashed teal border around the placeholder. Once we put a value in the field, that border will disappear!

## Placeholder vs. placeholder-shown difference

To recap, we can use a ::placeholder pseudo-element to change the actual placeholder text styling:

```css
input::placeholder {
  color: teal;
}
```

The difference is that we can use the :placeholder-shown pseudo-class to style the actual input styling:

```css
input:placeholder-shown {
  border: 5px dashed teal;
}
```

So now you know how to use all placeholder pseudo-classes. We also learned the difference between placeholder and placeholder-shown.

### See the code examples in this Codepen

Here you can find a full demo to play with:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="LYZvzaG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LYZvzaG">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYZvzaG">
  LYZvzaG</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

The main browsers support placeholder-shown fully. Of course, IE has to be a pain in the ass. I would suggest using this as an excellent addition, but don't entirely rely on it.

![CSS :placeholder-shown browser support](https://caniuse.bitsofco.de/image/css-placeholder-shown.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
