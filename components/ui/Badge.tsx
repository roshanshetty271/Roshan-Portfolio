import * as React from "react"

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "secondary";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ children, variant = "default", size = "sm", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-charcoal-100 text-charcoal-800 dark:bg-charcoal-700 dark:text-cream-200",
    accent: "bg-copper-100 text-copper-700 dark:bg-copper-900/30 dark:text-copper-400",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantClass = variants[variant] || variants.default;
  const sizeClass = sizes[size] || sizes.sm;

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </span>
  );
}
