"use client";
import React from "react";
import { FeatureFlagContext, FeatureFlagProvider } from "./feature-flag";
import Example from "./example";

export const FeatureFlag = () => {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
};

export default FeatureFlag;
