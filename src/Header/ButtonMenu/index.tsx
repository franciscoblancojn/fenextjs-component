import { _TProps } from "fenextjs-interface";
import { Loader } from "../../Loader";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { use_T } from "fenextjs-hook";

/**
 * Properties for the base ButtonMenu component.
 */
export interface ButtonMenuBaseProps extends PropsWithChildren, _TProps {
    /**
     * Indicates whether the Collapse is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Collapse is disabled or not.
     */
    disabled?: boolean;
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
    /**
     * target for btn.
     */
    target?: string;
}

/**
 * Properties for the class of the ButtonMenu component.
 */
export interface ButtonMenuClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name Icon for the component.
     */
    classNameIcon?: string;
    /**
     * The class name Icon for the component.
     */
    classNameIconBarClose?: string;
    /**
     * The class name for content children.
     */
    classNameContent?: string;
}

/**
 * Properties for the ButtonMenu component.
 */
export interface ButtonMenuProps
    extends ButtonMenuBaseProps,
        ButtonMenuClassProps {}

export const ButtonMenu = ({
    className = "",
    classNameIcon = "",
    classNameIconBarClose = "",
    classNameContent = "",

    loader = false,
    disabled = false,
    defaultActive: defaultActiveProps = undefined,
    children,
    target = "fenext-btn-menu-checkbox",
    ...props
}: ButtonMenuProps) => {
    const { _t } = use_T({ ...props });
    const [defaultActive, setDefaultActive] = useState(true);
    const onLoad = () => {
        if (typeof window == "undefined") {
            setTimeout(onLoad, 100);
        } else {
            setDefaultActive(window.innerWidth > 575);
        }
    };
    useEffect(() => {
        onLoad();
    }, []);
    return (
        <>
            <label className={`fenext-btn-menu ${className}`}>
                <input
                    type={"checkbox"}
                    className={`fenext-btn-menu-checkbox`}
                    disabled={disabled || loader}
                    defaultChecked={defaultActiveProps ?? defaultActive}
                    key={defaultActiveProps ?? defaultActive ? "0" : "1"}
                    name={target}
                    id={target}
                />
                {loader ? (
                    <>
                        <Loader />
                    </>
                ) : (
                    <>
                        <div
                            className={`fenext-btn-menu-icon ${classNameIcon}`}
                        >
                            <div
                                className={`fenext-btn-menu-icon-bar-close ${classNameIconBarClose}`}
                            />
                        </div>
                        <div
                            className={`fenext-btn-menu-content ${classNameContent}`}
                        >
                            {_t(children)}
                        </div>
                    </>
                )}
            </label>
        </>
    );
};
