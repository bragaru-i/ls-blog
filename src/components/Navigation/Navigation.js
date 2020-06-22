import React from 'react';

import './Navigation.css';
import Icon from '../Icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
  React.useEffect(() => {
    let nav = document.getElementById('nav-bar');
    let header = document.getElementById('home');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky + 100) {
        nav.classList.add('sticky');
        if (window.pageYOffset === header.offsetTop) {
          console.log('matches');
        }
      } else {
        nav.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  return (
    <div className="navigation">
      <nav className="navbar row" id="nav-bar">
        <div className="navbar__brand">
          Local Storage{' '}
          <span
            style={{
              backgroundColor: ' #4a90e2',
              padding: '0.3rem 0.2rem',
              borderRadius: '0.2rem',
            }}
          >
            BLOG
          </span>{' '}
        </div>
        <div className="navbar__menu">
          <div className="navbar-toggle">
            <span className="navbar-toggle__icon">
              <Icon name="menu-toggler" width="2rem" />
            </span>
          </div>
          <ul className="navbar__menu__items">
            <li className="navbar__menu__item">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="navbar__menu__item">
              <AnchorLink href="#post">Add Article</AnchorLink>
            </li>
            <li className="navbar__menu__item">
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
