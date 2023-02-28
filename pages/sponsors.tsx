import { CollegeLogo, ComingSoon, Footer, PageHead } from "components";

const Sponsors = () => {
  return (
    <>
    <div className="">
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="w-[100vw] h-[100vh] flex justify-center">
          <ComingSoon />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Sponsors;
