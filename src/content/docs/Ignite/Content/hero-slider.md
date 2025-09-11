---
title: Hero Slider
description: A guide to implementing the Ignite Hero Slider element

badge:
  text: Content
  variant: tip
---

The Hero Slider is a specialized version of the Section component, built specifically to display prominent, top-of-page content. It leverages native HTML5 semantic tags to ensure content is SEO-friendly, improving its indexing and description.

## Main Features
- Column Layouts: Offers flexible column arrangements for content within each slide.
- Fast, Native Slider: Uses a CSS-only slider for mobile and a minimal JavaScript footprint, ensuring quick performance.
- Theming: Fully compatible with Swift2 theming for seamless integration.

## Use Cases
- Use this component to contain other Ignite content items (such as Content Paragraphs or Content Banners) when they need to be presented as a swipeable or scrollable slider.

## Fields 
### Appearance
- **Top Spacing:** Controls the vertical space above the component. Options include: **None, XS, S, M, L, XL, and XXL**.
- **Bottom Spacing:** Controls the vertical space below the component. Options include: **None, XS, S, M, L, XL, and XXL**.
- **Container Width:** Defines the maximum width of the component's content area. Options are **Readability** (optimized for text), **Small**, **Regular**, or **Full** (edge-to-edge).

:::note
Spacing options are based on [Bootstrap 5 Sizing](https://getbootstrap.com/docs/5.3/utilities/spacing/)
:::

### General
- **Title:** The title for the Hero Slider.
- **Slides:** Sets the number of slides, ranging from 2 to 6.
- **Slider Layout:** Defines the orientation of the slides (Horizontal). Other options for Vertical and Stacked presentations are currently a work in progress.

### Slider Settings
- **Icon:** Select a pre-defined icon from the /Files/Icons/Carousel collection.
- **Upload Icon:** Upload a custom icon to use.
- **Icon Size:** Defines the visual size of the icon in pixels, with options from 16px up to 80px.

### Design
- **Color Scheme:** Applies a predefined color scheme, compatible with Swift2 features.