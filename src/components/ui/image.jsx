import React from "react";

export function Image({
  src,
  alt = "",
  className = "",
  fittingType = "fill",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${
        fittingType === "fill" ? "object-cover" : "object-contain"
      }`}
      {...props}
    />
  );
}