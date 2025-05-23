# InputCode

El componente InputCode es un campo de entrada diseñado para ingresar códigos de verificación o códigos de un solo uso. Presenta un diseño que resalta cada carácter ingresado, ideal para situaciones como la autenticación de dos factores.

### Importación

Para importar el componente InputCode, se puede hacer desde fenextjs

```tsx copy
import { InputCode } from "fenextjs";
```

### Parámetros

| Parámetro    | Tipo                     | Requerido | Default   | Descripcion                                                         |
| ------------ | ------------------------ | --------- | --------- | ------------------------------------------------------------------- |
| maxLength    | number                   | sí        | 1         | Número máximo de caracteres que se pueden ingresar en el input.     |
| defaultValue | string                   | no        | ''        | Valor predeterminado del input cuando se renderiza por primera vez. |
| onChange     | (value: string) =\> void | no        | undefined | Función que se ejecuta cuando se cambia el valor del input.         |
| placeholder  | string                   | no        |           | Array de placeholders que se muestran en cada campo del input.      |
| className    | string                   | no        | ''        | Clase CSS adicional para el input.                                  |
| disabled     | boolean                  | no        | false     | Indica si el input está deshabilitado.                              |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputcode--index)

### Usos

-   Código de verificación

```tsx copy
<InputCode maxLength={6} placeholder={"XXXXXX"} />
```

-   Input deshabilitado

```tsx copy
<InputCode maxLength={4} disabled={true} />
```
