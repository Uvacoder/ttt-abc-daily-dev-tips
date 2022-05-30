---
layout: ../../layouts/Post.astro
title: 'A11Y 101: WAI-ARIA States'
metaTitle: 'A11Y 101: WAI-ARIA States'
metaDesc: "Let's look at all the possible WAI-ARIA states"
image: /images/09-06-2022.jpg
date: 2022-06-09T03:00:00.000Z
tags:
  - accessibility
---

Now that we had a look at all the possible ARIA properties let's do the same for all of the states.

It's good to remember that states are there to add what current state an element is in.

## WAI-ARIA States list

- **aria-checked**: Indicate the current checked state of input fields that can have this state
- **aria-disabled**: Described if the element is currently disabled
- **aria-expanded**: Describe if the element is expanded or collapsed.
- **aria-haspopup**: Describe if the element has a popup and which type, values are: `false`, `true`, `menu`, `listbox`, `tree`, `grid`, or `dialog`.
- **aria-hidden**: Indicate if the element is not visible
- **aria-invalid**: Describe if the input is invalid or not.
- **aria-modal**: Indicate whether the element is an active modal.
- **aria-multiline**: Whether a texture accepts multiple lines.
- **aria-multiselectable**: Used to describe elements with multiple selectable options, for example, a multiple select list.
- **aria-pressed**: Describe if the current element is pressed.
- **aria-readonly**: Describe if an input element is read-only.
- **aria-required**: Describe if an element is required or not.
- **aria-selected**: Wether the current option element is selected.
- **aria-busy**: Used to indicate if the area is still loading or busy with something.
- **aria-atomic**: Describe if a live region will announce all or only parts of the content.
- **aria-grabbed**: Describe a grabbed state to a drag n drop active element.

We should also always see if there is no semantic alternative we can use.

For most of the form fields, this is the case. Let's look at `aria-readonly` and `aria-required`, for instance.

For input fields, we could do the following:

```html
<input readonly required />
```

The main takeaway is only use these aria states if the semantics are insufficient to handle your condition.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
