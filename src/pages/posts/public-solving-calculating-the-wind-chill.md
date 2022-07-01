---
layout: ../../layouts/Post.astro
title: 'Public Solving: Calculating the wind chill'
metaTitle: 'Public Solving: Calculating the wind chill'
metaDesc: 'How to calculate the wind chill in JavaScript for metric and english units'
image: /images/28-12-2021.jpg
date: 2021-12-28T03:00:00.000Z
tags:
  - devadvent
  - javascript
---

Santa's sled is pretty modern. Hey, we even upgraded it to have an [autopilot](https://daily-dev-tips.com/posts/public-solving-making-an-autopilot-navigator/).
But now, the elves want to surprise Santa by adding a wind chill gauge.

The wind chill is the "feel" temperature when it's like 30 degrees, but it feels like 35?

[You can find the complete puzzle here.](https://github.com/devadvent/puzzle-18)

To do this, we can use an already provided mathematical calculation which can be found [here](https://sciencing.com/calculate-wind-chill-factor-5981683.html).

The wind chill can be calculated for English and Metric values.

## Thinking about the solution

The main thing we have to achieve today is to make the formula in JavaScript.
This should be a pretty straightforward process.

The formula for English units looks like this:

```js
35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)
```

Where `T` = Temperature in degrees Fahrenheit and `V` = wind speed in miles per hour.

In JavaScript this should look similar to this:

```js
35.74 +
  0.6215 * temperature -
  35.75 * windSpeed ** 0.16 +
  0.4275 * temperature * windSpeed ** 0.16;
```

Did you note the `(V^0.16)` exponent? We can use `Math.pow` or the shortcut `**` for that.

Then we can wrap this in a `Math.round` to get the rounded number.

```js
return Math.round(
  35.74 +
    0.6215 * temperature -
    35.75 * windSpeed ** 0.16 +
    0.4275 * temperature * windSpeed ** 0.16
);
```

However, we also need a way to calculate the metric version.

I decided to catch and return the English units beforehand.

And if that didn't hit, surely it must be the metric version.

```js
if (units === 'US') {
  return Math.round(
    35.74 +
      0.6215 * temperature -
      35.75 * windSpeed ** 0.16 +
      0.4275 * temperature * windSpeed ** 0.16
  );
}

return Math.round(
  13.12 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16
);
```

And that's it! We solved the issue.

Let's try it out and see if our test turns green.

![Wind chill test in JavaScript turning green](https://cdn.hashnode.com/res/hashnode/image/upload/v1639835530374/FAKl-22B2.png)

I would love to hear what you would do differently to solve this problem.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
