---
layout: ../../layouts/Post.astro
title: 'HTML meter tag'
metaTitle: 'HTML meter tag, show percentages in HTML'
metaDesc: 'Showing percentages directly in HTML with the meter element'
image: /images/15-03-2021.jpg
date: 2021-03-15T03:00:00.000Z
tags:
  - html
---

Ever needs to showcase a percentage visually? HTML provides us with a super cool meter tag that can be used for this exact purpose.

It looks like this:

![HTML Meter tag](https://cdn.hashnode.com/res/hashnode/image/upload/v1615360258702/0KJ8XXZUI.png)

## HTML Meter attributes

The meter tag in general, works by just typing it as `<meter>`. However, it comes with some attributes we can leverage.

- `high`: What is considered a high value
- `low`: What is considered a low value
- `min`: Starting point of the meter
- `max`: Ending point of the meter
- `value`: The current value

Considering this we can create a gauge that is on the `low` side:

```html
<meter value="1" min="0" max="10" high="8" low="2"></meter>
```

![HTML Low meter](https://cdn.hashnode.com/res/hashnode/image/upload/v1615359867768/y54LHiTe5.png)

Or we could create a reading that is considered `high`.

```html
<meter value="9" min="0" max="10" high="8" low="2"></meter>
```

![HTML High meter](https://cdn.hashnode.com/res/hashnode/image/upload/v1615359951437/LxDZFzh0_k.png)

Any other value could render in green.

```html
<meter value="5" min="0" max="10" high="8" low="2"></meter>
```

![HTML Meter tag](https://cdn.hashnode.com/res/hashnode/image/upload/v1615360072912/o9NqT19_f.png)

You can also have a play with the meters on Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="NWbEMRR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML meter tag">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWbEMRR">
  HTML meter tag</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Browser support

The meter element is widely adopted. Just IE has some issues rendering it. You can place a fallback inside the meter element in the form of text or an image.

![HTML Meter element browser support](https://caniuse.bitsofco.de/image/meter.png)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
