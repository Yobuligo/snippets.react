import { IllegalArgumentError } from "../core/errors/IllegalArgumentError";
import { Weekday } from "../core/types/Weekday";
import { texts } from "./useTranslation/texts";
import { useTranslation } from "./useTranslation/useTranslation";

export const useRenderWeekday = () => {
  const { t } = useTranslation();

  const render = (weekday: Weekday): string => {
    switch (weekday) {
      case Weekday.MONDAY:
        return t(texts.general.weekdays.monday);
      case Weekday.TUESDAY:
        return t(texts.general.weekdays.tuesday);
      case Weekday.WEDNESDAY:
        return t(texts.general.weekdays.wednesday);
      case Weekday.THURSDAY:
        return t(texts.general.weekdays.thursday);
      case Weekday.FRIDAY:
        return t(texts.general.weekdays.friday);
      case Weekday.SATURDAY:
        return t(texts.general.weekdays.saturday);
      case Weekday.SUNDAY:
        return t(texts.general.weekdays.sunday);
      default:
        throw new IllegalArgumentError();
    }
  };

  return render;
};
