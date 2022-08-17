---
layout: ../../layouts/Post.astro
title: 'CSS hide scrollbars'
metaTitle: 'CSS hide scrollbars'
metaDesc: "Sometimes scrollbars can be quite annoying for small area's let's see how we can remove those."
image: /images/22-02-2021.jpg
date: 2021-02-22T03:00:00.000Z
tags:
  - css
---

Today we will be hiding scrollbars with CSS!
As much as I love browser native behavior, there are use-cases where one would want to make an invisible scrollbar.

Working on a Mac, you hardly see how ugly scrollbars can be, but switching to Windows will show that you can get super ugly scrollbars for side menus, for example.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hide-scrollbars_zwtujb.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hide-scrollbars_eanjay.mp4" type="video/mp4" />
</video>

As you can see, the right-hand scrollbar for the content is fine, that's normal behavior, but the one for the fixes side-menu is a bit misplaced and not nice to see.

On Mac, it's not disturbing since it disappears, but it will always be visible for Windows users, which is not doing our design a favor.

## Removing the sidebar

We can luckily remove this sidebar with some `CSS` magic and not lose its functionality.

> Note: please use this wisely since it's a default way to show the user a scrollable area.

In our case, we will add a `no-scroll` class on the element we want to remove the scroll for.

```css
.no-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
```

As you can see, we have specific targets for IE and Firefox. The more modern browsers use a pseudo selector, which we can set to display none.

You can view the result in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="ExNmXGB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS hide scrollbars">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExNmXGB">
  CSS hide scrollbars</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
