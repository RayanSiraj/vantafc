import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-none font-sans font-semibold uppercase tracking-[0.18em] transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(31,181,116,0.6)] active:translate-y-0 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-chalk text-ink hover:bg-accent hover:text-ink",
  secondary: "border border-chalk/40 text-chalk hover:border-accent hover:bg-accent hover:text-ink",
  ghost: "text-chalk hover:text-accent px-0!",
  dark: "bg-ink text-chalk hover:bg-accent hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-[0.72rem]",
  lg: "min-h-14 px-8 text-[0.78rem]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  external,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size; arrow?: boolean };

export function Button({ variant = "primary", size = "md", arrow = true, className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}
