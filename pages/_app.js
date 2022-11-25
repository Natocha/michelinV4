import "../styles/globals.scss";

import { NextUIProvider } from '@nextui-org/react';
import { lightTheme } from "../themes/ligthTheme";

function MyApp({ Component, pageProps }) {
  return (

    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;