import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'destructive' | 'withIcon' | "outline";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
	const baseClasses = 'flex items-center justify-center whitespace-nowrap rounded-xs font-light  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-2 px-6 cursor-pointer [&_svg]:shrink-0';

	const variantClasses = {
		primary: 'bg-blue-600 text-white shadow hover:bg-blue-400',
		destructive: 'bg-red-600 text-white shadow hover:bg-red-400',
		outline: 'bg-transparent border outline-black text-black hover:bg-blue-50',
		withIcon: 'text-gray-900 bg-opacity-0 rounded-0.5 hover:shadow hover:bg-white/75 w-8 h-8',
	};

	return (
		<button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
			{children}
		</button>
	);
};