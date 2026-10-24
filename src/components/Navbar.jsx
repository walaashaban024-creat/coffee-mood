import { Link } from 'react-router-dom';
export default function Navbar(){
  return(
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">☕ Coffee Mood</Link>
        <div className="d-flex gap-3">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/products">Menu</Link>
          <Link className="nav-link text-white" to="/favorites">Favorties</Link>
          <Link className="nav-link text-white" to="/cart">Cart</Link>
          <Link className="nav-link text-white" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}