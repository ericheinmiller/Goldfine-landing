import React, { useState, useEffect } from 'react';
import Goldfine from '../images/Goldfine.svg';

export default () => {
  const [backgroundColor, setBackgroundColor] = useState(null);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 650) {
      setBackgroundColor('nav-color');
    } else if (window.pageYOffset < 650) {
      setBackgroundColor('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.addEventListener('scroll', handleScroll); };
  }, []);

  const handleMouseEnter = (location) => {
    console.log(location);
  };

  return (
    <div className={`nav ${backgroundColor}`}>
      <img className="logo" src={Goldfine} alt="Goldfine Logo" />
      <div className="links-container">
        <a className="links" onMouseEnter={() => handleMouseEnter('home')}>Home</a>
        <a className="links" onMouseEnter={() => handleMouseEnter('blog')}>Blog</a>
        <a className="links" onMouseEnter={() => handleMouseEnter('invest')}>Investor Relations</a>
      </div>
    </div>
  );
};
