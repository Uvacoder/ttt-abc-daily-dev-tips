---
layout: ../../layouts/Post.astro
title: 'A11Y 101: WAI-ARIA Properties'
metaTitle: 'A11Y 101: WAI-ARIA Properties'
metaDesc: 'Taking a deeper look at all the possible ARIA properties'
image: /images/08-06-2022.jpg
date: 2022-06-08T03:00:00.000Z
tags:
  - accessibility
---

In the previous article, we had a look at [what the WAI-ARIA is](https://daily-dev-tips.com/posts/a11y-101-wai-aria/) and which global parts it comes with.

I'll go a bit deeper into WAI-ARIA properties in this specific article.

As a reminder, properties give extra meaning to an attribute, as to states that describe a condition.

## WAI-ARIA properties list

- **aria-autocomplete**: Described if and how a to autocomplete is provided, values are: `none,` `inline`, `list`, and `both`.
- **aria-label**: Can be used to label an element, for example, an SVG button with no text.
- **aria-labelledby**: Reference the element that has the label text.
- **aria-level**: Define the level of an element that can be used for headings, although we should opt to use `h1` etc. for this. Furthermore, it can be used on tree grids.
- **aria-orientation**: Describe the orientation of the element values are: `horizontal`, `vertical`, or `undefined`.
- **aria-placeholder**: Describe a placeholder for an element that doesn't support the native placeholder attribute.
- **aria-sort**: Describe the sorting order for a table or list. Values are: `ascending`, `descending`, `none`, or `other`.
- **aria-valuemax**: Set the max value users can use.
- **aria-valuemin**: Set the minimum value users can use.
- **aria-valuenow**: Set the current numeric value.
- **aria-valuetext**: Define a text value instead of `aria-valuenow`.
- **aria-live**: Describe a live aria. More information on this is separate.
- **aria-relevant**: Used inside a live aria to describe what type of notification will trigger, values are: `additions`, `all`, `removals`, `text`.
- **aria-dropeffect**: Describe the type of drop effect, values are: `copy`, `execute`, `link`, `move`, `none`, or `popup`.
- **aria-activedescendant**: Describe the current active focus for a composite widget.
- **aria-colcount**: Describe the total count of columns in a table, grid, or tree grid.
- **aria-rowcount**: Describe the total count of rows in table, grid, or tree grids.
- **aria-colindex**: Describe an elements column index or position.
- **aria-rowindex**: Describe the elements' row index.
- **aria-colspan**: Describe the number of columns an element spans.
- **aria-rowspan**: Describe the number of rows an element spans.
- **aria-controls**: Describe the element(s) that are controlled by the current element.
- **aria-describedby**: Identify the element(s) that describe the object.
- **aria-description**: Attribute that defines a description for the element. (Similar to label, but longer text)
- **aria-details**: Identify the element that describes more information for this object.
- **aria-errormessage**: Identify the element that describes the error message.
- **aria-flowto**: Describe the natural next element.
- **aria-owns**: Set all elements owned by this element
- **aria-posinset**: The current position of this element within a set.
- **aria-setsize**: Describe the total number of items in a set.
- **aria-current**: Describe the current element in a set of related items, for example in a breadcrumb list.
- **aria-keyshortcuts**: Describe shortcuts for a specific element.
- **aria-roledescription**: Describe a more readable role representation for an element.

With all these properties, it's good to note they should always only suffice as a last resort.
A lot of these properties are available in semantic HTML solutions.

For example, `valuemin`, `valuemax` etc., are also available on input elements.

```html
<input min="0" max="255" current="100" />
```

The key is only to use the ARIA properties when you opt to go off semantic for a particular reason.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
