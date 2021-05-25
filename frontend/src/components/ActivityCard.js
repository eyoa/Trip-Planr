import './ActivityCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card } from 'react-bootstrap';
import { PlusSquareFill } from 'react-bootstrap-icons';

export const ActivityCard = (props) => {
  const { key, name, description, img_url, rating, category, url } = props;
  return (
    <>
      {name && description && (
        <Accordion>
          <Card className='activityCard'>
            <Card.Img variant='top' src={img_url} alt='image' />
            <Card.ImgOverlay>
              <aside className='rating'>{rating}</aside>
              <aside className='add'>
                <PlusSquareFill />
              </aside>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Accordion.Toggle as={Button} variant='secondary' eventKey='exp'>
              More Click!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='exp'>
              <Card.Text>{description}</Card.Text>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </>
  );
};
