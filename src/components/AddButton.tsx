import { Button } from "@/components/Button";

export const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<Button variant="outline" className="m-6" onClick={onClick} title="Создать семинар" aria-label="Создать семинар">
		Создать семинар
	</Button>
);