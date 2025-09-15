---
title: Content Feature
description: A guide to implementing the Ignite Content Feature element

badge:
  text: Content
  variant: tip
--- 

Use the Ignite Content Feature element to highlight benefits and describe key features.

## Fields
### General
- **Heading:** The main title of the content block.
- **Content:** The primary text body.
- **Increase Legibility:** A toggle that constrains the text width for improved readability.

### Content Settings
- **Heading Tag:** Sets the semantic HTML tag for the heading, from **H2** to **H6**. This is important for SEO and document structure.
- **Heading Size:** Controls the visual size of the heading using styles from **H2** to **H6**.
- **Content Size:** Adjusts the font size of the main content to Small, Default (Root), or Large.

### Image
- **Media:** Specifies that the only supported media format is SVG.
- **Media Width:** The recommended target width for the SVG image, which is **800px**.
- **Media Aspect Ratio:** Defines the display ratio for the image, such as **1:1**, **4:3**, or **16:9**.
- **Disable Media Lazy Loading:** A boolean toggle. Set to **True** to force the image to load immediately instead of waiting until it's in the viewport.

### Design
- **Layout:** Controls the arrangement of the content and image. You can choose from options like **OneColumn**, **TwoColumnsTopAligned**, or **TwoColumnsVerticallyAligned**.
- **Color Scheme:** Applies a predefined color palette that is compatible with Swift2 features.