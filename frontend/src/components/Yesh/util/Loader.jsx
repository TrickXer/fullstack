import React, { lazy, Suspense } from "react";

export default function Loader({ path }) {
  if (!path) return <></>;
  // "../"
  const Component = lazy(() => import(`../${path}`));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </>
  );
}
