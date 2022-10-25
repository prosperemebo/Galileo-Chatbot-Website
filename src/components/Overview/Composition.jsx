import React from 'react';
import classes from './Overview.module.scss';

const Composition = ({
  background,
  image,
  label,
  summary,
  figPos,
  compSize,
  compFirst,
}) => {
  return (
    <div className={classes.composition}>
      <div className={`${classes.info} ${compFirst ? classes.compFirst : ''}`}>
        <h3 className='heading-tertiary'>{label}</h3>
        <p className='paragraph'>{summary}</p>
      </div>
      <figure
        style={{ backgroundImage: `url(${background})` }}
        className={`${figPos === 'bottom' ? classes.figPosBottom : ''} ${
          compSize === 'big' ? classes.compSizeBig : ''
        }`}
      >
        <img src={image} alt={label} />
      </figure>
    </div>
  );
};

export default Composition;
