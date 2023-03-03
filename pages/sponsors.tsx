import { CollegeLogo, ComingSoon, Footer, PageHead } from "components";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <div className="">
        <PageHead />
        <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
          <CollegeLogo />
          <div className="">
            <h2 className="mt-20 mb-2 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Title Sponsor
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src={"/images/sponsors/hcl.png"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
            </div>
            <h2 className="mt-2 mb-10 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Sponsors
            </h2>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/seasky.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/aerotrans.png"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[60vw] sm:h-[40vw] md:w-[67.5vw] md:h-[45vw] lg:w-[30vw] lg:h-[20vw]"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/sakthi.png"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/mercedes.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[43vw] sm:h-[40vw] md:w-[50vw] md:h-[45vw] lg:w-[23vw] lg:h-[20vw]"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/equitas.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <Image
                src={"/images/sponsors/TMB.png"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[430vw] sm:h-[40vw] md:w-[48vw] md:h-[45vw] lg:w-[25vw] lg:h-[20vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
