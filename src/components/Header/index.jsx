import React from 'react';
import classes from './Header.module.scss';

import logo from '../../assets/images/logo.png';
import galileo from '../../assets/images/mascot.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href='/' className={classes.logo}>
          <img src={logo} alt='Galileo Logo' />
        </a>
        <a
          href='http://wa.me/09032887485'
          target='_blank'
          rel='noreferrer'
          className='btn'
        >
          Meet Galileo
        </a>
      </nav>
      <div className={classes.content_box}>
        <h1 className='heading-primary'>
          Howdy, I’m <br /> Galileo.
        </h1>
        <p className='paragraph'>
          Lagos Business School no 1 personal assitant. I’m more than ready to
          attend to your questions. Cheers 🥂
        </p>
      </div>
      <figure className={classes.hero}>
        <img src={galileo} alt='Mascot of Galileo' />
      </figure>
    </header>
  );
};

export default Header;
