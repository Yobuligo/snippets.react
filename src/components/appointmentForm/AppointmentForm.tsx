import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { LabeledInput } from "../labeledInput/LabeledInput";
import { LabeledSelect } from "../labeledSelect/LabeledSelect";
import styles from "./AppointmentForm.module.scss";
import { IAppointmentFormProps } from "./IAppointmentFormProps";
import { useAppointmentFormViewModel } from "./useAppointmentFormViewModel";

export const AppointmentForm: React.FC<IAppointmentFormProps> = (props) => {
  const { t } = useTranslation();
  const viewModel = useAppointmentFormViewModel(props);

  return (
    <form className={styles.appointmentForm} onSubmit={viewModel.onSubmit}>
      <div>
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.title)}
          onChange={props.setTitle}
          value={props.title}
        />
      </div>
      <div>
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.description)}
          onChange={props.setDescription}
          value={props.description}
        />
      </div>
      <div className={styles.dateTime}>
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.startDate)}
          onChange={viewModel.onChangeFromDate}
          type="date"
          value={props.fromDate}
        />
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.startTime)}
          onChange={viewModel.onChangeFromTime}
          type="time"
          value={props.fromTime}
        />
      </div>
      <div className={styles.dateTime}>
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.endDate)}
          onChange={viewModel.onChangeToDate}
          type="date"
          value={props.toDate}
        />
        <LabeledInput
          disabled={props.disabled}
          label={t(texts.AppointmentForm.endTime)}
          onChange={viewModel.onChangeToTime}
          type="time"
          value={props.toTime}
        />
      </div>
      <div>
        <LabeledSelect
          disabled={props.disabled}
          label={t(texts.AppointmentForm.recurrence)}
          options={viewModel.recurrenceOptions}
          selected={viewModel.selectedRecurrence}
          onSelect={viewModel.onChangeRecurrence}
        />
      </div>
    </form>
  );
};
