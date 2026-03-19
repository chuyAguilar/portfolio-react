import ProjectCard from './ProjectCard'

/**
 * Projects — "Proyectos!" section.
 * Renders a horizontally-scrollable track of ProjectCards on mobile,
 * and a responsive grid on desktop.
 * "Contáctame" button at bottom scrolls to the Contact section.
 */

/** Project data — extracted for easy maintenance */
const PROJECTS = [
	{
		image: '/images/sistemaAlmacenamiento.png',
		alt: 'Preview del sistema de almacenamiento',
		title: 'Sistema de almacenamiento',
		description: 'Prototipo para sistema de almacenamiento tipo drive.',
		stack: ['React', 'CSS', 'JavaScript'],
		href: 'https://file-system-react-five.vercel.app',
	},
	{
		image: '/images/Cv_Castaneda.png',
		alt: 'Preview del proyecto Portfolio CV',
		title: 'Portfolio CV',
		description: 'Portafolio personal construido con enfoque en estructura.',
		stack: ['Ionic', 'Ant Design', 'JavaScript'],
		href: 'https://alejandro-cv.vercel.app',
	},
	{
		image: '/images/veterinaria.png',
		alt: 'Preview de la agenda veterinaria',
		title: 'Agenda Veterinaria',
		description: 'Web personalizada diseñada para clínicas veterinarias.',
		stack: ['Ionic', 'CSS', 'JavaScript', 'Node', 'MongoDB'],
		href: 'https://veterinarias-iota.vercel.app/login',
	},
	{
		image: '/images/rustica.png',
		alt: 'Preview del sitio del fotógrafo',
		title: 'Contaco Fotografo',
		description: 'Web de contacto para un fotógrafo en Querétaro.',
		stack: ['Ionic', 'CSS', 'JavaScript'],
		href: 'https://landing-fotografo.vercel.app',
	},
]

function Projects() {
	/** Scroll to Contact section */
	const handleContactame = () => {
		document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section
			id="proyectos"
			className="flex flex-col gap-4 bg-bgMain"
		>
			{/* Section title */}
			<h2 className="text-4xl sm:text-5xl font-bold text-jade tracking-wide pl-8 pt-8 m-0 cursor-default">
				Proyectos!
			</h2>

			{/* Projects scrollable track — horizontal scroll on mobile, grid on desktop */}
			<div className="py-8">
				{/* Mobile: horizontal scroll; md+: 2-col grid; lg+: 4-col grid */}
				<div className="
					projects-track
					flex gap-8 overflow-x-auto
					md:grid md:grid-cols-2 md:overflow-x-visible
					lg:grid-cols-4
					px-8 pb-4
				">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>

			{/* "Contáctame" button */}


		</section>
	)
}

export default Projects
