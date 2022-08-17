---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript get all elements in a form'
metaTitle: 'Vanilla JavaScript get all elements in a form'
metaDesc: 'A super quick way to get all elements inside a form using Vanilla JavaScript'
image: /images/30-12-2020.jpg
date: 2020-12-30T03:00:00.000Z
tags:
  - javascript
---

If you ever made your own validation you will understand the struggle of getting all the form elements.

I've made code that would loop over each type of input as such:

```js
types = ['input', 'select', 'texture'];
// Manually loop and get all those
```

That will work, but it's very easy to miss one, and not really maintainable.

Did you know there is a simpler way to retrieve all the elements inside a form?

## Vanilla JavaScript get a form's elements

So let's say we have a form with all kinds of inputs like this:

```html
<form id="form">
  <div class="container">
    <div class="row">
      <label for="firstname">Firstname</label>
      <input type="text" name="firstname" id="firstname" />
    </div>
    <div class="row">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="row">
      <label for="select">Select</label>
      <select name="select" id="select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
    <div class="row">
      <p>Do you agree?</p>
      <label>
        <input type="radio" name="agree" value="yes">
        Yes
      </label>
      <label>
        <input type="radio" name="agree" value="no">
        No
      </label>
    </div>
    <div class="row">
      <p>Your favorite animal?</p>
      <label>
        <input type="checkbox" name="agree" value="penguin">
        🐧
      </label>
      <label>
        <input type="checkbox" name="agree" value="dog">
        🐶
      </label>
    </div>
  </div>
  </div>
</form>
```

This is a typical form, it has some regular inputs, some select elements, checkboxes, and radio groups.

It also has random markup in between to style your form, see the divs and labels.

So how can we distinguish these elements?

First, let's define a variable that will get our form.

```js
const form = document.getElementById('form');
```

Now it is literally as simple as calling `.elements` on this const.

```js
console.log(form.elements);
```

This will give us an `HTMLFormControlsCollection` which looks as follows.

![HTML form controls collection](https://cdn.hashnode.com/res/hashnode/image/upload/v1608785703987/cI0PzCDa5.png)

As you can see these holds are our form elements, which is already super useful.

You can then loop over them using a forEach loop for instance.

```js
[...form.elements].forEach((item) => {
  console.log(item);
});
```

Now it's up to you to create your own validation with this.

You can find this full demo on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="LYRzaNG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript get all elements in a form">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYRzaNG">
  Vanilla JavaScript get all elements in a form</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
