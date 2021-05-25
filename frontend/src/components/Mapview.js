import './Mapview.scss';
import bgImg from './images/placeholder_map.png';

export const Mapview = () => {
  return (
    <div
      className='landing-wrapper'
      style={
        ({
          backgroundImage: `url(${bgImg})`
        },
        { height: '100%' })
      }
    >
      <h1>Mapview</h1>
    </div>
  );
};
