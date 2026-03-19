/**
 * Hero — Full-screen intro section.
 * Two-column layout: text/CTA on the left, decorative code card on the right.
 * Inspired by the reference design, using jade palette and user's real data.
 */

/** Tech stack pills shown in the code card */
const STACK = ['React', 'Node.js', 'Python', 'MongoDB']

/** Decorative code lines for the terminal card */
const CODE_LINES = [
	{ indent: 0, content: '// Jesús Aguilar' },
	{ indent: 0, content: '' },
	{ indent: 0, content: 'function systemMode() {' },
	{ indent: 1, content: 'const profile = "Software Developer"' },
	{ indent: 1, content: '' },
	{ indent: 1, content: 'const approach = [' },
	{ indent: 2, content: '"entender el problema antes de implementar",' },
	{ indent: 2, content: '"priorizar soluciones claras y mantenibles",' },
	{ indent: 2, content: '"construir con lógica y estructura"' },
	{ indent: 1, content: ']' },
	{ indent: 1, content: '' },
	{ indent: 1, content: 'const workflow = [' },
	{ indent: 2, content: '"analizar",' },
	{ indent: 2, content: '"diseñar",' },
	{ indent: 2, content: '"implementar",' },
	{ indent: 2, content: '"iterar"' },
	{ indent: 1, content: ']' },
	{ indent: 1, content: '' },
	{ indent: 1, content: 'const stack = ["React", "Node.js", "Python"]' },
	{ indent: 1, content: '' },
	{ indent: 1, content: 'const focus = "desarrollo de sistemas funcionales y bien estructurados"' },
	{ indent: 1, content: '' },
	{ indent: 1, content: 'return build(profile, approach, workflow, stack, focus)' },
	{ indent: 0, content: '}' },
]

function Hero() {
	/** Scroll to the About section smoothly */
	const handleConoceme = () => {
		document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
	}

	/** Scroll to Contact section smoothly */
	const handleContacto = () => {
		document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center px-6 sm:px-12 bg-bgMain"
		>
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-16 py-16">

				{/* ── Left column: text + CTAs ── */}
				<div className="flex-1 flex flex-col items-start gap-6">

					{/* Role badge */}
					<span
						className="
							text-xs font-mono tracking-widest uppercase
							border border-jade/60 text-jade
							px-3 py-1 rounded-full
						"
					>
						Full Stack Developer
					</span>

					{/* Headline */}


					{/* Subtitle */}
					<p className="text-textMain/70 text-base sm:text-lg leading-relaxed max-w-md">
						Construyo sistemas web y software donde el estado, la lógica y la
						interfaz importan.
					</p>

					{/* CTA buttons */}
					<div className="flex flex-wrap gap-4 mt-2">
						<button
							onClick={handleContacto}
							className="
								bg-jade text-bgMain font-semibold
								px-6 py-2.5 rounded-lg
								transition-all duration-300
								hover:brightness-110 hover:scale-105
								cursor-pointer
							"
						>
							Contáctame
						</button>
						<button
							onClick={handleConoceme}
							className="
								border border-jade/60 text-textMain font-semibold
								px-6 py-2.5 rounded-lg
								transition-all duration-300
								hover:border-jade hover:bg-jade/10
								cursor-pointer
							"
						>
							Ver Proyectos
						</button>
					</div>
				</div>

				{/* ── Right column: code terminal card ── */}
				<div className="flex-1 flex justify-center">
					<div
						className="
							w-full max-w-md rounded-xl overflow-hidden
							border border-jade/30
							shadow-[0_0_40px_rgba(47,143,122,0.15)]
						"
						style={{ background: '#0d1f1b' }}
					>
						{/* Terminal title bar */}
						<div className="flex items-center gap-2 px-4 py-3 border-b border-jade/20"
							style={{ background: '#0a1a17' }}
						>
							<span className="w-3 h-3 rounded-full bg-red-500/70" />
							<span className="w-3 h-3 rounded-full bg-yellow-400/70" />
							<span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2f8f7a' }} />
							<span className="text-xs text-textMain/40 font-mono ml-2">portfolio.jsx</span>
						</div>

						{/* Code body */}
						<div className="px-5 py-4 font-mono text-xs leading-6 overflow-x-auto">
							{CODE_LINES.map((line, i) => (
								<div key={i} style={{ paddingLeft: `${line.indent * 1.2}rem` }}>
									{line.content === '' ? (
										<span>&nbsp;</span>
									) : (
										<span className={
											line.content.startsWith('<!--') || line.content.startsWith('//')
												? 'text-textMain/30'
												: line.content.startsWith('<')
													? 'text-jade'
													: line.content.includes('const') || line.content.includes('let') || line.content.includes('return') || line.content.includes('function')
														? 'text-purple-400'
														: 'text-textMain/70'
										}>
											{line.content}
										</span>
									)}
								</div>
							))}
						</div>

						{/* Author strip */}
						<div
							className="flex items-center gap-3 px-5 py-4 border-t border-jade/20"
							style={{ background: '#0a1a17' }}
						>
							{/* Avatar placeholder */}
							<div
								className="w-10 h-10 rounded-full border-2 border-jade flex items-center justify-center flex-shrink-0 text-jade font-bold text-sm"
								style={{ background: '#0d1f1b' }}
							>
								JA
							</div>
							<div>
								<p className="text-jade font-bold text-sm tracking-wide uppercase">Jesús Aguilar</p>
								<p className="text-textMain/60 text-xs">Full Stack Developer JR.</p>
							</div>
						</div>

						{/* Tech pills */}
						<div className="flex items-center gap-3 justify-center px-5 py-3 border-t border-jade/10 flex-wrap">
							{STACK.map((tech, i) => (
								<span
									key={tech}
									className="text-xs font-mono text-textMain/70"
								>
									{tech}
									{i < STACK.length - 1 && (
										<span className="text-jade/40 ml-3">|</span>
									)}
								</span>
							))}
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Hero
