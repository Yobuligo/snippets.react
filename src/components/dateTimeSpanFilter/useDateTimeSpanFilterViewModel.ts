import { useState } from "react";
import { DateTime } from "../../core/services/date/DateTime";
import { IDateTimeSpanFilterProps } from "./IDateTimeSpanFilterProps";

export const useDateTimeSpanFilterViewModel = (
  props: IDateTimeSpanFilterProps
) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const now = new Date();

  const triggerOnChange = () =>
    props.onChange?.(new Date(fromDate), new Date(toDate));

  const onClickDay = () => {
    // set inputs from and to to the current date
    setFromDate(DateTime.toDate(now));
    setToDate(DateTime.toDate(now));
    triggerOnChange();
  };

  const onClickWeek = () => {
    // set inputs from and to to the current week span dates
    const weekStartDate = DateTime.getWeekStartDate(now);
    const weekEndDate = DateTime.getWeekEndDate(now);
    setFromDate(DateTime.toDate(weekStartDate));
    setToDate(DateTime.toDate(weekEndDate));
    triggerOnChange();
  };

  const onClickMonth = () => {
    // set inputs from and to to the current month span dates
    const monthStartDate = DateTime.getMonthStartDate(now);
    const monthEndDate = DateTime.getMonthEndDate(now);
    setFromDate(DateTime.toDate(monthStartDate));
    setToDate(DateTime.toDate(monthEndDate));
    triggerOnChange();
  };

  const onClickYear = () => {
    // set inputs from and to to the current month span dates
    const yearStartDate = DateTime.getYearStartDate(now);
    const yearEndDate = DateTime.getYearEndDate(now);
    setFromDate(DateTime.toDate(yearStartDate));
    setToDate(DateTime.toDate(yearEndDate));
    triggerOnChange();
  };

  const onChangeFromDate = (newDate: string) => {
    setFromDate(newDate);
    triggerOnChange();
  };

  const onChangeToDate = (newDate: string) => {
    setToDate(newDate);
    triggerOnChange();
  };

  return {
    fromDate,
    onClickDay,
    onClickMonth,
    onClickWeek,
    onClickYear,
    onChangeFromDate,
    onChangeToDate,
    toDate,
  };
};
