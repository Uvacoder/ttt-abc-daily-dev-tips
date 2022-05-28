---
layout: ../../layouts/Post.astro
title: 'A11Y 101: WAI-ARIA'
metaTitle: 'A11Y 101: WAI-ARIA'
metaDesc: "What are WAI-ARIA's and how should we use them?"
image: /images/06-06-2022.jpg
date: 2022-06-06T03:00:00.000Z
tags:
  - accessibility
---

While digging into this accessibility journey, you might have heard me say a couple of times that [semantics always win](https://daily-dev-tips.com/posts/a11y-101-semantic-html-always-wins/).
However, this wasn't always the case.

Before HTML5, we didn't have all the fancy semantic elements like `header`, `footer`, or `main`. These kinds of elements were always described as plain divs with some markup.

That made it nearly impossible to define these elements as assertive technologies.

Hence WAI-ARIA comes to life.

## What is WAI-ARIA

You might be wondering what it even is, and it stands for `Web Accessibility Initiative - Accessible Rich Internet Applications`. It's a specification written by W3C defining a set of attributes you can use to provide additional semantics.

They are divided into multiple sections:

- **Roles**: Can be defined by using `role="value"`
- **Properties**: Give extra meaning to an element for example: `aria-labelledby="label"`
- **States**: Describe the current condition of an element for example: `aria-disabled="true"`.

All these WAI-ARIA only helps assertive technology to understand your webpage better. They do not physically have any other impact on how your website behaves.

## When to use WAI-ARIA

You might have seen a couple of examples in this A11Y series where we used some of the WAI-ARIA's, and a general rule of thumb is:

"Only use them when you have no other native method".

They should be a last resort in making things accessible when native elements aren't sufficient.

For example:

```html
<div role="navigation"></div>
```

Is a valid example, but we should opt for the semantic alternative:

```html
<nav></nav>
```

You might be wondering, ok, which roles can I use then, and what are the alternatives?

And that would be a bit too much to explain in this article.
So more on that in the next one as we deep dive into all the roles.

## Beyond descriptives

Another part where the WAI-ARIA's come to live is providing dynamic content updates for screen readers.

For example, there is the aria-live, which can be used to notify screen readers when content updates.
Think about notifications on the screen or new content that gets refreshed.

A great example of an element heavily relying on WAI-ARIA's is the [tab element](https://daily-dev-tips.com/posts/a11y-101-tabs/) we recently built.

Look at that article and see if WAI-ARIA makes more sense now.

## Conclusion

WAI-ARIA's can enhance semantics and accessibility but should only be used as a last resort.

There is an impressively long list of elements, for which I'll write singular articles to go more in-depth.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
