---
layout: ../../layouts/Post.astro
title: "Public Solving: Caesar decipher in JavaScript"
metaTitle: "Public Solving: Caesar decipher in JavaScript"
metaDesc: 'How to decipher or decode a caesar cipher in JavaScript'
image: /images/02-01-2022.jpg
date: 2022-01-02T03:00:00.000Z
tags:
  - devadvent
  - javascript
---
Some kid elves are being naughty and sending themselves encrypted messages during elf class.

Santa has asked us to decrypt these messages to see what's happening.

The [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is pretty easy to understand. It's basically the alphabet but offset with an x amount of characters.

For example:

```
abc 
// shift 1
bcd
```

As you can see, we shift the letters up by the shift amount.

To decipher a message, we have to do the opposite.

## Thinking about the solution

At first, I started thinking about providing the alphabet as the shifted version and then mapping using that.
But then I realized using the charCode might actually be a more straightforward solution.

We used the charCode for [hacking Santa's password](https://daily-dev-tips.com/posts/public-solving-hacking-santas-password/).
]

However, we should only match on a-z and A-Z. Capital and lowercase use a different charCode offset, so it's vital to distinguish between them.

Probably something that a regex and the replace function can help us with!

## Building a Caesar decipher in JavaScript

As mentioned, we need to only replace `a-z` and `A-Z`, meaning all characters like `,.!` etc. should remain.

For this, we can use a regex and call another actual shift function for each of the two matches.

```js
return text
    .replace(/[a-z]/g, (char) => letterShift(char, shift, 97))
    .replace(/[A-Z]/g, (char) => letterShift(char, shift, 65));
```

As you can see, the starting offset for a lowercase letter is 97, and for uppercase, it's 65.

This means the character code for `a` is 97.
And for `A` it's 65.

Now let's move on to making the actual `letterShift` function we declared.

```js
const letterShift = (letter, shift, offset) => { }
```

I'll break down each step of the following function and end with the complete function ready for use.

Let's take `aol` as our message. We know the offset here is 7.

The first thing we need to do is retrieve the char code of the letter we received.

```js
letter.charCodeAt()

// a = 97 
// o = 111
// l = 108
```

The next step is to offset this character code with the shift.
In our case, the shift is `7`, so we have to detract 7 from our character code. 

```js
letter.charCodeAt() + shift

// a = 90
// o = 104
// l = 101
```

For those paying attention, you might have spotted an issue here.

90 is not a valid letter since it should be more than 97.
The `ol` is correct already.

To solve this, we need to add `26` to negative numbers.
This means any number negative should be at the end of the alphabet.

```js
letter.charCodeAt() + shift + 26

// a = 116
// o = 130
// l = 127
```

Now the `a` is fine, but the `ol` are wrong as they should not have been plussed.

To make a rock-solid solution, we can do the following:

- letter char code
- minus the offset (97 for lowercase or 65 for uppercase)
- add the shift (-7 in our example)
- plus the alphabet length (+26)
- get the remainder of 26 (% 26)
- and then re-add the offset again

This way, we adhere to negative numbers as well as positive ones.

Making the complete function look like this:

```js
return String.fromCharCode(
	((letter.charCodeAt() - offset + shift + 26) % 26) + offset
);

// a = 116 = t
// o = 104 = h
// l = 101 = e
```

Now let's run our test to see if this works for all the test cases.

![Tests turning greeen](https://cdn.hashnode.com/res/hashnode/image/upload/v1640232194932/7y6n0zweH.png)

We did it!

Would really love to hear what your solution would be to this puzzle. 👏

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
