import React from 'react';
import Composition from './Composition';
import classes from './Overview.module.scss';

import compBG1 from '../../assets/images/bg-1.jpg';
import compBG2 from '../../assets/images/bg-2.jpg';
import compBG3 from '../../assets/images/bg-3.jpg';

import blockDemo from '../../assets/images/block.png';
import chatDemo1 from '../../assets/images/chat-demo-1.png';
import chatDemo2 from '../../assets/images/chat-demo-2.png';

const Overview = () => {
  return (
    <section className={classes.overview + ' container'}>
      <div className={classes.head}>
        <h2 className='heading-secondary'>Overview</h2>
        <p className='paragraph'>
          Galileo was built using the WhatsApp business API. The chatbot works
          using a ‘block’ system.{' '}
        </p>
      </div>
      <div className={classes.compositions}>
        <Composition
          background={compBG1}
          image={blockDemo}
          label={'The Block System Technology.'}
          summary={`The LBS Chatbot affectionately known as Galileo was built using the WhatsApp business API. The chatbot works using a ‘block’ system. Each ‘block’ contains multiple messages that show up in order. These ‘blocks’ work with designed ‘flows’ or ‘actions’ for each item within the blocks. `}
        />
        <Composition
          background={compBG2}
          image={chatDemo1}
          label={'Smart & Friendly.'}
          summary={`We also built conversational capabilities into Galileo such that if you don’t select one of the button replies you can have a regular conversation which includes standard greetings. Eg How are you? And when Galileo is struggling to provide satisfactory responses to your Enquiries, you can also opt to speak with a human (called human takeover).`}
          compSize={'big'}
          compFirst={true}
        />
        <Composition
          background={compBG3}
          image={chatDemo2}
          label={'Simple & Intuitive.'}
          summary={`The “main menu” and “glossary” allows the user to navigate the knowledge-base of Galileo to access carefully curated and structured content in a similar fashion like the popular USSD menus. Galileo also works with global keywords that allows it to direct users to the right content. `}
          figPos={'bottom'}
        />
      </div>
    </section>
  );
};

export default Overview;
