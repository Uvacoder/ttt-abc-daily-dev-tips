---
layout: ../../layouts/Post.astro
title: 'How I made a no-div playground in Vanilla JavaScript'
metaTitle: 'How I made a no-div playground in Vanilla JavaScript'
metaDesc: 'Let me guide you through the whole process of creating a web application from scratch.'
image: /images/28-12-2020.jpg
date: 2020-12-28T03:00:00.000Z
tags:
  - developer
  - vanillajs
  - javascript
  - css
---

[Hashnode](https://hashnode.com/@dailydevtips/joinme) started a cool challenge to build a product before the end of 2020 called the [#christmashackaton](https://townhall.hashnode.com/hashnode-christmas-hackathon).

And I'm not one to back away from a challenge.

I had this idea in my head for a while but just didn't get to it.

My idea is to create a Codepen/JsFiddle/CSSPlayground but for no-div CSS art.

Why? Because I want to get into CSS art, and like the strict option one can have by not being able to add other elements.

Also, I wanted to see how one can build a playground from scratch.
When I look at Codepen I think that must be so hard to build, but when you start to think about it, it's not that bad.

The end result.

![No divs CSS Art useage](https://cdn.hashnode.com/res/hashnode/image/upload/v1609060908194/SFoSH6c-5.gif)

And the live website can be found here.

[Create your own no-div CSS art on nodivs.com](https://nodivs.com/)

> Note: don't forget to share it on Twitter with #nodivs

## Structure planning

Before starting a project like this it's good to write down how it should work and look. This will help you work faster and more efficiently.

For this project, I first drew a super high-level scheme to see what kind of data I needed.

![Sketch before](https://cdn.hashnode.com/res/hashnode/image/upload/v1608991883108/69q3jT_LE.jpeg)

I've decided to narrow the art down to usage of the `body`, `body:before`, and `body:after` elements.

This will be rendered on the left-hand side of the screen, then on the right is an output div which has a fixed size of 200x200 this is another limit to the tool, but more on that in the future plans.

People should then be able to save whatever they made and share their div URL.

## Creating the textarea capture

So with this in mind, we can start building this no-div playground for our CSS art.

I'm going to share a slimmed-down version for this article, so you're not getting stuck on the layout issues.

As for our `HTML` we can use the following.

```html
<div class="container">
  <div>
    <textarea id="cssBody" placeholder="background: red;"></textarea>
    <br />
    <textarea id="cssBefore" placeholder="content: '🤟';"></textarea>
    <br />
    <textarea id="cssAfter" placeholder="content: '🤟';"></textarea>
  </div>
  <iframe id="iFrame"></iframe>
</div>
```

Let's add some basic `CSS` to render it more like our design.

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}
textarea {
  height: 66px;
}
iframe {
  width: 200px;
  height: 200px;
  border: 5px solid #000;
}
```

This will give us the following output.

![Basic styling no-div css art playground](https://cdn.hashnode.com/res/hashnode/image/upload/v1608992442735/uqVUv50Q7.png)

But what we are really interested in, is getting the values from the textarea's.

Let's add some `JavaScript` to this mix.

We first need to get all our elements

```js
const cssBody = document.getElementById('cssBody');
const cssBefore = document.getElementById('cssBefore');
const cssAfter = document.getElementById('cssAfter');
```

What we retrieve is all three of our textarea's based on their id.

Then we need to add an event listener to retrieve every time the input is changed.
In our case, we will leverage a global `keyup` listener and use [event bubbling](https://daily-dev-tips.com/posts/vanilla-javascript-event-listener-on-multiple-elements/) to stop if it's not one of our textareas.

```js
document.addEventListener('keyup', event => {
  if (
    event.target !== cssBody &&
    event.target !== cssBefore &&
    event.target !== cssAfter
  ) {
    return;
  }
  console.log(cssBody.value);
  console.log(cssBefore.value);
  console.log(cssAfter.value);
});
```

Now every time the key-up event fires inside one of our textareas we get the values.

## Rendering the output

Of course, it's cool to get these values, but what do we do with them?
You may have noted our playground `HTML` uses an iframe, although I'm normally not a big fan, it serves its purpose for this example.

We can modify stuff inside the iframe without affecting our main page.

First, let's add our output to our variables.

```js
const iFrame = document.getElementById('iFrame').contentWindow.document;
```

We get the document part of our iframe since we will use that to inject our `CSS`.

Now the iframe comes with some handy stuff we can leverage, as in we can open this document, write lines and close it again.

That looks like this.

```js
iFrame.open();
iFrame.writeln(`
<style>
body { ${cssBody.value} }
body:before { ${cssBefore.value} }
body:after { ${cssAfter.value} }
</style>`);
iFrame.close();
```

We create a stylesheet inside our iframe and define what the rules are.
In our example for the no-div playground, this is of course very limited.
But you can even write `JavaScript`, `CSS`, and `HTML` if you wanted to.

Now if we type it will modify the iframe directly like this.

![No div capture input](https://cdn.hashnode.com/res/hashnode/image/upload/v1608993330016/1zTWohz-K.gif)

Perhaps that's all you want for your project in that case you can find this file here:

[Download the css playground index.html](https://gist.github.com/rebelchris/1d08b077841b5f21a1c1230c19c0f283)

## Saving the art

I actually already stopped at this point and wanted to do the saving later, but then people would be so annoyed if they spend too much time on this CSS art, and it got lost.

So decided to push and get this in V1.

I looked at several options including [google sheets](https://daily-dev-tips.com/posts/nodejs-write-data-in-a-google-sheet/), air table, but decided to go with Firebase.

Firebase is a cool real-time database, in this example, I didn't really need to real-time part, but oh well it works.

So first head over to [Firebase](https://console.firebase.google.com/), sign up, and create your first project.

Once you created your project you'll see the vast amount of features Firebase offers.

We will actually only be focussing on the Realtime Database.

![Firebase realtime database](https://cdn.hashnode.com/res/hashnode/image/upload/v1608994046805/No_YbLaav.png)

Click the button to add a new database.

Pick any of the locations that work for you, then choose `test mode` so we can write data to our database.

Once it's created you should see a view like this.

![Firebase database](https://cdn.hashnode.com/res/hashnode/image/upload/v1608994159499/pnQZlj2nI.png)

That's it we are done with setting up our database, yeah not kidding we don't need to define any tables or structure.

What we do need to do is enhance our `HTML` file to read and write to Firebase.

First let's start by adding the Firebase `JavaScript` we need, in our instance, we will load them from a CDN.

Add the following lines before you're closing the `</body>` tag, but above our own custom script.

That will load all the needed scripts.

Now we need to modify our existing script to be able to initialize the Firebase instance.

Head back over to Firebase and click the settings gear in the menu.

Then add a new web-app

![Firebase new web app](https://cdn.hashnode.com/res/hashnode/image/upload/v1608994418770/SmsK8W7vE.png)

Enter a new on the next screen and you are done.

Now grab the bottom part where it states `firebaseConfig`.

Something like this:

```js
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'DailyDevTipsIsAmazing',
  authDomain: 'test-BLAAT.firebaseapp.com',
  databaseURL: 'https://test-BLAAT-default-rtdb.firebaseio.com',
  projectId: 'test-BLAAT',
  storageBucket: 'test-BLAAT.appspot.com',
  messagingSenderId: 'BLAATBLAAT',
  appId: '1:BLAATBLAAT:web:BLAATBLAATBLAAT'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

Enter your version of this on top of your custom script.

We also need to initialize our database.

```js
const database = firebase.database();
```

Then we will make a save function that will create a new entry in our database.

The function looks like this.

```js
const save = () => {
  const uuid =
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2);
  firebase
    .database()
    .ref(uuid)
    .set({
      body: cssBody.value,
      before: cssBefore.value,
      after: cssAfter.value
    });
};
```

This function uses [ES6 Arrow function](https://daily-dev-tips.com/posts/javascript-arrow-function/) and basically creates a unique id based on the date and a random string.

Then we call the Firebase database and create a new ref (entry) on our unique ID.

We then set the three elements that make our CSS art.

Let's add this function to a button.

```html
<button onclick="save()">I'm done ✨</button>
```

If we now make some art and click the button we push stuff to Firebase which looks like this in the database.

![Firebase database write](https://cdn.hashnode.com/res/hashnode/image/upload/v1608994819302/x4oE1-Cbw.png)

Perhaps this is enough for you, then you can download the following code.

[Download the code so far](https://gist.github.com/rebelchris/36ed471f321a3c0b3d22be8dd0fab0e8)

## Retrieving the art

Since we saved our CSS art in the Firebase database, we are also able to retrieve it.

In the example we created above, we can retrieve this CSS code by using the ref (the unique id): `kj5tyl64pkhy5ww2tzp`.

Let's have our app read this from the URL based on a query string parameter.

Our URL will look like this.

`http://oursite.com/view.html?id=kj5tyl64pkhy5ww2tzp`

> Note: It would be even cooler if we could have view/id but in our case, Netlify doesn't support that fully.

So what we want to get is the id parameter.

We can use the `JavaScript URLSearchParams` for that.

```js
const currentURL = window.location.search;
const search = new URLSearchParams(currentURL);
const searchId = search.get('id');
```

This code gets the currentURL from the location bar, it then converts that into something called `URLSearchParams` which has its own properties.

These we can get by using the `get` method.

Now our searchId variable contains kj5tyl64pkhy5ww2tzp.

With this, we can query Firebase for the values.

```js
if (searchId.length >= 1) {
  const noDivRef = firebase.database().ref(searchId);
  noDivRef.once('value', function(data) {
    const divData = data.val();
    iFrame.open();
    iFrame.writeln(`
			<style>
			body { ${divData.body} }
			body:before { ${divData.before} }
			body:after { ${divData.after} }
			</style>`);
    iFrame.close();
  });
}
```

We check if the searchId is set and if so we query the database on this ref.
If we get it, we get the actual value by using the `once` function. We use this one because it doesn't change for now.

Then we use the same way to write the stylesheet to this iframe.

This will give us the following result.

![Retrieving Firebase data](https://cdn.hashnode.com/res/hashnode/image/upload/v1609060366821/Qnqw1827L.png)

What we made so far you can download here, download the [no-div css art playground](https://gist.github.com/rebelchris/0d24242c8bb382b97986687e0fee0504).

## Hosting the tool online on Netlify

What we made so far.

- Retrieving values from textarea's
- Write these values to an iframe
- Save the CSS Art into Firebase
- Retrieve the CSS Art from Firebase

Now, all we need to do is host it somewhere.
In my case, I choose to host it on Netlify, because I just love how easy the git deployments are.

Because this is a plain `HTML` script, using only `vanilla JavaScript` we don't need any fancy deployment settings, and can just deploy from a git repo.

You can find more information on [deploying to Netlify](https://daily-dev-tips.com/posts/hosting-a-static-blog-on-netlify/) in this article.

## Future ideas

This first version of [nodivs.com](https://nodivs.com/) is already pretty cool, but I got some ideas in my head to make it even more awesome.

- Having a :root settings menu
- Allowing animations
- Edit your own CSS Art
- CSS Formatter/Linter
- Social Share image based on the art

What would you add to this?

[Visit nodivs.com](https://nodivs.com/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
