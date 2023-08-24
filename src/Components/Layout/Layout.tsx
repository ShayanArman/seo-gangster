import Head from "next/head";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <title>Zero Inbox</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="Clear your Email, clear your Mind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={"Zero Inbox"} />
      </Head>
      { children }
    </>
  );
}
