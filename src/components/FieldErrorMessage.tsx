import React from "react";

export const FieldErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <span className="text-red-400 self-center text-xs">{children}</span>;
}