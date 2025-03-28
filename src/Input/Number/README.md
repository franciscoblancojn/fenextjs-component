# InputNumber

El componente InputNumber permite a los usuarios ingresar un valor numérico con opciones para aumentar o disminuir el valor usando botones, así como la posibilidad de validación.

### Importación

Para importar el componente InputNumber, se puede hacer desde fenextjs

```tsx copy
import { InputNumber } from "fenextjs";
```

### Parámetros

| Parámetro              | Tipo                       | Requerido | Default   | Descripcion                                                             |
| ---------------------- | -------------------------- | --------- | --------- | ----------------------------------------------------------------------- |
| value                  | number \| ''               | no        | ''        | Valor actual del input. Puede ser un número o una cadena vacía.         |
| defaultValue           | number \| ''               | no        | ''        | Valor inicial del input.                                                |
| onChange               | (v: number \| '') =\> void | no        | undefined | Función que se ejecuta al cambiar el valor del input.                   |
| onChangeValidate       | (v: number \| '') =\> void | no        | undefined | Función que se ejecuta al perder el foco y después de validar el valor. |
| min                    | number                     | no        | undefined | Valor mínimo permitido para el input.                                   |
| max                    | number                     | no        | undefined | Valor máximo permitido para el input.                                   |
| useBtnIncreaseDecrease | boolean                    | no        | false     | Determina si se deben mostrar los botones de aumento/disminución.       |
| disabledScroll         | boolean                    | no        | false     | Deshabilita el desplazamiento del ratón en el input.                    |
| className              | string                     | no        | ''        | Clase CSS para el componente.                                           |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputnumber--index)

### Usos

-   Uso básico del componente InputNumber

```tsx copy
<InputNumber onChange={(value) => console.log(value)} />
```

-   Uso de InputNumber con validación

```tsx copy
<InputNumber onChangeValidate={(value) => console.log("Validated:", value)} />
```

-   Uso de InputNumber con límites

```tsx copy
<InputNumber min={0} max={100} onChange={(value) => console.log(value)} />
```

-   Uso de InputNumber con botones de aumento/disminución

```tsx copy
<InputNumber
    useBtnIncreaseDecrease={true}
    onChange={(value) => console.log(value)}
/>
```
