import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/main.css";
import { ThemeProvider } from "next-themes";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/data/MDXComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
