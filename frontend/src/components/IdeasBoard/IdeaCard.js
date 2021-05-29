import './IdeaCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card } from 'react-bootstrap';

export const IdeaCard = (props) => {
  const {
    name,
    img_url,
    start_time,
    end_time,
    url,
    description,
    votes
  } = props;
  return (
    <>
      {name && description && (
        <card
          className='card'
          style={{
            backgroundImage: `url(${img_url})`,
            backgroundSize: 'cover'
          }}
        >
          <div className='content'>
            <h2 className='title'>{name}</h2>
            <p>
              <copy>{description}</copy>
            </p>
            <button className='btn'>Add to Trip</button>
          </div>
          <aside className='votes'>{votes}</aside>
        </card>
      )}
    </>
  );
};
