---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Ensure landmarks are unique'
metaTitle: 'A11Y 101: Ensure landmarks are unique'
metaDesc: 'Why does accessibility need our duplicate landmarks to be unique?'
image: /images/26-05-2022.jpg
date: 2022-05-26T03:00:00.000Z
tags:
  - accessibility
---

While [analyzing my website](https://daily-dev-tips.com/posts/a11y-101-analysing-my-website-issues/), we found the following error: "Ensure landmarks are unique".

This specific error occurred on a post detail page with two `<nav>` elements.

One is used for the tags, and one is in the footer.

## Why does it matter?

You might be wondering why these landmarks should be unique?
And that's a very valid question.

Let's view this scenario from a screen reader perspective.

Screen readers use landmarks to identify the structure on a page. If two or more of the same landmark are present, we need to make them unique with labels.

The screen reader can identify what each landmark is used for. This is especially important for navigation elements.

## Fixing the issue

Let's take my website as an example and fix the issue. There are two nav elements, and we need to identify them.

I added the aria-label as "Tag" for the tag element.

```html
<nav aria-label="Tag">
  <ul>
    <li>#remix</li>
  </ul>
</nav>
```

Do note that you don't have to explicitly state `navigation`. As the screen readers will already read this as "tag navigation".

And for the footer we apply the same concept:

```html
<nav aria-label="Footer">
  <ul>
    <li>about</li>
  </ul>
</nav>
```

And that's it. By defining the aria label, we ensure each landmark is unique.

This concept should also be applied to duplicate headers, footers, and forms as they are all landmarks.

## Repeated landmarks

I hear you wonder, but what about repeated landmarks?
So, for instance, are your navigation in the header and footer precisely the same?

Well, you can use the same label in that case.

```html
<header>
  <nav aria-label="Main">
    <ul>
      <li>home</li>
    </ul>
  </nav>
</header>

<footer>
  <nav aria-label="Main">
    <ul>
      <li>about</li>
    </ul>
  </nav>
</footer>
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
