---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Hiding content'
metaTitle: 'A11Y 101: Hiding content'
metaDesc: 'Hiding elements from the screen, but not the screen reader'
image: /images/28-05-2022.jpg
date: 2022-05-28T03:00:00.000Z
tags:
  - accessibility
---

We developers tend to hide elements by using `display: none` or `visibility: hidden`.

And this works perfectly fine actually to hide elements from the screen.
However, be aware this does precisely what we tell it. It hides things from the screen, which includes screen readers!

## Hiding from screens, but not screen readers

Let's see what it takes to hide elements from the screen, but not screen readers.

An example of this is: [hiding the label for the search field](https://daily-dev-tips.com/posts/a11y-101-missing-form-labels/).

We have to be careful about which CSS we want to use to achieve this behavior.

I love to use the CSS provided by [the A11Y project](https://www.a11yproject.com/posts/how-to-hide-content/) as it's super complete and up to date.

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

If you add this class to any element, It will be removed from the screen but announced by screen readers.

## Conclusion

We have to be careful when we hide elements from the screen. Screen readers might not be able to read the information anymore if we entirely hide the element.

Using the provided CSS code, we can achieve the effect we want.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
