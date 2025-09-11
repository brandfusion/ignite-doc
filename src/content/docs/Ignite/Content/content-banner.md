---
title: Content Banner
description: A guide to implementing the Ignite Content Banner element

badge:
  text: Content
  variant: tip
--- 
    
The Ignite Content Banner component is designed to display a prominent banner area on your page. It generates SEO-friendly content by using native HTML5 semantic tags, which helps search engines better index and understand your page's content. Use it to add eye-catching promotional content, calls to action, or important announcements to your website.


## Fields
### General
- [**Eyebrow:**](/best-practices/content-best-practices#eyebrow) A smaller line of text displayed above the main **Heading** (often used for categorization or pre-heading context).
- [**Heading:**](/best-practices/content-best-practices#heading) The main title of the content block.
- [**Subheading:**](/best-practices/content-best-practices#subheading) A secondary title displayed below the main **Heading**.
- [**Content:**](/best-practices/content-best-practices#content-text) The primary text body of the component.
- [**Increase Legibility:**](/best-practices/ui-ux-best-practices#text-legibility) Toggles a style that constrains the width of the text fields (**Heading**, **Subheading**, **Content**) to an optimal length, improving **reading speed and comfort**.
- **Button 1 / Button 2:** Configuration fields for up to two action buttons, including text and link targets.
- **Stretch Link:** When enabled, makes the entire component clickable (True/False).

### Content Settings
- **Heading Tag:** Sets the semantic HTML tag for the heading, from H2 to H6. This is important for SEO.
- **Heading Size:** Controls the visual size of the heading. Options range from H1 to H6 and include larger, custom styles like Hero1, Hero2, and Hero3.
- **Horizontal Alignment:** Aligns the content to the Left, Center, or Right.
- **Content Size:** Adjusts the font size to Small, Default (Root), or Large.
- **Layout:** Defines the position of the content relative to the banner. Options include Top-Left, Center, Bottom-Right, and others.
- **Add Backdrop:** A boolean toggle to enable or disable a content backdrop (True/False).

### Content Backdrop (Visible when Add Backdrop is True)
  - **Content Backdrop:** Sets the color of the backdrop. The default is White.
  - **Content Padding:** Controls the spacing around the content within the backdrop, with options like None, Small, Medium, or Large.

### Link (Visible when Stretch Link is True)
  - **Link:** The URL for the stretched link.

### Media
- **Media:** Specifies the supported file types for your media: PNG, JPG, SVG, and MP4.
- **Media Width:** The recommended target width for your media file, typically 1920px.
- **Media Aspect Ratio:** Controls the display ratio of the media (e.g., 16:9, 1:1, 4:3, etc.).
- **Disable Media Lazy Loading:** A boolean toggle to force the media to load immediately instead of waiting (True/False).

### Advanced Configuration
- **Add Container:** A boolean toggle (True/False) to add a full-width container to the component. This option is only usable when the parent Section or Row is also set to Full Width.

### Design
- **Color Scheme:** Applies a predefined color palette, compatible with Swift2 features.