"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Ensure the router is ready

    // Get the current path and normalize it (remove trailing slashes)
    const currentPath = router.asPath.replace(/\/+$/, "");

    // Check if there is a duplicate "/sanskriti/sanskriti" in the path
    if (currentPath.includes("/sanskriti/sanskriti")) {
      const correctedPath = currentPath.replace(
        "/sanskriti/sanskriti",
        "/sanskriti"
      );
      console.log("Redirecting due to repetition:", {
        currentPath,
        correctedPath,
      });

      // Redirect to corrected path
      if (correctedPath !== currentPath) {
        router.replace(
          `https://www.radhakrishnatemple.net/sanskriti${correctedPath}`
        );
        return;
      }
    }

    // General 404 redirect: Send user to "https://www.radhakrishnatemple.net/sanskriti
    console.log("Redirecting to the main page due to 404.");
    router.replace("https://www.radhakrishnatemple.net/sanskriti");
  }, [router.isReady, router]);

  return null; // No need to render anything since users are being redirected
}
