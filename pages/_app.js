// pages/_app.js

import '../styles/tailwind.css'; // Import your global styles here
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} /> 
        {/* temporary nav for fast page nav */}

    </>
  );
}

export default MyApp;
