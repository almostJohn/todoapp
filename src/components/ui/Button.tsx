import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/util/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md h-7 w-7 p-0 [&_svg]:h-4 [&_svg]:w-4",
	{
		variants: {
			variant: {
				default:
					"text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0",
				primary:
					"text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
	return <button className={cn(buttonVariants({ variant, className }))} ref={ref} type="button" {...props} />;
});
Button.displayName = "Button";
