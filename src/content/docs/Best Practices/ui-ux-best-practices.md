---
title: UI/UX Best Practices
#description: A guide to implementing the Section element
---

# Images

Image optimization requirements:
- Use an optimized output (**webP**)
- Always have **width** and **height** attributes on the `<img>` tag  ```
- Always have an **aspect-ratio** property (this won't be necessary in future but is currently needed in 2025)
- allow the content manager to disable lazy-loading for above the fold image rendering

 **Above the fold example with `fetchpriority="high"`**

```html
<img fetchpriority="high" src="image_1280x800.webp" srcset="image_360x225.webp 360w,image_768x480.webp 768w,image_1024x640.webp 1024w,image_1280x800.webp 1280w" sizes="100vw" width="1280" height="800" alt="Image description" style="aspect-ratio: 1280 / 800;">
```

**Under the fold with attribute `loading="lazy"`**

```html
<img loading="lazy" src="image_1280x800.webp" srcset="image_360x225.webp 360w,image_768x480.webp 768w,image_1024x640.webp 1024w,image_1280x800.webp 1280w" sizes="100vw" width="1280" height="800" alt="Image description" style="aspect-ratio: 1280 / 800;">
```

# Fonts

Loading fonts from CDNs
**[Google Fonts](https://fonts.google.com/)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap" />
.
.
<title>Website</title>
.
.
<link fetchpriority="high" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

**[Typekit](https://fonts.adobe.com/home)** 
```html
<link rel="dns-prefetch" href="https://use.typekit.net">
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
.
.
<title>Website</title>
.
.
<link rel="stylesheet" href="https://use.typekit.net/typekitid.css">
```


# Text Legibility

Creating a great reading experience on a website goes far beyond just choosing a good font. The length of a line of text, known as the "measure" in typography, is a critical factor in web legibility. If a line is too long, the eye can get tired and lose its place when moving from the end of one line to the beginning of the next. If it's too short, the frequent eye movement back and forth disrupts the reading rhythm.

Here are the best practices for text legibility length in web development:

### 1. The Optimal Character Count Rule

The most widely accepted rule of thumb is to aim for a line length of **45 to 75 characters per line (CPL)**, including spaces and punctuation.

- **The Sweet Spot:** Many typographers and usability experts agree that **66 CPL** is an ideal sweet spot for comfortable reading of body text.    
- **Too Long (> 75 CPL):** When a line of text is too wide, it's difficult for the reader's eyes to track from the end of one line to the beginning of the next, which can lead to fatigue, reduced comprehension, and the reader accidentally re-reading a line ("doubling").    
- **Too Short (< 45 CPL):** Lines that are too narrow force the reader's eyes to travel back too often, breaking the natural reading rhythm and causing the reader to feel stressed.    

### 2. Implementation in CSS

You can't control the exact number of characters on a line for every screen size, but you can control the maximum width of your text containers to fall within this optimal range. The best way to do this is using relative units.

- **`ch` Unit:** The `ch` unit in CSS is the most reliable way to enforce a character limit. It represents the width of the "0" (zero) character in the current font. A value of `max-width: 70ch;` will set a maximum width that approximates the 70-character rule, regardless of font size.    
- **`em` or `rem` Units:** These are also good for creating flexible layouts. Since a `rem` is based on the root font size, a `max-width` set in `rem` will also scale proportionally as the user's font size changes. A value of around `max-width: 35em;` is often a good starting point.    
- **Avoid Pixels:** Using a fixed pixel width (`max-width: 600px;`) is less ideal because it doesn't account for variations in font size, which can be changed by the user or vary across devices.    

### 3. Responsive Design and Mobile

The optimal line length changes depending on the device. Your design must be responsive to maintain legibility on all screen sizes.

- **Desktop:** On larger screens, you can use the wider end of the range, aiming for **45–75 CPL**. A column width of around `20-25rem` works well.    
- **Mobile:** On narrow mobile screens, shorter lines are necessary. Aim for **30–50 CPL** to ensure the text doesn't look squashed and is still comfortable to read.    
- **Fluid Typography:** Use modern CSS techniques (like `clamp()` or a combination of `rem` and `vw` units) to create font sizes and line heights that fluidly adjust based on the screen width. This ensures that as the container shrinks, the font size also adjusts to maintain the optimal character count per line.    

### 4. Other Factors Influencing Legibility

Line length is just one part of the equation. For a truly legible experience, it must be considered in conjunction with other typographic elements:

- **Line Height (Leading):** This is the vertical space between lines of text. A good rule of thumb is a line height of **1.5 times the font size** (or `1.5em`). For longer lines, a slightly larger line height is needed to help the eye find the next line.    
- **Font Size:** Body text should have a minimum font size of **16px** to be easily readable. Increasing the font size on larger screens can improve comfort.    
- **Paragraph Spacing:** Use enough vertical space between paragraphs (at least twice the font size) to clearly separate blocks of text. Using a blank line of space (`margin-bottom`) is a common and effective practice, as it avoids the need for paragraph indentation which can be less effective on the web.    
- **Contrast:** Ensure there is sufficient contrast between the text color and the background color. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text.    

### 5. Accessibility Considerations

Adhering to optimal line length is a key part of web accessibility, benefiting users with cognitive disabilities, dyslexia, or low vision.

- **WCAG Guidelines:** WCAG 2.1 recommends keeping lines of text to a maximum of **80 characters** for non-CJK languages.    
- **No Horizontal Scrolling:** At no point should a user be forced to scroll horizontally to read a line of text, regardless of their screen size or text zoom level.    
- **User Control:** Remember that a user can override your CSS to change font size and other settings. Your layout should be robust enough to handle these changes gracefully without breaking.