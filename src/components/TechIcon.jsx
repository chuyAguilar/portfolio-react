/**
 * TechIcon — Reusable wrapper for technology SVG icons.
 * Adds hover: scale-up + color changes to jade (#2f8f7a).
 * The `defaultColor` is the original brand color of the technology.
 *
 * @param {string} label       - Accessible label / title for the icon
 * @param {string} defaultColor - CSS color string for the icon's default state
 * @param {React.ReactNode} children - The SVG path content
 * @param {string} viewBox     - SVG viewBox attribute (default: "0 0 24 24")
 */
function TechIcon({ label, defaultColor, children, viewBox = "0 0 24 24" }) {
	return (
		<svg
			role="img"
			viewBox={viewBox}
			xmlns="http://www.w3.org/2000/svg"
			aria-label={label}
			title={label}
			style={{ color: defaultColor }}
			className="w-14 h-auto cursor-default transition-[color,transform] duration-200 ease-out hover:scale-125 hover:!text-[#2f8f7a]"
		>
			{children}
		</svg>
	)
}

export default TechIcon
