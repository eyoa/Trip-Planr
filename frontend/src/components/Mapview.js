import { Fragment } from 'react';
import bgImg from './images/placeholder_map.png';

export const Mapview = () => {
  return (
    <Fragment>
      <div
        className='landing-wrapper'
        style={{
          backgroundImage: `url(${bgImg})`
        }}
      >
        <h1>Mapview</h1>
      </div>
    </Fragment>
  );
};
