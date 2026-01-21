import React, { Suspense } from "react";
import WorksPageClient from "./WorksPageClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <WorksPageClient />
    </Suspense>
  );
}
