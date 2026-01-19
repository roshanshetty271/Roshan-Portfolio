import * as React from "react"

// Simple class merger without external dependencies if needed, 
// but we'll try to stick to standard template literals for safety
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {

        // Base styles
        let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        // Variant styles
        const variants = {
            default: "bg-charcoal-900 text-white hover:bg-charcoal-800 dark:bg-cream-100 dark:text-charcoal-900 dark:hover:bg-cream-200",
            destructive: "bg-red-500 text-white hover:bg-red-600",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        // Size styles
        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        // Combine classes
        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

        if (asChild) {
            // If using asChild, we just render the children (a link typically) with the classes
            // This is a simplified version of Slot
            const children = React.Children.only(props.children) as React.ReactElement;
            return React.cloneElement(children, {
                className: `${children.props.className || ''} ${combinedClassName}`,
                ref,
                ...props
            });
        }

        return (
            <button
                className={combinedClassName}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
