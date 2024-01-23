import { Button, CollegeLogo, Footer } from "components"

import Head from "next/head"

interface IPageHead {
  title?: string
  description?: string
}

export const PageHead = ({
  title = "About | SSN SNUC Instincts 2023",
  description = "What is SSN and SNUC Instincts all about? Come find here at the About page!",
}: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/instinctsLogo.jpeg" />
    </Head>
  )
}

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
            artistic talents are brought to view. This alluring platform offers
            to showcase the latent talents of the students from colleges across
            the nation. Instincts has seen an average footfall of 30,000+ every
            year.
            <br />
            <br />
            SSN SNUC Instincts is one of the most awaited cultural events in the
            country. This year, Instincts will be held offline with an exciting
            prize pool of &nbsp;{" "}
            <span className="text-3xl font-title relative top-1">
              ₹5,00,000
            </span>
          </p>
          <Button href={"/gallery"} large>
            Explore the Instincts Gallery
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
