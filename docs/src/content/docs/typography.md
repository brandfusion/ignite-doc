---
title: Typography
# description: A reference page in my new Starlight docs site.
---
The web implementation of a typography must follow the same principles as those used in the design process and aims to establish the visual hierarchy.

## Font Size

In the design process, one starts from choosing a basic size and then chooses a multiplier to generate the entire hierarchy of fonts (eg: https://www.typescale.com). These two options are found in `Content/Swift Tools/Branding`

| Field      | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
| Typography Base Font Size | Input | rem | | 1
| Typography Font Size Scale   | Select | decimal | 1.067 - Minor Second / 1.125 - Major Second / **1.200 - Minor Third** / 1.250 - Major Third / 1.333 - Perfect Fourth | 1.200

:::note[Mobile scaling]
For mobile(<1200px), the multiplier is **1.125 - Major Second**
:::

```css
:root {
--ignite-typography-font-size-base: 1rem;
--ignite-typography-font-size-scale: 1.2;
--ignite-typography-font-size-mobile-scale: 1.125;  
}
```
```css
:root {
  --ignite-font-size-h6: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 1)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 1)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 1)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-h5: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 2)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 2)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 2)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-h4: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 3)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 3)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 3)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-h3: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 4)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 4)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 4)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-h2: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 5)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 5)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 5)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-h1: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 6)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 6)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 6)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-hero2: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 7)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 7)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 7)* var(--ignite-typography-font-size-base, 1rem)));
  --ignite-font-size-hero1: clamp(calc(pow(var(--ignite-typography-font-size-mobile-scale), 8)* var(--ignite-typography-font-size-base, 1rem)), calc(pow(var(--ignite-typography-font-size-scale), 8)* 16 / 1200* 100vw), calc(pow(var(--ignite-typography-font-size-scale), 8)* var(--ignite-typography-font-size-base, 1rem)));  
  --ignite-line-height-hero1: 1;
  --ignite-line-height-hero2: 1;
  --ignite-line-height-h1: 1;
  --ignite-line-height-h2: 1.1;
  --ignite-line-height-h3: 1.2;
  --ignite-line-height-h4: 1.2;
  --ignite-line-height-h5: 1.3;
  --ignite-line-height-h6: 1.4;
}
```

## Font style
There are 4 configurable zones for font styling.

### Eyebrow
| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Eyebrow Font Type|Radio List|string| **Google Font** / Local | Google Font
|Eyebrow Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Eyebrow Font Size|Input|decimal| Se alege dimensiunea in rem | 1
|Eyebrow Line Height|Input|decimal| Se alege inaltimea implicita a liniei | 1
|Eyebrow Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Eyebrow Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Eyebrow Font Style|Radio List|string| Normal / Italic | Normal

```css

:root {
  --ignite-eyebrow-font-family: 'Inter', sans-serif;
  --ignite-eyebrow-font-weight: 700;
  --ignite-eyebrow-font-style: normal;
  --ignite-eyebrow-font-size: 1rem;
  --ignite-eyebrow-letter-casing: none;
  --ignite-eyebrow-letter-spacing: 0rem;
  --ignite-eyebrow-line-height: 1;
}
```

### Headings
| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Heading Font Type|Radio List|string| **Google Font** / Local | Google Font
|Heading Font Family|Font Selector|string| Se alege familia si grosimea fontului | Inter
|Heading Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Heading Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Heading Font Style|Radio List|string| Normal / Italic | Normal

```css
:root {
  --ignite-heading-font-family: 'Inter', sans-serif;
  --ignite-heading-font-weight: 700;
  --ignite-heading-font-style: normal;
  --ignite-heading-letter-casing: none;
  --ignite-heading-letter-spacing: 0rem;
}  
```

### Subheadings
| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Subheading Font Type|Radio List|string| **Google Font** / Local | Google Font
|Subheading Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Subheading Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Subheading Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Subheading Font Style|Radio List|string| Normal / Italic | Normal

```css
:root {
  --ignite-subheading-font-family: 'Jost', sans-serif;
  --ignite-subheading-font-weight: 700;
  --ignite-subheading-font-style: normal;
  --ignite-subheading-letter-casing: none;
  --ignite-subheading-letter-spacing: 0rem; 
}  
```

### Body
| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Body Font Type|Radio List|string| **Google Font** / Local | Google Font
|Body Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Body Line Height|Input|decimal |  Se alege inaltimea implicita a liniei| 1.4
|Body Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Body Font Size|Input|decimal| Se alege dimensiunea in rem | 1

:::note
Font sizes for **lead** and **small** are defined based on the body font size
:::

```css
:root {
  --ignite-body-font-family: 'Jost', sans-serif;
  --ignite-body-font-size: 1rem;
  --ignite-body-font-weight: 400;
  --ignite-body-letter-spacing: 0rem;
  --ignite-body-line-height: 1.4;
  --ignite-fs-small: calc(0.875* var(--ignite-body-font-size, 1rem));
  --ignite-fs-lead: calc(1.125* var(--ignite-body-font-size, 1rem)); 
}  
```

