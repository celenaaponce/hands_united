'use client'
import { useEffect } from "react";

const AidaFormEmbed = () => {
  useEffect(() => {
    const scriptId = "aidaform-app";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://widget.aidaform.com/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      data-aidaform-app="form202405"
      data-url="https://celenaponce.aidaform.com/mailing-list"
      data-width="100%"
      data-height="500px"
      data-do-resize
    ></div>
  );
};

export default AidaFormEmbed;
