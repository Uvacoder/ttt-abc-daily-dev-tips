---
layout: ../../layouts/Post.astro
title: 'Exploring 5 meta tags to help beginners with SEO'
metaTitle: 'Exploring 5 meta tags to help beginners with SEO'
metaDesc: 'Here are five meta tags to help beginners with SEO'
image: /images/30-09-2020.jpg
date: 2020-09-30T03:00:00.000Z
tags:
  - developer
  - seo
---

Today's article will teach us about meta tags, what they are, why we need them, and how they work.

Meta tags are tiny snippets of code that have two main goals:

1. Telling search engines how to display your web page
2. Tell the browser how to show it to visitors

Let's get right to it and check out these five essential meta tags for SEO.

## 1. Meta title

This is the title as we show it to Google.

We can add a meta title with the following code.

```html
<title>Top 10 Chrome extensions for developers 👀</title>
```

Some tips for using titles:

- Each page should have a unique title
- Don't make titles too long (50-60 characters is optimal)
- Don't overdo it with keywords
- Write a descriptive title for your page

How a title looks in Google:

![Title in Google](https://cdn.hashnode.com/res/hashnode/image/upload/v1601383009346/C_dP1cGTy.png)

## 2. Meta description

After the title, the biggest win is the description. As the name suggests, it's a brief description of your web page.
They can be any length, but Google generally shows around 150-160 characters.
They should provide a good description where you tell the user about this page.

Here are some guidelines for meta descriptions:

- Avoid duplicate meta descriptions on your website
- Don't include double quotation marks, and Google will cut the text there
- Write a relatable copy. The person must understand what he is going to read

This is how you can add a description tag in HTML.

```html
<meta
  name="description"
  content="I write daily web development tips that help you become a more efficient software developer."
/>
```

![Meta description](https://cdn.hashnode.com/res/hashnode/image/upload/v1601383584862/Ps-Zd6gB1.png)

> Note: Search engines may decide to show other content on the page over the description

## 3. Meta charset

This tag MUST be on every page. Leaving this out can impact your website not being indexed.

These are the two major ones:

- `UTF-8`: Unicode character encoding
- `ISO-8859–1`: Latin alphabet encoding

[Find a full character setlist here](https://www.w3.org/International/O-charset-list.html)

Why it's important:

- It can show wrongly formatted characters in your code.
- People might think your page is bogus and not valid
- Search engines might not understand your content
- Google states UTF-8 is the most adopted set

You can add a charset like this in HTML

```html
<meta charset="utf-8" />
```

## 4. Meta viewport

A viewport tag tells a browser what to do with several screen sizes.
By having this tag, we tell google we are mobile-friendly.
And we all know Google ranks mobile-friendly sites higher!

How to add a viewport in HTML?

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

The content can be different, but this is a widely adopted default.

Read [CSS Tricks](https://css-tricks.com/snippets/html/responsive-meta-tag/) full guide on the responsive meta tag.

## 5. Meta robots

A last one crucial but not required for SEO is a robots tag.
With a robots tag, we can give search engine bots what to do with this page.

It can have the following options:

- `index`: Tell the bot to index this page
- `noindex`: No, don't index this page
- `follow`: Follow links on this page
- `nofollow`: Don't follow any links on this page

Use these robot tags only on pages where you want to restrict a bot. (Like admin pages)

A robot tag will look like this:

```html
<meta name="robots" content="index, follow" />
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
