import { AppProps } from "next/app"; // Import AppProps type for typing the component
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../components/css/index.css"; // Import global CSS
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Detect duplicate "sanskriti/sanskriti" in the URL
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;

      if (currentUrl.includes("/sanskriti/sanskriti")) {
        // Replace duplicate "sanskriti" with a single one
        const correctedUrl = currentUrl.replace(
          "/sanskriti/sanskriti",
          "/sanskriti"
        );

        // Redirect to the corrected URL
        window.location.replace(correctedUrl);
      }
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
