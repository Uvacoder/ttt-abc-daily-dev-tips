---
layout: ../../layouts/Post.astro
title: 'CSS equal height columns'
metaTitle: 'CSS equal height columns'
metaDesc: 'Equal heights are no longer a massive struggle!'
image: /images/11-11-2020.jpg
date: 2020-11-11T03:00:00.000Z
tags:
  - css
---

If you are an old-school person like myself, you might remember the days of struggling with stupid designs.

Especially columns that needed to be equal; in some cases, you were even using JavaScript to make equal height columns.

Nowadays, luckily, we have flexbox and grid options.

Today I will show you a fantastic solution to equal height cards using flexbox.

To illustrate the struggle we're facing, I made this 3 column layout.

As shown in the image below, we have a title, paragraph, and button. Ideally, we want all the columns to be of equal height and the button to be at the bottom.

![CSS Column struggles](https://cdn.hashnode.com/res/hashnode/image/upload/v1604644619875/1ri5bEh50.png)

## HTML Structure

We will use a simple setup focusing on the CSS aspect for this example.

```html
<div class="container">
  <div class="col">
    <h3>Title 1</h3>
    <p>
      I'm baby kickstarter subway tile man bun, pitchfork etsy YOLO pork belly
      biodiesel banjo. Succulents hell of green juice art party normcore meh
      poutine venmo aesthetic raclette tbh tousled. Polaroid ennui iceland
      raclette, ugh mustache subway tile glossier gluten-free tacos tilde.
      Asymmetrical tumblr farm-to-table, DIY 3 wolf moon vape next level
      flexitarian gastropub health goth raw denim. Hella cliche franzen poutine
      readymade everyday carry man bun. Raw denim offal you probably haven't
      heard of them four dollar toast bitters tbh glossier readymade pitchfork.
    </p>
    <a href="#">Button</a>
  </div>
  <div class="col">
    <h3>Title 2</h3>
    <p>I'm super short</p>
    <a href="#">Button</a>
  </div>
  <div class="col">
    <h3>Title 2</h3>
    <p>
      Asymmetrical tumblr farm-to-table, DIY 3 wolf moon vape next level
      flexitarian gastropub health goth raw denim. Hella cliche franzen poutine
      readymade everyday carry man bun. Raw denim offal you probably haven't
      heard of them four dollar toast bitters tbh glossier readymade pitchfork.
    </p>
    <a href="#">Button</a>
  </div>
</div>
```

## CSS equal height columns

Let's first start by adding the basic styling:

```css
.col {
  background: #efefef;
  padding: 2rem;
}
h3 {
  margin-bottom: 1rem;
}
a {
  display: block;
  background: teal;
  padding: 1rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
}
```

Now how do we get these columns to be next to each other and of equal heights?

```css
.container {
  display: flex;
}
.col {
  width: 33.33333%;
}
```

Wait, that's it?

Let's run this code and see what happens.

![CSS Equal height columns](https://cdn.hashnode.com/res/hashnode/image/upload/v1604644834945/LOMjVX9vB.png)

Oh, wow! We got equal-height columns, but how can we now force the button to always be on the bottom?

```css
.col {
  display: flex;
  flex-direction: column;
}
p {
  flex: 1 1 auto;
}
```

We also set the column to be a flex item and state the direction should be a column (top to bottom).

Then we add a flex rule to the paragraph, stating it should grow and shrink 1, and the basis should be auto.

This forces this element to take up whatever space is left in the column.

The result you can see in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWrLWXy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS equal height columns">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWrLWXy">
  CSS equal height columns</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
