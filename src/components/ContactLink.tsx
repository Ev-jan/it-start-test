
interface ContactLinkProps {
	iconId: string;
	ariaLabel?: string;
	to: string;
}

export const ContactLink = ({ iconId, ariaLabel, to }: ContactLinkProps) => {
	return (
		<a
			className="hover:text-blue-300"
			href={to}
			target="_blank"
			aria-label={ariaLabel}
			rel="nofollow">
			<svg className="size-8">
				<use href={`/icons-sprite-sheet.svg#${iconId}`}></use>
			</svg>
		</a>
	)
}

