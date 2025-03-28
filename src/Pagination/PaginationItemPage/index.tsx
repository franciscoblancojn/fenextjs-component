import React, { ReactNode, useMemo } from "react";

import { SvgPaginationDown } from "fenextjs-svg/cjs/PaginationDown";
import { SvgPaginationNext } from "fenextjs-svg/cjs/PaginationNext";
import { SvgPaginationPre } from "fenextjs-svg/cjs/PaginationPre";
import { SvgPaginationUp } from "fenextjs-svg/cjs/PaginationUp";
import { _TProps } from "fenextjs-interface";
import { usePagination } from "fenextjs-hook";
/**
 * Class properties to customize the style of the pagination.
 */
export interface PaginationItemPageClassProps {
    /**
     * CSS class for the main container of the pagination.
     */
    classNameContent?: string;

    /**
     * CSS class for the "Go Up" button.
     */
    classNameUp?: string;

    /**
     * CSS class for the previous button.
     */
    classNamePre?: string;

    /**
     * CSS class for the current page number.
     */
    classNameCurrent?: string;
    /**
     * CSS class for the current item page number.
     */
    classNameCurrentItem?: string;

    /**
     * CSS class for the next button.
     */
    classNameNext?: string;

    /**
     * CSS class for the "Go Down" button.
     */
    classNameDown?: string;

    /**
     * Custom icons for each button of the pagination.
     */
    icons?: {
        /**
         * Custom icon for the "Go Up" button.
         */
        up?: ReactNode;

        /**
         * Custom icon for the previous button.
         */
        pre?: ReactNode;

        /**
         * Custom icon for the next button.
         */
        next?: ReactNode;

        /**
         * Custom icon for the "Go Down" button.
         */
        down?: ReactNode;
    };
}
/**
 * The base props for the pagination component
 */
export interface PaginationItemPageBaseProps extends _TProps {
    paginationName?: string;
    /**
     * The total number of items to paginate
     */
    nItems: number;
    /**
     * Whether the component is disabled
     */
    disabled?: boolean;
    /**
     * Hidden Pagination of nItems if smaller than or equal of nItemsPages.
     * @default false
     */
    hiddenIfNItemsSmallerThanOrEqualNItemsPage?: boolean;
    /**
     * A callback function that is called when the page changes
     * @param page - The new page number
     */
    onChange?: (page: number) => void;
}
/**
 * Props for PaginationItemPage component
 */
export interface PaginationItemPageProps
    extends PaginationItemPageClassProps,
        PaginationItemPageBaseProps {}

export const PaginationItemPage = ({
    classNameContent = "",
    classNameUp = "",
    classNamePre = "",
    classNameCurrent = "",
    classNameCurrentItem = "",
    classNameNext = "",
    classNameDown = "",
    paginationName,

    icons = {
        up: <SvgPaginationUp />,
        pre: <SvgPaginationPre />,
        next: <SvgPaginationNext />,
        down: <SvgPaginationDown />,
    },

    nItems,

    disabled = false,
    onChange,
    hiddenIfNItemsSmallerThanOrEqualNItemsPage = true,
}: PaginationItemPageProps) => {
    const {
        onChangeData,
        data: { page = 0, npage: nItemsPage = 10 },
    } = usePagination({
        name: paginationName,
        onChage: (e) => {
            onChange?.(e?.page ?? 0);
        },
    });

    const maxPage = useMemo(
        () => (nItemsPage == 0 ? 0 : Math.ceil(nItems / nItemsPage) - 1),
        [nItems, nItemsPage],
    );

    const minMaxValue = (v: number) => {
        return Math.max(0, Math.min(maxPage, v));
    };
    const setPage = (v: number) => {
        if (disabled) {
            return;
        }
        const Value = minMaxValue(v);
        onChangeData("page")(Value);
    };
    const onSetPage = (e: number) => () => setPage(e);

    const addPage = (add: number) => () => {
        setPage(page + add);
    };

    return (
        <div
            className={`fenext-pagination-item-page ${
                hiddenIfNItemsSmallerThanOrEqualNItemsPage &&
                nItems <= nItemsPage
                    ? "fenext-pagination-item-page-hidden"
                    : ""
            } ${classNameContent} `}
        >
            {page > 0 && (
                <>
                    <div
                        key={`fenext-pagination-item-page-up`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-up ${classNameUp}`}
                        onClick={onSetPage(0)}
                    >
                        {icons.up}
                    </div>
                    <div
                        key={`fenext-pagination-item-page-pre`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-pre ${classNamePre}`}
                        onClick={addPage(-1)}
                    >
                        {icons.pre}
                    </div>
                </>
            )}
            <div
                className={`fenext-pagination-item-page-current ${classNameCurrent}`}
            >
                {page > 2 ? (
                    <>
                        <div
                            key={`fenext-pagination-item-page-current-item-init`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-init ${classNameCurrentItem}`}
                            onClick={onSetPage(0)}
                        >
                            {1}
                        </div>
                        <div
                            key={`fenext-pagination-item-page-current-item-init-dog`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}`}
                        >
                            ...
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {new Array(5).fill(1).map((e, i) => {
                    const n = e * i - 2 + page;
                    if (n < 0 || n > maxPage) {
                        return <></>;
                    }
                    return (
                        <>
                            <div
                                key={`fenext-pagination-item-page-current-item-${i}`}
                                className={`fenext-pagination-item-page-current-item ${
                                    n == page
                                        ? "fenext-pagination-item-page-current-item-active"
                                        : ""
                                } ${classNameCurrentItem}`}
                                onClick={onSetPage(n)}
                            >
                                {n + 1}
                            </div>
                        </>
                    );
                })}
                {page < maxPage - 2 ? (
                    <>
                        <div
                            key={`fenext-pagination-item-page-current-item-final-dog`}
                            className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-current-item-dog ${classNameCurrentItem}`}
                        >
                            ...
                        </div>
                        <div
                            key={`fenext-pagination-item-page-current-item-final`}
                            className={`fenext-pagination-item-page-current-item  fenext-pagination-item-page-current-item-final ${classNameCurrentItem}`}
                            onClick={onSetPage(maxPage)}
                        >
                            {maxPage + 1}
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            {page < maxPage && (
                <>
                    <div
                        key={`fenext-pagination-item-page-next`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-next ${classNameNext}`}
                        onClick={addPage(1)}
                    >
                        {icons.next}
                    </div>
                    <div
                        key={`fenext-pagination-item-page-down`}
                        className={`fenext-pagination-item-page-current-item fenext-pagination-item-page-down ${classNameDown}`}
                        onClick={onSetPage(maxPage)}
                    >
                        {icons.down}
                    </div>
                </>
            )}
        </div>
    );
};
