# FilterDate

El componente FilterDate permite filtrar datos por fecha o por rango de fechas. Ofrece opciones configurables para seleccionar fechas, personalizar el formato, y manejar acciones mediante hooks como `useData` y `useDate`.

### Importación

Para importar el componente FilterDate, se puede hacer desde fenextjs

```tsx copy
import { FilterDate } from "fenextjs";
```

### Parámetros

| Parámetro           | Tipo                                                                        | Requerido | Default              | Descripcion                                                                  |
| ------------------- | --------------------------------------------------------------------------- | --------- | -------------------- | ---------------------------------------------------------------------------- |
| nameFilter          | string                                                                      | no        | undefined            | Nombre único para el filtro, utilizado en el contexto global.                |
| defaultValue        | FilterDateDataProps                                                         | no        | \{\}                 | Valor inicial del filtro de fecha, incluyendo tipo, fecha o rango de fechas. |
| onChange            | (data: FilterDateDataProps) =\> void                                        | no        | undefined            | Función que se ejecuta cuando cambia el valor del filtro de fecha.           |
| formatDateOption    | FenextjsDateFormatOptions                                                   | no        | \{\}                 | Opciones de formato para mostrar las fechas seleccionadas.                   |
| textValue           | string                                                                      | no        | 'Filtrar por fecha:' | Texto principal que describe el propósito del filtro.                        |
| textFilterByDate    | string                                                                      | no        | 'Filtar por fecha'   | Texto que se muestra para la opción de filtro por fecha.                     |
| textFilterByRange   | string                                                                      | no        | 'Filtar por rango'   | Texto que se muestra para la opción de filtro por rango de fechas.           |
| textBtnToday        | string                                                                      | no        | 'Hoy'                | Texto del botón para seleccionar la fecha actual.                            |
| textBtnWeek         | string                                                                      | no        | 'Esta Semana'        | Texto del botón para seleccionar la semana actual.                           |
| iconTrash           | ReactNode                                                                   | no        | \<SvgTrash /\>       | Icono que se muestra como indicador para eliminar filtros.                   |
| extraListBtn        | (data: ReturnType\<typeof useData\<FilterDateDataProps\>\>) =\> ReactNode[] | no        | []                   | Lista de botones personalizados que se pueden agregar dinámicamente.         |
| nMonthShow          | number                                                                      | no        | 2                    | Número de meses visibles en el calendario.                                   |
| className           | string                                                                      | no        | ''                   | Clase CSS para personalizar el contenedor principal.                         |
| classNameDropDown   | DropDownClassProps                                                          | no        | \{\}                 | Clase CSS para personalizar el menú desplegable.                             |
| classNameCollapse   | InputCalendarClassProps                                                     | no        | \{\}                 | Clase CSS para personalizar el calendario desplegable.                       |
| classNameBtnToday   | ButtonClassProps                                                            | no        | \{\}                 | Clase CSS para personalizar el botón 'Hoy'.                                  |
| classNameBtnWeek    | ButtonClassProps                                                            | no        | \{\}                 | Clase CSS para personalizar el botón 'Esta Semana'.                          |
| classNameTextValue  | Pick\<TextProps, 'tag' \| 'className'\>                                     | no        | \{\}                 | Clase CSS para personalizar el texto principal.                              |
| classNameTextSwich  | Pick\<TextProps, 'tag' \| 'className'\>                                     | no        | \{\}                 | Clase CSS para personalizar los textos de los interruptores.                 |
| classNameInputSwich | InputSwichClassProps                                                        | no        | \{\}                 | Clase CSS para personalizar los interruptores.                               |
| classNameContentTop | string                                                                      | no        | ''                   | Clase CSS para personalizar el contenedor superior del contenido.            |
| classNameLabelSwich | string                                                                      | no        | ''                   | Clase CSS para personalizar las etiquetas de los interruptores.              |
| classNameClear      | string                                                                      | no        | ''                   | Clase CSS para personalizar el icono de limpiar filtros.                     |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/filter-date--index)

### Usos

-   Básico

```tsx copy
<FilterDate />
```

-   Con valores iniciales

```tsx copy
<FilterDate
    defaultValue={{ type: "range", dateRange: [new Date(), new Date()] }}
/>
```

-   Con botón extra

```tsx copy
<FilterDate extraListBtn={[({ data }) => <button>Extra</button>]} />
```

-   Con formato personalizado

```tsx copy
<FilterDate
    formatDateOption={{
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }}
/>
```
