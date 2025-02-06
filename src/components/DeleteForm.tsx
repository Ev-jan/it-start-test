import { API_URL, deleteSeminar, useSeminar } from "@/lib/api";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";

type ConfirmDeleteWindowProps = {
	onCancel: () => void;
	seminarId: number;
};

export const DeleteForm: React.FC<ConfirmDeleteWindowProps> = ({ onCancel, seminarId }) => {
	const { handleSubmit } = useForm();
	const { seminar } = useSeminar(seminarId);

	const onSubmit = async () => {
		try {
			await deleteSeminar(seminarId);
			mutate(`${API_URL}`);
		} catch (err) {
			console.error("Failed to delete seminar:", err);
			toast.error("Не удалось удалить семинар");
		} finally {
			onCancel();
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="p-6 size-full flex flex-col justify-center items-center gap-y-10">
			<p>Вы уверены, что хотите удалить семинар <span className="font-bold">{seminar?.title}</span>?</p>
			<div className="flex gap-4 justify-center">
				<Button variant="destructive" type="submit">Удалить</Button>
				<Button onClick={onCancel}>Отмена</Button>
			</div>
		</form>
	);
}