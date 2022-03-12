---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript four-digit pincode field'
metaTitle: 'Vanilla JavaScript four-digit pincode field'
metaDesc: 'Making a custom pincode input field with pure javascript'
image: /images/02-12-2020.jpg
date: 2020-12-02T03:00:00.000Z
tags:
  - javascript
---

In today's article, I wanted to build something that has been on my mind for a while now.

A pincode field purely in HTML, what it means is that we will have four separate password inputs, and we should get a pincode once we hit the last one.

The cool part about this is that we automatically jump to the next input. Another side addition is that if we don't start on the first one, we are forced to the first one.

The end result will work as follows.

![JavaScript 4 digit pincode input](https://cdn.hashnode.com/res/hashnode/image/upload/v1606460989482/NvD_UOP_n.gif)

## HTML Structure

Let's start by defining our HTML structure, as you can imagine we need a form, four input fields, and in our instance an element to showcase the result.

```html
<div>
  <form>
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
  </form>
  <div id="code-block" class="hidden special">
    Wait your special code is <span id="code"></span>?
    <br />
    <i onclick="reset()">Reset </i>
  </div>
</div>
```

This last part is only needed for this demo purpose, you normally will actually try to login the user.

## CSS Pincode

The main part of this is to use [flexbox to center](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) our elements.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
}

form {
  display: flex;
  justify-content: center;
}
```

The next part is that we want to give the inputs more of a code look.

```css
input {
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: 1px solid #333;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 3rem;
}
```

And the last part is to add the styling for our demo response box.

```css
.special {
  margin-top: 2rem;
  font-size: 2rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
.special i {
  font-size: 1rem;
  cursor: pointer;
}
.special.hidden {
  opacity: 0;
  visibility: hidden;
}
```

## JavaScript four-digit pincode input

Ok, so how do we now convert this to a functional pincode input field.

Let's first define all the variables we need.

```js
const inputs = document.querySelectorAll('input');
const codeBlock = document.getElementById('code-block');
const code = document.getElementById('code');
const form = document.querySelector('form');
```

As you can see we get the inputs based on the input selector, the codeBlock div, the actual code element, and the form.

Now we need to loop over each input to bind some functions to them.

```js
inputs.forEach((input, key) => {
  // Code here
});
```

We are using the `forEach` method to loop over them, giving us the element and the key.

We use the key to define if it's the first or last element.

```js
inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener('click', function () {
      inputs[0].focus();
    });
  }
});
```

We start by checking if the key is not the first one, in that case we need to bind a click listener to them.
This click will force focus to the first input field.

```js
inputs.forEach((input, key) => {
  input.addEventListener('keyup', function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode = [...inputs].map((input) => input.value).join('');
        codeBlock.classList.remove('hidden');
        code.innerText = userCode;
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});
```

The next part is that we want to add a keyup listener to each input.

In there, we first check if we have a value.

The next check is to see if it's the last key (3).
We made it to the end, so we use the [Array map method](https://daily-dev-tips.com/posts/javascript-map-method/) to get a string output.
And show our code to the user.

If we do have input and it's not the last field, we put focus on the next available field.

That's it we can now input through the code fields and get the result in our codeBlock element.

The last piece of the puzzle for this demo is a reset function.
We already attached this function to the reset `HTML`.

```html
<i onclick="reset()">Reset</i>
```

The function will look like this:

```js
const reset = () => {
  form.reset();
  codeBlock.classList.add('hidden');
  code.innerText = '';
};
```

Here we reset the form, which will make all the inputs empty again.
Then we remove the codeBlok and empty the previous code as well.

You can find this full demo on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="bGwGvxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript four digit pincode field">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/bGwGvxg">
  Vanilla JavaScript four digit pincode field</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
