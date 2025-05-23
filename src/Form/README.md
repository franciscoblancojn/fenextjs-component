# Form

El componente Form es un formulario que permite capturar datos del usuario. Ofrece funcionalidad para manejar el envío de formularios, opcionalmente realizar una acción al enviarlo y manejar un estado deshabilitado.

### Importación

Para importar el componente Form, se puede hacer desde fenextjs

```tsx copy
import { Form } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                   | Requerido | Default           | Descripcion                                                                                                                  |
| --------- | ---------------------- | --------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | string                 | no        | ''                | ID único para identificar el formulario, usado para personalizar la acción en eventos.                                       |
| onSubmit  | () =\> Promise\<void\> | no        | async () =\> \{\} | Función personalizada que se ejecuta al enviar el formulario. Debe ser una función asíncrona que realice la acción de envío. |
| disabled  | boolean                | no        | true              | Indica si el formulario está deshabilitado, lo que previene la acción de envío.                                              |
| className | string                 | no        | ''                | Clase CSS para personalizar el estilo del formulario.                                                                        |
| children  | ReactNode              | no        | undefined         | Contenido o elementos dentro del formulario, típicamente los campos de entrada.                                              |

### Eventos de tracking

Cuando el formulario tiene un 'id' definido y se envía correctamente, se registra un evento en el Data Layer.

| Evento      | Descripción                                                            |
| ----------- | ---------------------------------------------------------------------- |
| form-\{id\} | Evento de tracking cuando se envía el formulario con un 'id' definido. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-form--index)

### Usos

-   Formulario básico

```tsx copy
<Form>
    <InputText name="example" />
</Form>
```

-   Formulario con acción personalizada

```tsx copy
<Form
    onSubmit={async () => {
        console.log("Formulario enviado");
    }}
>
    <InputText name="example" />
</Form>
```

-   Formulario deshabilitado

```tsx copy
<Form disabled={true}>
    <InputText name="example" />
</Form>
```
