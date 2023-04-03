import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <Link
      to="/"
      className="logo"
      style={{ fontStyle: 'italic', fontSize: '1.6rem' }}
    >
      Math
      <span> Magicians </span>
    </Link>
    <ul>
      <li className="active">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
