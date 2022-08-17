---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS skew cards'
metaTitle: 'Tailwind CSS skew cards'
metaDesc: 'Making skew cards using nothing but Tailwind CSS'
image: /images/28-03-2021.jpg
date: 2021-03-28T03:00:00.000Z
tags:
  - css
  - tailwind
---

Tailwind is a fantastic CSS framework. It makes it so easy to create incredible designs without much effort.

Today I want to create something fundamental but widely used: Skew cards.

They are cards skewed in a specific direction, and the offset is the skewed opposite.

It looks like this:

![Tailwind CSS skew cards](https://cdn.hashnode.com/res/hashnode/image/upload/v1616569640425/Pihsb6YTF.png)

## Creating Tailwind skew cards

We need 2 div elements and some content in the inner one for our primary skew card.

```html
<div>
  <div>
    <h2>Tailind Skew Cards</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
      vitae sequi nostrum quidem vero odio repudiandae expedita, quis aliquam?
    </p>
  </div>
</div>
```

This will be our main structure. Let's add the outer classes first.

```html
<div class="w-1/2 p-8 transform skew-y-3 bg-purple-200"></div>
```

The main part is the transform and skew class. This will make sure the card looks slanted.
Then we add a simple background, padding, and width.

Now our card will look somewhat weird:

![Tailwind skew card](https://cdn.hashnode.com/res/hashnode/image/upload/v1616569284676/aUxdu4WDP.png)

The text also went skew, which is not what we want.
However, we can offset this in the inner div.

```html
<div class="transform -skew-y-3"></div>
```

And that's it. We now got our first skew card.

We can also have them skew the other way by reversing the skews.

```html
<div class="w-1/2 p-8 transform -skew-y-3 bg-purple-200">
  <div class="transform skew-y-3">
    <h2 class="text-lg">Tailind Skew Cards</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
      vitae sequi nostrum quidem vero odio repudiandae expedita, quis aliquam?
    </p>
  </div>
</div>
```

![Tailwind skew another side](https://cdn.hashnode.com/res/hashnode/image/upload/v1616569407261/vFIzspOD7.png)

You can find the full demo on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="vYgOmZL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS skew cards">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/vYgOmZL">
  Tailwind CSS skew cards</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
