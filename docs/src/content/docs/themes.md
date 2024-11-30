---
title: Themes
---

:::tip[Starting a project]
Every project must start by creating a general theme and applying it to the website in the **Website Settings** area.
:::

## Theme Settings
| Field | Description | Value | 
|-|-|-|
| Name | | ex: General
| CSS class name | The CSS class that will be added for theme-ing| ex: theme-[name]

## Base Settings
| Field | Description | Value | 
|-|-|-|
| Background color |  | #FFFFFF
| Foreground color |  | #333333
| Accent color |  | #333333
| Border color |  | ""

## Primary Button Settings
| Field | Description | Value | 
|-|-|-|
| Background color |  | #333333
| Foreground color |  | #FFFFFF
| Border color |  | ""

## Primary Button Hover (Override)
| Field | Description | Value | 
|-|-|-|
| Background color |  | #000000
| Foreground color |  | #FFFFFF
| Border color |  | ""

## Secondary Button Settings
| Field | Description | Value | 
|-|-|-|
| Background color |  | #FFFFFF
| Foreground color |  | #333333
| Border color |  | #333333

## Secondary Button Hover (Override)
| Field | Description | Value | 
|-|-|-|
| Background color |  | #333333
| Foreground color |  | #FFFFFF
| Border color |  | #333333

## Link Button Settings
| Field | Description | Value | 
|-|-|-|
| Link color |  | ""

## Link Button Hover (Override)
| Field | Description | Value | 
|-|-|-|
| Link color |  | ""

## Accessibility
| Field | Description | Value | 
|-|-|-|
| Outline color |  | #CCCCCC

:::note
Empty values will default to values of transparent or inherit (ex: For backgrounds it will be `transparent`, for content colors it will be `inherit`)
:::


## Generated CSS Variables (Example)

```css
.theme-general
{
  --swift-foreground-color: #333333;
  --swift-foreground-color-rgb: 51, 51, 51;
  --swift-background-color: #FFFFFF;
  --swift-background-color-rgb: 255, 255, 255;
  --swift-accent-color: #333333;
  --swift-accent-color-rgb: 51, 51, 51;
  --swift-border-color: transparent;
  --swift-border-color-rgb: transparent;
  --swift-button-primary-background-color: #141414;
  --swift-button-primary-background-color-rgb: 20, 20, 20;
  --swift-button-primary-foreground-color: #FFFFFF;
  --swift-button-primary-foreground-color-rgb: 255, 255, 255;
  --swift-button-primary-border-color: inherit;
  --swift-button-primary-border-color-rgb: inherit;
  --swift-button-primary-hover-background-color: #000000;
  --swift-button-primary-hover-background-color-rgb: 0, 0, 0;
  --swift-button-primary-hover-foreground-color: #FFFFFF;
  --swift-button-primary-hover-foreground-color-rgb: 255, 255, 255;
  --swift-button-primary-hover-border-color: inherit;
  --swift-button-primary-hover-border-color-rgb: inherit;
  --swift-button-secondary-background-color: #FFFFFF;
  --swift-button-secondary-background-color-rgb: 255, 255, 255;
  --swift-button-secondary-foreground-color: #141414;
  --swift-button-secondary-foreground-color-rgb: 20, 20, 20;
  --swift-button-secondary-border-color: #141414;
  --swift-button-secondary-border-color-rgb: 20, 20, 20;
  --swift-button-secondary-hover-background-color: #000000;
  --swift-button-secondary-hover-background-color-rgb: 0, 0, 0;
  --swift-button-secondary-hover-foreground-color: #FFFFFF;
  --swift-button-secondary-hover-foreground-color-rgb: 255, 255, 255;
  --swift-button-secondary-hover-border-color: #000000;
  --swift-button-secondary-hover-border-color-rgb: 0, 0, 0;
  --swift-button-link-color: #333333;
  --swift-button-link-color-rgb: 51, 51, 51;
  --swift-button-link-hover-color: hsl(0, 0%, 40%);
  --swift-button-link-hover-color-rgb: hsl(0, 0%, 40%);
  --swift-a11y-outline-color: #CCCCCC;
  --swift-a11y-outline-color-rgb: 204, 204, 204;
}

```