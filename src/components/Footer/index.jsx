import React from 'react';
import classes from './Footer.module.scss';

import composiitionImg from '../../assets/images/hero-2.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.overview + ' container'}>
        <figure>
          <img src={composiitionImg} alt='Chat Demo' />
          <figcaption className={classes.card}>
            <p className='paragraph'>
              “All this would also not have been possible without curating,
              researching, developing, summarizing and structuring content.
              Managing the content was the first big step in making Galileo
              possible.”
            </p>
          </figcaption>
        </figure>
      </div>

      <div className={classes.foot}>
        <p className='paragraph'>Developed and managed by SMP 83 Group 5</p>
      </div>
    </footer>
  );
};

export default Footer;
