import Head from "next/head";

export default function HeadComponent(props) {
  const title = `Mazzoleni Odontologia | ${props.title}`
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.content} />
    </Head>
  );
}
