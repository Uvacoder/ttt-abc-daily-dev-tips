---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript time of day greeting'
metaTitle: 'Vanilla JavaScript time of day greeting'
metaDesc: 'How to greet people based on their time in Vanilla JavaScript.'
image: /images/20-12-2020.jpg
date: 2020-12-20T03:00:00.000Z
tags:
  - javascript
---

Today's article will look at how to greet our users based on their time zone.

We will check for three different times and greet accordingly.

- `< 12`: Everything before 12 should say Good morning
- `12-18`: Middle of the day should say Good afternoon
- `> 18`: After 6 pm so say Good evening

It's a fantastic, relatively small script that makes that little extra effort for the end-user.

You can see the result based on your time in this Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="zYKZwvG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript time of day greeting">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/zYKZwvG">
  Vanilla JavaScript time of day greeting</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## HTML Structure

Our `HTML` for today couldn't be more straightforward. We can leverage just one div.

```
<div id="greeting"></div>
```

We will place whatever greeting is valid for that time inside this div.

## Styling our page

Let's also add some basic styling to our page. Nothing crazy, just a quite big centered block.

```css
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #ffe6ab;
}
div {
  padding: 2rem;
  background: #06d6a0;
  border-radius: 10px;
  font-size: 3rem;
  color: #fff;
}
```

The center method is the [Grid absolute center](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/).

## Vanilla JavaScript time bases greeting

On to the JavaScript part, for this, we need first to get the greeting div.

We use the `documentGetElementById` selector.

```js
const greeting = document.getElementById('greeting');
```

The next thing we need is the current hour for that user.
We can access a new `Date` object and use the `getHours` method.

That will return something like `11` when the time is `11:55`. That's cool because that's how our greetings will work.

```js
const hour = new Date().getHours();
```

We will also need our three greeting types.

```js
const welcomeTypes = ['Good morning', 'Good afternoon', 'Good evening'];
```

The last part we need is a let to put the text in.

```js
let welcomeText = '';
```

Then we can check if our hour matches certain cases and return the correct line.

```js
if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];
```

If the hour is below 12, we return `welcomeType[0]`, which is Good morning.
If it's below 18, we return Good afternoon, and else we return Good evening.

The final step is to put this welcomeText in our div.

```js
greeting.innerHTML = welcomeText;
```

That it! We now have a fully functional welcome greeting based on the user's time.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
