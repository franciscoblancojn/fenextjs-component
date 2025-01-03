import { use_T } from "fenextjs-hook";
import { InputSelectT } from "../../Input/SelectT";
import { InputColor } from "../../Input/Color";
import { InputNumberCount } from "../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, useMemo } from "react";
import { SvgEdit } from "fenextjs-svg";
import { Collapse, CollapseProps } from "../../Collapse/Simple";
import { Text } from "../../Text";
import {
    ConstDesignTypographyDecorationUnit,
    ConstDesignTypographyFontSizeUnit,
    ConstDesignTypographyLetterSpacingUnit,
    ConstDesignTypographyLineHeightUnit,
    ConstDesignTypographyStyleUnit,
    ConstDesignTypographyTextAlignUnit,
    ConstDesignTypographyTransformUnit,
    ConstDesignTypographyWeightUnit,
    ConstDesignTypographyWordSpacingUnit,
    DesignTypographyValue,
} from "./fontUnit";
import { useData } from "fenextjs-hook";
import { parseDesignTypographyValueProps_to_CSSProperties } from "./parse";

/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyValueProps
    extends Partial<DesignTypographyValue> {}

/**
 * Properties for the base DesignTypography component.
 */
export interface DesignTypographyProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;

    defaultValue?: DesignTypographyValueProps;
    value?: DesignTypographyValueProps;
    onChange?: (data: DesignTypographyValueProps) => void;
    onChangeStyles?: (data: CSSProperties) => void;

    textTypography?: string;
    textExample?: string;
    textExampleValue?: string;
    textColor?: string;
    textSize?: string;
    textAlign?: string;
    textWeight?: string;
    textTransform?: string;
    textStyle?: string;
    textDecoration?: string;
    textLineHeight?: string;
    textLetterSpacing?: string;
    textWordSpacing?: string;

    collapseName?: CollapseProps["name"];
    collapseType?: CollapseProps["type"];
    collapseUseActiveForShowChildren?: CollapseProps["useActiveForShowChildren"];
}

