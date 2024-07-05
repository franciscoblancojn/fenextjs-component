import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import LinkNext, { LinkProps as LinkNextProps } from "next/link";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export type LinkTypeOnLink = "history" | "router" | "link" | "none";

/**
 * Properties for the base Link component.
 */
export interface LinkBaseProps
    extends PropsWithChildren,
        LinkNextProps,
        Pick<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            "target" | "referrerPolicy" | "rel"
        >,
        _TProps {}

/**
 * Properties for the class of the Link component.
 */
export interface LinkClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}

/**
 * Properties for the Link component.
 */
export interface LinkProps extends LinkBaseProps, LinkClassProps {}

export const Link = ({
    className = "",

    children = "Link",
   
    ...props
}: LinkProps) => {
    const {_t} = use_T({...props})
    return (
        <>
            <LinkNext {...props} className={`fenext-link ${className}`}>
                <>{_t(children)}</>
            </LinkNext>
        </>
    );
};
