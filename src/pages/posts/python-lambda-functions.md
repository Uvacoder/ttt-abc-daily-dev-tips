---
layout: ../../layouts/Post.astro
title: 'Python Lambda functions'
metaTitle: 'Python Lambda functions'
metaDesc: 'Lambda functions are tiny functions in Python'
image: /images/31-05-2021.jpg
date: 2021-05-31T03:00:00.000Z
tags:
  - python
---

The other day I wrote about [functions in Python](https://daily-dev-tips.com/posts/writing-functions-in-python/), and my good friend [Waylon](https://dev.to/waylonwalker/comment/1eo4a) noted me on the existence of Lambda functions.

So I started to research what they are, how they work, and when to use them.

## Lambda functions in Python

Lambda functions are tiny functions that have no specific name and can only have one expression.
They are also called anonymous functions.

We can create one of these functions like this:

```python
lambda foo : bar
```

Foo is the argument, and this can be multiple, and bar is the expression, so this is your one-liner return statement.

To give this more body, let's make a function that divides a number.

```python
divide = lambda num: num / 2
print(divide(4))
```

As you can see, we can make it, so it's assigned to a variable, and that variable we can pass the arguments into.

However, linters as the one I'm using in Visual Studio Code will use auto-format this to a regular function like this:

```python
def divide(num): return num / 2
print(divide(4))
```

Which again, does the same thing.

So pretty cool already, and my understanding is they truly come to power inside other objects as quick functions.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
