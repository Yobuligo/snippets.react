import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { Button } from "../button/Button";
import { LabeledInput } from "../labeledInput/LabeledInput";
import { Toolbar } from "../toolbar/Toolbar";
import { ITimePeriodFilterProps } from "./ITimePeriodFilterProps";
import styles from "./TimePeriodFilter.module.scss";
import { useTimePeriodFilterViewModel } from "./useTimePeriodFilterViewModel";

export const TimePeriodFilter: React.FC<ITimePeriodFilterProps> = (props) => {
  const { t } = useTranslation();
  const viewModel = useTimePeriodFilterViewModel(props);

  return (
    <div className={styles.timePeriodFilter}>
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
