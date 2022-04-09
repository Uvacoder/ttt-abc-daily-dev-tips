---
layout: ../../layouts/Post.astro
title: 'Testing library asFragment tests'
metaTitle: 'Testing library asFragment tests'
metaDesc: 'Using asFragment in Testing Library to find initial renders'
image: /images/18-04-2022.jpg
date: 2022-04-18T03:00:00.000Z
tags:
  - testing
---

Sometimes we might have tests that change over time or specific user actions.

We might use a timeout to change some text or even wait for a click action to show the user something different.

Let's take the following example as our use-case:

```js
function App() {
  const [text, setText] = useState('Wait a second');
  useEffect(() => {
    setTimeout(() => {
      setText('All done');
    }, 200);
  }, []);
  return text;
}
```

This app will show `Wait a second` until 200ms are passed and then show `All done`.

So how can we test if this is working?

## Using testing library asFragment tests

This could be an excellent option for the `asFragment` API.

We can leverage the `asFragment` API to take a Document Fragment of the component in the first render.

It would look something like this:

```js
const { asFragment } = render(<App />);
const firstRender = asFragment();
```

We then want to wait for the text to change, so let's query for the specific text.

```js
expect(await screen.findByText('All done')).toBeInTheDocument();
```

The test will wait for the text to become visible.
So how can we now make sure the first render has a different text?

```js
expect(firstRender).toMatchSnapshot();
```

It will now write a snapshot that has:

```html
<DocumentFragment> Wait a second </DocumentFragment>
```

Which is perfect.
You can also include an external plugin to find the differences between the two snapshots: [snapshot-diff](https://github.com/jest-community/snapshot-diff).

## Conclusion

There are cases where it's super handy to have a fragment of the initial render to find changes from the initial render.

I'd love to hear your use-cases for the asFragment API as well.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
