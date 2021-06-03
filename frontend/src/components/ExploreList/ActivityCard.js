import './ActivityCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTooltip from 'react-tooltip';
import { Card } from 'react-bootstrap';
import { PlusSquareFill, Lightbulb } from 'react-bootstrap-icons';

export const ActivityCard = (props) => {
  const {
    id,
    name,
    description,
    img_url,
    rating,
    category,
    url,
    suggestActivity,
    addEntryToTrip
  } = props;

  // console.log(`id  is ${id}`);
  return (
    <>
      {name && description && (
        <Card
          className='activity-card'
          style={{
            backgroundImage: `url(${img_url})`,
            backgroundSize: 'cover'
          }}
        >
          <aside className='rating'>{rating}</aside>
          <aside className='add' onClick={addEntryToTrip}>
            {/* <span>Add to Trip</span> */}
            <PlusSquareFill />
          </aside>
          <aside className='suggest'>
            <Lightbulb onClick={suggestActivity} />
          </aside>
          <h2 className='title'>{name}</h2>
          <span className='description'>{description}</span>
        </Card>
      )}
    </>
  );
};
