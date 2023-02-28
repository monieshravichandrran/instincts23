import { Button, CollegeLogo, Footer, PageHead } from "components";

export default function About() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <h2 className="mb-8 text-4xl font-bold text-center lg:text-6xl font-title">
            About Instincts
          </h2>
          <p className="p-4 text-xl shadow-lg lg:text-2xl rounded-br-3xl">
            Marching towards its 18th year, INSTINCTS has set a benchmark in the
            conduct of college fests where intellectual, social, cultural and
            artistic talents are brought to view. This alluring platform offers to
            showcase the latent talents of the students from colleges across the
            nation. Instincts has seen an average footfall of 30,000+ every year.
            <br />
            <br />
            SSN SNUC Instincts is one of the most awaited cultural events in the
            country. This year, Instincts will be held offline with an exciting
            prize pool of Rup
          </p>
          <Button href={"/gallery"} large>
            Explore the Instincts Gallery
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
