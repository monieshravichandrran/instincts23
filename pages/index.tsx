import { PageHead } from "components/PageHead";
import { useTranslation } from "utils/hooks/use-translation";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
    </>
  );
}
