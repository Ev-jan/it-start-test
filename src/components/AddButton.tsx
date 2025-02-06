import { Button } from "@/components/Button";

export const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<Button className="ml-6" variant="withIcon" onClick={onClick} title="Создать семинар" aria-label="Создать семинар">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</Button>
);