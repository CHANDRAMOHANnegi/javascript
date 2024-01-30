import React from "react";

/**
 * margin-collapse
 * **/

export default function page() {
  return (
    <>
      <p>
        In this example the h1 element has a bottom margin of 20px and the h2
        element has a top margin of 20px. So, the vertical margin between h1 and
        h2 should have been 40px (20px + 20px). However, due to margin collapse,
        the actual margin ends up being 20px.
      </p>
      <div>
        <h1 className="mb-5 bg-blue-500">Heading 1</h1>
        <h2 className="mt-5 bg-green-500">Heading 2</h2>
      </div>
    </>
  );
}
