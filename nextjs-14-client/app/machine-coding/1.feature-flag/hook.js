import React from "react";
import { useContext } from "react";
import { FeatureFlagContext } from "./feature-flag";

export const useFeatureFlag = (flag) => {
  const { featureFlags, setFlag } = useContext(FeatureFlagContext);
  const isEnabled = featureFlags[flag] || false;

  const enableFeature = () => setFlag(flag, true);
  const disableFeature = () => setFlag(flag, false);

  return [isEnabled, enableFeature, disableFeature];
};
