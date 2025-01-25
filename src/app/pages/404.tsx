import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.asPath;

    // Detect and fix the duplicate "sanskriti/sanskriti" issue
    if (currentPath.includes("/sanskriti/sanskriti")) {
      const correctedPath = currentPath.replace(
        "/sanskriti/sanskriti",
        "/sanskriti"
      );
      router.replace(correctedPath); // Redirect to the corrected URL
    }
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
