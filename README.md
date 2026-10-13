# Shopgate Connect - Extension Out of stock Badges

Shoppers should see at a glance when a product can't be ordered. This extension marks
out-of-stock products directly on their product image: the image is grayed out and a badge
with a configurable text (by default "SOLD OUT") is shown on top of it.

The badge appears on the product detail page, in category and search result lists, in product
sliders, in the favorites list and in the live shopping widget.

A product counts as out of stock when its stock quantity is tracked and has dropped to zero or
below. On the product detail page, the stock of the selected variant is used. Parent products
with variants usually don't track stock themselves, so they show no badge in lists.

## Configuration

### textColor
Text color of the badge (any CSS color value). Defaults to `#fff`.

### bgColor
Background color of the badge (any CSS color value). Defaults to `#FF00AF`.

### badgeText
Text shown inside the badge. It is displayed in capital letters, and its size adapts to the size
of the product image. Defaults to `Sold out`.

### hideBadge
When enabled, no badge is shown on out-of-stock products — the product image is only grayed
out. Defaults to `false`.

### Example

```json
{
  "textColor": "#fff",
  "bgColor": "#FF00AF",
  "badgeText": "Sold out",
  "hideBadge": false
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
