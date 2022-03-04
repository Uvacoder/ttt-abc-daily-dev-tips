---
layout: ../../layouts/Post.astro
title: 'HTML Input Types'
metaTitle: 'HTML Input Types'
metaDesc: 'Lets dive into the versatile world of input types'
image: /images/12-05-2020.jpg
date: 2020-05-12T03:00:00.000Z
tags:
  - html
---

Today I want to spend some time going back to the basics of `HTML`, let's see what kind of input elements we have and how we can leverage them.

## The different input types

- text
- email
- hidden
- number
- range
- password
- submit
- checkbox
- radio
- file
- date
- color
- tel
- url

Yes, we have many, many options of input elements which we can leverage, let's start going through all of these and see how they work and what they can be used for.

### Input element

The `input` element is probably the most well known element and used by everyone, every login form or cms form uses it.

```html
<input />
```

As you can see above it's a self closing element.

```html
<input type="text" />
```

We normally use a type specified for this `input` and a browser can add its default validation based on what you added here.

```html
<input type="text" name="firstname" />
```

We can define the `name` attribute on an input, this is what would get send through to the backend and how we can then check what its value would be.

```html
<input type="text" name="firstname" placeholder="Firstname" />
```

The `placeholder` attribute is used to have a small text show up when the input doesn't have a value yet.

```html
<input type="text" name="firstname" placeholder="Firstname" required />
```

We can add `required` to our input type and make it required by default, the browser can handle this for us.

```html
<input type="text" name="firstname" placeholder="Firstname" pattern="[a-zA-Z0-9]+" />
```

We can define a default `pattern`, this accepts a `regex` and can help with the default validation.
You can find some useful examples on [html5pattern](http://html5pattern.com/).

```html
<input type="text" name="firstname" placeholder="Firstname" disabled />
```

We can add an attribute if we want the element to be `disabled` from input.

```html
<input type="text" name="firstname" placeholder="Firstname" readonly />
```

We can also make an element `readonly`. This will make it also not-changeable.

### Email input type

As mentioned above we can have different types of basic input, one of these being email. A browser can now determine if the user filled out a valid email address.
We can use it as such:

```html
<input type="email" name="email" placeholder="Email Address" />
```

### Hidden input type

Another input type that I tend to use a lot is the `hidden` type, it will not show by default and is perfect to hold a cookie, or token which a user doesn't even need to see.

```html
<input type="hidden" name="hidden_cookie" value="SECRET_COOKIE" />
```

### Number input type

We can also set the type to be a number and even define three more attributes being: `min`, `max` and `step`

```html
<input type="number" name="number" placeholder="Amount?" min="5" max="15" step="5" />
```

### Range input type

Much like the `number` one, we have a `range` type, it defines a range between a minimum and maximum number and can optionally include a `step`.

```html
<input type="range" name="age" min="0" max="100" step="2" />
```

### Password input type

The `password` type we have all seen before and it's that one that makes the input turn into `***` so people don't see what you typed.

```html
<input type="password" name="password" placeholder="Password" />
```

### Submit input type

We can set the type to be `submit` to act as our submit button, we set the value to show what is in the button:

```html
<input type="submit" value="Send form" />
```

### Checkbox

Another great addition is the `checkbox`, as the name suggests it renders one or more checkbox.
With a checkbox we can select one or multiple correct answers.

```html
<input type="checkbox" name="dislike" value="Sprouts" />
<input type="checkbox" name="dislike" value="Fish" />
<input type="checkbox" name="dislike" value="Spinach" />
```

### Radio input type

The `radio` input type is very much like the checkbox, but we can only select one option, per name!

```html
<input type="radio" name="you_like" value="Pony" />
<input type="radio" name="you_like" value="Unicorn" />
<input type="radio" name="you_like" value="Llama" />
```

### File input type

The `file` input type is a really extensive one and has many options for it.
In basics, we can use it as follows:

```html
<input type="file" name="files" multiple accept=".jpg, .jpeg" />
```

As you can see, we are using the `multiple` attribute, which makes it allow multiple files at once.

And we define what types it can `accept` by default.

### Date input type

The `date` type is absolutely amazing, it shows a default date picker even!

```html
<input type="date" name="date_of_birth" />
```

In the `date` elements we also have `time`, this will show a nice time picker.

```html
<input type="time" name="time_online" />
```

Or define a `month` or `week` even:

```html
<input type="month" name="month" /> <input type="week" name="week" />
```

### Color input type

Another one that you barely seem used, but is so cool is the `color` input type. It comes with a basic color picker!

```html
<input type="color" name="favorite_color" value="#F4F4F4" />
```

### Tel input type

`Tel` input can be used to define a telephone number, it will show a different keyboard on mobile devices and adds basic validation for the browser.

```html
<input type="tel" name="telephone" placeholder="Telephone" />
```

### URL input type

This one can be used to define a `URL`, it shows a slightly different keyboard, but doesn't come with much cool stuff.

```html
<input type="url" name="website" placeholder="Your website?" />
```

## Demo

As always feel free to play around with this Codepen where I added all the input types.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="vYNrOQO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Input Types ">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYNrOQO">
  HTML Input Types </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
