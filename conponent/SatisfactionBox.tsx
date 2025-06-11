import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

export default function SatisfactionBox() {
  const triangleStyle: CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "12px solid #28a745",
    display: "inline-block",
    marginRight: 8,
    verticalAlign: "middle",
  };

  function LabelWithTriangle({ text }: { text: string }) {
    const labelStyle: CSSProperties = {
      fontFamily: "BR Firma, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "22.4px",
      letterSpacing: "-0.32%",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      userSelect: "none",
    };
    return (
      <div style={labelStyle}>
        <span style={triangleStyle} />
        <span>{text}</span>
      </div>
    );
  }

  // We’ll make font size responsive using CSS clamp() function
  const numberStyle: CSSProperties = {
    fontFamily: "BR Firma, sans-serif",
    fontWeight: 400,
    fontSize: "clamp(40px, 10vw, 100px)", // scales between 40px and 100px based on viewport width
    lineHeight: "1",
    letterSpacing: "-0.64%",
    color: "#fff",
    textAlign: "center",
    userSelect: "none",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: "#000917",
        width: "100%",
        maxWidth: 1440,
        minHeight: 299,
        display: "flex",
        flexWrap: "wrap",           // wrap on smaller screens
        justifyContent: "space-around",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "20px 40px",
        margin: "0 auto",           // center horizontally
        gap: 20,                    // spacing between items when wrapped
      }}
    >
      {[
        { label: "Client Satisfaction", value: "95%" },
        { label: "Verified Contractors", value: "1200" },
        { label: "Contractor Satisfaction", value: "89%" },
        { label: "Projects Completed", value: "100+" },
      ].map(({ label, value }) => (
        <div
          key={label}
          style={{
            textAlign: "center",
            flex: "1 1 200px", // grow, shrink, basis for responsiveness
            minWidth: 200,
            maxWidth: 320,
          }}
        >
          <LabelWithTriangle text={label} />
          <div style={numberStyle}>{value}</div>
        </div>
      ))}
    </motion.div>
  );
}
