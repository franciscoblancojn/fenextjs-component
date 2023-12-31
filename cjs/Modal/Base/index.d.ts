import React, { PropsWithChildren } from "react";
import { _TProps } from "fenextjs-interface";
/**
 * Properties for the base ModalBase component.
 */
export interface ModalBaseBaseProps extends PropsWithChildren, _TProps {
    /**
     * If active modal.
     */
    active?: boolean;
    /**
     * If disabled close modal.
     */
    disabledClose?: boolean;
    /**
     * Type of modal.
     */
    type?: "top" | "left" | "right" | "bottom" | "center" | "full" | "layout-grid";
    /**
     * Type of btn close for modal.
     */
    typeClose?: "out" | "inset" | "none";
    /**
     * onClose ModalBase.
     */
    onClose?: () => void;
}
/**
 * Properties for the class of the ModalBase component.
 */
export interface ModalBaseClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for Bg the component.
     */
    classNameBg?: string;
    /**
     * The class name for Icon Close the component.
     */
    classNameClose?: string;
    /**
     * The class name for Content the component.
     */
    classNameContent?: string;
}
/**
 * Properties for the ModalBase component.
 */
export interface ModalBaseProps extends ModalBaseBaseProps, ModalBaseClassProps {
}
export declare const ModalBase: ({ className, classNameBg, classNameContent, classNameClose, active, disabledClose, type, typeClose, onClose, children, _t, }: ModalBaseProps) => React.JSX.Element;
