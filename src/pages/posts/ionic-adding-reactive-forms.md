---
layout: ../../layouts/Post.astro
title: 'Ionic adding reactive forms'
metaTitle: 'Ionic adding reactive forms'
metaDesc: 'Creating and using reactive forms in Ionic Angular'
image: /images/11-03-2021.jpg
date: 2021-03-11T03:00:00.000Z
tags:
  - ionic
---

We already created [Reactive forms in Angular](https://daily-dev-tips.com/posts/reactive-forms-in-angular-the-way-to-go/) before. Today we'll be looking at how it works in Ionic.

Since we'll be using Ionic/Angular combination, it's a very similar implementation.

Reactive forms are a great way to quickly build forms, validate them, and even dynamically update them!

Today the main focus will be to make a basic form with some validation.

It will look like this:

![Reactive forms in Ionic](https://cdn.hashnode.com/res/hashnode/image/upload/v1615014863538/bzLPr7C3T.gif)

## Enabling reactive forms in Ionic

The first step is to enable reactive forms, we can do this high-levelly, or in the component we need it.

For me, I only use it in one component, so I'll be implementing it for a single component.

> I'm using this [Ionic starter GitHub project](https://github.com/rebelchris/ionic-app) as the basis.

We'll be adding a form to `tab1`. Let's first open up the `tab1.module.ts` file where we will register ReactiveForms.

```js
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Other imports

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
```

Here you can see the `ReactiveFormsModule` imported under the `FormsModule`.

This will allow us to use it in this component.

## Creating the Ionic form group

The next step is to create the form group in our `ts` file to use as a form.

Open up `tab1.page.ts` and import the following elements.

```js
import {FormControl, FormGroup, Validators} from '@angular/forms';
```

Now we can define our form and the fields it should have.

```js
contactForm = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required)
});
```

This created a `contactForm` object, which will hold a Reactive form.
We added a new group to the form and included two basic fields that are both required using the `Validators`.

Let's also add a submit function, that for now, will log whatever the user inputted.

```js
submitForm() {
	console.log(this.contactForm.value);
}
```

## Rendering the form fields in Ionic

Of course, this won't do much yet, so let's add the form fields to our HTML file in `tab1.page.html`

```html
<ion-content [fullscreen]="true">
  <form [formGroup]="contactForm" (ngSubmit)="submitForm()" novalidate>
    <ion-item>
      <ion-label>Firstname</ion-label>
      <ion-input formControlName="firstName"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Lastname</ion-label>
      <ion-input formControlName="lastName"></ion-input>
    </ion-item>
    <ion-row>
      <ion-col>
        <ion-button type="submit" expand="block" [disabled]="!contactForm.valid"
          >Submit</ion-button
        >
      </ion-col>
    </ion-row>
  </form>
</ion-content>
```

As you can see, we add a normal form element but include the `formGroup`, which links this form to our `contactForm` object.
We also include the submit action here.

Then we add the items and add a `formControlName` to them. This needs to match up to the names you include in the `ts` file.

The last element is a submit button, which we'll disable if the form is not valid.

Now when the user fills out the form, we should see this in the console.

![Retrieving reactive form data in Ionic](https://cdn.hashnode.com/res/hashnode/image/upload/v1615014576233/VclyhmBCd.png)

You can find today's code on [GitHub](https://github.com/rebelchris/ionic-app/tree/reactive-form) as well.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
