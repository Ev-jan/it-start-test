import { useSeminars } from "@/lib/api";
import { SeminarItem } from "./SeminarItem"
import { ISeminarAction } from "@/interfaces/interfaces";
import { Spinner } from "./Spinner";

type SeminarListProps = { setActiveModal: (type: ISeminarAction) => void; }

export const SeminarList: React.FC<SeminarListProps> = ({ setActiveModal }) => {
	const { seminars, isLoading, isError } = useSeminars();

	if (isLoading) return <Spinner />
	if (isError) return <div>Ошибка. Не удалось загрузить семинары</div>
	if (!seminars || seminars.length === 0) return <div>Здесь будет список семинаров</div>

	return (
		<ul role="list" className="divide-y divide-gray-100">
			{seminars.map((seminar) => (
				SeminarItem({ ...seminar, setActiveModal })
			))}
		</ul>
	)
}