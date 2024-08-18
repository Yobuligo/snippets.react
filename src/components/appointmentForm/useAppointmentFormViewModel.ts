import { useMemo } from "react";
import { DateTime } from "../../core/services/date/DateTime";
import { Recurrence } from "../../core/types/Recurrence";
import { useRenderRecurrence } from "../../hooks/useRenderRecurrence";
import { ISelectOption } from "../select/ISelectOption";
import { IAppointmentFormProps } from "./IAppointmentFormProps";

export const useAppointmentFormViewModel = (props: IAppointmentFormProps) => {
  const render = useRenderRecurrence();

  const recurrenceOptions: ISelectOption<Recurrence>[] = useMemo(
    () => [
      { key: Recurrence.ONCE, text: render(Recurrence.ONCE) },
      { key: Recurrence.DAILY, text: render(Recurrence.DAILY) },
      { key: Recurrence.WEEKLY, text: render(Recurrence.WEEKLY) },
      { key: Recurrence.MONTHLY, text: render(Recurrence.MONTHLY) },
    ],
    [render]
  );

  const selectedRecurrence = recurrenceOptions.find(
    (selectOption) => selectOption.key === props.recurrence
  );

  const onChangeRecurrence = (selectedRecurrence: ISelectOption<Recurrence>) =>
    props.setRecurrence(selectedRecurrence.key);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  /**
   * Checks if to is earlier than from, in that case correct to by adding one hour
   */
  const correctTo = (from: Date, to: Date) => {
    if (DateTime.compare(from, to) === 1) {
      const newTo = DateTime.addHours(from, 1);
      props.setToDate(DateTime.toDate(newTo));
      props.setToTime(DateTime.toTime(newTo));
    }
  };

  /**
   * Checks if to is earlier than from, in that case correct to by adding one hour
   */
  const correctFrom = (from: Date, to: Date) => {
    if (DateTime.compare(from, to) === 1) {
      const newFrom = DateTime.subtractHours(to, 1);
      props.setFromDate(DateTime.toDate(newFrom));
      props.setFromTime(DateTime.toTime(newFrom));
    }
  };

  const onChangeFromDate = (fromDate: string) => {
    props.setFromDate(fromDate);
    const from = DateTime.create(fromDate, props.fromTime);
    const to = DateTime.create(props.toDate, props.toTime);
    correctTo(from, to);
  };

  const onChangeFromTime = (fromTime: string) => {
    props.setFromTime(fromTime);
    const from = DateTime.create(props.fromDate, fromTime);
    const to = DateTime.create(props.toDate, props.toTime);
    correctTo(from, to);
  };

  const onChangeToDate = (toDate: string) => {
    props.setToDate(toDate);
    const from = DateTime.create(props.fromDate, props.fromTime);
    const to = DateTime.create(toDate, props.toTime);
    correctFrom(from, to);
  };

  const onChangeToTime = (toTime: string) => {
    props.setToTime(toTime);
    const from = DateTime.create(props.fromDate, props.fromTime);
    const to = DateTime.create(props.toDate, toTime);
    correctFrom(from, to);
  };

  return {
    onChangeRecurrence,
    onChangeFromDate,
    onChangeFromTime,
    onChangeToDate,
    onChangeToTime,
    onSubmit,
    recurrenceOptions,
    selectedRecurrence,
  };
};
