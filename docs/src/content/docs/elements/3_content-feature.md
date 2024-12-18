---
title: Content Feature
---

The Content Feature is the main element to be used for adding content that can be presented with an icon and text (ex: Free Delivery, 24/7 Support, etc.)
- [General](#text-content)
- [Image](#image) / [Icon](#icon)
- [Content Settings](#content-settings)
- [Layout Settings](#layout-settings)
- [Advanced Configuration](#advanced-configuration)
- [Theme And CSS](#theme-and-css)

## General

| Field                                                                   | Options        | Default Value | 
|-------------------------------------------------------------------------|----------------|---------------|
| Eyebrow                                                                 |                | ""            |
| Heading                                                                 |                | ""            |
| Subheading                                                              |                | ""            |
| Content                                                                 |                | ""            |
| [Increase Text Legibility](/content-options#width-text-legibility-size) | True/False     | False         |
| Buttons                                                                 | Button List(1) |               |
| Media Type                                                              | Image / Icon   | Icon          |

## Image

| Field | Options                                          | Default Value | 
|-|--------------------------------------------------|-|
| Media | File  .jpg / .png / .svg                         | |
|Media Width | Integer Number                                   | 1920 |
|Media Ratio | 21:9 / 16:9 / 3:2 / 4:3 / 1:1 / 4:5 / 2:3 / 9:16 | 1:1 |
|Disable Media Lazy Loading | True/False                                       | False |

## Icon

| Field                      | Options              | Default Value | 
|----------------------------|----------------------|-|
| Icon                       | Icon Selector        | |
| Icon Size                  | Integer Number (rem) | 3 | 
| Upload Icon                |                      |  |


## Content Settings

| Field | Options                                          | Default Value | 
|-|--------------------------------------------------|-|
| Heading Tag | H2 / H3 / H4 / H5 / H6                           | H2 |
| Heading Size | Default / H2 / H3 / H4 / H5 / H6                 | Default |
| Content Font Size | Small / Default / Lead                           | Default |
| Horizontal Alignment | Left / Center / Right                            | Left |


## Layout Settings

| Field            | Options                   | Default Value | 
|------------------|---------------------------|---------------|
| Layout           | Media Left / Media Center | Media Left    |
| Align Vertically | True / False              | False         |

:::tip
**Align Vertically** option can only be used when the Layout is set to **Media Left**.
:::

## Advanced Configuration
| Field            | Options                                                                          | Default Value | 
|------------------|----------------------------------------------------------------------------------|---------------|
| Custom Content Spacing           | True / False                                                                     | False         |
| Content Spacing Multiplier | Global / [Inner Content Spacing values](/content-options#inner-content-spacing)  | Default       |


## Theme and CSS

:::note
This section is used in customization. Themes are used to change colors for the section and can be used by content managers and developers while the CSS field is used for extra needed customizations only by the developer.
:::

| Field | Options | Default Value | 
|-|-|-|
|Theme | Theme Selector |
|CSS | CSS Class Definitions | 
