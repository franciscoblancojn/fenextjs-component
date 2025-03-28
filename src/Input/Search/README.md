# InputSearch

El componente InputSearch permite realizar búsquedas de manera eficiente y personalizable. Incluye soporte para resultados de búsqueda, filtros por pestañas y opciones de carga adicional.

### Importación

Para importar el componente InputSearch, se puede hacer desde fenextjs

```tsx copy
import { InputSearch } from "fenextjs";
```

### Parámetros

| Parámetro                    | Tipo                                                                                             | Requerido | Default                                 | Descripcion                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | --------- | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| classNameSearch              | string                                                                                           | no        | ''                                      | Clase CSS para personalizar el contenedor del campo de búsqueda.                           |
| classNameSearchBg            | string                                                                                           | no        | ''                                      | Clase CSS para el fondo del campo de búsqueda.                                             |
| classNameSearchContentResult | string                                                                                           | no        | ''                                      | Clase CSS para el contenedor de resultados de búsqueda.                                    |
| classNameSearchResult        | string                                                                                           | no        | ''                                      | Clase CSS para los elementos de resultado de búsqueda.                                     |
| placeholder                  | string                                                                                           | no        | 'Search'                                | Texto que se muestra cuando el campo de búsqueda está vacío.                               |
| icon                         | ReactNode                                                                                        | no        | \<SVGSearch /\>                         | Ícono que se muestra en el campo de búsqueda.                                              |
| iconClear                    | ReactNode                                                                                        | no        | \<Close /\>                             | Ícono que se muestra para limpiar la búsqueda.                                             |
| onSearch                     | (value: string, tabFilter?: InputSearchTabFilterProps[]) =\> Promise\<InputSearchResultProps[]\> | no        | undefined                               | Función que se llama al realizar una búsqueda, pasando el valor y los filtros de pestañas. |
| onEnterSearch                | (value: string) =\> void                                                                         | no        | undefined                               | Función que se ejecuta al presionar Enter en el campo de búsqueda.                         |
| onClearSearch                | () =\> void                                                                                      | no        | undefined                               | Función que se ejecuta al limpiar el campo de búsqueda.                                    |
| onClickSearch                | (result: InputSearchResultProps) =\> void                                                        | no        | undefined                               | Función que se ejecuta al hacer click en un resultado de búsqueda.                         |
| useResult                    | boolean                                                                                          | no        | false                                   | Indica si se debe mostrar la lista de resultados de búsqueda.                              |
| useLoadMore                  | boolean                                                                                          | no        | true                                    | Indica si se debe permitir cargar más resultados.                                          |
| ButtonLoadMoreProps          | Omit\<ButtonProps, 'onClick'\>                                                                   | no        | \{ children: 'Load More' \}             | Propiedades para el botón de carga adicional.                                              |
| resultList                   | InputSearchResultProps[]                                                                         | no        | undefined                               | Lista de resultados de búsqueda que se muestran.                                           |
| resultEmpty                  | ReactNode                                                                                        | no        | \<Title tag='h4'\>Not Results\</Title\> | Contenido que se muestra cuando no hay resultados de búsqueda.                             |
| resultPreSearch              | ReactNode                                                                                        | no        | \<Title tag='h4'\>Search\</Title\>      | Contenido que se muestra antes de realizar una búsqueda.                                   |
| listTabFilter                | InputSearchTabFilterProps[]                                                                      | no        | []                                      | Lista de filtros por pestañas que se pueden aplicar a la búsqueda.                         |
| defaultTabFilterSelected     | InputSearchTabFilterProps[]                                                                      | no        | []                                      | Lista de filtros por pestañas seleccionados por defecto.                                   |
| onChangeTabFilterSelected    | (selected: InputSearchTabFilterProps[]) =\> void                                                 | no        | undefined                               | Función que se ejecuta al cambiar los filtros por pestañas seleccionados.                  |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputsearch--index)

### Usos

-   Búsqueda básica

```tsx copy
<InputSearch onSearch={async (value) => await fetchResults(value)} />
```

-   Búsqueda con carga de más resultados

```tsx copy
<InputSearch
    onSearch={async (value) => await fetchResults(value)}
    useLoadMore={true}
/>
```

-   Búsqueda con filtros por pestañas

```tsx copy
<InputSearch
    onSearch={async (value) => await fetchResults(value)}
    useTabFilter={true}
    listTabFilter={[{ id: "tab1", text: "Tab 1" }]}
/>
```
