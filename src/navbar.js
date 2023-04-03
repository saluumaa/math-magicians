import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <Link to="/" className="logo">
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

// function CustomLink({ href, children, ...props }) {
//   const path = window.location.pathname;
//   return (
//     <li className={path === href ? 'active' : ''}>
//       <a href={href} {...props}>
//         {children}
//       </a>
//     </li>
//   );
// }

export default Navbar;
