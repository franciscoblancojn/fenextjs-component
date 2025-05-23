import React, { ReactNode } from "react";
import { PaginationProps } from "../Pagination";
import { TableActionCheckboxProps } from "../TableActionCheckbox";
import { _TProps } from "fenextjs-interface";
import { CollapseProps } from "../Collapse/Simple";
import { ErrorFenextjs } from "fenextjs-error";
export interface TableClassProps {
    classNameContent?: string;
    classNameContentTable?: string;
    classNameTable?: string;
    classNameTHead?: string;
    classNameTBody?: string;
    classNameThr?: string;
    classNameTr?: string;
    classNameTh?: string;
    classNameTd?: string;
    classNameTdLabelCollapse?: string;
    classNameContentPagination?: string;
    classNameLoader?: string;
}
export type TableHeader<T> = {
    id: keyof T;
    th: ReactNode;
    thText?: string;
    parse?: (data: T, i?: number) => any;
    columnOptions?: {
        orderBy?: boolean;
    };
    defaultShowHidden?: "show" | "hidden";
    colNewTr?: boolean;
    isCollapse?: boolean;
    collapseProps?: Omit<CollapseProps, "children">;
    className?: string;
    hidden?: boolean;
}[];
export interface TableBaseProps<T> extends _TProps {
    name: string;
    items: T[];
    nItems?: number;
    error?: ErrorFenextjs;
    header: TableHeader<T>;
    pagination?: Omit<PaginationProps, "nItems">;
    loader?: boolean;
    typeLoader?: "spinner" | "line";
    useCheckbox?: boolean;
    onChecked?: (items: T[]) => void;
    onOrderBy?: (order: {
        id: keyof T;
        order: "ASC" | "DESC";
    }) => void;
    notResult?: ReactNode;
    showPagination?: boolean;
    actionsCheckbox?: Omit<TableActionCheckboxProps<T>, "actionAllCheckbox" | "data">;
    actionsCheckboxSelectAll?: ReactNode;
    restartPaginationInRenderTable?: boolean;
}
export interface TableProps<T> extends TableClassProps, TableBaseProps<T> {
}
export declare const Table: <T>({ classNameContent, classNameContentTable, classNameTable, classNameTHead, classNameTBody, classNameThr, classNameTr, classNameTh, classNameTd, classNameTdLabelCollapse, classNameContentPagination, classNameLoader, name, items, header, error, nItems, pagination, showPagination, loader, typeLoader, useCheckbox, onOrderBy, restartPaginationInRenderTable, onChecked, notResult, actionsCheckbox, actionsCheckboxSelectAll, ...props }: TableProps<T>) => React.JSX.Element;
