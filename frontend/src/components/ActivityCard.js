import './ActivityCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';

export const ActivityCard = (props) => {
  const { name, description, img_url, rating, category, url } = props;
  return (
    <>
      {name && description && (
        <Card className='activityCard'>
          <Card.Img variant='top' src={img_url} alt='image' />
          <Card.ImgOverlay>
            <aside className='rating'>{rating}</aside>
            <aside className='add'>add</aside>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
