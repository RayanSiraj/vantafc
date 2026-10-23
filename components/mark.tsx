import type { ReactNode } from "react";

export function Mark({
  children,
  variant = "display",
}: {
  children: ReactNode;
  variant?: "display" | "text";
}) {
  return <span className={variant === "text" ? "mark mark-text" : "mark"}>{children}</span>;
}
