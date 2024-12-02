---
title: Typography
# description: A reference page in my new Starlight docs site.
---
The web implementation of a given typography must follow the same principles as those used in the design process that aims to establish the visual hierarchy.

## Font Size

:::note
In the design process, one starts from choosing a basic size and then chooses a multiplier to generate the entire hierarchy of fonts (eg: https://www.typescale.com). These two options are found in `Content/Swift Tools/Branding`
:::

:::tip[Font Size Generation Tokens]
This will generate the  [tokens](/design-system/tokens#typographysizegeneration) needed to build the [typography heading scale](design-system/tokens#font-size-and-line-height).
:::

| Field      | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
| Typography Base Font Size | Input | rem | | 1
| Typography Font Size Scale   | Select | decimal | 1.067 - Minor Second / 1.125 - Major Second / **1.200 - Minor Third** / 1.250 - Major Third / 1.333 - Perfect Fourth | 1.200



## Font style

:::note
To properly brand a website, there are 4 font style areas that needs to be configured at the start of the project: Eyebrow, Headings, Subheadings, Body & Links
:::


### Eyebrow

:::tip[Eyebrow Design Tokens]
These options will generate [Eyebrow tokens](/design-system/tokens#eyebrow).
:::

| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Eyebrow Font Type|Radio List|string| **Google Font** / Local | Google Font
|Eyebrow Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Eyebrow Font Size|Input|decimal| Se alege dimensiunea in rem | 1
|Eyebrow Line Height|Input|decimal| Se alege inaltimea implicita a liniei | 1
|Eyebrow Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Eyebrow Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Eyebrow Font Style|Radio List|string| Normal / Italic | Normal


### Headings

:::tip[Headings Design Tokens]
These options will generate [Headings tokens](/design-system/tokens#headings).
:::

| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Heading Font Type|Radio List|string| **Google Font** / Local | Google Font
|Heading Font Family|Font Selector|string| Se alege familia si grosimea fontului | Inter
|Heading Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Heading Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Heading Font Style|Radio List|string| Normal / Italic | Normal


### Subheadings

:::tip[Subheadings Design Tokens]
These options will generate [Subheadings tokens](/design-system/tokens#subheadings).
:::

| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Subheading Font Type|Radio List|string| **Google Font** / Local | Google Font
|Subheading Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Subheading Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Subheading Letter Casing|Radio List|string| Regular / Uppercase / Lowercase | Regular
|Subheading Font Style|Radio List|string| Normal / Italic | Normal


### Body

:::tip[Body Design Tokens]
These options will generate [Body tokens](/design-system/tokens#body).
:::

| Field | Type | Unit | Description | Default Value | 
|-|-|-|-|-|
|Body Font Type|Radio List|string| **Google Font** / Local | Google Font
|Body Font Family|Font Selector|string| Se alege familia si grosimea fontului | Jost
|Body Line Height|Input|decimal |  Se alege inaltimea implicita a liniei| 1.4
|Body Letter Spacing|Input|decimal | Se alege spatierea dintre litere in rem| 0
|Body Font Size|Input|decimal| Se alege dimensiunea in rem | 1




