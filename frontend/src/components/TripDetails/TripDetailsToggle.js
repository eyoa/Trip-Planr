import './TripDetailsToggle.scss';
import { ChevronDown } from 'react-bootstrap-icons';

export const TripDetailsToggle = (props) => {
  return (
    <button className='trip-toggle-button' onClick={props.click}>
      <div>
        <ChevronDown fill='black' />
      </div>
    </button>
  );
};
