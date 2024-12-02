---
title: Design Tokens
---

## Typography Size Generation
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

## Heading Sizes And Line Height
:::note
Font sizes are generated from [Typography](/typography#font-sizes) options.
:::

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

## Eyebrow
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

## Headings
```css
:root {
  --ignite-heading-font-family: 'Inter', sans-serif;
  --ignite-heading-font-weight: 700;
  --ignite-heading-font-style: normal;
  --ignite-heading-letter-casing: none;
  --ignite-heading-letter-spacing: 0rem;
}  
```

## Subheadings
```css
:root {
  --ignite-subheading-font-family: 'Jost', sans-serif;
  --ignite-subheading-font-weight: 700;
  --ignite-subheading-font-style: normal;
  --ignite-subheading-letter-casing: none;
  --ignite-subheading-letter-spacing: 0rem; 
}  
```

## Body

:::tip
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

## Primary Button
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

## Secondary Button

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

## Link Button

```css
:root {
  --ignite-link-button-font-size: 1rem;
  --ignite-link-button-font-weight: 400;
  --ignite-link-button-letter-spacing: 0rem;
  --ignite-link-button-letter-casing: none;
}
```


## Spacing
:::note
Inherited from Bootstrap 5 and used for margin, padding and gap Bootstrap classes. (ex: `.ms-1`,`.pt-2`,`.gap-3`)
:::
```css
:root {
  --bs-spacing-0: 0rem;
  --bs-spacing-1: 0.25rem;
  --bs-spacing-2: 0.5rem;
  --bs-spacing-3: 1rem;
  --bs-spacing-4: 2rem;
  --bs-spacing-5: 3rem;
  --bs-spacing-6: 6rem;
}
```
## Gap
:::tip
There is no ignite gap for 0.25 rem since gap should be used as spacing between elements and not small components like buttons with label and icons. For that, the spacing variables should be used or setting the gap CSS property to `--bs-spacing-1` if grid/inline-grid is used.
:::
```css
:root {
  --ignite-gap-0: 0rem;
  --ignite-gap-1: var(--bs-gap-2, 0.5rem);
  --ignite-gap-2: var(--bs-gap-3, 1rem);
  --ignite-gap-3: var(--bs-gap-4, 2rem);
  --ignite-gap-4: var(--bs-gap-5, 3rem);
}
```

## Section Spacing

```css
:root {
  --ignite-content-spacing-multiplier: 1;
  --ignite-spacing-2: var(--ignite-spacing-default-2);
  --ignite-spacing-3: var(--ignite-spacing-default-3);
  --ignite-spacing-4: var(--ignite-spacing-default-4);
}
```

## Section Spacing Options
```css
:root {
  --ignite-spacing-compact-2: 1rem;
  --ignite-spacing-compact-3: 1.5rem;
  --ignite-spacing-compact-4: 1.5rem;
  --ignite-spacing-default-2: 1rem;
  --ignite-spacing-default-3: 2rem;
  --ignite-spacing-default-4: 3rem;
  --ignite-spacing-large-2: 2rem;
  --ignite-spacing-large-3: 3rem;
  --ignite-spacing-large-4: 6rem;
  --ignite-spacing-extra-large-2: 2rem;
  --ignite-spacing-extra-large-3: 4.5rem;
  --ignite-spacing-extra-large-4: 9rem;
}
```

## Typography Scale
:::note
This are the tokens that will be generated for the __Default__ value.
:::

```css
:root {
  --ignite-heading-font-size: var(--ignite-font-size-h4, 2rem);
  --ignite-subheading-font-size: var(--ignite-font-size-h5, 1.5rem);
  --ignite-heading-line-height: var(--ignite-line-height-h4);
  --ignite-subheading-line-height: var(--ignite-line-height-h5);
}
```

## Increase Text Legibility
```css
:root {
  --ignite-text-legibility: 65ch;
}
```

## Inner Content Spacing

```css
:root {
  --ignite-spacing-base: 0.5rem;
  --ignite-spacing-1: calc(var(--ignite-content-spacing-multiplier)* var(--ignite-spacing-base));
}
```