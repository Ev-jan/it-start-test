import { API_URL, createSeminar, updateSeminar, useSeminar } from "@/lib/api";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { ISeminar } from "@/interfaces/interfaces";
import { Textarea } from "./Textarea";
import { formatDateForBackend, formatDateForDisplay } from "@/lib/utils";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { mutate } from "swr";
import clsx from "clsx";

type EditDialogProps = {
	seminarId?: number;
	onClose: () => void;
};

export const EditForm: React.FC<EditDialogProps> = ({ seminarId, onClose }) => {
	const isEditMode = !!seminarId;
	const { seminar, isLoading, isError } = useSeminar(seminarId);
	const { register, handleSubmit, formState: { errors } } = useForm();

	const displayDate = isEditMode && seminar?.date ? formatDateForDisplay(seminar.date) : "";
	const displayTime = isEditMode && seminar?.time ? seminar.time : "";

	const onSubmit = async (data: Partial<ISeminar>) => {

		if (data.date) data.date = formatDateForBackend(data.date);

		try {
			if (isEditMode) {
				await updateSeminar(seminarId, data);
				mutate(`${API_URL}`);
				mutate(`${API_URL}/${seminarId}`);

			} else {
				await createSeminar(data);
				mutate(`${API_URL}`);
			}
		} catch (err) {
			onClose();
			console.error('Failed to submit seminar:', err);
		} finally {
			onClose()
		}
	};


	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	if (isError) {
		return <p>Ошибкаю Не удалось загрузить данные</p>;
	}

	return (
		<form className="p-6 w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col items-start mb-4">
				<Label htmlFor="title" className={clsx(
					"mb-1",
					errors?.title && 'text-red-500'
				)}>Название
				</Label>
				<Input
					id="title"
					placeholder="Введите название"
					defaultValue={seminar?.title || ''}
					hasError={!!errors.title}
					{...register('title', { required: true })}
				/>
				{errors.title && <FieldErrorMessage>Введите название семинара</FieldErrorMessage>}
			</div>
			<div className="flex flex-col items-start mb-4">
				<Label htmlFor="photo" className="mb-1">Ссылка на изображение</Label>
				<Input
					id="photo"
					placeholder="Например: https://picsum.photos/id/17/200/300"
					defaultValue={seminar?.photo || ''}
					{...register('photo', { required: false })}
				/>
			</div >
			<div className="flex flex-col items-start mb-4">
				<Label htmlFor="description" className={clsx(
					"mb-1",
					errors?.description && 'text-red-500'
				)}>Описание
				</Label>
				<Textarea
					id="description"
					maxLength={200}
					placeholder="Введите описание"
					{...register('description', { required: true })}
					defaultValue={seminar?.description || ''}
					hasError={!!errors.description}
				/>
				{errors.description && <FieldErrorMessage>Добавьте описание семинара</FieldErrorMessage>}
			</div>
			<div className="flex gap-4 mb-12">
				<div className="flex flex-col gap-1 items-start">
					<Label htmlFor="date" className={clsx(
						"mb-1",
						errors?.date && 'text-red-500'
					)}>Дата
					</Label>
					<Input
						id='date'
						type="date"
						defaultValue={displayDate}
						hasError={!!errors.date}
						{...register('date', { required: true })}
					/>
					{(errors.date) && <FieldErrorMessage>Выберите дату</FieldErrorMessage>}
				</div>
				<div className="flex flex-col gap-1 items-start">
					<Label htmlFor="time" className={clsx(
						"mb-1",
						errors?.date && 'text-red-500'
					)}>Время
					</Label>
					<Input
						id='time'
						type="time"
						defaultValue={displayTime}
						hasError={!!errors.time}
						{...register('time', { required: true })}
					/>
					{(errors.time) && <FieldErrorMessage>Выберите время</FieldErrorMessage>}
				</div>
			</div>
			<div className="flex justify-end gap-4 ">
				<Button type="submit">{isEditMode ? "Обновить" : "Создать"}</Button>
				<Button variant="outline" onClick={onClose}>Отмена</Button>
			</div>
		</form >
	);
}