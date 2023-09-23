import Nav from '@/components/nav';
import '../styles/globals.css';
import { SessionProvider, getSession } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  console.log("session: ", session)
  return (
      <SessionProvider session={session}>
        <Nav />
        {/* checks for a session before displaying the nav */}
         
        <Component {...pageProps} />
      </SessionProvider>    

    )
}
