---
layout: ../../layouts/Post.astro
title: 'CSS Logos: Figma logo'
metaTitle: 'CSS Logos: Figma logo'
metaDesc: "Let's create the Figma logo in CSS grid and flexbox"
image: /images/29-03-2022.jpg
date: 2022-03-29T03:00:00.000Z
tags:
  - css
  - css-logos
---

While creating the [CSS Slack logo](https://daily-dev-tips.com/posts/css-logos-slack-logo/) I couldn't help but think it looks a lot like the Figma logo in the primary setup.

So why not look at how we can create the Figma logo in CSS.

The logo looks like this:

![Figma logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1647761082928/fUgl4t-Md.png)

## Analysing the logo

Much like we've seen with the grid solution for the slack logo, we could also opt to make this with a grid.

Or we could use flexbox for this one.

Since I couldn't choose, I'll do both, and you can decide which one looks neater.

We can use single grid element options for the grid that will get auto-placed on a 2x3 grid.

We force two elements per row for the flex and wrap them. This way, we achieve the same output.

The corners will be the same as we saw for the Slack logo, but as you can tell, these all have different shapes, so the best bet is to state it for each element.

## Creating the Figma logo in CSS

The HTML for this project will be two times the same, but we will change the main wrapping class.

```html
<div class="figma-flex figma-grid">
  <div class="block red"></div>
  <div class="block orange"></div>
  <div class="block purple"></div>
  <div class="block blue"></div>
  <div class="block green"></div>
</div>
```

We can choose either `figma-flex` or `figma-grid` in the above HTML.

Then we can add some styling that is needed for each block, which will make them a certain size:

```css
.block {
  width: 5rem;
  aspect-ratio: 1;
}
```

Now we can add the colors for each block and give them the needed border-radius.
Since every color has a different border-radius, this is the easiest way.

```css
.red {
  background: #f24e1e;
  border-radius: 50% 0 0 50%;
}
.orange {
  background: #ff7262;
  border-radius: 0 50% 50% 0;
}
.purple {
  background: #a259ff;
  border-radius: 50% 0 0 50%;
}
.blue {
  background: #1abcfe;
  border-radius: 50%;
}
.green {
  background: #0acf83;
  border-radius: 50% 0 50% 50%;
}
```

This should now take care of all the block styling, and at this point, we should have all the blocks available but not ordered correctly.

![Figma blocks not ordered](https://cdn.hashnode.com/res/hashnode/image/upload/v1647762051447/DAmtrVtix.png)

Let's start by trying to order them in flexbox, which is as simple as adding the following classes.

```css
.figma-flex {
  max-width: 10rem;
  display: flex;
  flex-wrap: wrap;
}
```

> Note: The `max-width` is twice the size of one block!

And this already takes care of everything for the flex solution.
For the grid we can use the following code:

```css
.figma-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 10rem;
}
```

And as you can see, it's super similar to the flex solution. We choose to show two columns so that the rows will auto-flow. Then we make sure the max-width doesn't exceed.

You can find the complete result in this CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="LYeZYeQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYeZYeQ">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