export const DesignTypography = ({
    className = "",

    textTypography = "Typography",
    textExample = "Example",
    textExampleValue = "Lorem ipsum dolor sit",
    textColor = "Color",
    textSize = "Size",
    textAlign = "Alignment",
    textWeight = "Weight",
    textTransform = "Transform",
    textStyle = "Style",
    textDecoration = "Decoration",
    textLineHeight = "Line Height",
    textLetterSpacing = "Letter Spacing",
    textWordSpacing = "Word Spacing",

    defaultValue = {
        fontSize: 20,
        fontSizeUnit: "px",
        textAlign: "left",
        weight: 400,
        transform: "none",
        style: "normal",
        decoration: "normal",
        lineHeight: 1.2,
        lineHeightUnit: "normal",
        letterSpacing: 0,
        letterSpacingUnit: "px",
        wordSpacing: 0,
        wordSpacingUnit: "px",
    },
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
    collapseUseActiveForShowChildren = true,
    ...props
}: DesignTypographyProps) => {
    const { _t } = use_T({ ...props });
    const {
        data: data_,
        onChangeData,
        dataMemo,
    } = useData<DesignTypographyValueProps, CSSProperties>(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parseDesignTypographyValueProps_to_CSSProperties,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div className={`fenext-design-typography ${className} `}>
                <Collapse
                    header={<>{_t(textTypography)}</>}
                    iconArrow={
                        <>
                            <SvgEdit />
                        </>
                    }
                    rotateIcon={false}
                    name={collapseName}
                    type={collapseType}
                    useActiveForShowChildren={collapseUseActiveForShowChildren}
                >
                    <div className={`fenext-design-typography-content `}>
                        <div
                            className={`fenext-design-typography-item fenext-design-typography-item-2`}
                        >
                            <Text>{_t(textExample)}</Text>
                            <div
                                className={`fenext-design-typography-content-example `}
                            >
                                <Text>
                                    <div style={dataMemo}>
                                        {_t(textExampleValue)}
                                    </div>
                                </Text>
                            </div>
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textColor)}</Text>
                            <InputColor
                                defaultValue={data.color}
                                onChange={onChangeData("color")}
                            />
                        </div>
                        <div
                            className={`fenext-design-typography-item fenext-design-typography-item-3`}
                        >
                            <Text>{_t(textSize)}</Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.fontSizeUnit}
                                defaultValue={data.fontSize}
                                min={0}
                                aplyMin={true}
                                onChange={onChangeData("fontSize")}
                            />
                            <InputSelectT<DesignTypographyValue["fontSizeUnit"]>
                                onParse={_p}
                                options={[...ConstDesignTypographyFontSizeUnit]}
                                defaultValue={data.fontSizeUnit}
                                onChange={onChangeData("fontSizeUnit")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textAlign)}</Text>
                            <InputSelectT<DesignTypographyValue["textAlign"]>
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyTextAlignUnit,
                                ]}
                                defaultValue={data.textAlign}
                                onChange={onChangeData("textAlign")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textWeight)}</Text>
                            <InputSelectT<DesignTypographyValue["weight"]>
                                onParse={_p}
                                options={[...ConstDesignTypographyWeightUnit]}
                                defaultValue={data.weight}
                                onChange={onChangeData("weight")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textTransform)}</Text>
                            <InputSelectT<DesignTypographyValue["transform"]>
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyTransformUnit,
                                ]}
                                defaultValue={data.transform}
                                onChange={onChangeData("transform")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textStyle)}</Text>
                            <InputSelectT<DesignTypographyValue["style"]>
                                onParse={_p}
                                options={[...ConstDesignTypographyStyleUnit]}
                                defaultValue={data.style}
                                onChange={onChangeData("style")}
                            />
                        </div>
                        <div className={`fenext-design-typography-item `}>
                            <Text>{_t(textDecoration)}</Text>
                            <InputSelectT<DesignTypographyValue["decoration"]>
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyDecorationUnit,
                                ]}
                                defaultValue={data.decoration}
                                onChange={onChangeData("decoration")}
                            />
                        </div>
                        <div
                            className={`fenext-design-typography-item fenext-design-typography-item-3`}
                        >
                            <Text>{_t(textLineHeight)}</Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={
                                    data.lineHeightUnit == "normal"
                                        ? ""
                                        : data.lineHeightUnit
                                }
                                defaultValue={data.lineHeight}
                                onChange={onChangeData("lineHeight")}
                            />
                            <InputSelectT<
                                DesignTypographyValue["lineHeightUnit"]
                            >
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyLineHeightUnit,
                                ]}
                                defaultValue={data.lineHeightUnit}
                                onChange={onChangeData("lineHeightUnit")}
                            />
                        </div>
                        <div
                            className={`fenext-design-typography-item fenext-design-typography-item-3`}
                        >
                            <Text>{_t(textLetterSpacing)}</Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.letterSpacingUnit}
                                defaultValue={data.letterSpacing}
                                onChange={onChangeData("letterSpacing")}
                            />
                            <InputSelectT<
                                DesignTypographyValue["letterSpacingUnit"]
                            >
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyLetterSpacingUnit,
                                ]}
                                defaultValue={data.letterSpacingUnit}
                                onChange={onChangeData("letterSpacingUnit")}
                            />
                        </div>
                        <div
                            className={`fenext-design-typography-item fenext-design-typography-item-3`}
                        >
                            <Text>{_t(textWordSpacing)}</Text>
                            <InputNumberCount
                                symbolInit=""
                                symbolFinal={data.wordSpacingUnit}
                                defaultValue={data.wordSpacing}
                                onChange={onChangeData("wordSpacing")}
                            />
                            <InputSelectT<
                                DesignTypographyValue["wordSpacingUnit"]
                            >
                                onParse={_p}
                                options={[
                                    ...ConstDesignTypographyWordSpacingUnit,
                                ]}
                                defaultValue={data.wordSpacingUnit}
                                onChange={onChangeData("wordSpacingUnit")}
                            />
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    );
};
