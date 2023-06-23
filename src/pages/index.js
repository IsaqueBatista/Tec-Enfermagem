import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josy Freitas | Técnica Enfermagem</title>
        <meta name="description" content="Técnica Enfermagem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="./favicon-32.png" /> */}
      </Head>
      <Main/>
    </div>
  );
}
