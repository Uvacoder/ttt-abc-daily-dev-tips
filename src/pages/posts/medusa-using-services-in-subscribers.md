---
layout: ../../layouts/Post.astro
title: 'Medusa using services in subscribers'
metaTitle: 'Medusa using services in subscribers'
metaDesc: 'Using other services inside medusa subscribers'
ogImage: /images/26-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/0e290aa0-7f7a-4290-370b-290d54927e00
date: 2022-09-26T03:00:00.000Z
tags:
  - webshop
---
We first looked at [custom subscribers for medusa](https://daily-dev-tips.com/posts/creating-a-subscriber-in-medusa/).
And before that, we created our first [custom service](https://daily-dev-tips.com/posts/using-existing-services-in-a-custom-medusa-service/).

Let's look at how we can combine the two for maximum flexibility.

> Note: If you haven't read the above-linked articles, please read those first.

## Adding a custom service to the subscriber

The process here will be very similar to injecting services, but how we do it is slightly different.

Open up your subscriber file and start by declaring the service you want to inject.

```js
class ProductNotifierSubscriber {
    translateService;

    constructor({ translateService, eventBusService }) {
        this.translateService = translateService;
        eventBusService.subscribe("product.created", this.handleProduct);
    }
}
```

As you can see, we declare the `translateService` our custom service. Then inside the constructor, we assign it to the variable, gaining access to it in this file.

To use it, we can do the following:

```js
handleProduct = async (data) => {
    this.translateService.translateProduct(data.id).then((title) => {
        console.log("New product title: " + title)
    })
};
```

And that's precisely how we can attach our custom service to fire off inside the subscriber.

![Product notifier in medusa](https://cdn.hashnode.com/res/hashnode/image/upload/v1663307768749/T38aua4tQ.png)

There is no limit to how many services you can inject, but be aware they might bloat your subscribers.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)