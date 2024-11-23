import { useState, useEffect } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowWidth,
    screens: {
      sm: parseInt(fullConfig.theme.screens.sm),
      md: parseInt(fullConfig.theme.screens.md),
      lg: parseInt(fullConfig.theme.screens.lg),
      xl: parseInt(fullConfig.theme.screens.xl),
      "2xl": parseInt(fullConfig.theme.screens["2xl"]),
    },
  };
};

export default useWindowWidth;
