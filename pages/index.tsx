import { Footer } from "components/footer";
import { PageHead } from "components/PageHead";
import { useTranslation } from "utils/hooks/use-translation";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[4rem] lg:text-[6rem] leading-[5rem] lg:leading-[8rem] font-title font-bold text-white text-center">
          COMING SOON
        </h1>
        <p className="text-white text-[2.5rem] text-center font-title">
          March 9, 10 <span className="text-2xl">&</span> 11
        </p>
        <p className="text-white text-[2.5rem] text-center font-title">
          Save the dates
        </p>
      </div>
      <Footer />
    </>
  );
}
