import React, { useState } from 'react';
import { InstagramOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../public/LOGO.png';
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
          <Link to="/">
            <img src={logo} alt="Aline Nogueira" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
          </Link>
          {showMenu && (
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><ul className="listed--menu">
                <li onClick={() => {handleScroll(aboutRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>About Us</li>
                <li onClick={() => {handleScroll(portfolioRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Portfolio</li>
                <li onClick={() => {handleScroll(offerRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Services</li>
                <li onClick={() => {handleScroll(contactRef); if (window.innerWidth < 600) setShowMenu(!showMenu)}}>Contact</li>
              <li>
                <a href="www.instagram.com/julka.cwynar" />
                <InstagramOutlined className="instagram" />
              </li>
            </ul></Link>
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