import { CollegeLogo, Footer, PageHead, Button } from "components";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "utils/hooks/use-translation";
import Script from "next/script";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="flex flex-col items-center justify-center min-h-screen p-1 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <Image
            src="/images/Instincts.png"
            alt="Instincts 2023 - Lost Continent"
            height={0}
            width={450}
            className="mt-16 md:mt-12 mb-[2rem] lg:p-8 clubitem"
          />
          <h1 className="text-[2rem] lg:text-[3rem] leading-[2rem] lg:leading-[4rem] font-title font-bold text-center mb-4 shimmer">
            Registrations Are Live Now!!!
          </h1>
          <div className="md:p-4 shadow-lg rounded-br-3xl">
            <div
              id="timer"
              className="mb-5 gap-4 px-2 grid min-w-full lg:w-3/4 xl:w-1/2 mx-auto grid-cols-4 text-white font-title text-lg lg:text-3xl place-items-center"
            ></div>
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              March 9, 10 <span className="text-2xl">&</span> 11
            </p>
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              Save the dates
            </p>
            <p className="mt-5 md:mb-10 text-white text-[1.5rem] lg:text-[1.5rem] text-center text-lg">
              Hunt the Lost Continent and Explore the events conducted by all
              the SSN & SNUC clubs.
            </p>
            <div className="map mt-12">
              <div className="flex justify-center w-full">
                <img
                  src="/images/map.png"
                  alt=""
                  className="!w-[100vw] !h-[100vw] md:!w-[50vw] md:!h-[40vw]"
                />
              </div>
              <Link href="/clubs/literary">
                <div id="pin-1" className="box0 nonzoomeff">
                  <div className="pin-text">
                    <h3>Literary</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/classical" className="bxl">
                <div id="pin-2" className="box1 nonzoomeff">
                  <div className="pin-text">
                    <h3>Classical</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/tamil" className="bxl">
                <div id="pin-3" className="box2 nonzoomeff">
                  <div className="pin-text">
                    <h3>Tamil</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/design" className="bxl">
                <div id="pin-4" className="box3 nonzoomeff">
                  <div className="pin-text">
                    <h3>Design</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/gaming" className="bxl">
                <div id="pin-5" className="box4 nonzoomeff">
                  <div className="pin-text">
                    <h3>Gaming</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/theatre" className="bxl">
                <div id="pin-6" className="box5 nonzoomeff">
                  <div className="pin-text">
                    <h3>Thespian</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/quiz" className="bxl">
                <div id="pin-7" className="box6 nonzoomeff">
                  <div className="pin-text">
                    <h3>Quiz</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/film" className="bxl">
                <div id="pin-8" className="box7 nonzoomeff">
                  <div className="pin-text">
                    <h3>Film</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/music" className="bxl">
                <div id="pin-9" className="box8 nonzoomeff">
                  <div className="pin-text">
                    <h3>Music</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/photography" className="bxl">
                <div id="pin-10" className="box9 nonzoomeff">
                  <div className="pin-text">
                    <h3>Photography</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/art" className="bxl">
                <div id="pin-11" className="box10 nonzoomeff">
                  <div className="pin-text">
                    <h3>Arts</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/western" className="bxl">
                <div id="pin-12" className="box11 nonzoomeff">
                  <div className="pin-text">
                    <h3>Western</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/business" className="bxl">
                <div id="pin-13" className="box12 nonzoomeff">
                  <div className="pin-text">
                    <h3>Business</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center text-[3rem] lg:text-[3rem] text-center font-title">
              <Button href="/events" large>
                Explore our events
              </Button>
            </div>
          </div>
          <h2 className="mt-16 mb-2 text-xl font-bold text-center lg:text-6xl font-title">
            About Instincts
          </h2>
          <p className="p-10 text-lg shadow-lg rounded-br-3xl max-w-3xl">
            Marching towards its 18th year, INSTINCTS has set a benchmark in the
            conduct of college fests where intellectual, social, cultural and
            artistic talents are brought to view. This alluring platform offers
            to showcase the latent talents of the students from colleges across
            the nation. Instincts has seen an average footfall of 30,000+ every
            year.
            <br />
            <br />
            SSN SNUC Instincts is one of the most awaited cultural events in the
            country. This year, Instincts will be held offline with an exciting
            prize pool of &nbsp; <span className="text-3xl font-title relative top-1">₹5,00,000</span>
          </p>
          <Button href={"/gallery"} large>
            Explore the Instincts Gallery
          </Button>
        </div>
      </div>
      <Footer />
      <Script src="https://hammerjs.github.io/dist/hammer.js" />
      <Script src="countDown.js" />
    </>
  );
}
