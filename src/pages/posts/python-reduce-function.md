---
layout: ../../layouts/Post.astro
title: 'Python reduce() function'
metaTitle: 'Python reduce() function'
metaDesc: 'How to use the reduce() function in Python'
image: /images/06-06-2021.jpg
date: 2021-06-06T03:00:00.000Z
tags:
  - python
---

After looking into the [Python filter function](https://daily-dev-tips.com/posts/python-filter-function/) and the [Python map function](https://daily-dev-tips.com/posts/python-filter-function/), let's take a look at how the reduce works.

The reduce function can be used to do calculations on a set of objects.
For instance, we can count all prices from a dictionary or get an average number.

## Reduce() function in Python

Let's look at how the reduce syntax looks.

```python
from functools import reduce

result = reduce(myFunction, input)
```

This is not much different than we saw with filter and map. The big difference is that we have to import the reduce function.

The real difference lies in the `myFunction` we are going to make.

This function takes two arguments instead of one, where it receives a new value and the initial value.

```python
from functools import reduce

input = [12, 5, 23, 1]

def myFunction(a, b):
    return a + b

result = reduce(myFunction, input)
print(result)

# 41
```

With this function we loop over each input number and plus it. However Python does not simply do `12 + 5 + 23 + 1` it uses the modifier like this:

```
(((12 + 5) + 23) + 1) = 41
```

You can see what's happening? It first finishes the item and the previous and keeps doing this for each item.

Again we can use the [Python lambda function](https://daily-dev-tips.com/posts/python-lambda-functions/) to make this even easier.

```python
from functools import reduce

input = [12, 5, 23, 1]

result = reduce(lambda a, b: a + b, input)
print(result)

# 41
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
