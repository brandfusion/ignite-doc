---
title: Section
---

The Section is the first element to be added to a page and is the first in content hierarchy. It's features are:
- [Intro content](#intro-content)
- [Container And Whitespace](#container-and-whitespace)
- [Child elements](#child-elements)
- [Desktop Layout](#desktop-layout)
- [Mobile layout](#mobile-layout)
- [Backdrop](#backdrop)
- [Theme And CSS](#theme-and-css)

## Intro Content

This intro part is used as the header for the child elements and defines the context of the section.

| Field | Options |  Default Value | 
|-|-|-|
| Eyebrow | | "" |
| Heading | | "" |
| Subheading | | "" |
| Content | | "" |
| [Increase Text Legibility](/content-options#width-text-legibility-size) | True/False | False |
|Buttons|Button List||
|[Typography Scaling](/content-hierarchy#typography-scale)| Global / Extra Small (H6) / Small (H5) / Default (H4) / Large (H3) / Extra Large (H2) | Global  |
|[Content Spacing Multiplier](/content-options#inner-content-spacing)| Global / Default / Large / Extra Large | Global |
| Content Size | Default / Lead / Small | Default |


## Container And Whitespace

This section of the element configures the width of the content and has whitespace options that are inherited gloabally by default. This is done to ensure that when inserting the Section element into the webpage, the whitespace is consistent throughout the page and enforces the visual hierarchy of its child elements.

| Field | Options |  Default Value | 
|-|-|-|
| Width | Full Width / Default Container / Narrow Container| Default Container |
| [Section Spacing](/content-hierarchy#section-spacing) | Global / Compact / Default / Large / Extra Large| Global |
| Remove Top Spacing | True/False | False |
| Remove Bottom Spacing | True/False | False |


## Child elements

This section of the element allows for specifying how the child elements are displayed by default and how many there are. You can add columns and rows and the Section will calculate and display the correct number of child elements.

| Field | Options |  Default Value | 
|-|-|-|
|Columns|Range from 1 to 6| 1 |
|Rows| Range from 1 to 6|1|
|[Gap](/design-system/tokens#gap)| None / Small / Default / Large / Extra Large | Default |

:::tip
If the **Advanced Grid** option is used, the **Advanced Grid Layout** field will decide how the elements are displayed.
:::

## Desktop Layout

By default, the element renders only 1 child. If there are more than 1 children elements, they will be displayed in a grid layout of defined columns and rows (ex: 2 columns and 3 rows renders 6 children).

:::note
**Advanced Grid Layout** field will be displayed only if **Advanced Grid** is set to True
:::

| Field | Options |  Default Value | 
|-|-|-|
|Advanced Grid | True/False | False
|Advanced Grid Layout | Select of Layouts | None

### Advanced Grid Layouts 
 - 2 columns: 1/3 + 2/3 
 - 2 columns: 2/3 + 1/3
 - 3 columns: special

:::tip[Advanced Grid Layout]
When adding a new **Advanced Grid Layout**, it is important to make it work for both Desktop and Mobile devices. To add more layouts you need to edit the Item Type and add new layout values that will later on be used in the template.
:::

## Mobile Layout
This options establishes the way the content will be displayed for small viewports. Based on the Mobile Layout and Mobile Column values, the content will be displayed either stacked or as a carousel with 1 or more columns.


| Field | Options |  Default Value | 
|-|-|-|
|Mobile Layout | Stacked / Carousel | Stacked
|Mobile Columns | 1 / 2 / 3 | 1

## Backdrop

The Section element allows for a backdrop image or movie to be displayed, either on the container or wrapped around the content.

| Field | Options | Default Value | 
|-|-|-|
|Backdrop Type | Container / Content | Container
|Backdrop Inner Padding | Default / Small / Medium / Large | Default
|Backdrop Media | File  .jpg / .png / .mp4 | |
|Backdrop Media Width | Integer Number | 1920
|Backdrop Media Ratio | 21:9 / 16:9 / 3:2 / 4:3 / 1:1 / 4:5 / 2:3 / 9:16 | 1:1
|Disable Backdrop Lazy Loading | True/False | False

:::tip[How to implement Image/Video]
Check out the [recommended implementation for Core Web Vitals](/optimization/core-web-vitals#image-and-video) for more information.
:::

## Theme And CSS

:::note
This section is used in customization. Themes are used to change colors for the section and can be used by content managers and developers while the CSS field is used for extra needed customizations only by the developer.
:::

| Field | Options | Default Value | 
|-|-|-|
|Theme | Theme Selector | 
|CSS | CSS Class Definitions | 
