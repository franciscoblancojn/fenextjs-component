"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDate = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Text_1 = require("../Text");
const date_1 = require("fenextjs-svg/cjs/date");
const Date_1 = require("fenextjs-functions/cjs/parse/Date");
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_validator_1 = require("fenextjs-validator");
const InputDate = ({ classNameInputDate = "", type = "date", defaultValue = undefined, value = undefined, min = undefined, max = undefined, onChange, icon = react_1.default.createElement(date_1.Date, null), iconPos = "left", validator, ...props }) => {
    const uuid = (0, react_1.useMemo)(() => new Date().getTime(), []);
    const { data, setData, isChange } = (0, fenextjs_hook_1.useData)(defaultValue);
    const d = (0, react_1.useMemo)(() => `${defaultValue
        ? (0, Date_1.parseDateToText)({ date: defaultValue, type })
        : ""}`, [defaultValue]);
    const [valueString, setValueString] = (0, react_1.useState)(d);
    const changeInput = (e) => {
        const text = e.target.value;
        if (text == "") {
            setValueString("");
            onChange?.(undefined);
            return;
        }
        const nDate = (0, Date_1.parseTextToDate)({
            text,
            type,
        });
        setData(nDate);
        const nText = (0, Date_1.parseDateToText)({ date: nDate, type });
        setValueString(nText);
        onChange?.(nDate);
    };
    const MIN = (0, react_1.useMemo)(() => {
        if (!min) {
            return undefined;
        }
        if (type == "month") {
            return (0, Date_1.getMonthValue)(min);
        }
        if (type == "week") {
            return (0, Date_1.getWeekValue)(min);
        }
        if (type == "time") {
            return (0, Date_1.getTimeValue)(min);
        }
        return min?.toISOString?.().split?.("T")?.[0];
    }, [min, type]);
    const MAX = (0, react_1.useMemo)(() => {
        if (!max) {
            return undefined;
        }
        if (type == "month") {
            return (0, Date_1.getMonthValue)(max);
        }
        if (type == "week") {
            return (0, Date_1.getWeekValue)(max);
        }
        if (type == "time") {
            return (0, Date_1.getTimeValue)(max);
        }
        return max?.toISOString?.().split?.("T")?.[0];
    }, [max, type]);
    const DATALIST = (0, react_1.useMemo)(() => {
        if (type == "time") {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("datalist", { id: `input-date-${uuid}` }, new Array(24).fill(1).map((e, i) => {
                    const h = (0, fenextjs_functions_1.parseNumberCount)(e * i, {
                        minimumIntegerDigits: 2,
                    });
                    return (react_1.default.createElement(react_1.default.Fragment, null, new Array(60).fill(1).map((l, j) => {
                        const m = (0, fenextjs_functions_1.parseNumberCount)(l * j, {
                            minimumIntegerDigits: 2,
                        });
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("option", { value: `${h}:${m}` })));
                    })));
                }))));
        }
        return react_1.default.createElement(react_1.default.Fragment, null);
    }, [uuid, type]);
    const { error: errorFenext } = (0, fenextjs_hook_1.useValidator)({
        data: data,
        validator: validator ?? (0, fenextjs_validator_1.FenextjsValidator)(),
    });
    return (react_1.default.createElement(Text_1.InputText, { ...props, defaultValue: "", value: value ? (0, Date_1.parseDateToText)({ date: value, type }) : valueString, onChange: () => 1, extraInContentInput: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("input", { type: type, onChange: changeInput, className: `fenext-input-date ${classNameInputDate}`, min: MIN, max: MAX, list: `input-date-${uuid}` }),
            DATALIST), iconPos: iconPos, icon: react_1.default.createElement("span", { className: `fenext-input-date-icon ` }, icon), validator: undefined, error: errorFenext, isChange: isChange }));
};
exports.InputDate = InputDate;
//# sourceMappingURL=index.js.map