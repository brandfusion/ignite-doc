---
title: Section Carousel
description: A guide to implementing the Ignite Section Carousel element

badge:
  text: Ecommerce
  variant: tip
---


Using the Section Carousel component in the Visual Editor, you can create a specialized carousel row to display secondary content. This content can be hidden or revealed by the user. Its key feature is its design for SEO optimization, as it renders content using native HTML5 semantic tags. This helps search engines better index and understand your page's content.

## Main features
- **Rich Header Structure:** Includes fields for an Eyebrow, Heading, Subheading, Content, and Buttons.
- **Flexible Layouts:** Supports generation of column arrangements.
- **Carousel Functionality:** A quick, CSS-only carousel with minimal JavaScript will be used, with the JavaScript footprint to be reduced or removed once CSS-only carousel features are widely supported across browsers. 
- **Media Backdrop:** Supports image or MP4 video files as a background backdrop.
- **Theming Compatibility:** Fully compatible with Swift2 theming.

## Fields 
### Appearance
- **Top Spacing:** Controls the vertical space above the component. Options include: **None, XS, S, M, L, XL, and XXL**.
- **Bottom Spacing:** Controls the vertical space below the component. Options include: **None, XS, S, M, L, XL, and XXL**.
- **Container Width:** Defines the maximum width of the component's content area. Options are **Readability** (optimized for text), **Small**, **Regular**, or **Full** (edge-to-edge).

:::note
Spacing options are based on [Bootstrap 5 Sizing](https://getbootstrap.com/docs/5.3/utilities/spacing/)
:::


### General
- [**Eyebrow:**](/best-practices/content-best-practices#eyebrow) A smaller line of text displayed above the main **Heading** (often used for categorization or pre-heading context).
- [**Heading:**](/best-practices/content-best-practices#heading) The main title of the content block.
- [**Subheading:**](/best-practices/content-best-practices#subheading) A secondary title displayed below the main **Heading**.
- [**Content:**](/best-practices/content-best-practices#content-text) The primary text body of the component.
- [**Increase Legibility:**](/best-practices/ui-ux-best-practices#text-legibility) Toggles a style that constrains the width of the text fields (**Heading**, **Subheading**, **Content**) to an optimal length, improving **reading speed and comfort**.
- **Button 1 / Button 2:** Configuration fields for up to two action buttons, including text and link targets.

### Content Settings
- **Heading Tag:** Controls the semantic HTML tag used for the main heading (options: **H2** through **H6**). This affects SEO and document structure.
- **Heading Size:** Dictates the visual size of the heading text on the page, separate from the semantic tag (options: **H2** through **H6** visual styles).
- **Horizontal Alignment:** Sets the text alignment for the content and heading: **Left**, **Center**, or **Right**.
- **Content Size:** Adjusts the visual font size of the main content block: **Small**, **Default (Root)**, or **Large**.

### Grid
- **Columns:**  Sets the maximum number of columns available in the component's column layout (range: **1 to 6**)
- **Gap:** Controls the spacing (gutter) between carousel elements (**None / Small / Default / Large / X-Large**)

### Carousel Settings
- **Desktop Columns:** Sets the number of columns for the desktop layout, ranging from **1** to **12**.
- **Mobile Columns:** Sets the number of columns for the mobile layout, ranging from **1** to **3**.
- **Icon:** Selects a predefined icon from the `/Files/Icons/Carousel` collection.
- **Upload Icon:** Provides the option to upload a custom icon for use.
- **Icon Size:** Defines the visual size of the icon in pixels. Available sizes are **16px**, **24px**, **32px**, **48px**, **64px**, and **80px**.
- **Overflowing:** Enables the carousel to extend beyond the bounds of its parent container.

### Layout
- **Backdrop:** Toggles the visibility of the component's background **image or video backdrop**

### Backdrop
- **Backdrop Type:** Determines whether the background media spans the entire **Container** or is limited to the inner **Content** area.
- **Backdrop Inner Padding:** Controls the internal spacing (padding) between the backdrop media and the foreground content: **Default, Small, Medium, Large**.
- **Backdrop Media:** Specifies the supported file types for the backdrop, including static images (_.jpg, .png, .svg_) and video (_.mp4_).
- **Backdrop Media Width:** Sets the **target width** for the backdrop media file in pixels (primarily used for responsive scaling) **e.g. 1920**.
- **Backdrop Media Ratio:** Defines the display aspect ratio for the media element to control its shape and how it's cropped. Options include: **21:6 / 21:9 / 16:9 / 3:2 / 4:3 / 1:1 / 4:5 / 2:3 / 9:16**
- **Disable Backdrop Lazy Loading:** Overrides the default lazy loading behavior for the backdrop media. Set to **True** to **force immediate loading** of the image or video.

### Design
- Color Schemes