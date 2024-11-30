---
title: Extra Content Options
---

Ignite contains two extra options for content that can further help in branding a website.

## Width Text Legibility Size

For better legibility, it is recommended for a content paragraph to not be wider than 65 or 70 character length. This options is not active by default but can be activated in Ignite elements.

| Field | Default Value |
|-|-|
|Width Text Legibility Size| 65ch |

## Inner Content Spacing

This option has the role of incrementing the spacing between Ignite content elements (Eyebrow, Heading, Subheading, Content). By default, the spacing in Ignite elements is `0.5rem` which equals to `8px`. This value is incremented by a multiplicator that is defined as Inner Content Spacing.

| Field | Options | Default Value |
|-|-|-|
|Inner Content Spacing| 1/2/3/4 | 1 |

```css
:root {
  --ignite-spacing-base: 0.5rem;
  --ignite-spacing-1: calc(var(--ignite-content-spacing-multiplier)* var(--ignite-spacing-base));
}
```