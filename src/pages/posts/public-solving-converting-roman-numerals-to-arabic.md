---
layout: ../../layouts/Post.astro
title: "Public Solving: Converting Roman numerals to Arabic"
metaTitle: "Public Solving: Converting Roman numerals to Arabic"
metaDesc: 'Creating a roman numeral to arabic number conversion in JavaScript'
image: /images/24-12-2021.jpg
date: 2021-12-24T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
Today the elves asked us to help with a Roman numeral converter in JavaScript.

[You can find the complete puzzle here.](https://github.com/devadvent/puzzle-13)

You might have seen Roman numerals before. They look like this:

```js
I = 1
IV = 4
V = 5
VIII = 8
XCV = 95
```

The above is what we must do, convert the Roman numerals to the Arabic numeric version.

Luckily for us, there are some rules to Roman numerals that can help us!

- They should follow big to small format
- If a smaller number proceeds, it's a subtraction
- There are only 7 values

## Thinking about the solution

I had quite a hard time thinking about the smallest possible codebase.

At first thought about adding `IV` as a value option and filtering out negative numbers.
Thinking a bit more and reading the Roman rules on using the letters, we can filter this out quickly!

All we need to do is check which number was preceding. If this number is smaller, it's a negative one!

And that sparked me to write a super simple `reduce` method that does all the heavy lifting for us.

Let's see how it works.

## Building a Roman to Arabic number converter in JavaScript

The first thing I did was add a mapping object.
This object contains all the Roman letters and their representing value.

```js
const chart = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
```

The next thing we need to do is convert the input into an array to use JavaScript array methods.

At this time, I also decided to uppercase it since that's what our mapping tables accept.

```js
input.toUpperCase().split('')
```

Then we want to use the [JavaScript `reduce()` method](https://daily-dev-tips.com/posts/javascript-reduce-method/). This method is excellent for this purpose because it can pass an accumulator (previous value).

```js
return input
	.toUpperCase()
	.split('')
	.reduce(
	  (acc, romanLetter) => {
	    // Todo
	  },
	  [0, 0]
	);
```

Let me describe what's going on here.

We reduce the array we just created, and then we get the following parameters:

- `acc`: The accumulator contains the previous value and starts with the default.
- `romanLetter`: The current looped element
- `[0, 0]`: This is the default value. I'm using an array to keep track of the total sum and the previous single value.

Then we need to retrieve the value of this roman letter.

```js
const arabicValue = chart[romanLetter];
```

We can then simply return the total value of our number and the current single value like this.

```js
return [acc[0] += arabicValue, arabicValue];
```

This works great, as long as there is no negative value like `IV`.

To fix that, we can introduce a negative offset.
We will check if the previous single value is smaller than the current one.
We should subtract 2 * from the previous value if that is true.

We do 2 times the value since we just added it in the previous loop, and it's actually a subtraction of that specific value.

```js
let negativeOffset = 0;
if (acc[1] < arabicValue) {
  negativeOffset = -(acc[1] * 2);
}
```

And then, we can simply + this negative value to our total value.

```js
return [(acc[0] += arabicValue + negativeOffset), arabicValue];
```

Now, in the end, we just need to return only the total value, which is array element 0 from our reduce.

```js
export const romanToArabic = (input) => {
  return input
    .toUpperCase()
    .split('')
    .reduce(
      (acc, romanLetter) => {
        let negativeOffset = 0;
        const arabicValue = chart[romanLetter];
        if (acc[1] < arabicValue) {
          negativeOffset = -(acc[1] * 2);
        }
        return [(acc[0] += arabicValue + negativeOffset), arabicValue];
      },
      [0, 0]
    )[0];
};
```

Now let's try and run the test to see how we did:

![All test green ready to go](https://cdn.hashnode.com/res/hashnode/image/upload/v1639408816740/eg7_exhin.png)

This was quite a cool one to do, and I'm sure there are 100 and 1 good solutions. 
Let me know what you think of this one or do differently.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
