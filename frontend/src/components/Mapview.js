import './Mapview.scss';
import mapImg from './images/placeholder_map.png';

export const Mapview = () => {
  return (
    <div
      className='map-placeholder'
      style={
        ({
          backgroundImage: `url(${mapImg})`
        },
        { height: '100%' })
      }
    >
      <h1>Mapview</h1>
    </div>
  );
};
