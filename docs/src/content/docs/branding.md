---
title: Buttons and Links
# description: A reference page in my new Starlight docs site.
---

## Buttons

### Primary Button
| Field      | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
| Primary Button Font Size | Input | decimal | Font size in rem| 1
| Primary Button Font Weight | Input | int | 300 / 400 / **500** / 600 / 700 / 900 | 500
| Primary Button Line Height | Input | decimal | Button height in rem | 2.5
| Primary Button Font Style | Radio List| string | Normal / Italic | Normal
| Primary Button Padding | Input | decimal | X-axis Padding| 1.6
| Primary Button Letter Casing | Radio List | string | Regular / Uppercase / Lowercase| Regular
| Primary Button Letter Spacing | Input | decimal | Letter Spacing | 0
| Primary Button Border Size | Input | decimal | Border width | 0
| Primary Button Border Radius | Radio List | string | Square / Rounded / Pill| Square

```css
:root {
  --ignite-primary-button-font-size: 1rem;
  --ignite-primary-button-font-weight: 500;
  --ignite-primary-button-line-height: 2.5rem;
  --ignite-primary-button-font-style: normal;
  --ignite-primary-button-padding: 1.6rem;
  --ignite-primary-button-letter-spacing: 0.0625rem;
  --ignite-primary-button-letter-casing: none;
  --ignite-primary-button-border-size: 0rem;
  --ignite-primary-button-border-radius: var(--ignite-border-radius-none, 0rem);
}
```

### Secondary Button
| Field      | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
| Secondary Button Font Size | Input | decimal | Font size in rem| 1
| Secondary Button Font Weight | Input | int | 300 / 400 / **500** / 600 / 700 / 900 | 500
| Secondary Button Line Height | Input | decimal | Button height in rem | 2.5
| Secondary Button Font Style | Radio List| string | Normal / Italic | Normal
| Secondary Button Padding | Input | decimal | X-axis Padding| 1.6
| Secondary Button Letter Casing | Radio List | string | Regular / Uppercase / Lowercase| Regular
| Secondary Button Letter Spacing | Input | decimal | Letter Spacing | 0
| Secondary Button Border Size | Input | decimal | Border width | 0
| Secondary Button Border Radius | Radio List | string | Square / Rounded / Pill| Square

```css
:root {
  --ignite-secondary-button-font-size: 1rem;
  --ignite-secondary-button-font-weight: 500;
  --ignite-secondary-button-line-height: 2.5rem;
  --ignite-secondary-button-font-style: normal;
  --ignite-secondary-button-padding: 1.6rem;
  --ignite-secondary-button-letter-spacing: 0.0625rem;
  --ignite-secondary-button-letter-casing: none;
  --ignite-secondary-button-border-size: 0.0625rem;
  --ignite-secondary-button-border-radius: var(--ignite-border-radius-none, 0rem);
}
```

### Link Button
| Field      | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
| Link Button Font Size | Input | decimal | Font size in rem| 1
| Link Button Font Weight | Input | int | 300 / 400 / **500** / 600 / 700 / 900 | 500
| Link Button Letter Casing | Radio List | string | Regular / Uppercase / Lowercase| Regular
| Link Button Letter Spacing | Input | decimal | Letter Spacing | 0

```css
:root {
  --ignite-link-button-font-size: 1rem;
  --ignite-link-button-font-weight: 400;
  --ignite-link-button-letter-spacing: 0rem;
  --ignite-link-button-letter-casing: none;
}
```
