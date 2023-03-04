import { CollegeLogo, Events, Footer, PageHead } from "components";
import { debugEvents } from "data/debugEvents";

export default function Elc() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full">
          <Events
            clubName={"Saaral Thamizh Mandram"}
            eventDetails={debugEvents.saaral}
            decor={
              <>
                <p className="text-lg lg:text-justify md:text-justify text-white font-body md:text-xl">
                  தமிழர் சிந்தனை கலை வெளிப்பாட்டு வடிவங்களில் சிறப்பான ஒரு வடிவமே பட்டிமன்றம். முரண்பாடான பலநோக்கங்கள் உடைய கருத்துகளை விவரிக்கவும், விவாதிக்கவும் மேலும் பேச்சுத்திறனை வெளிப்படுத்தவும் ஒரு சிறந்த மேடையை சாரல் தமிழ் மன்றம் மாணவர்களுக்கு அளிக்கிறது.
                </p>
                <h3 className="mt-10 text-2xl text-white font-title">
                  முதற்சுற்று: <br /> பேச்சுப்போட்டி
                </h3>
                <h3 className="mt-3 text-xl text-white font-title">
                  தலைப்புகள்:
                </h3>
                <ul className="list-disc list-inside">
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >பாலினச் சமத்துவம் </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >போர்முனை விட்டு ஏர்முனை தொழுவோம் </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >உழவை மறந்து உணவைத் தேடும் சமுதாயம்</li>
                </ul>
                <p className="text-lg lg:text-justify md:text-justify text-white font-body md:text-xl">போட்டியாளர்கள் மேற்கண்ட தலைப்புகளுள் ஏதேனும் ஒரு தலைப்பில் 5 நிமிடங்கள் பேச வேண்டும்.</p>
                <h3 className="mt-16 text-2xl text-white font-title">
                  இறுதிச்சுற்று:
                </h3>
                <h3 className="mt-3 text-xl text-white font-title">
                  நடுவர்: <br /> புலவர்.திரு.ராமலிங்கம்
                </h3>
                <h3 className="mt-3 md:text-2xl text-white font-title">
                தலைப்பு: <br /> இன்றைய நவீன நாகரீக வாழ்க்கை, வருந்தத்தக்கதா? வரவேற்கத்தக்கதா? 
                </h3>
                <ul className="list-disc list-inside">
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >முதற்சுற்றில் சிறப்பாக பேசிய 6 போட்டியாளர்கள் இறுதிச்சுற்றுக்கு தேர்ந்தெடுக்கப்படுவர்.</li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >ஒவ்வொரு போட்டியாளருக்கும் 5 நிமிடங்கள் தங்கள் கருத்துகளை பதிவு செய்ய வழங்கப்படும். </li>
                  <li
                    className="text-lg text-white font-body md:text-xl"
                  >சிறப்பாக பேசிய 3 போட்டியாளர்களுக்கு பரிசுகள் வழங்கப்படும்.</li>
                                    <li
                    className="text-lg text-white font-body md:text-xl"
                  >நடுவரின் தீர்ப்பே இறுதியானது.</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
