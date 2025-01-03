"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCalendarMonth = void 0;
const tslib_1 = require("tslib");
const fenextjs_interface_1 = require("fenextjs-interface");
const react_1 = tslib_1.__importDefault(require("react"));
const fenextjs_svg_1 = require("fenextjs-svg");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputCalendarMonth = ({ type = "normal", onPreMonth, onNextMonth, date, selectDate, selectDateRange, setSelectDate, setSelectDateRange, dataNSelect, setDataNSelect, min, max, className = "", classNameContent = "", classNameTop = "", classNameTopBtn = "", classNameTopBtnPrev = "", classNameTopBtnNext = "", classNameTopInfo = "", classNameDays = "", classNameDay = "", classNameDate = "", classNameDateValid = "", classNameDateDisabled = "", classNameDateInMonth = "", classNameDateOtherMonth = "", classNameDateSelect = "", classNameDateSelectRange = "", ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-calendar-month ${className}` },
            react_1.default.createElement("div", { className: `fenext-input-calendar-month-content ${classNameContent}` },
                react_1.default.createElement("div", { className: `fenext-input-calendar-top ${classNameTop}` },
                    react_1.default.createElement("button", { className: `fenext-input-calendar-btn ${classNameTopBtn} ${classNameTopBtnPrev}`, onClick: onPreMonth },
                        react_1.default.createElement(fenextjs_svg_1.SvgPaginationPre, null)),
                    react_1.default.createElement("div", { className: `fenext-input-calendar-top-info ${classNameTopInfo}` }, date?.onFormat({
                        month: "long",
                        year: "numeric",
                    })),
                    react_1.default.createElement("button", { className: `fenext-input-calendar-btn ${classNameTopBtn} ${classNameTopBtnNext}`, onClick: onNextMonth },
                        react_1.default.createElement(fenextjs_svg_1.SvgPaginationNext, null))),
                react_1.default.createElement("div", { className: `fenext-input-calendar-days ${classNameDays}` }, [
                    fenextjs_interface_1.DaysEnum.Sunday,
                    fenextjs_interface_1.DaysEnum.Monday,
                    fenextjs_interface_1.DaysEnum.Tuesday,
                    fenextjs_interface_1.DaysEnum.Wednesday,
                    fenextjs_interface_1.DaysEnum.Thursday,
                    fenextjs_interface_1.DaysEnum.Friday,
                    fenextjs_interface_1.DaysEnum.Saturday,
                ].map((day, i) => {
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { key: i, "data-day": day, className: `fenext-input-calendar-day ${classNameDay}` }, _t(day)[0])));
                })),
                date?.onGenerateDateByCalendar()?.map((d, i) => {
                    const isValid = date?.onValidateMinMax({
                        date: d,
                        max,
                        min,
                    });
                    const COMPARE_DATE = date.onCompareDate({
                        date: selectDate,
                        dateCompare: d,
                        compare: {
                            Date: true,
                            Month: true,
                            FullYear: true,
                        },
                    });
                    COMPARE_DATE["=="] =
                        selectDate != undefined && COMPARE_DATE["=="];
                    const COMPARE_DATE_RANGE_0 = date.onCompareDate({
                        date: d,
                        dateCompare: selectDateRange[0],
                        compare: {
                            Date: true,
                            Month: true,
                            FullYear: true,
                        },
                    });
                    const COMPARE_DATE_RANGE_1 = date.onCompareDate({
                        date: d,
                        dateCompare: selectDateRange[1],
                        compare: {
                            Date: true,
                            Month: true,
                            FullYear: true,
                        },
                    });
                    return (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { key: i, "data-date": d.getDate(), "data-month": d.getMonth() + 1, "data-year": d.getFullYear(), onClick: () => {
                                if (!isValid) {
                                    return;
                                }
                                if (type == "normal") {
                                    setSelectDate(d);
                                }
                                if (type == "range") {
                                    if (dataNSelect) {
                                        setSelectDateRange(() => {
                                            return [d];
                                        });
                                    }
                                    else {
                                        setSelectDateRange((old) => {
                                            return [...old, d].sort((a, b) => a.getTime() -
                                                b.getTime());
                                        });
                                    }
                                    setDataNSelect((e) => !e);
                                }
                            }, className: `
                                        fenext-input-calendar-date
                                        fenext-input-calendar-date-${isValid ? `valid ${classNameDateValid}` : `disabled ${classNameDateDisabled}`}
                                        fenext-input-calendar-date-${d.getMonth() == date.date.getMonth() ? `in-month ${classNameDateInMonth}` : `other-month ${classNameDateOtherMonth}`}
                                        fenext-input-calendar-date-${type == "normal" && COMPARE_DATE["=="] ? `select ${classNameDateSelect}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_0["=="] ? `select ${classNameDateSelect}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_0[">"] && COMPARE_DATE_RANGE_1["<"] ? `select-range ${classNameDateSelectRange}` : ""}
                                        fenext-input-calendar-date-${type == "range" && COMPARE_DATE_RANGE_1["=="] ? `select ${classNameDateSelect}` : ""}

                                        ${classNameDate}
                                    ` }, d?.getDate())));
                })))));
};
exports.InputCalendarMonth = InputCalendarMonth;
//# sourceMappingURL=index.js.map