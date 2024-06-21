import { _TProps } from "fenextjs-interface";
export declare const ConstDesignBoxMarginUnit: readonly ["px", "em", "rem"];
export type DesignBoxMarginUnit = (typeof ConstDesignBoxMarginUnit)[number];
export declare const ConstDesignBoxPaddingUnit: readonly ["px", "em", "rem"];
export type DesignBoxPaddingUnit = (typeof ConstDesignBoxPaddingUnit)[number];
export declare const ConstDesignBoxBorderUnit: readonly ["px", "em", "rem"];
export type DesignBoxBorderUnit = (typeof ConstDesignBoxBorderUnit)[number];
export declare const ConstDesignBoxBorderRadiusUnit: readonly ["px", "em", "rem"];
export type DesignBoxBorderRadiusUnit = (typeof ConstDesignBoxBorderRadiusUnit)[number];
export declare const ConstDesignBoxWidthUnit: readonly ["px", "em", "rem", "%", "vw", "dvw", "auto"];
export type DesignBoxWidthUnit = (typeof ConstDesignBoxWidthUnit)[number];
export declare const ConstDesignBoxHeightUnit: readonly ["px", "em", "rem", "%", "vw", "dvw", "auto"];
export type DesignBoxHeightUnit = (typeof ConstDesignBoxHeightUnit)[number];
export declare const ConstDesignBoxJustifyContentUnit: readonly ["center", "end", "start", "space-around", "space-between", "space-evenly", "stretch"];
export type DesignBoxJustifyContentUnit = (typeof ConstDesignBoxJustifyContentUnit)[number];
export declare const ConstDesignBoxAlignItemsUnit: readonly ["baseline", "normal", "stretch", "center", "end", "start"];
export type DesignBoxAlignItemsUnit = (typeof ConstDesignBoxAlignItemsUnit)[number];
export declare const ConstDesignBoxGapsUnit: readonly ["px", "em", "rem"];
export type DesignBoxGapsUnit = (typeof ConstDesignBoxGapsUnit)[number];
export interface DesignBoxValue {
    background?: string;
    marginTogether?: boolean;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginUnit?: DesignBoxMarginUnit;
    paddingTogether?: boolean;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingUnit?: DesignBoxPaddingUnit;
    borderTogether?: boolean;
    borderTop?: number;
    borderRight?: number;
    borderBottom?: number;
    borderLeft?: number;
    borderUnit?: DesignBoxBorderUnit;
    borderRadiusTogether?: boolean;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderUnitRadius?: DesignBoxBorderRadiusUnit;
    borderColor?: string;
    width?: number;
    widthUnit?: DesignBoxWidthUnit;
    maxWidth?: number;
    maxWidthUnit?: DesignBoxWidthUnit;
    minWidth?: number;
    minWidthUnit?: DesignBoxWidthUnit;
    height?: number;
    heightUnit?: DesignBoxHeightUnit;
    maxHeight?: number;
    maxHeightUnit?: DesignBoxHeightUnit;
    minHeight?: number;
    minHeightUnit?: DesignBoxHeightUnit;
    justifyContent?: DesignBoxJustifyContentUnit;
    alignItems?: DesignBoxAlignItemsUnit;
    gapTogether?: boolean;
    gapRow?: number;
    gapColumn?: number;
    gapUnit?: DesignBoxGapsUnit;
}
export type DesignBoxValueProps = Partial<DesignBoxValue>;
export interface DesignBoxUseDataProps extends _TProps {
    defaultValue?: DesignBoxValueProps;
    value?: DesignBoxValueProps;
    onChange?: (data: DesignBoxValueProps) => void;
}