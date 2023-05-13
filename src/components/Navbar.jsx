import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from '../assets/logo.svg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // apply inline style to links-container when toggling showLinks state to change the height
  const linksContainerStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            onClick={toggleLinks}
            className={
              showLinks ? 'nav-toggle nav-toggle-rotate' : 'nav-toggle'
            }
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={linksContainerStyles}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social icons */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            return (
              <li key={socialIcon.id}>
                <a href={socialIcon.url}>{socialIcon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
