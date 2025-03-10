# ProgressLine

El componente ProgressLine muestra una barra de progreso lineal que indica el avance de una tarea o el porcentaje completado. Incluye una opción para mostrar el porcentaje numérico junto a la barra.

### Importación

Para importar el componente ProgressLine, se puede hacer desde fenextjs

```tsx copy
import { ProgressLine } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo    | Requerido | Default | Descripcion                                                                 |
| --------- | ------- | --------- | ------- | --------------------------------------------------------------------------- |
| className | string  | no        | ''      | Clase CSS para personalizar el contenedor del componente ProgressLine.      |
| p         | number  | sí        | N/A     | Valor de progreso representado en la barra, como un número entre 0 y 100.   |
| showP     | boolean | no        | true    | Indica si el valor numérico del progreso (`p`) se muestra junto a la barra. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/progress-progressline--index)

### Usos

-   ProgressLine básico

```tsx copy
<ProgressLine p={75} />
```

-   ProgressLine con progreso visible

```tsx copy
<ProgressLine p={50} showP={true} />
```

-   ProgressLine con clase personalizada

```tsx copy
<ProgressLine p={90} className="mi-clase" />
```
