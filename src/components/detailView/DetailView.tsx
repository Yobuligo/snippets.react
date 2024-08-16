import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import styles from "./DetailView.module.scss";
import { IDetailViewProps } from "./IDetailViewProps";

/**
 * This component is responsible for displaying details in a screen with a back button
 */
export const DetailView: React.FC<IDetailViewProps> = (props) => {
  return (
    <div className={styles.detailView}>
      <ArrowBackIcon onClick={props.onBack} />
      {props.children}
    </div>
  );
};
