import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import headerLogo from './components/alignrfp_header_b.svg'
import Home from './pages/Home.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyGoogleWorkspace from './pages/CaseStudyGoogleWorkspace.jsx'
import Software from './pages/Software.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const CALENDLY_URL = 'https://calendly.com/ben-alignrfp/alignrfp-consultation'
const EMAIL = 'hello@alignrfp.com'
const LINKEDIN_URL = 'https://www.linkedin.com/company/alignrfp'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case studies' },
  { to: '/software', label: 'Software' },
  { to: '/blog', label: 'Blog' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone-300">
      <div className="w-full px-6 h-16 flex items-center justify-between gap-8">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={headerLogo} alt="AlignRFP" className="h-7 w-auto" />
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-10 mr-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-150 ${
                    isActive ? 'text-stone-900 font-medium' : 'text-stone-700 hover:text-stone-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-sm font-medium px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-150 shrink-0"
          >
            Get started
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] shrink-0"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-stone-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-stone-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-stone-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-stone-200 bg-cream px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base transition-colors duration-150 ${
                  isActive ? 'text-stone-900 font-medium' : 'text-stone-500'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 inline-block text-sm font-medium px-5 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-150 text-center"
          >
            Book a free consultation
          </a>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-stone-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={headerLogo} alt="AlignRFP" className="h-6 w-auto" />
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-stone-500">
            <Link to="/about" className="hover:text-stone-800 transition-colors duration-150">About</Link>
            <Link to="/case-studies" className="hover:text-stone-800 transition-colors duration-150">Case studies</Link>
            <Link to="/software" className="hover:text-stone-800 transition-colors duration-150">Software</Link>
            <Link to="/blog" className="hover:text-stone-800 transition-colors duration-150">Blog</Link>
            <Link to="/privacy" className="hover:text-stone-800 transition-colors duration-150">Privacy</Link>
            <Link to="/terms" className="hover:text-stone-800 transition-colors duration-150">Terms</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Contact</p>
          <a href={`mailto:${EMAIL}`} className="text-sm text-stone-500 hover:text-stone-800 transition-colors duration-150">{EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-500 hover:text-stone-800 transition-colors duration-150">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen font-sans">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/nonprofit-google-workspace" element={<CaseStudyGoogleWorkspace />} />
            <Route path="/software" element={<Software />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
