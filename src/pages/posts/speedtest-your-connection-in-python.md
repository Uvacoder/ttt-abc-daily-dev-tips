---
layout: ../../layouts/Post.astro
title: 'Speedtest your connection in Python'
metaTitle: 'Speedtest your connection in Python'
metaDesc: 'How to perform a speedtest in a Python script'
image: /images/21-06-2021.jpg
date: 2021-06-21T03:00:00.000Z
tags:
  - python
---

Today we'll be building our speed testing service in Python.
We have Speedtest websites like this to test our ping, upload, and download speed for those who don't know.

For today's article, I was looking to automate this since I check it regularly.

I choose Python as the language, seeing I'm trying that out a bit.

## Installing the speedtest-cli in Python

Before we can use this package, we have to install it to become available for us to use.

Use the following command to install it:

```bash
pip install speedtest-cli
```

Now open your python file and start by importing the speed test module.

```python
import speedtest
```

Then we create a new speed test. In my case, I'm assigning it to the `st` variable.

```python
st = speedtest.Speedtest()
```

> Note: be aware running the speed test takes a while, so be patient 🙈

Now let's try our download speed and print it out:

```python
print(st.download())
```

When we run this, we get a long number like this:

```
55775374.79559286
```

## Making a full Python speed test script

Now that we know the basics of the speed test, we want to receive three elements:

- ping
- download
- upload

I'll be showing you how to get this data and format it nicely.

Starting with the ping, for this to work, we need to define a server to ping. In our case let's choose the best one.

```python
st.get_best_server()
```

After this, we can get the ping to this server by using the following:

```python
print(f"Your ping is: {st.results.ping} ms")
```

Let's go on to download. We have already seen we can get this by calling the `download()` function, but it's unformatted.
Below I'll show you how to format it to `Mbit/s`.

```python
print(f"Your download speed: {round(st.download() / 1000 / 1000, 1)} Mbit/s")
```

We can make the same approach for the upload but use the `upload()` function.

```python
print(f"Your upload speed: {round(st.upload() / 1000 / 1000, 1)} Mbit/s")
```

The full script will look like this:

```python
import speedtest

st = speedtest.Speedtest()

st.get_best_server()
print(f"Your ping is: {st.results.ping} ms")
print(f"Your download speed: {round(st.download() / 1000 / 1000, 1)} Mbit/s")
print(f"Your upload speed: {round(st.upload() / 1000 / 1000, 1)} Mbit/s")
```

And when we run this, it outputs:

```
Your ping is: 30.97 ms
Your download speed: 64.4 Mbit/s
Your upload speed: 29.2 Mbit/s
```

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
