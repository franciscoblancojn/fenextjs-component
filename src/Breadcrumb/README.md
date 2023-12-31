# Breadcrumb

El componente Breadcrumb es una representación visual de una lista de enlaces que proporcionan una navegación jerárquica en una aplicación web. Cada enlace en la lista se muestra con una etiqueta "a" que permite redirigir al usuario a la URL especificada.

### Importacion

Para importar el componente Breadcrumb, se puede hacer desde fenextjs o fenextjs-component

```tsx copy
import { Breadcrumb, BreadcrumbProps } from "fenextjs/cjs/component/Breadcrumb";
```

o

```tsx copy
import { Breadcrumb, BreadcrumbProps } from "fenextjs-component/cjs/Breadcrumb";
```

### Parametros

| Parametro     |                                 Tipo                                  | Requerido | Default | Descripcion                        |
| ------------- | :-------------------------------------------------------------------: | :-------: | :-----: | :--------------------------------- |
| links         | [BreadcrumbLinkProps[]](#parametros-de-los-links-breadcrumblinkprops) |    si     |         | Lista de links para el componente  |
| className     |                                string                                 |    no     |   ""    | Clase personalizada del componente |
| classNameItem |                                string                                 |    no     |   ""    | Clase personalizada de los items   |
| classNameLink |                                string                                 |    no     |   ""    | Clase personalizada de los links   |

### Parametros de los links (BreadcrumbLinkProps)

| Parametro |   Tipo    | Requerido | Default | Descripcion                                          |
| --------- | :-------: | :-------: | :-----: | :--------------------------------------------------- |
| href      |  string   |    si     |         | Url del link                                         |
| children  | ReactNode |    si     |         | Contenido del link                                   |
| onClick   | function  |    no     |         | Funcion que se ejecuta en el evento onClick del link |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/breadcrumb-breadcrumb--index)

### Usos

-   Uso básico del componente Breadcrumb

```tsx copy
const breadcrumbLinks = [
    { href: "/", children: "Home" },
    { href: "/products", children: "Products" },
    { href: "/products/category", children: "Category" },
];
<Breadcrumb links={breadcrumbLinks} />;
```

-   Breadcrumb con clase de estilo personalizada

```tsx copy
const breadcrumbLinks = [
    { href: "/", children: "Home" },
    { href: "/products", children: "Products" },
    { href: "/products/category", children: "Category" },
];
<Breadcrumb
    links={breadcrumbLinks}
    className="custom-breadcrumb"
    classNameItem="custom-breadcrumb-item"
    classNameLink="custom-breadcrumb-link"
/>;
```

-   Breadcrumb con evento de clic personalizado

```tsx copy
const breadcrumbLinks = [
    { href: "/", children: "Home" },
    { href: "/products", children: "Products" },
    { href: "/products/category", children: "Category" },
];
const handleLinkClick = () => {
    console.log("Breadcrumb link clicked!");
};
<Breadcrumb
    links={[
        { href: "/", children: "Home" },
        {
            href: "/products",
            children: "Products",
            onClick: handleLinkClick,
        },
        { href: "/products/category", children: "Category" },
    ]}
/>;
```
