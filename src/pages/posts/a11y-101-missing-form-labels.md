---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Missing form labels'
metaTitle: 'A11Y 101: Missing form labels'
metaDesc: 'How should we make forms without labels accessible for everyone'
image: /images/27-05-2022.jpg
date: 2022-05-27T03:00:00.000Z
tags:
  - accessibility
---

When working with forms, we should always opt to have form labels describing the label.

However, many designers want to hide these labels in modern-day applications as they make things bulky.

Some good examples of forms without labels can be:

- A search field

![Google search field without label](https://cdn.hashnode.com/res/hashnode/image/upload/v1652763775573/1TTWKw5Jo.png)

- A subscribe form that is clear enough

![Subscribe form on daily-dev-tips.com](https://cdn.hashnode.com/res/hashnode/image/upload/v1652763645074/EvGS5zHIE.png)

The common thing we see in both examples is a form with only one field and a button.
Often, it can be clear enough as to what the form is for and what is expected of the user.

I use a placeholder to describe it for the visual reader in my example. However, it might be unclear what this form is for visually impaired people.

To make this form accessible, we should use invisible labels to describe the field. There are three options we can use.

## Hidden label element

This is the most semantic way of adding the label to describe the form field.

We set it up as we would add a regular label for a form field but use CSS to hide it from the browser.
Screen readers will still be able to read it this way.

```html
<label class="hidden" for="search">Search</label>
<input type="text" id="search" />
```

To make elements hidden for screen readers, we have to use specific CSS; I'll write a bit more in detail in the following article as there are multiple options again.

## Title attribute

Another way of making the screen readers aware of what an input field is for is to add a title attribute to the input field.

However, this comes with the drawback of it showing this title attribute to visual users.

It's up to you if that's acceptable for your use case.

```html
<input id="search" type="text" title="Search" />
```

## Aria-label attribute

The last method is to use `aria-label`. It works the same as the title method but doesn't show up for visual users.

This is the safest way of adding descriptive text without messing with hidden styles.

```html
<input id="search" type="text" aria-label="Search" />
```

## Conclusion

There are three ways of making form fields without labels accessible, all three have their use-cases, and it's up to the developer to decide which one works best.

I like the aria-label approach as it's least intrusive in adding elements nobody will see, but the hidden label is just as good.
I would advise only resort to the title if you have no other choice.

> Note: You should only use one of the three methods, don't combine them as screen readers will read your information twice.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
