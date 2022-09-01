import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Page({ children, title, description }) {
  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
}
