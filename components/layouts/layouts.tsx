import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Montador de Móveis</title>
        <meta
          name="description"
          content="
        A melhor equipe para a montagem de móveis em sua área.
        Somos uma empresa com anos de experiência no setor,
        fornecendo uma ampla gama de serviços especializados.
        "
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
