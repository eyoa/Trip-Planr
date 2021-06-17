import './ExploreListToggle.scss';
import { ChevronDown } from 'react-bootstrap-icons';

export const ExploreListToggle = (props) => {
  return (
    <button className='toggle-button' onClick={props.click}>
      <div>
        <ChevronDown fill='black' />
      </div>
    </button>
  );
};
