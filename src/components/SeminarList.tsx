import { useSeminars } from "@/lib/api";
import { SeminarItem } from "./SeminarItem"
import { ISeminarAction } from "@/interfaces/interfaces";

type SeminarListProps = { setActiveModal: (type: ISeminarAction) => void; }

export const SeminarList: React.FC<SeminarListProps> = ({ setActiveModal }) => {
	const { seminars, isLoading, isError } = useSeminars();

	if (isLoading) return <div>Загрузка...</div>
	if (isError) return null
	if (!seminars || seminars.length === 0) return <div>Здесь будет список актуальных семинаров</div>

	return (
		<ul role="list" className="divide-y divide-gray-100">
			{seminars.map((seminar) => (
				SeminarItem({ ...seminar, setActiveModal })
			))}
		</ul>
	)
}