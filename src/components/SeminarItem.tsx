import { CrudType, type ISeminar, type ISeminarAction } from "@/interfaces";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import placeholder from "@/assets/placeholder.png";

type SeminarItemProps = ISeminar & { setActiveModal: (type: ISeminarAction) => void; };

export const SeminarItem = ({ id, photo, title, description, date, time, setActiveModal }: SeminarItemProps) => {
	return (
		<li key={id} >
			<div className="relative p-6 rounded-sm hover:bg-blue-50 
			flex flex-col items-start flex-[1_1_auto] 
			md:grid md:grid-rows-[1fr_auto] md:justify-start 
			lg:grid lg:grid-rows-1 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:justify-start gap-6">
				<div className="relative col-span-1 ">
					<img
						alt=""
						src={photo || placeholder}
						onError={(e) => e.currentTarget.src = placeholder}
						className="sm:size-full md:size-60 lg:size-20 flex-none rounded-xs"
					/>
				</div>

				<div className="flex flex-col col-start-2 col-end-3 justify-center items-start">
					<p className="text-sm wrap font-semibold text-gray-900 ">{title}</p>
					<p className="mt-1 text-xs text-gray-500 text-wrap text-left lg:line-clamp-2 lg:truncate sm:line-clamp-none sm:truncate-none max-w-md">{description}</p>
				</div>

				<div className="
			flex w-40 order-4
			md:gap-6 md:col-start-1 md:col-end-4 md:justify-between
			lg:gap-2 lg:col-start-3 lg:col-end-4 lg:justify-center lg:row-start-1 lg:row-end-2">
					<DeleteButton onClick={() => setActiveModal({ seminarId: id, action: CrudType.DELETE })} />
					<EditButton onClick={() => setActiveModal({ seminarId: id, action: CrudType.EDIT })} />
				</div>

				<div className="flex flex-col md:text-right sm:text-left md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5 sm:order-3">
					<time className="text-sm text-gray-900">{date}</time>
					<time className="mt-1 text-xs text-gray-500">{time}</time>
				</div>
			</div>

		</li>

	)
}
