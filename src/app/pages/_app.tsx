// pages/_app.tsx
import { AppProps } from "next/app"; // Import AppProps type for typing the component
import "../components/css/index.css"; // Import global CSS
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
