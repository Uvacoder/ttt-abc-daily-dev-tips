---
layout: ../../layouts/Post.astro
title: 'Python filter() function'
metaTitle: 'Python filter() function'
metaDesc: 'How to use the filter() function in Python'
image: /images/04-06-2021.jpg
date: 2021-06-04T03:00:00.000Z
tags:
  - python
---

I've recently learned that Python has built-in [global functions like JavaScript](https://daily-dev-tips.com/posts/javascript-filter-method/).
Today we'll be looking into the `filter()` function.

In general, filters are used to filter a [sequence set](https://daily-dev-tips.com/posts/data-types-in-python/#heading-sequence-type-data-type-in-python), for instance, a list.

## Filter() function in Python

Let's first have a look at the syntax:

```python
result = filter(myFunction, input)
```

To give more details to this:

- `result`: Is the output. This will be a filtered sequence. So basically the original input, but without some items
- `filter`: Is the Python built-in function
- `myFunction`: This will be a custom function we are going to build
- `input`: This is the original sequence we want to filter

We'll make a list with numbers. Let's say we want to return only the numbers higher than 10.

```python
input = [2, 11, 3, 23, 105, 1, 9, 10]

def myFunction(n):
    return n > 10

result = filter(myFunction, input)
print(list(result))
# [11, 23, 105]
```

As you can see, our input array includes different numbers. We create a myFunction that serves as the filter function.
There we say return if the number is bigger than 10 include that number.

Then we call the filter on our input and print out our new list returning in:

```
[11, 23, 105]
```

Already superb, but we can even use [lambda functions](https://daily-dev-tips.com/posts/python-lambda-functions/) to make it easier!

```python
input = [2, 11, 3, 23, 105, 1, 9, 10]

result = filter(lambda n: n > 10, input)
print(list(result))
```

And this will result in the same result.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
