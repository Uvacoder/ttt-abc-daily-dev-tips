---
layout: ../../layouts/Post.astro
title: 'Common HTML Element Types'
metaTitle: 'Common HTML Element Types'
metaDesc: 'Today we are looking at some HTML elements and what they do'
image: /images/03-05-2021.jpg
date: 2021-05-03T03:00:00.000Z
tags:
  - html
---

This is a guest post written by [Stuart Alderson-Smith](https://twitter.com/aldercode).
Stuart is an upcoming developer looking to take on freelance work, so hit him up if you have any work for him.

As illustrated in a previous post describing a [basic HTML boilerplate](https://daily-dev-tips.com/posts/html5-starting-boilerplate-template/), HTML utilises various elements. These usually contain an opening and a closing tag. I say ‘usually’ as, like with most things, there are always exceptions to the rule.

## Common HTML elements

An example of this is as follows, using the `<p>` paragraph tag as an example:

```html
<p>This is a paragraph.</p>
```

HTML element tags are not case-sensitive, but the best practice is to utilize lowercase formatting.

In no specific order, here are some of the more common HTML elements that one can use and which you will encounter:

`<h1>`
The ‘h’ stands for header and is used for just that purpose – adding headings and subheadings to text. It starts at `<h1>`, being the largest, and continues to `<h6>`, the smallest.

`<p>`
As shown above, this is used to separate text into separate paragraphs.

`<br />`
This is used to insert a single line break, by forcing a carriage return. It does not require an accompanying closing tag. Some traditionally write it as `<br/>` or `<br />` though this is by no means required (but will still work).

`<div>`
A div is a very common method used to define a division or section within an HTML document and is used as a container for other HTML elements. When used, the opening `<div>` tag is where one often adds `<style>` and or `<id>` tags to style the entire section via inline CSS or link to specific ID sections within the page.

`<a href>`
Is used to insert a hyperlink through the use of an `<a>` and it’s closing tag `</a>`. We also need to add the address to be linked to via ‘href’, e.g. `<a href=”url_to_link_to”>Click here</a>`.

`<img>`
The image ‘img’ adds or links an image file. We add the source ‘src’ field as well to specify the image’s link, i.e. `<img src=”path_to_image_folder/filename.jpg”>` It does NOT require a corresponding closing tag.

`<button>`
Defines a clickable button on a page.

`<aside>`
The aside element displays additional information indirectly related to its surrounding content. It is often used to show ‘more info’ about the main text in a sidebar. Many browsers display this element with a default ‘display: block;’ CSS property.

`<section>`
Defines a section within the page. This is simply a clear way to clarify individual sections within a document, as opposed to using multiple sections each referred to simply as `<div>`.

`<main>`
Like with the `<section>` tag, it defines the main section of the page and is a clearer way to indicate this than by using yet another `<div>`.

`<footer>`
Is used to define the footer section of a page and can be considered a type of `<section>` or `<div>`.

`<ol>`
An Ordered List. When coupled with `<li>` (list) items, it displays the various listed items using numbers by default.

`<ul>`
An Unordered List. When coupled with `<li>` (list) items, it displays the various listed items using bullet points by default.

`<style>`
Is used in two manners:
Within the `<head>` section of a page to list relevant CSS styling to be applied to the page (Internal CSS).
To add inline CSS styling to the specific tag to which it is applied, e.g. `<h1 style="text-align: center;">Centred Heading</h1>`

`<!-- -->`
To display comments with the HTML code. For example:

```html
<!-- This text is commented out and will not display on the rendered page. -->
```

These are just some of the more commonly used HTML elements. For a comprehensive list, including some rarer options, see W3 Schools’ [HTML Element Reference page](https://www.w3schools.com/tags/default.asp).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
