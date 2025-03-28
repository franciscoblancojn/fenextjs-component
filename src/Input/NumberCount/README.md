# InputNumberCount

El componente InputNumberCount permite la entrada de números con soporte para validaciones, símbolos de inicio y final, y controles de mínimo y máximo.

### Importación

Para importar el componente InputNumberCount, se puede hacer desde fenextjs

```tsx copy
import { InputNumberCount } from "fenextjs";
```

### Parámetros

| Parámetro                 | Tipo                             | Requerido | Default   | Descripcion                                                                        |
| ------------------------- | -------------------------------- | --------- | --------- | ---------------------------------------------------------------------------------- |
| symbolInit                | string                           | no        | '$'       | El símbolo que se muestra al inicio del valor numérico en el campo.                |
| symbolFinal               | string                           | no        | ''        | El símbolo que se muestra al final del valor numérico en el campo.                 |
| defaultValue              | number \| ''                     | no        | ''        | El valor predeterminado del input.                                                 |
| value                     | number \| ''                     | no        | undefined | El valor actual del input.                                                         |
| onChange                  | (v: number \| '') =\> void       | no        | undefined | Función que se ejecuta cuando el valor del input cambia.                           |
| min                       | number                           | no        | -Infinity | El valor mínimo permitido para el input.                                           |
| max                       | number                           | no        | Infinity  | El valor máximo permitido para el input.                                           |
| aplyMin                   | boolean                          | no        | false     | Si se debe aplicar la restricción mínima.                                          |
| aplyMax                   | boolean                          | no        | true      | Si se debe aplicar la restricción máxima.                                          |
| minError                  | string                           | no        | undefined | Mensaje de error cuando el valor es menor que el mínimo permitido.                 |
| maxError                  | string                           | no        | undefined | Mensaje de error cuando el valor es mayor que el máximo permitido.                 |
| validator                 | FenextjsValidatorClass\<number\> | no        | undefined | Instancia de FenextjsValidator para validaciones personalizadas.                   |
| optionsParseNumber        | Intl.NumberFormatOptions         | no        | undefined | Opciones para formatear el número.                                                 |
| optionsParseNumberDefault | Intl.NumberFormatOptions         | no        | undefined | Opciones para formatear el número inicialmente que se proporciona por defultValue. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputnumbercount--index)

### Usos

-   InputNumberCount básico

```tsx copy
<InputNumberCount />
```

-   InputNumberCount con símbolos personalizados

```tsx copy
<InputNumberCount symbolInit="€" symbolFinal="EUR" />
```

-   InputNumberCount con valores mínimo y máximo

```tsx copy
<InputNumberCount min={10} max={100} />
```

-   InputNumberCount con validación personalizada

```tsx copy
<InputNumberCount validator={customValidator} />
```
