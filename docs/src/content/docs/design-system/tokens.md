---
title: Design Tokens
---
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