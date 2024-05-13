import Head from 'next/head';
import MainContent from '@/components/MainContent';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>메린이 빙고</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <MainContent>
        <Header></Header>
        <main></main>
        <footer></footer>
      </MainContent>
    </>
  );
}
