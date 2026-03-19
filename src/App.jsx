import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

/**
 * App — Root component.
 * Composes all portfolio sections vertically.
 * Smooth scrolling is handled via CSS (html { scroll-behavior: smooth }).
 */
function App() {
	return (
		<div className="bg-bgMain text-textMain font-inter">
			{/* Hero section — full-screen intro */}
			<Hero />
			{/* About me — two-column layout with bio + tech stack */}
			<About />
			{/* Projects — responsive card grid */}
			<Projects />
			{/* Contact — social links */}
			<Contact />
		</div>
	)
}

export default App
