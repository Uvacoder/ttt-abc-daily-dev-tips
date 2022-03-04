---
layout: ../../layouts/Post.astro
title: 'CSS Animated Submit Loading'
metaTitle: 'CSS Animated Submit Loading'
metaDesc: 'Lets make an animated Submit button'
image: /images/21-07-2020.jpg
date: 2020-07-21T03:00:00.000Z
tags:
  - css
---

Today we are going to be working on some fantastic UI element, an animated submit loading.

You have a long API call or need to verify some data the person inputted in your form.
We will have a button that says "Send", and once clicked, it shows a loading animation!

## HTML Structure

```html
<div class="container">
  <form id="form">
    <input type="text" />
    <br /><br />
    <button type="submit">
      <span>Send</span>
      <svg
        aria-hidden="true"
        focusable="false"
        class="loader loading"
        viewBox="0 0 38 38"
      >
        <g
          transform="translate(2 2)"
          stroke="currentColor"
          stroke-width="4"
          fill-rule="evenodd"
        >
          <circle class="st0" stroke-opacity=".5" cx="17" cy="17" r="16.5"></circle>
          <path
            class="st1"
            d="M33.5 17C33.5 7.9 26.1.5 17 .5"
            transform="rotate(249.767 17 17)"
          >
            <animateTransform
              accumulate="none"
              additive="replace"
              attributeName="transform"
              calcMode="linear"
              dur="1s"
              from="0 17 17"
              repeatCount="indefinite"
              restart="always"
              to="360 17 17"
              type="rotate"
            ></animateTransform>
          </path>
        </g>
      </svg>
    </button>
  </form>
</div>
```

The main feature here is the button.
We have a default `span` with the "Send" text in it. Next to that, we have included a `span` with the SVG in it. This is a circular loading element. We then use the [`animateTransform`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform) element to define a basic web animation!

> animateTransform is very versatile but not supported in IE, so we will also be backing this up with CSS animation.

Now we need to start styling these elements.

## CSS Animated Submit

```css
button {
  background-color: #0071b2;
  color: #fff;
  border: 0 solid #015494;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  padding: 0.75em 1em;
  position: relative;
}
```

The button is styled very basic; the only important part is the `relative` position here.

```css
button * {
  transition: opacity 0.3s ease-in;
}
```

Then we add an opacity transform on all child elements of the button.

```css
button .loader {
  position: absolute;
  display: block;
  fill: transparent;
  top: calc(50% - 0.75rem);
  left: calc(50% - 0.75rem);
  width: 1.5rem;
  height: 1.5rem;
  animation: rotating 1.5s linear infinite;
  display: none;
  opacity: 0;
}
```

Next, we define the loader span (the circle). This gets a basic width and height, and we add the `rotating` animation, which looks like this:

```css
@-webkit-keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
```

This will make sure the circle is animating.

We will be adding a loading class once the user submits the form, so let's see how that will look in the `CSS`.

```css
button.loading span {
  color: transparent;
  opacity: 0;
}
button.loading .loader {
  fill: transparent;
  display: block;
  opacity: 1;
}
```

As you can see, once the loading class is added, we make the first span transparent and give the loader an opacity of 1!

## JavaScript to Tidy up

The last thing we need to do is add the loading class once we submit the form:

```js
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const button = form.querySelector('button');
  button.classList.add('loading');
  button.disabled = true;
});
```

We retrieve the form and add a submit listener. Then we make sure the form doesn't submit.
Then we get the button inside the form and add a loading class to the [ClassList](https://daily-dev-tips.com/posts/vanilla-javascript-classlist/). And disable the button for now.

You can see this in action on this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="RwrEYaV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Animated Submit Loading">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/RwrEYaV">
  CSS Animated Submit Loading</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
