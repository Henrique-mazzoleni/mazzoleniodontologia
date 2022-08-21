import Head from "next/head";

export default function HeadComponent(props) {
  return (
    <Head>
      <title>Mazzoleni Odontologia | {props.title}</title>
      <meta
        name="description"
        content={props.content}
      />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
}
