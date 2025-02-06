import clsx from "clsx";



export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, className, ...props }) => {
	return (
		<label className={clsx("block text-xs font-medium text-gray-400", className)} {...props}>
			{children}
		</label>
	);
};
