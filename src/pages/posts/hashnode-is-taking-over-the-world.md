---
layout: ../../layouts/Post.astro
title: 'Hashnode is taking over the world'
metaTitle: 'Hashnode is taking over the world'
metaDesc: 'Making a CSS artwork of the Hashnode logo moving around the world'
image: /images/13-01-2022.jpg
date: 2022-01-13T03:00:00.000Z
tags:
  - css
---

And it's not a bad thing!

[Hashnode](https://hashnode.com/@dailydevtips/joinme) for those who don't know, it is a blogging platform for technical articles.
Since the early days, I've been a member, and it has grown massively since then.

Recently one of the founders shared these impressive statistics on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Thrilled to share some <a href="https://twitter.com/hashnode?ref_src=twsrc%5Etfw">@hashnode</a> YoY numbers from a very successful 2021⚡️<br /><br />Blogs: 17K➡️100K (+488%)<br />Articles: 18K➡️73K (+405%)<br />Reads: 5M➡️31M (+600%)<br />Hackathons: 0➡️4<br />Team: 5➡️19<br />Funding: 8.7M<br />Twitter: 43K+<br />Discord: 6K+<br /><br />Thank you to our amazing community. 💙</p>&mdash; Syed Fazle Rahman (@fazlerocks) <a href="https://twitter.com/fazlerocks/status/1480431473580675074?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And right before that Nazanin, announced on Twitter that she would organize a [CSS art challenge](https://twitter.com/nazanin_ashrafi/status/1479860636385484810), before I even knew what it was going to be about, I've said yes.

And here we are. This article describes how I made my CSS artwork for this Hashnode CSS Art Challenge.

My result looks like this:

<!-- ![Hashnode is taking over the world](https://cdn.hashnode.com/res/hashnode/image/upload/v1642013095101/kzoVmjFk6.gif) -->
<video autoplay loop muted playsinline>
 <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642013175/hashnode_tclq6o.webm" type="video/webm" />
 <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642013175/hashnode_poly25.mp4" type="video/mp4" />
</video>

> Note: You can try it out at the bottom

## The rules and my idea

The rules for this challenge are super simple.

1. Use the Hashnode logo and run it into whatever you think of.

I was trying to fall asleep, but this challenge kept me up. I just couldn't put my finger on what I wanted to create.

And then it hit me!

Hashnode is taking over the world!
So let's make a character out of this logo and have it walk around the world.

My idea is to combine the CSS art I know and try out [pixel art](https://pokecoder.hashnode.dev/making-pixel-art-with-pure-css), as that sounds cool to me!

## Creating the logo

Let's start with the logo. I'm sure you might think, oh well, you can use a rounded square and put a round div over it, r right?

And yes, we could do that, but then we can't use backgrounds behind it.

So I decided to go with a little different approach.

I've added a div that I called `hashnode` and inside created a `body` which will hold the logo.

```css
.hashnode {
  margin-top: -10%;
  position: relative;
  width: 40vmin;
  aspect-ratio: 1;
  .body {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 27%;
    transform: rotate(45deg);
    background: #2962ff;
    -webkit-mask: radial-gradient(#0000 28%, #000 28%);
    mask: radial-gradient(#0000 28%, #000 28%);
    z-index: 2;
  }
}
```

The magic here is actually in the `webkit-mask`. This defines a transparent radial gradient.
This will create a round gap in the body.

> Note: This idea was [demoed out by Alvaro](https://codepen.io/alvaromontoro/pen/RwLYRpr). Thank you very much for that.

Then I decided to add arms to the character, which would move. The arms are two times the same styling with a different offset.
I've also made sure the right arm is one second delayed.

```css
.arm {
  width: 50%;
  height: 30%;
  border: solid 5px #000;
  border-color: #001 transparent transparent #001;
  border-radius: 50%/70% 0% 0 0;
  position: absolute;
  animation: 2s move-arm infinite;
  transform: rotate(45deg) scaleY(-1);
  top: 20%;
  transform-origin: bottom left;
  &:before {
    content: '';
    width: 10%;
    background: #000;
    position: absolute;
    aspect-ratio: 1;
    right: -5%;
    top: -10%;
    border-radius: 50%;
  }
  &-left {
    left: 10%;
    z-index: 3;
  }
  &-right {
    animation-delay: 1s;
    left: 70%;
    z-index: 1;
  }
}
```

You can see I used the `before` selector to add the little round hand-like shapes, which would make the arms look neater.

This shape is a square box where we color only two sides of a rounded border.

This is what it looks like if we color it completely.

![Arm color](https://cdn.hashnode.com/res/hashnode/image/upload/v1642006228783/QAhF4JPDV.png)

A good thing to note about the arm is this:

```css
transform-origin: bottom left;
```

This defines what axis the transform should take place. Setting this to `bottom left` allows the rotation to happen on a solid axis, making the arm "swing".

As for the swing animation goes:

```css
@keyframes move-arm {
  0% {
    transform: rotate(45deg) scaleY(-1);
  }
  50% {
    transform: rotate(0deg) scaleY(-1);
  }
  100% {
    transform: rotate(45deg) scaleY(-1);
  }
}
```

A very straightforward rotating from 45 degrees to 0 and back.
I'm using the scaleY to invert because I started upside down and was too lazy to revert it 😂.

The legs are a very similar approach, but they are longer, and the shoes are slightly different.

```css
.leg {
  width: 30%;
  height: 50%;
  border: solid 5px #000;
  border-color: #000 #000 transparent transparent;
  border-radius: 0 80%/45%;
  position: absolute;
  z-index: 10;
  transform-origin: top left;
  transform: rotate(30deg);
  top: 100%;
  left: 50%;
  animation: 2s move-leg infinite;
  &:before {
    content: '';
    width: 50%;
    height: 10%;
    background: #000;
    position: absolute;
    bottom: -10%;
    border-radius: 50%;
    left: 90%;
  }
  &-left {
    animation-delay: 1s;
  }
  &-right {
    z-index: 1;
  }
}
```

And for the animation, I used the same approach. But with fewer degrees since your legs don't swing as much as your arms.

```css
@keyframes move-leg {
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
```

## Meme glasses pixel art

I decided to give the character some glasses and meme glasses for that Mather.

They are perfect for trying out pixel art, as they are pixels.

The glasses look like this:

```css
.glasses {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 15%;
  z-index: 3;
  box-shadow: 10px 10px #000000, 20px 10px #000000, 30px 10px #000000, 40px 10px #000000,
    50px 10px #000000, 60px 10px #000000, 70px 10px #000000, 80px 10px #000000,
    90px 10px #000000, 100px 10px #000000, 110px 10px #000000, 120px 10px #000000,
    130px 10px #000000, 140px 10px #000000, 150px 10px #000000, 160px 10px #000000,
    170px 10px #000000, 180px 10px #000000, 190px 10px #000000, 200px 10px #000000,
    10px 20px #000000, 20px 20px #000000, 30px 20px #000000, 40px 20px #000000,
    50px 20px #000000, 60px 20px #000000, 70px 20px #000000, 80px 20px #000000,
    90px 20px #000000, 120px 20px #000000, 130px 20px #000000, 140px 20px #000000,
    150px 20px #000000, 160px 20px #000000, 170px 20px #000000, 180px 20px #000000,
    190px 20px #000000, 200px 20px #000000, 20px 30px #000000, 30px 30px #000000,
    40px 30px #000000, 50px 30px #000000, 60px 30px #000000, 70px 30px #000000,
    80px 30px #000000, 90px 30px #000000, 120px 30px #000000, 130px 30px #000000,
    140px 30px #000000, 150px 30px #000000, 160px 30px #000000, 170px 30px #000000,
    180px 30px #000000, 190px 30px #000000, 30px 40px #000000, 40px 40px #000000,
    50px 40px #000000, 60px 40px #000000, 70px 40px #000000, 80px 40px #000000,
    130px 40px #000000, 140px 40px #000000, 150px 40px #000000, 160px 40px #000000,
    170px 40px #000000, 180px 40px #000000, 40px 50px #000000, 50px 50px #000000,
    60px 50px #000000, 70px 50px #000000, 140px 50px #000000, 150px 50px #000000,
    160px 50px #000000, 170px 50px #000000;
}
```

This stacking of border shadows allows us to create a pixel-like effect.

I enjoyed using this and will most likely dedicate a complete article to pixel art and how it works.

## Making the character whistle

I thought it would be cool to make the character whistle. In this case, it means a musical note comes out of its "hole" (mouth?).

For this, I used the `before` selector on the hashnode div.

```css
.hashnode {
  &:before {
    content: '🎵';
    position: absolute;
    font-size: 2rem;
    animation: 5s notes infinite;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 3;
  }
}
```

As you can see, it plays an infinite `notes` animation.
The notes animation looks like this:

```css
@keyframes notes {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }
  5% {
    opacity: 1;
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(360deg);
    top: -100%;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}
```

It starts by setting the opacity to 1 and resetting the rotation.
Then we use a 5% step not to make the animation super fast and rotate the note as we move it upwards.
And eventually, we fade it out.

This will then re-loop, making it start from 0%.

I think it turned out to be quite a fantastic addition.

## Run the world animation

The last part is the globe that spins around.
For this, I created a big circle.

```css
.world {
  position: absolute;
  width: 75vmin;
  aspect-ratio: 1;
  background: blue;
  border-radius: 50%;
  top: 100%;
  left: -50%;
  background-image: url(https://cdn.hashnode.com/res/hashnode/image/upload/v1641971056244/tPSv8apET.png);
  background-size: cover;
  background-position: center center;
  animation: 15s world linear infinite;
}
```

The circle is then filled with a PNG image of the world. You can open the above image to see what it looks like.

I've added a `world` animation that will spin it around. It's important to note the `linear` animation so it won't slow down once it's almost complete but move at the same speed all the time.

The animation itself looks like this:

```css
@keyframes world {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

Just a simple from 0 degrees to 360 degrees animation that makes the world go round, and round and round!

## Finishing touch

Go ahead, click the character...

(Put your music up! 🎵)

Yes, I decided to add "Daft Punk - Around the world" when clicking the logo.

For this, we leverage a little bit of JavaScript that looks like this:

```js
const audio = new Audio('https://download.mp3very.buzz/d/Daft-Punk-Around-The-World.mp3');
const hashnode = document.querySelector('.hashnode');
hashnode.addEventListener('click', () => {
  audio.paused ? audio.play() : audio.pause();
});
```

This will load a new Audio object, and once we click the logo, it will toggle between playing and pausing the music.

## Conclusion

I loved doing this challenge as it allowed me to try out different types of CSS art.

And I think it came out pretty cool 😂

<p class="codepen" data-height="467" data-default-tab="result" data-slug-hash="wvrQzMq" data-user="rebelchris" style="height: 467px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvrQzMq">
  Hashnode is taking over the world</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

A big shoutout to the following people for all their parts of information around it:

- Nazanin for setting this up! ⚡️
- Alvaro for the mask setup 💖
- Ale for the pixel-art idea 👾

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
