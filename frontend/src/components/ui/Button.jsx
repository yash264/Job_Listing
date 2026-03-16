import { cn } from "../../utils/cn";

const variants = {
  default: "bg-primary text-primary-foreground hover:brightness-90",
  secondary: "bg-secondary text-secondary-foreground hover:brightness-95",
  outline: "border border-border bg-transparent",
  ghost: "bg-transparent hover:bg-secondary/50",
  destructive: "bg-destructive text-white hover:brightness-90"
};

const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-lg"
};

export function Button({ variant = "default", size = "default", className, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
