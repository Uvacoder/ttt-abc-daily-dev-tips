---
layout: ../../layouts/Post.astro
title: 'Formatting strings in Python'
metaTitle: 'Formatting strings in Python'
metaDesc: 'Instert variables inside string in Python'
image: /images/01-06-2021.jpg
date: 2021-06-01T03:00:00.000Z
tags:
  - python
---

As you may know, I work mainly with JavaScript these days. After seeing [JavaScript has these amazing template literals](https://daily-dev-tips.com/posts/javascript-template-literals/). I was wondering if something like that existed in Python.

And it does, in some way!

There is something called string formatting in Python.

## String formatting in Python

How it works is that we use a placeholder `{}` (curly brackets) inside a string. We can then use the `format()` function to replace these curly brackets with a variable or other string.

A real-world example.

```python
name = 'chris'
text = 'His name must be {} right?'
print(text.format(name))
```

Which will return: "His name must be chris right?"

Already pretty cool and helpful!

Often you want to have multiple elements you want to replace, so let's see how that works.

```python
firstname = 'Chris'
lastname = 'Bongers'
text = 'Firstname: {}, Lastname: {}'
print(text.format(firstname, lastname))
```

Which will print: "Firstname: Chris, Lastname: Bongers"

As you can see, we can add multiple bracket placeholders!

## Numbering string placeholders in Python

But let's say you want to re-use a placeholder. We can simply choose to number the placeholders with numbers.

```python
name = 'Chris'
age = 32
text = 'His name is {0}, {0} is {1} years old'
print(text.format(name, age))
```

This will result in: "His name is Chris, Chris is 32 years old".

We used the name variable twice under the first index (0).

Another way to do this is to name the variables if you are unsure about the order.

```python
name = 'Chris'
age = 32
text = 'His name is {name}, {name} is {age} years old'
print(text.format(name=name, age=age))
```

This will result in the same as above but might make more sense to use than the number method.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
