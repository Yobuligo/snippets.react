import { useState } from "react";
import { DateTime } from "../../core/services/date/DateTime";
import { ITimePeriodFilterProps } from "./ITimePeriodFilterProps";

export const useTimePeriodFilterViewModel = (props: ITimePeriodFilterProps) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const now = new Date();

  const triggerChange = () =>
    props.onChangePeriod?.(new Date(fromDate), new Date(toDate));

  const onClickDay = () => {
    // set inputs from and to to the current date
    setFromDate(DateTime.toDate(now));
    setToDate(DateTime.toDate(now));
    triggerChange();
  };

  const onClickWeek = () => {
    // set inputs from and to to the current week span dates
    const weekStartDate = DateTime.getWeekStartDate(now);
    const weekEndDate = DateTime.getWeekEndDate(now);
    setFromDate(DateTime.toDate(weekStartDate));
    setToDate(DateTime.toDate(weekEndDate));
    triggerChange();
  };

  const onClickMonth = () => {
    // set inputs from and to to the current month span dates
    const monthStartDate = DateTime.getMonthStartDate(now);
    const monthEndDate = DateTime.getMonthEndDate(now);
    setFromDate(DateTime.toDate(monthStartDate));
    setToDate(DateTime.toDate(monthEndDate));
    triggerChange();
  };

  const onClickYear = () => {
    // set inputs from and to to the current month span dates
    const yearStartDate = DateTime.getYearStartDate(now);
    const yearEndDate = DateTime.getYearEndDate(now);
    setFromDate(DateTime.toDate(yearStartDate));
    setToDate(DateTime.toDate(yearEndDate));
    triggerChange();
  };

  const onChangeFromDate = (newDate: string) => {
    setFromDate(newDate);
    triggerChange();
  };

  const onChangeToDate = (newDate: string) => {
    setToDate(newDate);
    triggerChange();
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
