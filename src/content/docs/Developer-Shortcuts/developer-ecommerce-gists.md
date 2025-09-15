---
title: Developer Ecommerce Gists
# description: A guide to implementing the Ignite Section Carousel element
---


## How to access Group Fields from a product list page
```csharp
// Access the Group Fields from a Product List
@using Dynamicweb.Ecommerce.ProductCatalog

ProductListViewModel productList = null;
  if (Dynamicweb.Context.Current.Items.Contains("ProductList"))
  {
    productList = (ProductListViewModel)Dynamicweb.Context.Current.Items["ProductList"];
  }
string groupHeaderPage = productList?.Group?.GroupFields.FirstOrDefault(x => x.Name == "Ecommerce Group Header")?.Value.ToString() ?? "";
```

## How to access a page by using the product number
```csharp
  @using Dynamicweb.Ecommerce.ProductCatalog

  //Setting up the product
  ProductViewModel product = null;
  if (Dynamicweb.Context.Current.Items.Contains("ProductDetails"))
  {
      product = (ProductViewModel)Dynamicweb.Context.Current.Items["ProductDetails"];
  }

  var pageService = new Dynamicweb.Content.PageService();
  var page = pageService?.GetPagesByTitle($"PN-{product.Number}")?.FirstOrDefault() ?? null;
```