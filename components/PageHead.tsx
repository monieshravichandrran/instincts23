import Head from "next/head";

interface IPageHead {
  title?: string;
  description?: string;
}

export const PageHead = ({
  title = "SSN SNUC Instincts 2023",
  description = "SSN SNUC's 18th Cultural Fest based on Lost Continent",
}: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/instinctsLogo.jpeg" />
    </Head>
  );
};
