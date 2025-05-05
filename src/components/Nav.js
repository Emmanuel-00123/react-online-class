export function Nav() {
  return (
    <nav className="nav">
      <div>
        <p className="logo">Jadoo</p>
      </div>
      <div>
        <li className="navList">
          <NavLinks>Service</NavLinks>
          <NavLinks>Destination</NavLinks>
          <NavLinks>Booking</NavLinks>
          <NavLinks>Testimonial</NavLinks>
          <NavLinks>Login</NavLinks>
          <NavLinks>Signup</NavLinks>
          <NavLinks>EN</NavLinks>
        </li>
      </div>
    </nav>
  );
}
function NavLinks({ children }) {
  return (
    <ul>
      <a href="/service" className="navLink">
        {children}
      </a>
    </ul>
  );
}
