import "styles/globals.css";

import translations from "en.json";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en" messages={translations}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
