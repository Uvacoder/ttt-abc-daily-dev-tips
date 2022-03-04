---
layout: ../../layouts/Post.astro
title: 'My first experiences with Tailwind CSS'
metaTitle: 'My first experiences with Tailwind CSS'
metaDesc: 'Yes, Im new to Tailwind CSS, but I like it so far!'
image: /images/15-10-2020.jpg
date: 2020-10-15T03:00:00.000Z
tags:
  - css
  - tailwind
---
Hi everyone, confession time: I had never used Tailwind CSS before this week.

And it's not the end of the world; if you work for a company, they have certain working ways. This means the products they use work for them.

It's fun to think, oh something new came out, let's all start using that, but in reality, this does not happen in companies.

So here I was missing out on everyone having so much fun with Tailwind CSS.

I did have it on my radar for quite a while, and making a recent transition to a new job brought the opportunity to start using Tailwind.

## What I was using

Let me start by explaining what I was using before. In my previous job, it was a lot of bootstrap and towards the end, custom BEM CSS.

Meaning we created custom stylesheets with a custom kind of framework, this made the code very light, and in that company, everyone would understand how to use it.

That was all good and well, but not very effective with onboarding people, and even for me, it was looking for certain classes sometimes.

## Why I did switch

Even though I'm a big fan of Pure CSS (No framework) Tailwind seemed to be a perfect bridge.

It's a non-bloated utility framework.
Meaning we don't have pre-defined component, and it helps us write faster css.

For example, let's create a button that will have a different color on hover.

Tailwind

```html
<a class="text-blue-300 hover:text-blue-500">My link</a>
```

```css
/* No CSS needed */
```

Pure css. (You see smaller HTML)

```html
<a class="btn">My link</a>
```

```css
.btn {
  color: #90cdf4;
}
.btn:hover {
  color: #4299e1;
}
```

As you can see, both will do the same thing, but it saves us some `CSS` lines!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="jOrOXxB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="My first experiences with Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jOrOXxB">
  My first experiences with Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Key benefits

So from using it for a week, the main benefits to me seem:

### Fast to setup

It's super fast to get started with Tailwind. Either a CDN load or NPM install, and you're good to go.
[Their docs](https://tailwindcss.com/docs/installation) are also super good, so you can just type there what you are looking for and apply that.

> Setting up [Tailwind for Angular](https://daily-dev-tips.com/posts/adding-tailwind-css-to-an-angular-project/).

### Speed

It's so easy to write your own "components" sort of speak. The code is readable. It's so self-explanatory what an element does.

### No bloating CSS

You don't need 20 `SCSS` files that all have some part of your component in them.

### Easy responsiveness

Another great takeaway from Tailwind is how easy it is too have responsive elements.

The framework is mobile-first, so every normal class is what it would look like from mobile up.

We can then add the following "breakpoint" classes.

- `sm`: Default on a minimum width of 640px
- `md`: Default on a minimum width of 768px
- `lg`: Default on a minimum width of 1024px
- `xl`: Default on a minimum width of 1280px

With that we can easily add classes like so:

```html
<h1 class="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">Title</h1>
```

This is just an example, if you will make your screen smaller and bigger we see a different font-size.

## Pitfalls of Tailwind

So one of the things I noted very quickly was the repeating classes that didn't really make it extendable at all!

So let's se wee have a couple of buttons in our navigation as such:

```html
<a class="bold text-xl text-indigo-500 hover:text-indigo-700">Link 1</a>
<a class="bold text-xl text-indigo-500 hover:text-indigo-700">Link 2</a>
<a class="bold text-xl text-indigo-500 hover:text-indigo-700">Link 3</a>
```

Wow, that's annoying now we need to have all those classes three times, here my oldskool css would definitely be better!

BUT, there is a solution. Tailwind can extend!

So we can define a new class for those elements and render them as such by using `@apply`.

```html
<a class="indigo-btn">Link 1</a>
<a class="indigo-btn">Link 2</a>
<a class="indigo-btn">Link 3</a>
```

```css
.indigo-btn {
  @apply bold text-xl text-indigo-500;
}
.indigo-btn:hover {
  @apply text-indigo-700
}
```

This will now do the same, making it easier to change and re-use our own defined components.

In the end, it's all about creating a good mix between not reinventing the wheel and making use of the utilities we have.

So far, I'm like how quick and easy Tailwind CSS is!

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
