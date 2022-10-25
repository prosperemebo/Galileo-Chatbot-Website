import React from 'react';
import classes from './About.module.scss';

import compositionImg from '../../assets/images/comp-1.png';

const About = () => {
  return (
    <section className={classes.about + ' container'}>
      <div className={classes.content}>
        <figure>
          <img src={compositionImg} alt='Showcase of Galileo Chatbot' />
        </figure>
        <div className={classes.info}>
          <p className='paragraph'>
            Galileo’s capabilities can also be extended to displaying links for
            more information, sending user responses via emails, sharing images,
            voice notes and much more. Asides WhatsApp, Galileo can also be
            extended to other channels including websites, Facebook and mobile
            apps.
          </p>
          <p className='paragraph'>
            We also built conversational capabilities into Galileo such that if
            you don’t select one of the button replies you can have a regular
            conversation which includes standard greetings eg How are you? And
            when Galileo is struggling to provide satisfactory responses to your
            Enquiries, you can also opt to speak with a human (called human
            takeover).
          </p>
          <h3>-Developed by SMP 83 Group 5</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
