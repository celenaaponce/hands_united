"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classes from "./main-header-background.module.css";

export default function MainHeaderBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const [gradient, setGradient] = useState({
    start: "#72b200",
    end: "#b4e956",
  });

  useEffect(() => {
    // mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // theme detection
    // theme detection
    if (
      pathname.includes("haitian-creole") ||
      pathname.includes("tigrinya-amharic")
    ) {
      setGradient({
        start: "#E68A00",
        end: "#F2A94C",
      });
    } else if (pathname.includes("russian")) {
      setGradient({
        start: "#D62828",
        end: "#FF6B6B",
      });
    } else if (pathname.includes("burmese")) {
      setGradient({
        start: "#B56576",
        end: "#E5989B",
      });
    } else if (pathname.includes("chuukese")) {
      setGradient({
        start: "#D8572A",
        end: "#F28C28",
      });
    } else {
      // default green
      setGradient({
        start: "#72b200",
        end: "#b4e956",
      });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  return (
    <div
      className={isMobile ? classes.straightBar : classes.wavyBackground}
      style={{
        backgroundImage: isMobile
          ? `linear-gradient(${gradient.start}, ${gradient.end})`
          : undefined,
      }}
    >
      {!isMobile && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor={gradient.start} />
              <stop offset="100%" stopColor={gradient.end} />
            </linearGradient>
          </defs>

          <path
            fill="url(#gradient)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L0,0Z"
          />
        </svg>
      )}
    </div>
  );
}
