---
title: Content Hierarchy
# description: 
---

Establishing a content hierarchy we can se global values so we can have better defaults when implementing the Ignite Elements. This can be achieved by selecting a combination of two options [Typography Scale](#typography-scale) and [Section Spacing](#section-spacing)

## Typography Scale

This value is used to select the global defaults of [Section](/elements/section) Heading and Subheading font sizes. Both Headings and Subheadings are selected to be proportional in sizes and make sure there is enough contrast between them so that it creates a good visual hierarchy when combined with [Section Spacing](#section-spacing) option.

:::note[Section]
The section element describes the content context and will always be rendered in the root of the page. It contains intro options(Eyebrow, Heading, Subheading and Content) that will inherit the global options from the **Typograhy Scale**.
:::

| Field | Type | Options | Default Value | 
|-|-|-|-|
|Typography Scale| Radio List | Extra Small (H6) / Small (H5) / Default (H4) / Large (H3) / Extra Large (H2) | Default (H4) |

### Options

| Value | Heading Size | Subheading Size |
|-|-|-|
|Extra Small (H6)| H6 | H6 |
|Small (H5)| H5 | H6 |
|Default (H4)| H4 | H5 |
|Large (H3)| H3 | H5 |
|Extra Large (H2) | H2 | H4 |


## Section Spacing

Like [Typography Scale](#typography-scale), when brading a website, there is a proportional whitespacing needed to be implemented in the [Section](/elements/section) element to enforce the visual hierarchy. Depending on the type of website, there can be more or less whitespace required. This options tries to set some defaults options that can later be changed inside the [Section](/elements/section) element.

| Field | Type | Options | Default Value | 
|-|-|-|-|
|Section Spacing| Radio List | Compact / Default / Large / Extra Large | Default |


```css
:root {
  --ignite-content-spacing-multiplier: 1;
  --ignite-spacing-2: var(--ignite-spacing-default-2);
  --ignite-spacing-3: var(--ignite-spacing-default-3);
  --ignite-spacing-4: var(--ignite-spacing-default-4);
}
```


### Compact

```css
:root {
  --ignite-spacing-compact-2: 1rem;
  --ignite-spacing-compact-3: 1.5rem;
  --ignite-spacing-compact-4: 1.5rem;
}
```

### Default

```css
:root {
  --ignite-spacing-default-2: 1rem;
  --ignite-spacing-default-3: 2rem;
  --ignite-spacing-default-4: 3rem;
}
```

### Large
```css
:root {
  --ignite-spacing-large-2: 2rem;
  --ignite-spacing-large-3: 3rem;
  --ignite-spacing-large-4: 6rem;
}
```

### Extra Large
```css
:root {
  --ignite-spacing-extra-large-2: 2rem;
  --ignite-spacing-extra-large-3: 4.5rem;
  --ignite-spacing-extra-large-4: 9rem;
}
```


