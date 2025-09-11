---
title: Content Paragraph
description: A guide to implementing the Ignite Content Paragraph element

badge:
  text: Content
  variant: tip
---

The Content Paragraph component is designed to display body text on your page. It generates SEO-friendly content by using native HTML5 semantic tags, which helps search engines better index and understand your page's content. Use it to add long-form text, descriptions, and other textual content to your website.

## Fields
### General
- [**Eyebrow:**](/best-practices/content-best-practices#eyebrow) A smaller line of text displayed above the main **Heading** (often used for categorization or pre-heading context).
- [**Heading:**](/best-practices/content-best-practices#heading) The main title of the content block.
- [**Subheading:**](/best-practices/content-best-practices#subheading) A secondary title displayed below the main **Heading**.
- [**Content:**](/best-practices/content-best-practices#content-text) The primary text body of the component.
- [**Increase Legibility:**](/best-practices/ui-ux-best-practices#text-legibility) Toggles a style that constrains the width of the text fields (**Heading**, **Subheading**, **Content**) to an optimal length, improving **reading speed and comfort**.
- **Button 1 & Button 2**: Configuration fields for up to two call-to-action buttons.
- **Add Media**: A boolean toggle to include a media element (True/False).

### Content Settings

- **Heading Tag**: Sets the semantic HTML tag for the heading, ranging from H2 to H6.
- **Heading Size**: Controls the visual size of the heading text, using H2 to H6 styles.
- **Horizontal Alignment**: Aligns the text to the **Left**, **Center**, or **Right**.
- **Content Size**: Adjusts the font size of the content block to **Small**, **Default** (Root), or **Large**.
- **Gap**: Sets the spacing (gutter) between content elements. Options include **None**, **Small**, **Default**, **Large**, and **X-Large**. This is only for landscape layouts.

### Media
- **Media**: Specifies the supported media file types: **JPG**, **PNG**, **SVG**, and **MP4**.
- **Media Width**: Sets the recommended target width for the media in pixels (e.g., **1920**).
- **Media Aspect Ratio**: Defines the display aspect ratio for the media (e.g., **16:9**, **1:1**, **4:3**, etc.).
- **Disable Media Lazy Loading**: A boolean toggle. Set to **True** to force the media to load immediately instead of waiting.

### Advanced Configuration
- **Wrap Content**: A boolean toggle (**True/False**) to wrap content around the media element.
- **Wrap Spacing**: Sets the padding around the wrapped content, using values from **1** to **4**.

### Design
- **Layout**: Controls the arrangement of the media relative to the content. Options include **Image-Top**, **Image-Left-Half**, **Image-Right-OneThird**, and more.
- **Color Scheme**: Applies a predefined color palette, compatible with Swift2 features.