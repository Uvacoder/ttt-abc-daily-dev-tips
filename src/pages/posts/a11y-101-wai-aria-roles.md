---
layout: ../../layouts/Post.astro
title: 'A11Y 101: WAI-ARIA Roles'
metaTitle: 'A11Y 101: WAI-ARIA Roles'
metaDesc: "Let's take a look at all the existing WAI-ARIA roles and what they do"
image: /images/07-06-2022.jpg
date: 2022-06-07T03:00:00.000Z
tags:
  - accessibility
---

In the previous article, we had a short [introduction to WAI-ARIAs](https://daily-dev-tips.com/posts/a11y-101-wai-aria/) and what they are.

Today we'll dive a bit deeper into one of the elements: WAI-ARIA roles.

The specific roles can add semantic meaning to elements where HTML might miss this context.
By doing so, we allow accessibility tools like a screen reader to understand our website structure.

## Why do we need to add these roles?

Certain elements have these roles by default. For example, `<nav>` elements already have a `navigation` role.
And `<input type="radio">` will be a `radio` role.

But non-semantic elements like `div` and `span` have no roles. In some cases, we might want to set these explicitly.

## The different role categories

We can split these roles into six different categories.

1. Document structure roles

These roles are used to add a structural description for a section of content. Most of these should have semantic alternatives nowadays.
However, there are still a few that have no specific semantic variant like: `toolbar`, `tooltip`, and `feed`.

2. Widget roles

Widget roles can be used to identify interactive patterns. With these, there are often also semantic equivalents that should be used.
The main difference between document structure and widgets is that those widget roles require JavaScript interaction; for the document ones, it's unnecessary.
Some examples: `scrollbar`, `slider` and `tab`.

3. Landmark roles

Landmarks are used to identify the organization and structure of a webpage on a higher level.
It would be best if you used these sparingly as they can create a lot of noise for people to understand your structure.
Some examples are: `form`, `main`, and `navigation`.

4. Live region roles

Live regions are elements that include dynamic content that can change. For visual users, these are often visually noticeable changes.
Examples are: `alert`, and `timer`.

5. Window roles

These include sub-windows for your main document and are, for example, `alertdialog` or `dialog`.

6. Abstract roles

I'll document these as existing, but you should not use these. Browsers should only use these to identify specific things.

## Document structure roles

Let's dive deeper into all the document structure roles we can find.

The following ones do not have semantic variants at the time of writing. (This might change over time)

- toolbar
- tooltip
- feed
- math
- presentation
- note

And the following should only be used as a last resort. They should have some semantic alternative. (I'll describe the semantic versions behind each)

- article (use `<article>`)
- cell (use `<td>`)
- columnheader (use `<th scope="col">`)
- definition (use `<dfn`>
- figure (use `<figure>` instead)
- heading (use `<h1>` - `<h6>`)
- img (use `<img>` or `<picture>` instead)
- list (use either `<ul>` or `<ol>` instead)
- listitem (use `<li>` instead)
- meter (use `<meter>` instead)
- row (use the `<tr>`)
- rowgroup (use `<thead>`, `<tfoot>` and `<tbody>`)
- rowheader (use `<th scope="row">`)
- separator (use `<hr>`)
- table (use `<table>`)
- term (use `<dfn>`)

And there are a few more that you rarely will ever need to use and should try to avoid.

- application
- group
- directory
- document
- associationlist
- associationlistitemkey
- associationlistitemvalue
- blockquote
- caption
- code
- deletion
- emphasis
- insertion
- paragraph
- strong
- subscript
- superscript
- time

## Widget roles

Let's take a look at all the available widget roles.

- scrollbar
- searchbox
- separator
- slider
- spinbutton
- switch
- tab
- tabpanel
- treeitem

The following widget roles should be avoided as they have semantic alternatives.

- button
- checkbox
- gridcell
- link
- menuitem
- menuitemcheckbox
- menuitemradio
- option
- progressbar
- radio
- textbox

Then there are some composite widget roles, which should always include a combination of others.

- combobox
- menu
- menubar
- tablist
- tree
- treegrid

## Landmark roles

As mentioned, the landmarks often have semantic alternatives that should be used.

But for completeness, here is the list.

- banner (`<header>`)
- complementary (`<aside>`)
- contentinfo (`<footer>`)
- form (`<form>`)
- main (`<main>`)
- navigation (`<nav>`)
- region (`<section>`)
- search

## Live region roles

The live region roles are exciting and should be used only for dynamically changing elements.

- alert
- log
- marquee
- status
- timer

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
