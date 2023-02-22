import { CollegeLogo, Footer, PageHead } from "components";
import React from "react";
import Script from "next/script";
import Image from "next/image";
import { Images } from "data/debugImages";

export default function Events() {
  return (
    <>
      <PageHead />
      <script src="https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js" integrity="sha256-98Q574VkbV+PkxXCKSgL6jVq9mrVbS7uCdA+vt0sLS8=" crossOrigin="anonymous"></script>
      <script src="https://hammerjs.github.io/dist/hammer.js"></script>
      <div className="slider" data-state="0">

        <div className="status">
          <div className="point" data-current="0"></div>
          <div className="stat" data-key="0"></div>
          <div className="stat" data-key="1"></div>
          <div className="stat" data-key="2"></div>
          <div className="stat" data-key="3"></div>
          <div className="stat" data-key="4"></div>
          <div className="stat" data-key="5"></div>
        </div>

        <div className="text">
          <div className="current" data-key="0"></div>
          <div data-key="1"></div>
          <div data-key="2"></div>
          <div data-key="3"></div>
          <div data-key="4"></div>
          <div data-key="5"></div>
          <div data-key="6"></div>
          <div data-key="7"></div>
          <div data-key="8"></div>
          <div data-key="9"></div>
          <div data-key="10"></div>
          <div data-key="11"></div>
          <div data-key="12"></div>
          <div data-key="13"></div>
          <div data-key="14"></div>
          <div data-key="15"></div>
          <div data-key="16"></div>
          <div data-key="17"></div>
          <div data-key="18"></div>
          <div data-key="19"></div>
          <div data-key="20"></div>
        </div>

        <div className="image current" data-key={"0"} >
          <Image src={"/images/instincts/instincts0.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"1"} >
          <Image src={"/images/instincts/instincts1.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"2"} >
          <Image src={"/images/instincts/instincts2.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"3"} >
          <Image src={"/images/instincts/instincts3.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"4"} >
          <Image src={"/images/instincts/instincts4.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"5"} >
          <Image src={"/images/instincts/instincts5.jpg"} alt="ssnsnucinstincts" />
        </div>

        <div className="image" data-key={"6"} >
          <Image src={"/images/instincts/instincts6.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"7"} >
          <Image src={"/images/instincts/instincts7.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"8"} >
          <Image src={"/images/instincts/instincts8.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"9"} >
          <Image src={"/images/instincts/instincts9.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"10"} >
          <Image src={"/images/instincts/instincts10.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"11"} >
          <Image src={"/images/instincts/instincts11.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"12"} >
          <Image src={"/images/instincts/instincts12.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"13"} >
          <Image src={"/images/instincts/instincts13.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"14"} >
          <Image src={"/images/instincts/instincts14.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"15"} >
          <Image src={"/images/instincts/instincts15.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"16"} >
          <Image src={"/images/instincts/instincts16.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"17"} >
          <Image src={"/images/instincts/instincts17.jpg"} alt="ssnsnucinstincts" />
        </div>

        <div className="image" data-key={"18"} >
          <Image src={"/images/instincts/instincts18.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"19"} >
          <Image src={"/images/instincts/instincts19.jpg"} alt="ssnsnucinstincts" />
        </div>
        <div className="image" data-key={"20"} >
          <Image src={"/images/instincts/instincts20.jpg"} alt="ssnsnucinstincts" />
        </div>
      </div>
      <Script src="slideIn.js" />
    </>
  );
}
