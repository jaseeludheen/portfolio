import { useRef } from "react";
import { useInView } from "../hooks/Useinview";
import "./Section.css";

export default function Section({ children, className = "" }) {
  const ref = useRef();
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`section-wrapper ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}