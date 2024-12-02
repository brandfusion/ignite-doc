---
title: Content Hierarchy
# description: 
---

Establishing a content hierarchy we can se global values so we can have better defaults when implementing the Ignite Elements. This can be achieved by selecting a combination of two options [Typography Scale](#typography-scale) and [Section Spacing](#section-spacing)

## Typography Scale

This value is used to select the global defaults of [Section](/elements/section) Heading and Subheading font sizes. Both Headings and Subheadings are selected to be proportional in sizes and make sure there is enough contrast between them so that it creates a good visual hierarchy when combined with [Section Spacing](#section-spacing) option.

:::tip[Typography Scale Design Tokens]
These options will generate [Heading and Subheadings Tokens](/design-system/tokens#typography-scale) that will be used in all Ignite Elements.
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

:::tip[Section Spacing Design Tokens]
These options will generate [Section Spacing Tokens](/design-system/tokens#section-spacing)
:::

| Field | Type | Options | Default Value | 
|-|-|-|-|
|Section Spacing| Radio List | [Compact](/design-system/tokens/#section-spacing-options) / [Default](/design-system/tokens/#section-spacing-options) / [Large](/design-system/tokens/#section-spacing-options) / [Extra Large](/design-system/tokens/#section-spacing-options) | [Default](/design-system/tokens/#section-spacing-options) |




