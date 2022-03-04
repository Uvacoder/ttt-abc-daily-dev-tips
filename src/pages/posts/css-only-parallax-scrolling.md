---
layout: ../../layouts/Post.astro
title: 'CSS only Parallax Scrolling'
metaTitle: 'Pure CSS Parallax Scrolling effect Tutorial [2022]'
metaDesc: 'Learn how to create a CSS only Parallax effect with background attachment. See the code examples in the Codepen!'
image: /images/15-04-2020.jpg
date: 2020-04-15T03:00:00.000Z
tags:
  - css
---

You have probably seen a **parallax effect** before. A parallax effect is when you scroll and it looks like the background image is sitting in one place and is unaffected by the scroll.

Some people take parallax scrolling over the top by adding multiple layers and create the most stunning effects!

For today's tutorial, we will learn **how to add a parallax scrolling effect with pure CSS**. It is the simplest example possible - to get you included in adding this wonderful effect to your website or project.

## Parallax scrolling with CSS only

Yes, it is possible to do parallax with **CSS only**.

For the HTML, let's use the following setup to keep it simple:

```html
<section class="header">
  <h1>Welcome! 👋</h1>
  <h2>How are you?</h2>
</section>
<section class="bg-grey">
  <h2>Demonstrating parallax</h2>
  <br />
  <div>
    <a href="https://daily-dev-tips.com/" target="blank">Blog</a>
    <a href="https://twitter.com/DailyDevTips1" target="blank">Twitter</a>
  </div>
</section>
```

We included 2 sections which we will size at 100% of the viewport. The first one will contain the parallax image background.

- To read more about the CSS units, check out how to work with [CSS viewport units](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

For the CSS we are going to use the following:

```css
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section.header {
  background-image: url('https://images.unsplash.com/photo-1564415637254-92c66292cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
}
.bg-grey {
  background: #efefef;
}
```

As you can see we make every section `width: 100vw` (100% of the viewport width) and `height: 100vh` (100% of the viewport height).

Next, we make this a `flex` container to center the headings and buttons inside of it. (Read more on alignment [here](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/))

Then for the header section, we add the parallax background and center it using `background-position`. Then I learned to always include `background-repeat: no-repeat` but you can omit this. We set `background-size: cover` this will make the background expand over the whole section.

And for the magic part 🎩, we set `background-attachment: fixed`. This is what will make give the background a parallax scrolling effect!

### See the Code examples in this Codepen

See for yourself in this pure CSS parallax example:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="jObEOKR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Parallax demo">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/jObEOKR">
  Parallax demo</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Browser Support

background-attachment has quite a good browser support, just on mobile it's a bit glitchy, but you can use other queries to fix this.

![classList browser support](https://caniuse.bitsofco.de/image/background-attachment.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
