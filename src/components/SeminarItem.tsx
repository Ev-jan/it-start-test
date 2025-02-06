import { CrudType, type ISeminar, type ISeminarAction } from "@/interfaces";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import placeholder from "@/assets/placeholder.png";

type SeminarItemProps = ISeminar & { setActiveModal: (type: ISeminarAction) => void; };

export const SeminarItem = ({ id, photo, title, description, date, time, setActiveModal }: SeminarItemProps) => {
	return (
		<li key={id} className="relative grid grid-cols-[auto_1fr_auto_auto] grid-rows-none items-center justify-items-start gap-x-6 p-6 hover:bg-blue-50 rounded-sm">
			<div className="relative col-span-1">
				<img
					alt=""
					src={photo || placeholder}
					onError={(e) => e.currentTarget.src = placeholder}
					className="size-12 flex-none rounded-xs"
				/>
			</div>

			<div className="flex flex-col col-start-2 col-end-3 justify-center items-start">
				<p className="text-sm wrap font-semibold text-gray-900 ">{title}</p>
				<p className="mt-1 text-xs text-gray-500 text-wrap text-left line-clamp-2 truncate max-w-md">{description}</p>
			</div>

			<div className="flex gap-2 col-start-3 col-end-4 w-48">
				<DeleteButton onClick={() => setActiveModal({ seminarId: id, action: CrudType.DELETE })} />
				<EditButton onClick={() => setActiveModal({ seminarId: id, action: CrudType.EDIT })} />
			</div>

			<div className="flex flex-col text-right col-start-4 col-end-5">
				<time className="text-sm text-gray-900">{date}</time>
				<time className="mt-1 text-xs text-gray-500">{time}</time>
			</div>
		</li>

	)
}
