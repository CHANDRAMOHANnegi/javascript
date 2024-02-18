import React, { useState } from "react";

export const FeatureFlagContext = React.createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState({
    darkMode: true,
    chatEnabled: false,
  });

  const setFlag = (flag, value) => {
    setFeatureFlags((prevFlags) => ({
      ...prevFlags,
      [flag]: value,
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ featureFlags, setFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
