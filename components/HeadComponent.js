import Head from "next/head";

export default function HeadComponent(props) {
  return (
    <Head>
      <title>Mazzoleni Odontologia | {props.title}</title>
      <meta name="description" content={props.content} />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
