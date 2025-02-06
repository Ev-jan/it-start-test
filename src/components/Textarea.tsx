import clsx from "clsx"
import React from "react"

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentProps<"textarea"> & { hasError?: boolean }
>(({ className, hasError, ...props }, ref) => {
	return (
		<textarea
			className={clsx(
				"flex min-h-[60px] w-full rounded-xs border border-input bg-transparent px-3 py-2 text-gray-700 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				hasError && "border-red-500 focus-visible:ring-red-500",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = "Textarea"

export { Textarea }
