import { IllegalArgumentError } from "../core/errors/IllegalArgumentError";
import { Weekday } from "../core/types/Weekday";
import { texts } from "../lib/translation/texts";
import { useTranslation } from "../lib/translation/useTranslation";

export const useRenderWeekday = () => {
  const { t } = useTranslation();

  const render = (weekday: Weekday, short?: boolean): string => {
    if (short) {
      switch (weekday) {
        case Weekday.MONDAY:
          return t(texts.general.weekdays.mondayShort);
        case Weekday.TUESDAY:
          return t(texts.general.weekdays.tuesdayShort);
        case Weekday.WEDNESDAY:
          return t(texts.general.weekdays.wednesdayShort);
        case Weekday.THURSDAY:
          return t(texts.general.weekdays.thursdayShort);
        case Weekday.FRIDAY:
          return t(texts.general.weekdays.fridayShort);
        case Weekday.SATURDAY:
          return t(texts.general.weekdays.saturdayShort);
        case Weekday.SUNDAY:
          return t(texts.general.weekdays.sundayShort);
        default:
          throw new IllegalArgumentError();
      }
    } else {
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
    }
  };

  return render;
};
