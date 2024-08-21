import { useEffect, useState } from "react";
import dimensions from "../styles/dimensions.module.scss";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useScreenSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmall = () => {
    if (windowDimensions.width < +dimensions.mediumScreenMinWidth) {
      return true;
    }
    return false;
  };

  const isMedium = () => {
    if (
      windowDimensions.width >= +dimensions.mediumScreenMinWidth &&
      windowDimensions.width < +dimensions.largeScreenMinWidth
    ) {
      return true;
    }
  };

  const isLarge = () => {
    if (windowDimensions.width >= +dimensions.largeScreenMinWidth) {
      return true;
    }
  };

  return { isLarge, isMedium, isSmall };
};
