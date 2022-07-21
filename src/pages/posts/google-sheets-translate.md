---
layout: ../../layouts/Post.astro
title: 'Google Sheets Translate '
metaTitle: 'Google Sheets Translate '
metaDesc: 'Translating in Google Sheets, its possible!'
image: /images/08-08-2020.jpg
date: 2020-08-08T03:00:00.000Z
tags:
  - developer
---

Today I wanted to show you a cool feature I only recently discovered, and it's in Google Sheets!

You're not always working in programming languages; sometimes, a simple excel formula can do things quicker.

I often use Excel for quick replacing/searching/comparing, etc.

Today we are looking at translating strings in Google Sheets!

## Translate a String in Google Sheets!

So we'll build a multi-column setup; in column 'A', we will have our input words in English. Then in `B', we will translate these into Dutch. In`C`, we'll translate to Spanish, in`D`, to German, and in`E` to Arabic.

So in Google Sheets, Google added the formula `GOOGLETRANSLATE`. It looks like this:

```js
=GOOGLETRANSLATE(cell with text, “source language”, “target language”)
```

So here is the list of formulas;

- `Dutch` = `=GOOGLETRANSLATE(A2,"EN","NL")`
- `Spanish` = `=GOOGLETRANSLATE(A2,"EN","ES")`
- `German` = `=GOOGLETRANSLATE(A2,"EN","DE")`
- `Arabic` = `=GOOGLETRANSLATE(A2,"EN","AR")`

You can find these two-letter abbreviations on the following page [ISO Codes](https://www.loc.gov/standards/iso639-2/php/code_list.php)

![Google Sheets Translate](https://dev-to-uploads.s3.amazonaws.com/i/br3l2b3ws0km6hxdjfsy.gif)

You can also find an example from my sheet here:

[View my Translate Sheet](https://docs.google.com/spreadsheets/d/1Ap45D1wfJBTSVXmkzfkgSjf8BJRpk0vdJ5n2TXcbZzU/edit?usp=sharing)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
