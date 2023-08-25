// pages/_app.js

import '../styles/tailwind.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> 
      <div> footer </div>  
    </>
  );
}

export default MyApp;
