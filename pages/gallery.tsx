import { CollegeLogo, Footer, PageHead } from "components";
import React from "react";
import Script from "next/script";
import Image from "next/image";

export default function Events() {
  return (
    <div className="overflow-hidden">
      <PageHead />
      <div className="flex flex-col items-center justify-center w-full min-h-screen m-auto text-white">
        <CollegeLogo />
        <Script
          src="https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js"
          integrity="sha256-98Q574VkbV+PkxXCKSgL6jVq9mrVbS7uCdA+vt0sLS8="
          crossOrigin="anonymous"
        ></Script>
        <Script src="https://hammerjs.github.io/dist/hammer.js"></Script>
        <Script src="slideIn.js" />
        <div className="sm:w-full flex flex-col items-end justify-center">
          <div className="slider mt-[-6.6vh]" data-state="0">
            <div className="status">
              <div className="point" data-current="0"></div>
              <div className="stat" data-key="0"></div>
              <div className="stat" data-key="1"></div>
              <div className="stat" data-key="2"></div>
              <div className="stat" data-key="3"></div>
              <div className="stat" data-key="4"></div>
              <div className="stat" data-key="5"></div>
              <div className="stat" data-key="6"></div>
              <div className="stat" data-key="7"></div>
              <div className="stat" data-key="8"></div>
              <div className="stat" data-key="9"></div>
              <div className="stat" data-key="10"></div>
              <div className="stat" data-key="11"></div>
              <div className="stat" data-key="12"></div>
              <div className="stat" data-key="13"></div>
              <div className="stat" data-key="14"></div>
              <div className="stat" data-key="15"></div>
              <div className="stat" data-key="16"></div>
              <div className="stat" data-key="17"></div>
              <div className="stat" data-key="18"></div>
              <div className="stat" data-key="19"></div>
              <div className="stat" data-key="20"></div>
            </div>

            <div className="text font-title text-[12vw] md:text-[6vw]">
              <div className="current" data-key="0">
                Instincts
              </div>
              <div data-key="1">Instincts</div>
              <div data-key="2">Instincts</div>
              <div data-key="3">Instincts</div>
              <div data-key="4">Instincts</div>
              <div data-key="5">Instincts</div>
              <div data-key="6">Instincts</div>
              <div data-key="7">Instincts</div>
              <div data-key="8">Instincts</div>
              <div data-key="9">Instincts</div>
              <div data-key="10">Instincts</div>
              <div data-key="11">Instincts</div>
              <div data-key="12">Instincts</div>
              <div data-key="13">Instincts</div>
              <div data-key="14">Instincts</div>
              <div data-key="15">Instincts</div>
              <div data-key="16">Instincts</div>
              <div data-key="17">Instincts</div>
              <div data-key="18">Instincts</div>
              <div data-key="19">Instincts</div>
              <div data-key="20">Instincts</div>
            </div>

            <div className="image current" data-key={"0"}>
              <Image
                src={"/images/instincts/instincts0.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"1"}>
              <Image
                src={"/images/instincts/instincts1.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"2"}>
              <Image
                src={"/images/instincts/instincts2.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"3"}>
              <Image
                src={"/images/instincts/instincts3.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"4"}>
              <Image
                src={"/images/instincts/instincts4.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"5"}>
              <Image
                src={"/images/instincts/instincts5.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>

            <div className="image" data-key={"6"}>
              <Image
                src={"/images/instincts/instincts6.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"7"}>
              <Image
                src={"/images/instincts/instincts7.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"8"}>
              <Image
                src={"/images/instincts/instincts8.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"9"}>
              <Image
                src={"/images/instincts/instincts9.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"10"}>
              <Image
                src={"/images/instincts/instincts10.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"11"}>
              <Image
                src={"/images/instincts/instincts11.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"12"}>
              <Image
                src={"/images/instincts/instincts12.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"13"}>
              <Image
                src={"/images/instincts/instincts13.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"14"}>
              <Image
                src={"/images/instincts/instincts14.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"15"}>
              <Image
                src={"/images/instincts/instincts15.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"16"}>
              <Image
                src={"/images/instincts/instincts16.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"17"}>
              <Image
                src={"/images/instincts/instincts17.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>

            <div className="image" data-key={"18"}>
              <Image
                src={"/images/instincts/instincts18.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"19"}>
              <Image
                src={"/images/instincts/instincts19.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
            <div className="image" data-key={"20"}>
              <Image
                src={"/images/instincts/instincts20.jpg"}
                alt="ssnsnucinstincts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
