import './ActivityCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card } from 'react-bootstrap';
import { PlusSquareFill } from 'react-bootstrap-icons';

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
          {/* <Card.Img
              variant='top'
              src={img_url}
              alt='image'
              className='card-img'
            /> */}
          <aside className='rating'>{rating}</aside>
          <aside className='add' onClick={addEntryToTrip}>
            <PlusSquareFill />
          </aside>
          <aside className='suggest'>
            <PlusSquareFill onClick={suggestActivity} />
          </aside>
          <h2 className='title'>{name}</h2>
          <span className='description'>{description}</span>
          {/* <Accordion.Toggle as={Button} variant='secondary' eventKey='exp'>
            More Click!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='exp'>
            <Card.Text>{description}</Card.Text>
          </Accordion.Collapse> */}
        </Card>
      )}
    </>
  );
};
