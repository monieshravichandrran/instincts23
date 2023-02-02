import Link from "next/link";

export const CollegeLogo = () => {
  return (
    <>
      <img
        src="/images/SNUC-white.png"
        alt="SNUC"
        className="w-[100px] lg:w-[180px] absolute top-5 left-5"
      />
      <div className="inline-block absolute top-3 text-white right-3 sm:text-xl md:text-2xl">
        <Link href="/events" className="inline-block mx-4 md:mx-10 glow hover:font-black hover:shadow-2xl hover:scale-110">Events</Link>
        <Link href="/about" className="inline-block mx-4 md:mx-10 glow hover:font-blackhover:shadow-2xl hover:scale-110">About</Link>
        <img
        src="/images/SSN-white.png"
        alt="SSN"
        className="inline-block w-[70px] lg:w-[120px]"
      />
      </div>
    </>
  );
};
