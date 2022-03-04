---
layout: ../../layouts/Post.astro
title: 'Python map() function'
metaTitle: 'Python map() function'
metaDesc: 'How to use the map() function in Python'
image: /images/05-06-2021.jpg
date: 2021-06-05T03:00:00.000Z
tags:
  - python
---

After looking into the [Python filter function](https://daily-dev-tips.com/posts/python-filter-function/), let's take a look at how the map works.

As we learned, the filter will return a section of the input based on certain criteria.

## Map() function in Python

Let's first have a look at the syntax:

```python
result = map(myFunction, input)
```

To give more details to this:

- `result`: Is the output. This will be a changed sequence.
- `filter`: Is the Python built-in function
- `myFunction`: This will be a custom function we are going to build
- `input`: This is the original sequence we want to map

As you can see, the syntax looks like the filter function. The main change will be inside the `myFunction`.

Let's say we have a list of numbers that we need to multiply by themselves.

```python
input = [2, 5, 10]

def myFunction(n):
    return n * n

result = map(myFunction, input)
print(list(result))

# [4, 25, 100]
```

Pretty cool right, and like the filter one, we can use [Lambda functions](https://daily-dev-tips.com/posts/python-lambda-functions/) to make it even shorter.

```python
input = [2, 5, 10]

result = map(lambda n: n * n, input)
print(list(result))

# [4, 25, 100]
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
