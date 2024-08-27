import { texts } from "../../lib/translation/texts";
import { useTranslation } from "../../lib/translation/useTranslation";
import { Button } from "../button/Button";
import { LabeledInput } from "../labeledInput/LabeledInput";
import { Toolbar } from "../toolbar/Toolbar";
import styles from "./DateTimeSpanFilter.module.scss";
import { IDateTimeSpanFilterProps } from "./IDateTimeSpanFilterProps";
import { useDateTimeSpanFilterViewModel } from "./useDateTimeSpanFilterViewModel";

export const DateTimeSpanFilter: React.FC<IDateTimeSpanFilterProps> = (
  props
) => {
  const { t } = useTranslation();
  const viewModel = useDateTimeSpanFilterViewModel(props);

  return (
    <div className={styles.dateTimeSpanFilter}>
      <Toolbar>
        <Button onClick={viewModel.onClickDay}>{t(texts.general.day)}</Button>
        <Button onClick={viewModel.onClickWeek}>{t(texts.general.week)}</Button>
        <Button onClick={viewModel.onClickMonth}>
          {t(texts.general.month)}
        </Button>
        <Button onClick={viewModel.onClickYear}>{t(texts.general.year)}</Button>
      </Toolbar>
      <div className={styles.inputGroup}>
        <LabeledInput
          label={t(texts.general.from)}
          onChange={viewModel.onChangeFromDate}
          type="date"
          value={viewModel.fromDate}
        />
        <LabeledInput
          label={t(texts.general.to)}
          onChange={viewModel.onChangeToDate}
          type="date"
          value={viewModel.toDate}
        />
      </div>
    </div>
  );
};
