---
layout: ../../layouts/Post.astro
title: 'F-strings in Python'
metaTitle: 'F-strings in Python'
metaDesc: 'A better way to format strings in Python with f-string'
image: /images/07-06-2021.jpg
date: 2021-06-07T03:00:00.000Z
tags:
  - python
---

The other day I wrote an article about [Formatting strings in Python](https://daily-dev-tips.com/posts/formatting-strings-in-python/), and I got a couple of responses saying I should look into f-strings in Python.

F-strings are a more readable way to format strings.
And, they are faster!

## Using f-strings in Python

Although the format option we discussed in the previous article is not a bad way or not working way, it's just not the optimal way. It's easy to make mistakes and can be hard to read with multiple variables.

F-strings can help us with that.
To use an f-string, we must prefix an f to a string.

```python
f"yourstring"
```

I hear you think, why not just use a string, and yes, you would be right in this use case.

However, let's see how to pass variables to them and see the true power.

```python
name = "Chris"
age = 32
print(f"{name} is {age} years old")
# Chris is 32 years old
```

Way more accessible, since we already have the variables, to me, it's super clear what's happening and how we are using them.

Similar to variables, we can even invoke expressions.

```python
print(f"What is 5 x 5? {5 * 5}")
# What is 5 x 5? 25
```

Besides that, we could try to pass in a function even.

```python
def greet(name):
    return f"Hi there {name}"

name = "Chris"
print(f"{greet(name)}")
# Hi there Chris
```

With this, I want to thank everyone for introducing f-strings to me, and they will be my string formatting tool in the future 👍.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
