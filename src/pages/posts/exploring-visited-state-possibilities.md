---
layout: ../../layouts/Post.astro
title: 'Exploring :visited state possibilities'
metaTitle: 'Exploring :visited state possibilities'
metaDesc: 'Pushing :visited CSS state to the limit'
image: /images/17-06-2021.jpg
date: 2021-06-17T03:00:00.000Z
tags:
  - css
---

Yesterday, we looked at the [`:visited` selector](https://daily-dev-tips.com/posts/css-visited-state-why-we-should-use-it/) how we can use it to enhance our website.
However, it doesn't exactly have the best options out of the box.

It comes down to color change.

And that kind of sucks.
As mentioned, this visited state has been on my list from my initial blog, "The Todoist" where it would showcase as a checkbox before each blog item.

Generally something like this:

☑️ You still have to read this
✅ You've read this article

However, I quickly learned this was not possible using nothing by CSS.

I've been doing some research, and came across these two amazing articles, to whom I want to give a shout-out for exploring the options before me:

- [Hacking :visited by Una](https://una.im/hacking-visited/)
- [Revisiting :visited by Joel](https://joelcalifa.com/blog/revisiting-visited/)

So let's see how far we can go using only CSS.

## Showing a read flag based on :visited state

First, let's try to achieve a read flag, the one you can see on my blog's homepage.

![Visited pseudo-class read](https://cdn.hashnode.com/res/hashnode/image/upload/v1623560454609/JPYpjN7jB.png)

So let's start from where we left off yesterday with our [basic :visited color example](https://daily-dev-tips.com/posts/css-visited-state-why-we-should-use-it/).

Let's start by adding a [read] label to our HTML. I'll be using a span with `aria-hidden` so screen readers won't read this aloud.

Change the HTML for each item to look like this:

```html
<a href="https://daily-dev-tips.com/?new"
  >Daily dev tips <span aria-hidden="true"></span
></a>
```

Now let's use the [`:after` pseudo element](https://daily-dev-tips.com/posts/css-pseudo-elements/#heading-after-pseudo-element) to add some text to the span.

```css
a {
  text-decoration: none;
  color: #8bb8df;
  span {
    &:after {
      content: '(Read)';
      color: #778899;
    }
  }
}
```

This will place the `(Read)` text behind each element. However, it doesn't do anything with the visited state yet.

![CSS visited read item after](https://cdn.hashnode.com/res/hashnode/image/upload/v1623561083057/HRP_FIg36.png)

So now we need to find a way to hide the element that we have not yet read, right?

If we think about that, we should do the following:

1. Always hide the after selector
2. Show the after selector when visited

If we then think back on the options we have at hand (color only) we can "hide" the items by making the color the same as the background.

Let's put that in action:

```css
ul {
  background: #404040;
}
a {
  text-decoration: none;
  color: #8bb8df;
  &:visited {
    color: #debfde;
    span:after {
      color: #778899;
    }
  }
  span {
    &:after {
      content: '(Read)';
      color: #404040;
    }
  }
}
```

Do you see what's happening here?

The background of the `UL` is `#404040`, so we make the span:after the same color, which makes it disappear.
Then, we modify the span on the visited selector:after again to make it the color we want to show!

And this gives us the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="dailydevtips1" data-slug-hash="MWpzYGm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Showing a read flag based on :visited state">
  <span>See the Pen <a href="https://codepen.io/dailydevtips1/pen/MWpzYGm">
  Showing a read flag based on :visited state</a> by Chris Bongers 🤓💻⚡️ (<a href="https://codepen.io/dailydevtips1">@dailydevtips1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Showing an unread flag based on :visited state

Now that we know how to leverage the visited state by offsetting the color, let's turn it around and show an unread flag when people still need to visit a link!

```css
ul {
  background: #404040;
}
a {
  text-decoration: none;
  color: #8bb8df;
  &:visited {
    color: #debfde;
    span:after {
      color: #404040;
    }
  }
  span {
    &:after {
      content: '(Unread!)';
      color: #f89283;
    }
  }
}
```

In this case, we decided to offset the visited state and show disappeared by using the background color.

![Showing an unread flag based on :visited state](https://cdn.hashnode.com/res/hashnode/image/upload/v1623561769085/ME-Pa3nNV.png)

The normal one, we change the after text to "(Unread!)" and a slightly brighter color.

Now the user will see which articles haven't been opened!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="dailydevtips1" data-slug-hash="rNyQaZp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Showing a unread flag based on :visited state">
  <span>See the Pen <a href="https://codepen.io/dailydevtips1/pen/rNyQaZp">
  Showing a unread flag based on :visited state</a> by Chris Bongers 🤓💻⚡️ (<a href="https://codepen.io/dailydevtips1">@dailydevtips1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
