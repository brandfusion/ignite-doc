---
title: Content Paragraph
---

The Content Paragraph is the main element to be used for adding text content. It's features are
- [Text Content](#text-content)
- [Media](#media)
- [Layout](#layout)
- [Content Settings](#content-settings)
- [Gap](#gap)
- [Theme And CSS](#theme-and-css)

## Text Content

| Field | Options |  Default Value | 
|-|-|-|
| Eyebrow | | "" |
| Heading | | "" |
| Subheading | | "" |
| Content | | "" |
| [Increase Text Legibility](/content-options#width-text-legibility-size) | True/False | False |
| Buttons | Button List ||

## Media

| Field | Options | Default Value | 
|-|-|-|
| Add Media | True/False | False |
| Media | File  .jpg / .png / .mp4 | |
|Media Width | Integer Number | 1920
|Media Ratio | 21:9 / 16:9 / 3:2 / 4:3 / 1:1 / 4:5 / 2:3 / 9:16 | 1:1
|Disable Media Lazy Loading | True/False | False

## Layout

:::tip
Layout options are available only if __Add Media__ is set to True
:::

| Field | Options | Default Value | 
|-|-|-|
|Layout|Media Bottom / Media Top / Media Left 1/3 / Media Left 1/2 / Media Left 2/3 / Media Right 1/3 / Media Right 1/2 / Media Right 2/3| Media Top |
| Wrap Content | True/False | False |
| Content Spacing | 0 / 1 / 2 / 3 / 4 | 0 |

:::tip[Wrapped content]
__Content Spacing__ is adding spacing around the content if __Wrap Content__ is set to True and when there is a __Media__ set to Left or Right. This is used to add spacing around the content when the __Gap__ is not adding enough whitespace.
:::


## Content Settings

| Field | Options | Default Value | 
|-|-|-|
| Heading Tag | H2 / H3 / H4 / H5 / H6 | H2 |
| Heading Size | Default / H2 / H3 / H4 / H5 / H6 | Default |
| Content Alignment | Left / Center / Right | Left |
| Content Font Size | Default / Lead / Small | Default |
| Paragraph Spacing | Global / Compact / Default / Large / Extra Large | Default |

:::tip[Paragraph Spacing]
The spacing for the Content Paragraph item is set to [Default](/design-system/tokens#section-spacing-options) and can be changed to [Global](/content-hierarchy#section-spacing) or other sizing options.
:::

## Gap

| Field | Options | Default Value | 
|-|-|-|
| Gap | None / Small / Default / Large / Extra Large | Default |

## Theme and CSS

:::note
This section is used in customization. Themes are used to change colors for the section and can be used by content managers and developers while the CSS field is used for extra needed customizations only by the developer.
:::

| Field | Options | Default Value | 
|-|-|-|
|Theme | Theme Selector | 
|CSS | CSS Class Definitions | 
