import { cn } from "../../utils/cn";

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("rounded-[var(--radius)] border border-border bg-card p-4 shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}
