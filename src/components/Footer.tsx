import { ContactLink } from "./ContactLink";


export const Footer: React.FC = () => (
	<footer className="bg-black text-white text-sm w-full mt-20 p-8">
		<div className="max-w-screen-lg mx-auto flex flex-wrap gap-6 justify-between sm:p-6 lg:p-8">
			<section aria-labelledby="contact-heading" >
				<h2 id="contact-heading" className="mb-3">Пригласить на собеседование</h2>
				<ul className="flex gap-4">
					{connectLinks.map((link) => (
						<li key={link.iconId}>
							<ContactLink {...link} />
						</li>
					))}
				</ul>
			</section>
			<p>&copy; {new Date().getFullYear()} Evgeny Mazyar</p>
		</div>
	</footer>
)

const connectLinks = [
	{
		iconId: "whatsapp",
		ariaLabel: "Чат whatsapp",
		to: "https://wa.me/37491183591",
	},
	{
		iconId: "telegram",
		ariaLabel: "Написать в Телеграм",
		to: "https://t.me/Eugenito"
	},
	{
		iconId: "phone",
		ariaLabel: "Позвонить",
		to: "tel:+79200189686",
	},
];