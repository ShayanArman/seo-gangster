import '@/styles/globals.css'
import "@/styles/variables.css"
import type { AppProps } from 'next/app'
import Layout from '@/Components/Layout';
import { ReadingProvider } from '@/hooks/useIsReading';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReadingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReadingProvider>
  );
}
