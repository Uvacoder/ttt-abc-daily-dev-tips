---
layout: ../../layouts/Post.astro
title: 'JavaScript reduce on multiple properties'
metaTitle: 'JavaScript reduce on multiple properties'
metaDesc: 'How to use the reduce method for multiple properties'
image: /images/16-01-2021.jpg
date: 2021-01-16T03:00:00.000Z
tags:
  - javascript
---

You might have heard of the [JavaScript reduce method](https://daily-dev-tips.com/posts/javascript-reduce-method/), it's used to convert to a specific output, which can be a sum, but also an output array or object.

The reduce itself is super useful, but the other day I needed it to reduce on multiple properties, and I'll show you just how to do this!

For this example we will have the following data set:

```js
const dates = [
  { date: '2020-12-08', score: 1 },
  { date: '2020-12-09', score: 1 },
  { date: '2020-12-18', score: 1 },
  { date: '2020-12-22', score: 1 },
  { date: '2020-12-22', score: 2 },
  { date: '2020-12-22', score: 3 },
  { date: '2020-12-22', score: 1 },
  { date: '2021-01-04', score: 1 },
  { date: '2021-01-04', score: 2 },
  { date: '2021-01-04', score: 1 },
  { date: '2021-01-04', score: 2 },
  { date: '2021-01-04', score: 3 },
  { date: '2021-01-04', score: 1 },
  { date: '2021-01-04', score: 1 },
];
```

As you can see certain dates will be recurring, and they will have specific scores for each item.

The output we want:

An array but with unique dates where the score is the highest!

## JavaScript reduce on date

For just getting unique dates we would actually use a [filter](https://daily-dev-tips.com/posts/javascript-filter-method/), that would make more sense and it would look like this:

```js
dates.filter((value, index, self) => {
  return self.findIndex((v) => v.date === value.date) === index;
});
```

This would get unique dates as such:

```js
[
  { date: '2020-12-08', score: 1 },
  { date: '2020-12-09', score: 1 },
  { date: '2020-12-18', score: 1 },
  { date: '2020-12-22', score: 1 },
  { date: '2021-01-04', score: 1 },
];
```

But as you can see it will just take the first item and not the one with the highest score.

To get that we do need to introduce a bit of a bigger query.

```js
dates.reduce((scores, value) => {
  let score = scores[value.date];
  if (!score) score = value;
  else if (score.score < value.score) score = value;
  scores[value.date] = score;
  return scores;
}, {});
```

To understand how the reduce works, the scores are the output we pass on, the value is the current loops item.

We set a temporary score variable to store that date's item, then we check if it doesn't exist, we use the score to be this current value.

If it does exist however we need to check if the headache level we already had is smaller, then we update the score variable.

Eventually, we return the scores each time, so it will be a growing object based on date keys.

To get down to earth, the level will be set based on the facts:

- Do we have a date? - Yes - Is the score higher? - Yes: new level - No: old level - No: Set level

The output will look like this:

```js
{
  '2020-12-08': { date: '2020-12-08', score: 1 },
  '2020-12-09': { date: '2020-12-09', score: 1 },
  '2020-12-18': { date: '2020-12-18', score: 1 },
  '2020-12-22': { date: '2020-12-22', score: 3 },
  '2021-01-04': { date: '2021-01-04', score: 3 }
}
```

As you can see a bit of a weird object, but we can fix that:

```js
Object.values(
  dates.reduce((scores, value) => {
    let score = scores[value.date];
    if (!score) score = value;
    else if (score.score < value.score) score = value;
    scores[value.date] = score;
    return scores;
  }, {})
);
```

Now we get:

```js
[
  { date: '2020-12-08', score: 1 },
  { date: '2020-12-09', score: 1 },
  { date: '2020-12-18', score: 1 },
  { date: '2020-12-22', score: 3 },
  { date: '2021-01-04', score: 3 },
];
```

Perfect, exactly what we want!

We can then even convert it into a smaller function, but it's arguable that this might not be the most readable.

```js
Object.values(
  dates.reduce((scores, value) => {
    scores[value.date] = !scores[value.date]
      ? value
      : (scores[value.date] =
          scores[value.date].score < value.score ? value : scores[value.date]);
    return scores;
  }, {})
);
```

I for one, know what it does since I made this, but looking at this in about two weeks' time will bring big question marks, so I would opt for the above one with more readable if...else statements.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
