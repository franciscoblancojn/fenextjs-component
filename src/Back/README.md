# Back

El componente Back es una representación visual de un botón de retroceso (atrás) que permite al usuario navegar a la página anterior en la historia del navegador, utilizar la funcionalidad de Next.js Router, redirigir a una URL específica o simplemente ejecutar una función personalizada al hacer clic en el botón.

### Importacion

Para importar el componente back, se puede hacer desde fenextjs o fenextjs-component

```tsx copy
import { Back, BackProps } from "fenextjs/cjs/component/Back";
```

or

```tsx copy
import { Back, BackProps } from "fenextjs-component/cjs/Back";
```

### Parametros

| Parametro           |               Tipo               | Requerido |                 Default                  | Descripcion                                                                                                                                                                                                     |
| ------------------- | :------------------------------: | :-------: | :--------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loader              |             boolean              |    no     |                  false                   | Si el componente esta en estado loader, con un indicardor de spiner y deshabilitada su funcionalidad                                                                                                            |
| disabled            |             boolean              |    no     |                  false                   | Si el componente esta en estado disabled, por ende se deshabilita su funcionalidad                                                                                                                              |
| onClick             |             function             |    no     |                                          | Funcion que se ejecuta por onClick en el componente, (solo se ejecuta si loader y disabled son false)                                                                                                           |
| icon                |            ReactNode             |    no     | [Svg:PaginationPre](/svg/pagination-pre) | Icono del componente                                                                                                                                                                                            |
| children            |            ReactNode             |    no     |                  "Back"                  | Contenido del componente                                                                                                                                                                                        |
| typeOnBack          | "history" "router" "link" "none" |    no     |                "history"                 | Tipo de accion al ejecutar onClick en el componente                                                                                                                                                             |
| link                |              string              |    no     |                    ""                    | El link a donde redireccionar si el campo typeOnBack = "link"                                                                                                                                                   |
| useHistoryMinLenght |             boolean              |    no     |                  false                   | Si el componente esta en estado useHistoryMinLenght, se verificara el valor de "window.history.length" para que sea mayor al parametro "minLenght", si la condicion no se cumple, el componente no se renderisa |
| minLenght           |              number              |    no     |                    2                     | El valor de comparacion en caso de que "useHistoryMinLenght" sea true, la validacion para que <strong>no se renderice</strong> el componente es: window.history.length < minLenght                              |

### Redireccionamiento

Dependiendo de el valor typeOnBack la redirecion se ejecutara de forma distrinta:

| typeOnBack | Redireccion       | Descripcion                                                         |
| ---------- | :---------------- | :------------------------------------------------------------------ |
| history    | history.back()    | Redirección a la página anterior mediante la historia del navegador |
| router     | router.back()     | Redirección a la página anterior mediante Next.js Router            |
| link       | router.push(link) | Rdirección a la url mediante Next.js Router                         |
| none       | none              | No se redirecciona                                                  |

### Usos

-   Basico

```tsx copy
<Back />
```

-   Back con texto personalizado

```tsx copy
<Back>Go Back</Back>
```

-   Back con icono personalizado y tipo de redirección a una URL

```tsx copy
<Back
    icon={<img src="/custom-back-icon.svg" alt="Back Icon" />}
    typeOnBack="link"
    link="/previous-page"
>
    Back to Previous Page
</Back>
```

-   Back en estado de carga (loader)

```tsx copy
<Back loader={true}>Loading...</Back>
```

-   Back deshabilitado

```tsx copy
<Back disabled={true}>Disabled Back</Back>
```

-   Back con redirección a la página anterior mediante Next.js Router

```tsx copy
<Back typeOnBack="router">Go to Previous Route</Back>
```

-   Back con redirección a la página anterior mediante la historia del navegador

```tsx copy
<Back typeOnBack="history">Go Back in History</Back>
```

-   Back con función personalizada

```tsx copy
<Back onClick={() => alert("Custom function executed!")} typeOnBack="none">
    Custom Click Function
</Back>
```
