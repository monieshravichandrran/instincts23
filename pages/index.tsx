import { CollegeLogo, Footer, PageHead, Button } from "components";
import Image from "next/image";
import { useTranslation } from "utils/hooks/use-translation";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <Image
            src="/images/Instincts.png"
            alt="Instincts 2023 - Lost Continent"
            height={0}
            width={700}
            className="mb-[4rem] lg:p-8 clubitem"
          />
          <h1 className="text-[3rem] lg:text-[6rem] leading-[4rem] lg:leading-[8rem] font-title font-bold text-center mb-8 shimmer">
            Registration Opens Soon
          </h1>
          <div className="p-4 shadow-lg rounded-br-3xl">
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              March 9, 10 <span className="text-2xl">&</span> 11
            </p>
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              Save the dates
            </p>
            <div className="mt-10 flex justify-center text-[3rem] lg:text-[3rem] text-center font-title">
              <Button href="/events" large>
                Explore our events
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <script src="https://hammerjs.github.io/dist/hammer.js"></script>
    </>
  );
}
