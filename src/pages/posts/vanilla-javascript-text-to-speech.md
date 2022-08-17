---
layout: ../../layouts/Post.astro
title: 'Vanilla JavaScript text-to-speech 💬'
metaTitle: 'Vanilla JavaScript text-to-speech 💬'
metaDesc: 'How to convert text on a screen to spoken words by the computer'
image: /images/13-12-2020.jpg
date: 2020-12-13T03:00:00.000Z
tags:
  - javascript
---

I have quite an intriguing background in the TTS (Text-to-speech) field. It always caught my eye.

Back in my school period, my projects would always involve either some kind of TTS or webcam interaction.

Now those were always super cool but couldn't really be of any use in most websites.

Yeah, it looks cool, but when do you really need it.

Another side to TTS is that it was very hard to use. You needed a vast amount of plugins or third-party parses.

These days we are a bit luckier with how powerful JavaScript has become.

So today, I wanted to have another look at Text to speech in JavaScript.

The end result for today: Try it out on the following Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="wvzWmep" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript text-to-speech 💬">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvzWmep">
  Vanilla JavaScript text-to-speech 💬</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## JavaScript text to speech

We can leverage the Web Speech API, which uses the SpeechSynthesis interface.

To have our computer talk to us, we must then make use of the `SpeechSynthesisUtterance` interface.
This basically translates to: speech request.

In this interface, we define the voice, language, and volume.

It comes with the following elements:

- `lang`: The language of the output
- `pitch`: Sets a pitch for the output spoken words
- `rate`: The rate (speed) at which spoken is
- `text`: The actual text that's spoken
- `voice`: Which voice you want to use
- `volume`: The output volume

## Detecting browser support

Since this method is not fully supported by all browsers, we will need to detect if our browser has this option.

```js
const SpeechSynthesisUtterance =
  window.webkitSpeechSynthesisUtterance ||
  window.mozSpeechSynthesisUtterance ||
  window.msSpeechSynthesisUtterance ||
  window.oSpeechSynthesisUtterance ||
  window.SpeechSynthesisUtterance;
```

Here we define a const to check if the support is defined.

We can then easily check this const.

```js
if (SpeechSynthesisUtterance !== undefined) {
  // Do the speech stuff
} else {
  console.warn('sorry not supported 😭');
}
```

## Getting voices

I don't know about you, but I love to play around with any device's voice options.

If it's my Google Home, or something like the Speech API.

The cool part about the Web Speech API is that we can query all available voices.

```js
const voices = window.speechSynthesis.getVoices();
console.log(voices);
// []
```

Now running this will likely result in a empty result, so another cool thing the API comes with is a callback for once the voices are loaded:

```js
window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  console.log(voices);
  // (67) [SpeechSynthesisVoice, SpeechSynthesisVoice, ...]
};
```

Now, let's add a select list to our HTML and render the voices as options.

```html
<select id="voiceSelect"></select>
```

And in our JavaScript:

```js
const voiceSelect = document.getElementById('voiceSelect');
let voices;
if (SpeechSynthesisUtterance !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, key) => {
      let option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.value = key;
      voiceSelect.appendChild(option);
    });
  };
}
```

We should now have a select list that is populated with all the available voices.

![JavaScript speech voice select](https://cdn.hashnode.com/res/hashnode/image/upload/v1607410751016/BX67CW59S.png)

## JavaScript getting a text input to convert to speech

Now let's also add an input field where the user can type some text that will be spoken.

Our `HTML` will look like this:

```html
<form>
  <select id="voiceSelect"></select>
  <input id="voiceInput" />
  <button type="submit">Speak</button>
</form>
```

Then in our JavaScript let's first define the variables we need:

```js
const form = document.querySelector('form'),
  voiceSelect = document.getElementById('voiceSelect'),
  voiceInput = document.getElementById('voiceInput');
```

Now we need to catch the form submit and prevent it from submitting to a blank page.

```js
form.onsubmit = function (event) {
  event.preventDefault();
  // Do the speech action
};
```

## JavaScript using text-to-speech to talk to us

Now it's finally time to have the computer talk to us.

```js
form.onsubmit = function (event) {
  event.preventDefault();

  let speak = new SpeechSynthesisUtterance(voiceInput.value);
  speak.voice = voices[voiceSelect.value];
  window.speechSynthesis.speak(speak);
};
```

Now you can type something in the input field and select your voice.
Press the speak button, and you should hear some spoken words!

## Browser Support

Again, pretty good coverage for a fairly new API.
Of course, IE is a pain like always, and mobile Opera and Android have some issues with it.

![JavaScript text to speech browser support](https://caniuse.bitsofco.de/static/v1/mdn-api__SpeechSynthesisUtterance-1607412204741.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
