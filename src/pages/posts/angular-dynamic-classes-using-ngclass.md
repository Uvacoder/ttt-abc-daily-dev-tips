---
layout: ../../layouts/Post.astro
title: 'Angular dynamic classes using ngClass'
metaTitle: 'Angular dynamic classes using ngClass'
metaDesc: 'Changes classes dynamically  in Angular'
image: /images/31-03-2021.jpg
date: 2021-03-31T03:00:00.000Z
tags:
  - angular
---

Yesterday, we looked at [dynamic form fields](https://daily-dev-tips.com/posts/angular-dynamically-change-form-validators/), and it made me think about custom classes in Angular.

You might want to add `class1` based on a condition or `class2` if the condition is not met.

How can we achieve such a thing?
Well, that is where the ngClass comes in handy.

## How ngClass works

Before we make things dynamic, let's first look at how it looks without any conditions.

If you want to work along with me, I'm using [this branch as the starter template](https://github.com/rebelchris/angular-starter-demo/tree/feature/tailwind).

Open up the `app.component.html` file.

Add the following.

```html
<div [ngClass]="'m-8 p-8 bg-blue-500'">Hi, I'm the div</div>
```

This will add three classes to this div.
And it will look something like this:

![Default ngClass useage](https://cdn.hashnode.com/res/hashnode/image/upload/v1616855333275/YkSL-YvKi.png)

But now, let's introduce a dynamic class based on a condition.

```html
<div [ngClass]="[color ? 'bg-blue-500' : 'bg-purple-500']">Hi, I'm the div</div>
```

This is a reversed boolean check, so we check if the `color` variable is true, it will be blue, else purple.

Now we need to add this variable to our `app.component.ts` file.

```js
export class AppComponent {
  color: boolean = false;
}
```

If we run this, we get a purple block, which is correct. Let's add a simple click function to toggle the state.

```html
<div (click)="color = !color" [ngClass]="[color ? 'bg-blue-500' : 'bg-purple-500']">
  Hi, I'm the div
</div>
```

This will toggle the color variable to the opposite.

And now we should see the color change if we click it.

![Angular ngClass dynamic condition](https://cdn.hashnode.com/res/hashnode/image/upload/v1616855978677/XWmkJTy-r.gif)

And with that, we've learned how to change classes dynamically in Angular.

You can find today's code on the following [GitHub repo](https://github.com/rebelchris/angular-starter-demo/tree/feature/ng-class).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
