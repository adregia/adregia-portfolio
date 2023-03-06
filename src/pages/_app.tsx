import '@/styles/globals.css';
import { Public_Sans } from 'next/font/google';
import { CssVarsProvider } from '@mui/joy/styles';
import type { AppProps } from 'next/app';

const publicSans = Public_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssVarsProvider>
        <style jsx global>{`
          * {
            font-family: ${publicSans.className}, sans-serif !important;
          }
        `}</style>
        <Component {...pageProps} />
      </CssVarsProvider>
    </>
  );
}
