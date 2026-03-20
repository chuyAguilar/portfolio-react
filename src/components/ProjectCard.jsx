/**
 * ProjectCard — Individual project card.
 * Shows an image, title (jade), description, tech badges, and "Ver proyecto" link.
 *
 * @param {string} image        - Image path from /public
 * @param {string} alt          - Image alt text
 * @param {string} title        - Project title
 * @param {string} description  - Short description
 * @param {string[]} stack      - Array of technology names shown as jade badges
 * @param {string} href         - URL to the live project
 */
function ProjectCard({ image, alt, title, description, stack, href }) {
	return (
		<div className="flex-none w-[340px] border-2 border-jade rounded-2xl flex flex-col overflow-hidden">

			{/* Preview image */}
			<div className="flex justify-center items-center bg-black/20 border-b-2 border-jade overflow-hidden">
				<img
					src={image}
					alt={alt}
					className="w-full max-h-[320px] object-contain"
					loading="lazy"
				/>
			</div>

			{/* Card body */}
			<div className="p-4 flex flex-col gap-3">

				{/* Title in Jade */}
				<h3 className="m-0 text-xl font-semibold text-jade">{title}</h3>

				{/* Description */}
				<p className="m-0 text-sm text-textMain">{description}</p>

				{/* Tech badges */}
				<div className="flex flex-wrap gap-2">
					{stack.map((tech) => (
						<span
							key={tech}
							className="text-sm font-medium text-jade border border-jade rounded-xl px-2 py-0.5 cursor-default"
						>
							{tech}
						</span>
					))}
				</div>

				{/* "Ver proyecto" button */}
				{href && (
					<div className="flex mt-2">
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="
								bg-bgMain border border-jade text-textMain
								rounded-lg py-1 px-4 text-base font-medium cursor-pointer
								transition-colors duration-300
								hover:bg-jade
							"
						>
							Ver proyecto
						</a>
					</div>
				)}

			</div>
		</div>
	)
}

export default ProjectCard
