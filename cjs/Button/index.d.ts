import React, { PropsWithChildren, ReactNode } from "react";
import { LoaderClassProps } from "../Loader";
import { _TProps } from "fenextjs-interface";
export type ButtonBaseSize = "extra-small" | "small" | "normal" | "strong" | "extra-strong";
/**
 * Properties for the base button component.
 */
export interface ButtonBaseProps extends PropsWithChildren, _TProps {
    /**
     * Indicates whether the button is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the button is disabled or not.
     */
    disabled?: boolean;
    /**
     * The callback function that is called when the button is clicked.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement> & React.MouseEventHandler<HTMLDivElement>;
    /**
     * The icon to display in the button.
     */
    icon?: ReactNode;
    /**
     * Indicates whether the component should render as a button element.
     */
    isBtn?: boolean;
    /**
     * The Size of Button.
     */
    size?: ButtonBaseSize;
    /**
     * The Size  Full of Button.
     */
    full?: boolean;
}
/**
 * Properties for the class of the button component.
 */
export interface ButtonClassProps extends LoaderClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
}
/**
 * Properties for the button component.
 */
export interface ButtonProps extends ButtonBaseProps, ButtonClassProps {
}
export declare const Button: ({ className, classNameLoader, children, loader, disabled, onClick, icon, isBtn, full, size, _t, }: ButtonProps) => React.JSX.Element;
