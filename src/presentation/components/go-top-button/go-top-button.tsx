import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

export const GoTopButton: React.FC = () => {
  const [showUpButton, setShowUpButton] = useState(false);

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const listener = () => {
      const limit = window.innerHeight / 2;
      if (window.scrollY > limit && !showUpButton) {
        setShowUpButton(true);
      } else if (window.scrollY < limit && showUpButton) {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [showUpButton]);

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleScrollToTop}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: showUpButton ? "inline" : "none",
      }}
    >
      <ArrowUpward />
    </Fab>
  );
};
