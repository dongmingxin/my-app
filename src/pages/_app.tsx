import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../context/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps, initialTheme}: any) {
  return (
    <ThemeContextProvider initialTheme={initialTheme}>
      <Head>
        <title>Ming App</title>
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

MyApp.getInitialProps = (context:any) => {
  const cookies = context?.ctx?.req?.headers?.cookie ? context.ctx.req.headers.cookie : '';
  const getCookie = (n:string) =>{
    let a = `; ${cookies}`.match(`;\\s*${n}=([^;]+)`);
    return a ? a[1] : '';
  }
  let res = getCookie('theme')
  return {
      initialTheme: res
  };
}

export default MyApp
