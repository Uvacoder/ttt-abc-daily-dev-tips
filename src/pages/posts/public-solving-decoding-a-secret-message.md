---
layout: ../../layouts/Post.astro
title: "Public Solving: Decoding a secret message"
metaTitle: "Public Solving: Decoding a secret message"
metaDesc: 'How to decode a binary message in JavaScript'
image: /images/20-12-2021.jpg
date: 2021-12-20T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
Santa got a super weird email, and at first, he thought he might have been hacked.

But it was just a cool hacker kid not wanting the public to see his letter to Santa.

But Santa doesn't know much about computers and asked us to decode the message he received.

[You can find the complete puzzle here.](https://github.com/devadvent/puzzle-9)

## Thinking about the solution

Let's first look at what we get. There seems to be a message that looks kind of like this:

```js
01001010
01101001
01101110
01100111
01101100
01100101
00100000
01100010
01100101
01101100
01101100
01110011
```

If you've been through any basic computer science class you might have spotted this is [binary code](https://en.wikipedia.org/wiki/Binary_code).

Something your computer uses underwater because it only knows ones and zeros.

Knowing this, we can see each line is actually a specific symbol. This could be a letter, symbol, number, or space.

Let's get right into solving this problem so we can feel like Ackerman.

![Hackerman gif](https://media.giphy.com/media/3knKct3fGqxhK/giphy.gif)

## Decoding a binary message in JavaScript

The first thing we want to do is make sure we can access all the individual lines.

Knowing they are all on different lines, we can use the [`split` method](https://daily-dev-tips.com/posts/vanilla-javascript-string-split/) to split on a new line like so.

```js
input.split('\n')
```

This will give us an array of binary codes.

And seeing it's now an array, we can use the all-around excellent [`reduce` method](https://daily-dev-tips.com/posts/javascript-reduce-method/).

```js
return input.split('\n').reduce((string, binary) => {
	// todo
}, '');
```

The reduce takes two arguments: the accumulator (`string`) and the current looped element (`binary`).
We set the accumulator default value at the end, and I set it as an empty string.

We need to return the string and append the decoded symbol for this binary code inside.

To decode a binary code, we can use the following JavaScript function.

```js
String.fromCharCode(parseInt(binary, 2))
```

Two things are happening there:

1. `parseInt`: This piece will convert the binary code to a character code. 
2. `String.fromCharCode` converts the character code to a string.

Let's take the following binary code and see what happens:

```js
const binary = '01001010'
const charCode = parseInt(binary, 2)
// 74
const symbol = String.fromCharCode(charCode)
// J
```

Meaning that this binary range is the letter `J`.

Now let's use this and combine it into the reduce function.

```js
return input.split('\n').reduce((string, binary) => {
	return (string += String.fromCharCode(parseInt(binary, 2)));
}, '');
```

And that's it!
We now have a binary decoder in JavaScript 😎.

Look at us being hackers.

There is only one more thing to do,
Run the tests.

![All test succeeded](https://cdn.hashnode.com/res/hashnode/image/upload/v1639064865804/YKigDlBlg.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
