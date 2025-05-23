import React from "react";
import { InputSearchBaseProps, InputSearchClassProps } from "../../Input/Search";
import { _TProps, SearchDataProps } from "fenextjs-interface";
export interface FilterSearchClassProps {
    className?: string;
    classNameSearch?: InputSearchClassProps;
}
export interface FilterSearchProps extends Omit<InputSearchBaseProps, "defaultValue" | "onChange">, FilterSearchClassProps, _TProps {
    defaultValue?: SearchDataProps;
    onChange?: (data: SearchDataProps) => void;
    nameFilter?: string;
}
export declare const FilterSearch: ({ className, classNameSearch, onChange, defaultValue, nameFilter, ...p }: FilterSearchProps) => React.JSX.Element;
