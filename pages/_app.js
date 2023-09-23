import Nav from '@/components/nav';
import '../styles/globals.css';
import { SessionProvider, getSession } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <>
      <Nav />
      <SessionProvider session={session}>
        {/* checks for a session before displaying the nav */}
         
        <Component {...pageProps} />
      </SessionProvider>    
    </>

    )
}
