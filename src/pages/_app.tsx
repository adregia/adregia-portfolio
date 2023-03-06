import '@/styles/globals.css';

import { CssVarsProvider } from '@mui/joy/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssVarsProvider>
        <style jsx global>{`
          * {
            font-family: 'futura-pt', sans-serif !important;
          }
        `}</style>
        <Component {...pageProps} />
      </CssVarsProvider>
    </>
  );
}
