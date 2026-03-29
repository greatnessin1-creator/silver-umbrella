import React from "react";

export function Button({
  children,
  asChild = false,
  className = "",
  variant = "default",
  ...props
}) {
  const baseClass =
    variant === "outline"
      ? `inline-flex items-center justify-center ${className}`
      : `inline-flex items-center justify-center ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${baseClass} ${children.props.className || ""}`.trim(),
      ...props,
    });
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}