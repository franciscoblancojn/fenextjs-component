import React, {
    useCallback,
    ReactNode,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    useDocumentEvent,
    TypeListenerFunctions,
} from "fenextjs-hook/cjs/useDocumentEvent";
import { Button } from "../Button";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";

export interface StepsItemProps {
    /**
     * Item label.
     */
    label: ReactNode;
    /**
     * Item icon.
     */
    icon?: ReactNode;
    /**
     * Item content.
     */
    content: ReactNode;
    /**
     * status Item.
     */
    status?: "none" | "ok" | "error";
}

/**
 * Properties for the base Steps component.
 */
export interface StepsBaseProps extends _TProps {
    /**
     * Items steps.
     */
    items: StepsItemProps[];
    /**
     * defaultStep show.
     * @default 0
     */
    defaultStep?: number;
    /**
     * Step show.
     * @default undefined
     */
    step?: number;
    /**
     * useArrowKey.
     * @default true
     */
    useArrowKey?: boolean;
    /**
     * Content of Button previous.
     * @default "Previous"
     */
    btnPrev?: ReactNode;
    /**
     * Content of Button next.
     * @default "Next"
     */
    btnNext?: ReactNode;
    /**
     * If Disabled Button previous.
     * @default false
     */
    disabledBtnPrev?: boolean;
    /**
     * If Disabled Button next.
     * @default false
     */
    disabledBtnNext?: boolean;
    /**
     * onClick in btn Prev.
     */
    onPrev?: (step: number) => Promise<void> | void;
    /**
     * onClick in btn Next.
     */
    onNext?: (step: number) => Promise<void> | void;

    onPrevDisabled?: () => void;
    onNextDisabled?: () => void;
    /**
     * onSetStep.
     */
    onSetStep?: (step: number) => void;
    /**
     * Position of list Step.
     * @default left
     */
    stepPos?: "top" | "left" | "right";
    /**
     * showCurrentStepNStep of list Step.
     * @default false
     */
    showCurrentStepNStep?: boolean;
    /**
     * useDogs of list Step.
     * @default false
     */
    useDogs?: boolean;
}

/**
 * Properties for the class of the Steps component.
 */
export interface StepsClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the content steps.
     */
    classNameContentSteps?: string;
    /**
     * The class name for the content steps.
     */
    classNameListSteps?: string;
    /**
     * The class name for the contents items.
     */
    classNameContentItems?: string;
    /**
     * The class name for the step.
     */
    classNameStep?: string;
    /**
     * The class name for the item.
     */
    classNameItem?: string;
    /**
     * The class name for the step acitve.
     */
    classNameStepActive?: string;
    /**
     * The class name for the item acitve.
     */
    classNameItemActive?: string;
    /**
     * The class name for the step circle.
     */
    classNameStepCircle?: string;
    /**
     * The class name for the step label.
     */
    classNameStepLabel?: string;
    /**
     * The class name for the content btn next and prev.
     */
    classNameContentBtn?: string;
    /**
     * The class name for the btn next and prev.
     */
    classNameBtn?: string;

    classNameBtnDisabled?: string;
    /**
     * The class name for the btn next.
     */
    classNameBtnNext?: string;
    classNameBtnNextDisabled?: string;
    /**
     * The class name for the btn prev.
     */
    classNameBtnPrev?: string;
    classNameBtnPrevDisabled?: string;

    forceShowBtnPrev?: boolean;

    forceShowBtnNext?: boolean;

    /**
     * The class name for the content btn next and prev.
     */
    classNameContentDog?: string;
    /**
     * The class name for the btn next and prev.
     */
    classNameDog?: string;

    classNameDogCurrent?: string;
}

/**
 * Properties for the Steps component.
 */
export interface StepsProps extends StepsBaseProps, StepsClassProps {}

