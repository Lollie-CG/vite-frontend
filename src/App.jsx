 import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Ambition from './pages/Ambition'
import Home from './pages/Home'
import Feelings from './pages/Feelings'
import GrowingUp from './pages/GrowingUp'
import Periods from './pages/Periods'
import ReachOut from './pages/ReachOut'
import SelfCare from './pages/SelfCare'
import TeamContact from './pages/TeamContact'

const navigation = [
  { label: 'Self-care', path: '/self-care' },
  { label: 'Feelings', path: '/feelings' },
  { label: 'Growing up', path: '/growing-up' },
  { label: 'Periods', path: '/periods' },
  { label: 'Ambition', path: '/ambition' },
  { label: 'Talk to someone', path: '/reach-out' },
  { label: 'Contact team', path: '/contact' },
]

export default function App() {
  const location = useLocation()

  return (
    <div className={`app-shell${location.pathname === '/' ? ' app-shell-home' : ''}`}>
      <header className="site-header">
        <Link className="site-brand" to="/" aria-label="Growing Together home">
          <span className="brand-flower" aria-hidden="true">✿</span>
          Growing Together
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ambition" element={<Ambition />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/feelings" element={<Feelings />} />
        <Route path="/growing-up" element={<GrowingUp />} />
        <Route path="/periods" element={<Periods />} />
        <Route path="/reach-out" element={<ReachOut />} />
        <Route path="/contact" element={<TeamContact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="site-footer">
        <p>Growing Together — kind, clear information for growing up.</p>
        <p>This site is for learning and is not a replacement for care from a trusted adult or doctor.</p>
      </footer>
    </div>
  )
}
