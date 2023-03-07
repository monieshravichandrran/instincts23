import { CollegeLogo, ComingSoon, Footer, PageHead } from "components";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <PageHead />
      <div className="w-full md:w-[60%] flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="mt-10 min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center shadow-lg">
          <h2 className="mt-10 text-4xl font-bold text-center lg:text-6xl font-title">
            Contact Us
          </h2>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Registration</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Tejesh Kumar V S - 9566032425
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Vahini M - 9025756533
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Hospitality </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Akil - 9360796691
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Pooja - 8220832656
                </p>
              </>
            </div>
          </div>
          <div className="w-full flex justify-center mb-12">
            <a href={"https://forms.gle/WuFQ3cu1LvF48nFS6"}>
              <button
                className="neon-button mt-4 !text-white"
              >
                Register for Hospitality
              </button>
            </a>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Transport</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Pranav  Aadhithya K.B - 7338773979
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Saisenthur B - 8220488090
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Deepesh - 6381347700
                </p>
              </>
            </div>
          </div>
          <h1 className="contacthead text-3xl w-full font-title mt-5 shimmers ml-4">Event Coordinators</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Ainsely J - 9791108075
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Ahamed Raja - 9944588988
                </p>
              </>
            </div>
            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black text-xl inline bxl text-white">
              <>
                <BsFillPersonFill size={20} />
                <p >
                  Anil - 9360790874
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
