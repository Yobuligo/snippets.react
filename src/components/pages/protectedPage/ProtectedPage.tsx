import { Page } from "../page/Page";
import { PageHeader } from "../pageHeader/PageHeader";
import { IProtectedPageProps } from "./IProtectedPageProps";
import styles from "./ProtectedPage.module.scss";

export const ProtectedPage: React.FC<IProtectedPageProps> = (props) => {
  return (
    <Page>
      <div className={styles.protectedPage}>
        <PageHeader>My Page Header</PageHeader>
        <div>{props.children}</div>
      </div>
    </Page>
  );
};
