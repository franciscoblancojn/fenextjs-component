import React, { useMemo } from "react";

import {
    PaginationItemPage,
    PaginationItemPageBaseProps,
    PaginationItemPageClassProps,
} from "../PaginationItemPage";
import {
    PaginationNPage,
    PaginationNPageBaseProps,
    PaginationNPageClassProps,
} from "../PaginationNPage";
import { _TProps } from "fenextjs-interface";

/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    className?: string;
    /**
     * Object with className of component classNameNPage.
     */
    classNameItemPage?: PaginationItemPageClassProps;
    /**
     * Object with className of component PaginationNPage.
     */
    classNameNPage?: PaginationNPageClassProps;
}
/**
 * The base props for the pagination component
 */
export interface PaginationBaseProps
    extends PaginationItemPageBaseProps,
        PaginationNPageBaseProps,
        _TProps {
    showItemPage?: boolean;
    showNPage?: boolean;
}
/**
 * Props for Pagination component
 */
export interface PaginationProps
    extends PaginationClassProps,
        PaginationBaseProps {}

export const Pagination = ({
    className = "",
    classNameItemPage = {},
    classNameNPage = {},
    showItemPage = true,
    showNPage = true,
    listNpage = [
        {
            id: "10",
            text: "10",
        },
        {
            id: "20",
            text: "20",
        },
        {
            id: "50",
            text: "50",
        },
        {
            id: "100",
            text: "100",
        },
        {
            id: "all",
            text: "All",
        },
    ],
    _t,
    ...props
}: PaginationProps) => {
    const minPage = useMemo(() => {
        let m = Infinity;
        listNpage?.forEach((e) => {
            const n = parseInt(`${e?.id ?? ""}`);
            if (n && !Number.isNaN(n)) {
                m = Math.min(m, n);
            }
        });
        return m;
    }, [listNpage]);

    return (
        <div className={`fenext-pagination ${className}`}>
            <div className={`fenext-pagination-content-item-page ${className}`}>
                {showItemPage && (
                    <PaginationItemPage
                        {...classNameItemPage}
                        {...props}
                        _t={_t}
                    />
                )}
            </div>
            <div className={`fenext-pagination-content-n-page ${className}`}>
                {showNPage && minPage < (props?.nItems ?? minPage + 1) && (
                    <PaginationNPage
                        {...classNameNPage}
                        {...props}
                        listNpage={listNpage}
                        _t={_t}
                    />
                )}
            </div>
        </div>
    );
};
