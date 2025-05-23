# ContentScrollLeft

El componente ContentScrollLeft renderiza un contenedor principal con un diseño predefinido que permite desplazar contenido hacia la izquierda, ideal para personalizaciones relacionadas con el estilo y funcionalidad de scroll.

### Importación

Para importar el componente ContentScrollLeft, se puede hacer desde fenextjs

```tsx copy
import { ContentScrollLeft } from "fenextjs";
```

### Parámetros

| Parámetro        | Tipo      | Requerido | Default   | Descripcion                                                         |
| ---------------- | --------- | --------- | --------- | ------------------------------------------------------------------- |
| className        | string    | no        | ''        | Clase CSS para personalizar el contenedor principal del componente. |
| classNameContent | string    | no        | ''        | Clase CSS para personalizar el contenido interno del componente.    |
| children         | ReactNode | no        | undefined | Elemento(s) hijos que se renderizarán dentro del componente.        |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-contentscrollleft--index)

### Usos

-   Básico

```tsx copy
<ContentScrollLeft>Contenido</ContentScrollLeft>
```

-   Con clases personalizadas

```tsx copy
<ContentScrollLeft className="mi-clase" classNameContent="mi-clase-interna">
    Contenido personalizado
</ContentScrollLeft>
```
