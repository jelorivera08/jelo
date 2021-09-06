import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "lib/context/theme-provider";
import SEO from "components/seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SEO />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
