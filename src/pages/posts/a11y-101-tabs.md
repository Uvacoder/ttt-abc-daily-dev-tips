---
layout: ../../layouts/Post.astro
title: 'A11Y 101: Tabs'
metaTitle: 'A11Y 101: fully acessible tabs'
metaDesc: 'How can we create fully accessible tabs?'
image: /images/02-06-2022.jpg
date: 2022-06-02T03:00:00.000Z
tags:
  - accessibility
---

During my writing streak, I'm sure I covered a tab layout before.

And looking at that from an accessibility point of view, I could see many things to improve on!

The most basic form tabs are simple. A restructure of a table of contents and some headings.

![Table of contents vs. tab layout similarity](https://cdn.hashnode.com/res/hashnode/image/upload/v1653287468979/gQF4xxeWe.jpg)

The image above shows both a table of contents page and a tabbed version.
The tabbed version is more of a visual representation to make content appear slimmer.

## Creating accessible tabs

The big downside with the table of contents setup is that we have to tab through all links to get to the content.

You can try it out on this CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="XWZaqqj" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/XWZaqqj">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

While this method has some downsides, let's see what we need to convert this into fully accessible tabs:

- Show the navigation horizontal
- Show the content as actual tab content
- Tabs navigation should not be controlled by tab but rather by the left and right arrows
- Active tabs should have an aria indication

This seems like a lot to re-create, so let's take it to step by step and do this together.

The significant part is we can already use what we have but remove the `nav` wrapper.

Then we can leverage some native roles to define what each section should act as.

Let's start with the tab navigation.
From our previous implementation, we can already remove the nav part. The next step is to set some aria labels to define each item's role and set the first one to be the default open one.

```html
<ul role="tablist">
  <li role="presentation">
    <a href="#section1" role="tab" id="tab1" aria-selected="true">Section 1</a>
  </li>
  <li role="presentation">
    <a href="#section2" role="tab" id="tab2" tabindex="-1">Section 2</a>
  </li>
  <li role="presentation">
    <a href="#section3" role="tab" id="tab3" tabindex="-1">Section 3</a>
  </li>
</ul>
```

As we can see, the list is turned into a `tablist`, and each link inside gets the tab role. Furthermore, we use `aria-selected` to indicate which element is active. The other ones should not be accessible by tabbing, so we use `tabindex="-1"` for this.

Let's add some CSS to make them look nice next to each other and highlight the active ones.
The cool part is that we can use the roles to define this styling!

```css
[role='tablist'] {
  padding: 0;
  margin: 0;
}
[role='tablist'] li,
[role='tablist'] a {
  display: inline-block;
}
[role='tablist'] a {
  padding: 0.5rem;
  text-decoration: none;
}
[role='tablist'] [aria-selected] {
  border: 2px solid black;
}
```

We should have our tabs sit horizontal and the active one with a black border.

Let's move on to the sections. These are even easier to fix.
We need to give them a role as a tab panel and label them by their identifying tab.
We should also use `aria-hidden` and `hidden` for those that should not be visible.

```html
<section
  id="section1"
  role="tabpanel"
  aria-labelledby="tab1"
  aria-hidden="false"
  tabindex="-1"
>
  ...
</section>
<section
  id="section2"
  role="tabpanel"
  aria-labelledby="tab2"
  aria-hidden="true"
  tabindex="-1"
  hidden
>
  ...
</section>
<section
  id="section3"
  role="tabpanel"
  aria-labelledby="tab3"
  aria-hidden="true"
  tabindex="-1"
  hidden
>
  ...
</section>
```

For the CSS, let's keep it simple and add a border and some padding to the element.

```css
[role='tabpanel'] {
  border: 2px solid;
  padding: 1.5rem;
}
```

Pretty cool. We should have our tab list visible now.

![Tab list rendered in HTML and CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1653285682736/FQVPscSme.png)

But, nothing happens when we try and click on the tabs or tab!
This is because there is no native way of focusing on each tab.

We need some JavaScript to help us out here.

First, we need to retrieve the elements we should interact with.
This is the list, the items inside, and the sections.

```js
const tablist = document.querySelector("ul[role='tablist']");
const tabs = Array.from(tablist.querySelectorAll('a'));
const panels = document.querySelectorAll("section[role='tabpanel']");
```

> Note: We use Array.from to convert the nodeList into an array

Then we want to loop over each of the tabs to add some functionality to each tab.

```js
tabs.forEach(function (tab, i) {
  // Do some magic
});
```

The first thing we want to do is fix the click for mouse users, they should be able to click a tab, and it should set that tab as active.

```js
tabs.forEach(function (tab, i) {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    let currentTab = tablist.querySelector('[aria-selected]');
    if (e.currentTarget !== currentTab) {
      switchTab(currentTab, e.currentTarget);
    }
  });
});
```

In this function, we check if the currently selected tab is not the one we are clicking on. If that's not the case, we switch the tab.

Let's see what this `switchTab` function looks like.

```js
const switchTab = (oldTab, newTab) => {
  newTab.focus();
  newTab.removeAttribute('tabindex');
  newTab.setAttribute('aria-selected', 'true');

  oldTab.removeAttribute('aria-selected');
  oldTab.setAttribute('tabindex', '-1');

  panels[tabs.indexOf(oldTab)].hidden = true;
  panels[tabs.indexOf(newTab)].hidden = false;
};
```

We set focus to the new tab, make it tabbable and set it as selected.
Then we start to remove the opposite from the previous tab.

And we also removed the hidden attribute from the new focusing tab and set it for the old one.

With this in place, a mouse user can use our tabs as intended!

However, for keyboard users, it's still impossible to switch tabs!
We want to add a keydown listener to the tabs to switch when the users use the left and right arrows.

```js
tabs.forEach(function (tab, i) {
  tab.addEventListener('keydown', (e) => {
    const index = tabs.indexOf(e.currentTarget);

    if (e.keyCode === DOWN_ARROW) {
      e.preventDefault();
      panels[i].focus();
    }

    if (e.keyCode === LEFT_ARROW) {
      e.preventDefault();
      if (tabs[index - 1]) {
        switchTab(e.currentTarget, tabs[index - 1]);
      }
    }

    if (e.keyCode === RIGHT_ARROW) {
      e.preventDefault();
      if (tabs[index + 1]) {
        switchTab(e.currentTarget, tabs[index + 1]);
      }
    }
  });
});
```

I've kept this unoptimized, so it would be a bit more readable for newcomers.
It can be completely optimized to use shorthands or a switch case.

However, we can see that on the down click, we focus on the active panel, then on left or right, we switch tab based on the active index minus or plus one.

And that's it. We created accessible tabs!
They are not the full-blown version, as we could even enhance them more for mobile or add more key listeners, but I'll leave that up to you to decide what your tabs need.

You can try them out in this CodePen demo.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poarVYj" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/poarVYj">
  Accessible tabs</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I could not have written this article without these amazing articles as a resource:

- [Andrew Bone - Accessibility first tabs](https://dev.to/link2twenty/accessibility-first-tabs-ken)
- [Heydon Pickering - Tabbed interfaces](https://inclusive-components.design/tabbed-interfaces/)

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
