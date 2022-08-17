---
layout: ../../layouts/Post.astro
title: 'Using the native payment request JavaScript API'
metaTitle: 'Using the native payment request JavaScript API'
metaDesc: 'What is the native payment request API and how can we use it in JavaScript'
ogImage: /images/09-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/858a2bf1-54d3-4a89-1701-ea8fba90ee00
date: 2022-08-09T03:00:00.000Z
tags:
  - javascript
---

> [This article is originally posted on the OpenReplay blog](https://blog.openreplay.com/using-the-native-payment-request-javascript-api)

The other day I was browsing some articles. In one of these articles, they described the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).
At that point, I'd never heard of it before, but it sparked my interest.

Whenever we build websites that allow people to pay for something, we enter a new level of difficulty.

(Luckily, Stripe and others have made this a little bit easier)

But how cool would it be if it was simply an API in the browser? 🤔

Our prayers seem to have been heard as we now get access to the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).

In the video below, you see a complete experience for the end user.

<!-- ![Payment API demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1657973415942/bi6TIpu01.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1657973474/payment_tv3izt.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1657973473/payment_rogctj.mp4" type="video/mp4" />
</video>

## What is the Payment Request API

First, it's good to note that the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API) is not a new way of paying for stuff. It's instead an optimized flow for both the consumer and the merchant to have a seamless native experience when paying online.

The experience with the payment request flow is that the consumer no longer has to fill out multiple forms containing all kinds of details.

They instead leverage what is already set up in their browser.
And this makes total sense, right.

Why would I need to fill out my shipping address on every website, it rarely changes, and the same goes for personal details.

So why not leverage this in the browser!

## Setting up a payment

Let's see how we can use this Payment Request API in our application.

For this demo, I'll simulate a donation button where people can donate one dollar because they love the content.

A second note is that you can leverage [Bobbucks](https://bobbucks.dev/) when testing this out. This is an app that helps to process demo payments.

Let's create our sample button and a text box with some information for the user.

```html
<button id="checkout">Donate 1$</button>

<div id="response">You won't be actually charged, give it a test drive 🤘</div>
```

We must attach a click handler to the button to start the payment process.

```js
button.addEventListener('click', () => {
  // Do something
});
```

The next step is to start setting up the [payment request](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest). In its most basic form, it looks like this:

```js
const request = new PaymentRequest(paymentMethods, paymentDetails);
```

The payment methods can contain a list of supported payment methods. Each item in the object consists of two parameters.

- `supportedMethods`: URL Based string pointing to the payment endpoint
  - `data`: Optional information provided by the payment provider

If we now take Bobbucks (our demo payment provider) as an example, we can initiate that with the following context.

```js
const paymentMethods = [
  {
    supportedMethods: 'https://bobbucks.dev/pay',
  },
];
```

Bobbucks doesn't take any optional data.

The second part of the request is the data around what we are paying for.

Generally, this would most likely come from your shopping cart, but since we use a static 1$ donation, we can provide it hard-coded.

```js
const paymentDetails = {
  id: 'demo-123',
  displayItems: [
    {
      label: 'Support for this blog',
      amount: { currency: 'USD', value: '1.00' },
    },
  ],
  total: {
    label: 'Total',
    amount: { currency: 'USD', value: '1.00' },
  },
};
```

Now that we have all the information let's put it into action and initiate the payment request when the user clicks the button.

```js
button.addEventListener('click', () => {
  request.show().then((paymentResponse) => {
    paymentResponse.complete('success').then(() => {
      response.innerText = 'Thanks for your donation 💖';
    });
  });
});
```

Now click the button, and you should see the magic happen 🪄.

## Handling the payment

It's good to note that although this API handles all the payment magic, you still need to handle the payment on your side.

In this demo, we don't go into detail about that, but it's up to you to integrate some server-side validation of whether the payment was successful and what data you need to process based on the response.

To showcase a response, it's available as the return object from the show method.

```js
button.addEventListener('click', () => {
  request.show().then((paymentResponse) => {
    console.log(paymentResponse);
    // Handle payment before showing the success!
    paymentResponse.complete('success').then(() => {
      response.innerText = 'Thanks for your donation 💖';
    });
  });
});
```

This [response object](https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse) will look something like this.

```json
details: {bobbucks_token_id: 'ABCDEADBEEF', message: 'Thanks for using BobBucks!'}
methodName: "https://bobbucks.dev/pay"
onpayerdetailchange: null
payerEmail: null
payerName: null
payerPhone: null
requestId: "demo-123"
shippingAddress: null
shippingOption: null
```

## Multiple payment methods

So far, we have played around with Bobbucks since it's a super easy way to test this API.

But what happens if we enter a real-world scenario, we often want to give the user multiple payment provider options.

Let's take Google Pay, for instance.
Luckily for us, Google Pay also has a demo mode that we can use to test it out.

As mentioned in the beginning, the payment methods can accept multiple providers.

Let's add Google Pay to it.

```js
const paymentMethods = [
  {
    supportedMethods: 'https://bobbucks.dev/pay',
  },
  {
    supportedMethods: 'https://google.com/pay',
  },
];
```

Remember I told you about the different data objects we can provide?
Well, Google Pay is one of those providing us with this object.

You can find the entire object on the [Google documentation website](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial).

But in general, it would look something like this.

```js
const paymentMethods = [
  {
    supportedMethods: 'https://bobbucks.dev/pay',
  },
  {
    supportedMethods: 'https://google.com/pay',
    data: {
      environment: 'TEST',
      apiVersion: 2,
      apiVersionMinor: 0,
      merchantInfo: {
        // merchantId: '12345678901234567890',
        merchantName: 'Example Merchant',
      },
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: [
              'AMEX',
              'DISCOVER',
              'INTERAC',
              'JCB',
              'MASTERCARD',
              'MIR',
              'VISA',
            ],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
    },
  },
];
```

Quite a chunk of data, I won't be going into details, but it tells Google Pay which methods you accept and how you want the payment to be handled.

Now, if we re-open our payment, we should get an intermediate step where we get the option to choose which payment provider we want to use.

<!-- ![Multiple payment methods](https://cdn.hashnode.com/res/hashnode/image/upload/v1657974077216/xKX6n61q6.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1657974104/payment-method_diflqy.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1657974104/payment-method_jm58la.mp4" type="video/mp4" />
</video>

## Require payment options

So far, we only require people to pay. We don't care about any details.

But what happens if we have a product that needs shipping?
Or do we want to know the user's email address so we can send them our e-book?

Well, that's where we can use the payment options for.

This is where we can set the third option on the payment request constructor.

```js
const paymentOptions = {
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestShipping: true,
  shippingType: 'shipping',
};

const request = new PaymentRequest(
  paymentMethods,
  paymentDetails,
  paymentOptions
);
```

Now when we click the payment button, we see some extra options we have to fill out before we can continue.

![Payment extra information](https://cdn.hashnode.com/res/hashnode/image/upload/v1657974387038/EyXvVD5H7.png)

## Demo

I'm sure this is the part most of you were waiting for, a demo to try it out yourself.

Feel free to test this CodePen.
(You won't be charged, and you can use Bobbucks to simulate a payment)

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="poLRbgr" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/poLRbgr">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
