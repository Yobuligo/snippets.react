import { Page } from "../page/Page";
import { PageHeader } from "../pageHeader/PageHeader";
import { IPublicPageProps } from "./IPublicPageProps";

export const PublicPage: React.FC<IPublicPageProps> = (props) => {
  return (
    <Page>
      <PageHeader />
      {props.children}
    </Page>
  );
};
