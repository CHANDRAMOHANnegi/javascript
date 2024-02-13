/**
 *  Code splitting is the splitting of code into various bundles or
 *  components which can then be loaded on demand or in parallel.
 * */

/**
 *
 * Preloading/Prefetching refers to loading a resource before it is actually required,
 * reducing the waiting time for that resource.
 *
 * **/

"use client";
import React from "react";

import dynamic from "next/dynamic";
import { Suspense } from "react";

export function CodeSplitting() {
  const SayWelcome = dynamic(
    () => import("../components/say-hello").then((res) => res.SayWelcome),
    { loading: () => <p>Loading...</p> }
  );
  return (
    <div>
      hi
      <Suspense fallback={<div>Loading...</div>}>
        <SayWelcome />
        hello
      </Suspense>
    </div>
  );
}

export default CodeSplitting;
