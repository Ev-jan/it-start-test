import clsx from "clsx"
import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { hasError?: boolean }>(
	({ className, type, hasError, ...props }, ref) => {
		return (
			<input
				type={type}
				className={clsx(
					"flex h-9 w-full rounded-xs border border-input bg-transparent px-3 py-1 text-base text-gray-700 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", hasError && "border-red-500 focus-visible:ring-red-500",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }
