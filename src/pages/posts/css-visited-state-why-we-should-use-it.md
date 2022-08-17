---
layout: ../../layouts/Post.astro
title: 'CSS :visited state, why we should use it'
metaTitle: 'CSS :visited state, why we should use it'
metaDesc: 'Here is how and why you should use the CSS visited pseudo class'
image: /images/16-06-2021.jpg
date: 2021-06-16T03:00:00.000Z
tags:
  - css
---

Don't get me wrong, until a couple of days ago. My blog didn't leverage the `:visited` pseudo-class. But I'm here to change your mind and use it, hopefully.

Let's look at Google search results to see it in action.

<img
        srcset="https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_256/ddt-1_tqeukk.png 256w,
                https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_512/ddt-1_tqeukk.png 512w,
                https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_768/ddt-1_tqeukk.png 768w,
                https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_1024/ddt-1_tqeukk.png 1024w,
                https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_1280/ddt-1_tqeukk.png 1280w"
        src="https://res.cloudinary.com/daily-dev-tips/image/upload/f_auto,q_70,w_512/ddt-1_tqeukk.png"
        alt="Google search results" />

Can you spot which ones I visited before?

Yes, correct, it's my website (#1) and Twitter (#3).
This is a superb way to showcase what he has already seen to the user.

I'm one of those people who follow many blogs and sometimes forget if I've read an article or not, so I decided to change my blog around to introduce the `:visited` state.

## CSS :visited pseudo-class

Unfortunately, the visited state is minimal these days since it uses your browser's history to determine if you clicked a link or not.

I guess they were afraid people would use this information for the worse to detect other links you might have visited.

So I do get it from one side, but it's super helpful to help the visitor by showing what he has already seen or not as a site owner.

So what can we leverage?

- color
- background-color
- border-color
- outline color
- column-rule-color
- fill and stroke color

Wait, so just colors?
And yes, that's all we can do 😢.

First, let's set up a list with some links for users to click.

```html
<ul>
  <li>
    <a href="https://daily-dev-tips.com/?new">Daily dev tips</a>
  </li>
  <li>
    <a href="https://twitter.com/DailyDevTipsBlog/?new">Twitter</a>
  </li>
  <li>
    <a
      href="https://daily-dev-tips.com/posts/css-visited-state-why-we-should-use-it/?new"
      >Read more about this</a
    >
  </li>
  <li>
    <a href="https://codepen.io/?new">Codepen</a>
  </li>
</ul>
```

There's nothing crazy there, so let's add some super basic styling to make it look more appealing.

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #efefef;
}
ul {
  background: #404040;
  padding: 1rem 2rem;
  list-style: none;
  li {
    margin-bottom: 0.5rem;
    a {
      text-decoration: none;
      color: #8bb8df;
    }
  }
}
```

I'm using [SCSS formatting](https://daily-dev-tips.com/posts/scss-introduction/) to have the code linked together.

This so far will give us a list that looks like this:

![Styled list with links](https://cdn.hashnode.com/res/hashnode/image/upload/v1623477586969/pS3hnhNOq.png)

However, when we now click a link, it keeps the same color, and that's not really what we want.

So let's change that by using the `:visited` state.
We can use this as a pseudo-class on the a line.

```css
a {
  text-decoration: none;
  color: #8bb8df;
  &:visited {
    color: #debfde;
  }
}
```

And now click the links will make it visible which ones we have seen before:

![CSS :visited state, why we should use it](https://cdn.hashnode.com/res/hashnode/image/upload/v1623477835124/zLBFpDFZz.png)

You can try this out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="dailydevtips1" data-slug-hash="BaWqxNX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS :visited state, why we should use it">
  <span>See the Pen <a href="https://codepen.io/dailydevtips1/pen/BaWqxNX">
  CSS :visited state, why we should use it</a> by Chris Bongers 🤓💻⚡️ (<a href="https://codepen.io/dailydevtips1">@dailydevtips1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
