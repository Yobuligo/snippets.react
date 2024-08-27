import { IllegalArgumentError } from "../core/errors/IllegalArgumentError";
import { Recurrence } from "../core/types/Recurrence";
import { texts } from "../lib/translation/texts";
import { useTranslation } from "../lib/translation/useTranslation";

export const useRenderRecurrence = () => {
  const { t } = useTranslation();

  const render = (recurrence: Recurrence) => {
    switch (recurrence) {
      case 0:
        return t(texts.general.recurrence.once);
      case 1:
        return t(texts.general.recurrence.daily);
      case 2:
        return t(texts.general.recurrence.weekly);
      case 3:
        return t(texts.general.recurrence.monthly);
    }

    throw new IllegalArgumentError();
  };

  return render;
};
