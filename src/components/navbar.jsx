import React, { useState } from 'react';
import { InstagramOutlined, LinkedinOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../src/assets/logodesign.png';
import '/src/components/styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ aboutRef, offerRef, portfolioRef, contactRef }) {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 600);

  const handleScroll = (ref) => {
    if (window.location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
            </Link>
          </li>
          {showMenu && (
            <ul className="listed--menu">
              <li onClick={() => {handleScroll(aboutRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>About Me</li>
              <li onClick={() => {handleScroll(portfolioRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Portfolio</li>
              <li onClick={() => {handleScroll(offerRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Services</li>
              <li onClick={() => {handleScroll(contactRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Contact</li>
              {/*<li>
                 <a href="https://www.linkedin.com/in/linenogueira" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined className="linkedin" />
                 </a>
          </li>*/}
            </ul>
          )}
          <li className="more" onClick={() => setShowMenu(!showMenu)}>
            <MenuOutlined />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
