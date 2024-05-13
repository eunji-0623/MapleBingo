import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import '@/styles/global.css';

const notoSansKR = Noto_Sans_KR({ weight: ['400', '700'], subsets: [] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSansKR.className}>
      <Component {...pageProps} />
    </main>
  );
}
