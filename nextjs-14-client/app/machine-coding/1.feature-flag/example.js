import React from "react";

import { useFeatureFlag } from "./hook";

const ExampleComponent = () => {
  const [isEnabled, enableFeature, disableFeature] =
    useFeatureFlag("exampleFeature");

  return (
    <div>
      {isEnabled ? (
        <p>This feature is enabled!</p>
      ) : (
        <p>This feature is disabled!</p>
      )}
      <button onClick={enableFeature}>Enable Feature</button>
      <button onClick={disableFeature}>Disable Feature</button>
    </div>
  );
};

export default ExampleComponent;
