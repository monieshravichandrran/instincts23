import { CollegeLogo, ComingSoon, Footer, PageHead } from "components";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <PageHead />
      <div className="w-full md:w-[60%] flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="mt-10 min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center shadow-lg">
          <h2 className="mt-10 text-4xl font-bold text-center lg:text-6xl font-title shimmers">
            Contact Us
          </h2>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Registration</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Tejesh (ECE) - 95660 32425
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Vahini (BME) - 9025756533
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Transport</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Pranav  Aadhithya K.B (ECE) - 7338773979
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Sai Senthur (Mech) - 8220488090
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Deepesh (CSE IOT) - 6381347700
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Crowd</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Arun Prasath (BME) - 7094294628
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Tamiselvan (Mech) - 99525 42511
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Abishek (Mech) - 82489 51594
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Stage</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Kavin (Mech) - 9150279970
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Arvind M (AI & DS) - 9500858110
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Bhavesh Kumar (AI & DS) - 8008526660
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Food</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Arunkumar M (AI &DS) - 9786020894
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
