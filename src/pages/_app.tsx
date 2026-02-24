import '@/styles/globals.css'
import "@/styles/variables.css"
import Layout from '@/Components/Layout';
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}
