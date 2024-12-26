import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
