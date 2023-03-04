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
                alt={""}
                width={244}
                height={244}
                className="mx-auto w-[40vw] h-[35vw] md:w-[30vw] md:h-[28vw] lg:w-[17vw] lg:h-[15vw]"
              />
            </div>
            <h2 className="mt-2 mb-2 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Associate Sponsor
            </h2>
            <div className="w-full flex justify-center">
              <Image
                src={"/images/sponsors/aram.png"}
                alt={""}
                width={244}
                height={244}
                className="mx-auto w-[40vw] h-[35vw] md:w-[30vw] md:h-[28vw] lg:w-[17vw] lg:h-[15vw]"
              />
            </div>
            <h2 className="mt-2 mb-10 font-bold text-center lg:text-2xl sm:text-2xl font-title">
              Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-10">
              <div className="w-full flex justify-center mb-10 items-center">
                <Image
                  src={"/images/sponsors/seasky.jpg"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[45vw] h-[45vw] md:w-[15vw] md:h-[15vw] lg:w-[15vw] lg:h-[15vw] items-center"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/aerotrans.png"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[75vw] h-[40vw] md:w-[25vw] md:h-[15vw] lg:w-[25vw] lg:h-[15vw] items-center"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/sakthi.png"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/mercedes.jpg"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[60vw] h-[60vw] md:w-[20vw] md:h-[15vw] lg:w-[20vw] lg:h-[15vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/equitas.jpg"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[60vw] h-[60vw] md:w-[15vw] md:h-[15vw] lg:w-[15vw] lg:h-[15vw]"
                />
              </div>
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={"/images/sponsors/TMB.png"}
                  alt={""}
                  width={244}
                  height={244}
                  className="mx-auto w-[40vw] h-[40vw] md:w-[19vw] md:h-[15vw] lg:w-[19vw] lg:h-[15vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
