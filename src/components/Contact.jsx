/**
 * Contact — "Contacto!" section.
 * Single-column centered layout with contact info and social links.
 * Uses jade palette and user's real data.
 */

/** Builds a mailto link with properly encoded subject and body */
function buildMailtoLink() {
	const subject = encodeURIComponent('Contacto desde tu portafolio')
	const body = encodeURIComponent(
		`Hola Jesús,\n\nRevisé tu portafolio y me gustaría ponerme en contacto contigo para platicar sobre tu perfil.\n\nSaludos.`
	)
	return `mailto:jesusaguilar32265@gmail.com?subject=${subject}&body=${body}`
}

/** Social / contact link data */
const SOCIAL_LINKS = [
	// {
	// 	label: 'Gmail',
	// 	href: buildMailtoLink(),
	// 	icon: (
	// 		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor">
	// 			<title>Gmail</title>
	// 			<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
	// 		</svg>
	// 	),
	// },
	{
		label: 'WhatsApp',
		href: 'https://wa.me/5217732290121?text=Hola%20Jes%C3%BAs,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo.',
		icon: (
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor">
				<title>WhatsApp</title>
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/aguiar-cruz',
		icon: (
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor">
				<title>LinkedIn</title>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	}
]

function Contact() {
	return (
		<section
			id="contacto"
			className="flex flex-col items-center justify-center bg-bgMain px-6 pt-0 pb-20"
		>
			{/* Section heading */}
			<h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 cursor-default">
				<span className="text-textMain">Contactame	 </span>
				<span className="text-jade">Hoy</span>
			</h2>

			{/* Content */}
			<div className="w-full max-w-xl flex flex-col items-center gap-8 text-center">

				{/* Let's talk */}
				<div>
					<h3 className="text-jade font-mono font-bold text-xl mb-3">Hablemos</h3>
					<p className="text-textMain/80 text-sm leading-relaxed">
						Estoy abierto a colaborar en proyectos innovadores o discutir tu próxima gran idea.
						No dudes en contactarme por correo, WhatsApp o redes sociales.
					</p>
				</div>

				{/* Contact details */}
				<div>
					<h4 className="text-textMain font-bold tracking-widest text-sm uppercase mb-4">
						Datos de Contacto
					</h4>
					<ul className="flex flex-col items-center gap-3">
						{/* Email */}
						<li className="flex items-center gap-3 text-sm text-textMain/80">
							<span className="text-jade">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor">
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
								</svg>
							</span>
							<a
								href={buildMailtoLink()}
								className="hover:text-jade transition-colors duration-200"
							>
								jesusaguilar32265@gmail.com
							</a>
						</li>
						{/* Phone / WhatsApp */}
						<li className="flex items-center gap-3 text-sm text-textMain/80">
							<span className="text-jade">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor">
									<path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
								</svg>
							</span>
							<a
								href="https://wa.me/5217732290121"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-jade transition-colors duration-200"
							>
								+52 773 229 0121
							</a>
						</li>
					</ul>
				</div>

				{/* Stay connected */}
				<div>
					<h4 className="text-textMain font-bold tracking-widest text-sm uppercase mb-4">
						Mantente Conectado
					</h4>
					<div className="flex items-center justify-center gap-4">
						{SOCIAL_LINKS.map(({ label, href, icon }) => (
							<a
								key={label}
								href={href}
								target={href.startsWith('mailto:') ? undefined : '_blank'}
								rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
								aria-label={label}
								className="
									text-textMain/60 hover:text-jade
									border border-jade/30 hover:border-jade
									rounded-full p-2.5
									transition-all duration-200 ease-out
									hover:scale-110
								"
							>
								{icon}
							</a>
						))}
					</div>
				</div>

			</div>
		</section>
	)
}

export default Contact
