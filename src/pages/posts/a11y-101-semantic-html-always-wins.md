---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Semantic HTML always wins'
metaTitle: 'A11Y 101: Semantic HTML always wins'
metaDesc: 'Semantic HTML is a descriptive way of writing HTML tags'
image: /images/24-05-2022.jpg
date: 2022-05-24T03:00:00.000Z
tags:
  - accessibility
---

This is less of a technical article but more a description and call out why semantic HTML always wins.

## What is this semantic HTML

The main difference between semantic and non-semantic HTML is that semantic is a descriptive way of coding.

We (the developers) define elements that describe what they are.
Some examples:

- main
- header
- article
- aside
- footer
- ... and so on

These semantic elements, as you see by their name, are already more descriptive than their non-semantic cousins:

- div
- span
- ... and some more of these

## Why does this matter?

Even when we take accessibility out of the acquisition, it's always good to focus and invest time and effort into learning semantic HTML.

It's a way to define your structure and for all kinds of other wins.

- Browsers might intercept these different, think about print styles, read styles, and so on
- SEO loves semantic HTML to read your website by
- And of course, the gorilla in the room: Accessibility, loves it

And besides that, what good argument can you give me that a div is better than a `<header>`, for instance?

## Semantic HTML and accessibility

Of course, we are focusing on improving accessibility and so why is this semantic important for this?

First, screen readers and other tools that people with disabilities might use love semantic HTML.

Some other examples could be the keyboard navigation, specific read-only software (which might remove everything outside your article part), or people using different navigation ways, such as a mouth-driven input device.

You get the picture and many different use-cases, and they love semantic HTML because that's how they identify your website.

Let's take this simple example.

**A: non-semantic layout**

```html
<div class='header'></header>
<div class='nav'></nav>
<div class='main'>
	<div class='article'>
		<h1>Title of article</h1>
		<p>...</p>
	</div>
</div>
<div class='sidebar'></div>
<div class='footer'></div>
```

Layout-wise, we can make this work and look stunning, but screen readers have no idea where your navigation is, where your articles start and end, and your sidebar.

And if you are wondering, those tools can't read your website based on the classes because, again, every developer will use custom names or even smudge them together with some build tools.

To help them identify these elements, we can leverage the semantic version:

**B: Semantic layout**

```html
<header></header>
<nav></nav>
<main>
  <section>
    <article>
      <h1>Title of article</h1>
      <p>...</p>
    </article>
  </section>
</main>
<aside></aside>
<footer></footer>
```

This makes the element finable by their type, which is used by these fantastic accessibility helper tools.

## Conclusion

And that is precisely why semantics always wins! It's structured, it's clear, and it's searchable.

Not just by accessibility helpers but also by SEO engines and other tools users or robots might use.

I hope this article motivates you to change to semantic. Trust me. It's not that hard to switch to the semantic side.

![Come to the semantic side - darth vader meme](https://cdn.hashnode.com/res/hashnode/image/upload/v1652508024603/Numx8p3Ot.jpeg)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