export const Steps = ({
    className = "",
    classNameContentItems = "",
    classNameContentSteps = "",
    classNameListSteps = "",
    classNameItem = "",
    classNameItemActive = "",
    classNameStep = "",
    classNameStepActive = "",
    classNameStepCircle = "",
    classNameStepLabel = "",
    classNameContentBtn = "",
    classNameBtn = "",
    classNameBtnDisabled = "",
    classNameBtnNext = "",
    classNameBtnNextDisabled = "",
    classNameBtnPrev = "",
    classNameBtnPrevDisabled = "",
    classNameContentDog = "",
    classNameDog = "",
    classNameDogCurrent = "",

    defaultStep = 0,
    step = undefined,
    items = [],
    btnNext = "Next",
    btnPrev = "Previous",
    disabledBtnNext = false,
    disabledBtnPrev = false,
    onNext,
    onPrev,
    onNextDisabled,
    onPrevDisabled,
    stepPos = "left",
    showCurrentStepNStep = false,
    useArrowKey = false,
    useDogs = false,
    onSetStep,
    forceShowBtnPrev = false,
    forceShowBtnNext = false,
    ...props
}: StepsProps) => {
    const { _t } = use_T({ ...props });
    const ref = useRef<HTMLDivElement>(null);
    const [loader, setLoader] = useState(false);
    const parseCurrentStep = useCallback(
        (n: number) => {
            return Math.max(0, Math.min(n, items.length - 1));
        },
        [items.length],
    );
    const [currentStep___, setCurrentStep__] = useState(defaultStep);

    const setCurrentStep = (e: number) => {
        setCurrentStep__(e);
        onSetStep?.(e);
    };

    const currentStep = useMemo(
        () => parseCurrentStep(step ?? currentStep___),
        [currentStep___, step, items.length],
    );

    const getNumberSum = useCallback(
        (a: number) => {
            return parseCurrentStep(currentStep + a);
        },
        [currentStep, items.length],
    );

    const onMoveStep = async (add: number, fn?: (n: number) => any) => {
        if (
            ref &&
            ref?.current &&
            ref?.current?.classList?.contains("fenext-steps-not-loader")
        ) {
            setLoader(true);
            try {
                const n = getNumberSum(add);
                if (fn) {
                    await fn(n);
                }
                setCurrentStep(n);
            } finally {
                setLoader(false);
            }
            setLoader(false);
        }
    };

    const onNext_ = async () => {
        if (disabledBtnNext) {
            return;
        }
        await onMoveStep(1, onNext);
    };

    const onPrev_ = async () => {
        if (disabledBtnPrev) {
            return;
        }
        await onMoveStep(-1, onPrev);
    };

    const keydown: TypeListenerFunctions<"keydown"> = useCallback(
        (e) => {
            if (!useArrowKey) {
                return;
            }
            if (e.keyCode == 37) {
                onPrev_();
            }
            if (e.keyCode == 39) {
                onNext_();
            }
        },
        [
            currentStep,
            useArrowKey,
            disabledBtnNext,
            disabledBtnPrev,
            items.length,
        ],
    );

    useDocumentEvent({
        keydown,
    });

    return (
        <>
            <div
                ref={ref}
                className={`
                    fenext-steps
                    fenext-steps-${loader ? "loader" : "not-loader"}
                    fenext-steps-pos-${stepPos}
                    fenext-steps-pos-${stepPos}
                    ${className} 
                    `}
            >
                <div
                    className={`fenext-steps-content-steps ${classNameContentSteps} `}
                >
                    <div
                        className={`fenext-steps-list-steps ${classNameListSteps} `}
                    >
                        {items.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`fenext-steps-step ${classNameStep} ${
                                        currentStep == i
                                            ? `fenext-steps-step-active ${classNameStepActive}`
                                            : ""
                                    }
                                        fenext-steps-step-status-${
                                            item?.status ?? "none"
                                        } 
                                    `}
                                >
                                    <div
                                        className={`fenext-steps-step-circle ${classNameStepCircle} `}
                                    >
                                        {item.icon ?? i + 1}
                                    </div>
                                    <div
                                        className={`fenext-steps-step-label ${classNameStepLabel} `}
                                    >
                                        {_t(item.label)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className={`fenext-steps-content-items ${classNameContentItems} `}
                >
                    {items.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className={`fenext-steps-item ${classNameItem} ${
                                    currentStep == i
                                        ? `fenext-steps-item-active ${classNameItemActive}`
                                        : ""
                                } `}
                            >
                                {_t(item.content)}
                            </div>
                        );
                    })}
                </div>
                <div
                    className={`fenext-steps-content-btn ${classNameContentBtn} `}
                >
                    {(currentStep != 0 || forceShowBtnPrev) && (
                        <Button
                            className={`fenext-steps-btn fenext-steps-btn-prev ${classNameBtn} ${classNameBtnPrev}`}
                            classNameDisabled={`${classNameBtnDisabled} ${classNameBtnPrevDisabled}`}
                            disabled={disabledBtnPrev || currentStep == 0}
                            onClick={onPrev_}
                            onClickDisabled={onPrevDisabled}
                            loader={loader}
                            _t={_t}
                        >
                            {btnPrev}
                        </Button>
                    )}
                    {showCurrentStepNStep && items.length > 1 && (
                        <>
                            <div className="fenext-steps-current-step">
                                {currentStep + 1} / {items.length}
                            </div>
                        </>
                    )}
                    {useDogs && items.length > 1 && (
                        <>
                            <div
                                className={`fenext-steps-content-dog ${classNameContentDog}`}
                            >
                                {new Array(items.length).fill(1).map((e, i) => {
                                    return (
                                        <>
                                            <div
                                                key={e * i}
                                                onClick={() => {
                                                    setCurrentStep(i);
                                                }}
                                                className={`
                                                    fenext-steps-dog
                                                    ${classNameDog}
                                                ${
                                                    currentStep == i
                                                        ? `fenext-steps-dog-current ${classNameDogCurrent}`
                                                        : ""
                                                }    

                                                `}
                                            ></div>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    )}
                    {(currentStep != items.length - 1 || forceShowBtnNext) && (
                        <Button
                            className={`fenext-steps-btn fenext-steps-btn-next ${classNameBtn} ${classNameBtnNext}`}
                            classNameDisabled={`${classNameBtnDisabled} ${classNameBtnNextDisabled}`}
                            disabled={
                                disabledBtnNext ||
                                currentStep === items.length - 1
                            }
                            onClick={onNext_}
                            onClickDisabled={onNextDisabled}
                            loader={loader}
                            _t={_t}
                        >
                            {btnNext}
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};
