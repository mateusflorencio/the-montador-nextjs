import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Montador de Móveis</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
