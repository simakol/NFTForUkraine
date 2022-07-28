import { useEffect, useRef } from "react";
import "./index.sass";

export default function BackgroundTicker() {
  let pageHeight = useRef(0);
  useEffect(() => {
    pageHeight.current = document.body.scrollHeight;

    function handleResize() {
      pageHeight.current = document.body.scrollHeight;
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="background-ticker">
      <div className="background-ticker-wrapper">
        <div
          className="background-ticker-item-1"
          style={{ height: `${pageHeight.current}px` }}></div>
        <div
          className="background-ticker-item-2"
          style={{ height: `${pageHeight.current}px` }}></div>
      </div>
    </div>
  );
}
