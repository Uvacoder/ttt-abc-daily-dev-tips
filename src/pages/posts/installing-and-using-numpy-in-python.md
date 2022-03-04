---
layout: ../../layouts/Post.astro
title: 'Installing and using NumPy in Python'
metaTitle: 'Installing and using NumPy in Python'
metaDesc: 'What is NumPy and how to use it in Python'
image: /images/02-06-2021.jpg
date: 2021-06-02T03:00:00.000Z
tags:
  - python
---

First of all, let me explain a bit what NumPy is and why you might need it.
NumPy is a Python library that is used for working with arrays.
It stands short for Numeric Python

This, of course, is still a bit vague. In general, it makes working with arrays (lists) about 50x faster than traditional python lists.

## Installing and using NumPy

To install NumPy, we must run a pip install command for it.

```bash
pip install numpy
```

Then we have to import it into our Python file.

```python
import numpy
```

Now we can convert a list into a numpy array:

```python
arr = numpy.array([1, 2, 3, 4, 5])
print(arr)
```

However, it's quite often used to have the numpy imported as the `np` alias.

We can do so like this:

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)
```

This now does the exact same thing, but it's easier to write.

If you ever wonder what version of numpy you have installed, you can simply print that out.

```python
print(np.__version__)
# 1.20.3
```

## Types of arrays

The cool part about the NumPy arrays is that they can be built from all array-like [data types of Python](https://daily-dev-tips.com/posts/data-types-in-python/).

Which include the list, tuple, dictionary.

```python
tuple = np.array((1, 2, 3, 4, 5))
print(tuple)

list = np.array(["dog", "cat", "penguin"])
print(list)

set = np.array({"dog", "cat", "penguin"})
print(set)
```

It's super easy to convert this stuff to NumPy arrays since we can eventually do more stuff and faster!

In a follow-up article, I'll go more in-depth about the options for the NumPy arrays.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
