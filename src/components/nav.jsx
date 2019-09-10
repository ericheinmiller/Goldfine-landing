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

  return (
    <div className={`nav ${backgroundColor}`}>
      <img className="logo" src={Goldfine} alt="Goldfine Logo" />
      <div className="links">
        <a>Home</a>
        <a>Blog</a>
        <a>Investor Relations</a>
      </div>
    </div>
  );
};
