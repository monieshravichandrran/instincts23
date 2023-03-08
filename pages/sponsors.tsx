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
            <h2 className="mt-20 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Title Sponsor
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src={"/images/sponsors/hcl.png"}
                alt={"HCL logo"}
                width={244}
                height={244}
                className="mx-auto w-[32vw] h-[28vw] md:w-[24vw] md:h-[22.4vw] lg:w-[13.6vw] lg:h-[12vw]"
              />
            </div>
            <h2 className="mt-2 mb-2 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Associate Sponsor
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src={"/images/sponsors/aram.png"}
                alt={"Aram IAS Academy logo"}
                width={244}
                height={244}
                className="mx-auto w-[32vw] h-[28vw] md:w-[24vw] md:h-[22.4vw] lg:w-[13.6vw] lg:h-[12vw]"
              />
            </div>
            <h2 className="mt-2 mb-10 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-80 gap-y-10">
              <div className="w-full flex justify-center mb-10 items-center">
                <Image
                  src={"/images/sponsors/seasky.jpg"}
                  alt={"Seasky logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[36vw] h-[36vw] md:w-[12vw] md:h-[12vw] lg:w-[12vw] lg:h-[12vw] items-center"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/aerotrans.png"}
                  alt={"Aerotrans logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[68vw] h-[32vw] md:w-[20vw] md:h-[12vw] lg:w-[20vw] lg:h-[12vw] items-center"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/sakthi.png"}
                  alt={"Sakthi Poulty logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[48vw] h-[48vw] md:w-[36vw] md:h-[36vw] lg:w-[16vw] lg:h-[16vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/mercedes.jpg"}
                  alt={"Mercedes Benz logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[48vw] h-[48vw] md:w-[16vw] md:h-[12vw] lg:w-[16vw] lg:h-[12vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/equitas.jpg"}
                  alt={"Equitas logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[48vw] h-[48vw] md:w-[12vw] md:h-[12vw] lg:w-[12vw] lg:h-[12vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/TMB.png"}
                  alt={"Tamilnad Mercantile Bank logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[32vw] h-[32vw] md:w-[15.2vw] md:h-[12vw] lg:w-[15.2vw] lg:h-[12vw]"
                />
              </div>
            </div>
            <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/adamsuvai.png"}
                  alt={"Adams Suvai Zone logo"}
                  width={244}
                  height={244}
                  className="mx-auto w-[32vw] h-[32vw] md:w-[13.6vw] md:h-[13.6vw] lg:w-[13.6vw] lg:h-[13.6vw]"
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
