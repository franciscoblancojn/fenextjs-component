# Portal

El componente Portal permite renderizar sus elementos secundarios (`children`) en un contenedor DOM específico, separado de la jerarquía DOM principal de la aplicación. Utiliza `ReactDOM.createPortal` para realizar esta funcionalidad.

### Importación

Para importar el componente Portal, se puede hacer desde fenextjs

```tsx copy
import { Portal } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                        | Requerido | Default       | Descripcion                                                                                                                                    |
| --------- | --------------------------- | --------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| container | Element \| DocumentFragment | no        | document.body | Elemento DOM donde se montarán los elementos secundarios. Si no se proporciona, el `body` del documento se usa como contenedor predeterminado. |
| children  | ReactNode                   | sí        | N/A           | Contenido que se renderizará dentro del portal.                                                                                                |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-portal--index)

### Usos

-   Portal básico

```tsx copy
<Portal>
    <div>Contenido en Portal</div>
</Portal>
```

-   Portal con contenedor específico

```tsx copy
<Portal container={document.getElementById("mi-contenedor")}>
    <div>Contenido en un contenedor específico</div>
</Portal>
```
