import { Button } from "@/components/Button";


export const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<Button
		variant='withIcon'
		onClick={onClick}
		aria-label="Удалить"
		title="Удалить"
		className='absolute top-4 right-4'
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>
	</Button>
);