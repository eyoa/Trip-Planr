import './ActivityCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactTooltip from 'react-tooltip';
import { Card } from 'react-bootstrap';
import { PlusSquareFill, Lightbulb } from 'react-bootstrap-icons';
import { Modal, Image, Row } from 'react-bootstrap';
import { useState } from 'react';

export const ActivityCard = (props) => {
  const {
    id,
    name,
    short_description,
    long_description,
    price_rating,
    img_url,
    rating,
    category,
    url,
    suggestActivity,
    addEntryToTrip
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);

  // console.log(`id  is ${id}`);
  return (
    <>
      {name && short_description && (
        <>
          <Card
            onClick={handleShow}
            className='activity-card'
            style={{
              backgroundImage: `url(${img_url})`,
              backgroundSize: 'cover'
            }}
          >
            <aside className='rating'>{rating}</aside>
            <aside className='add' onClick={addEntryToTrip}>
              <PlusSquareFill />
            </aside>
            <aside className='suggest'>
              <Lightbulb onClick={suggestActivity} />
            </aside>

            <div className='content'>
              <h2 className='idea-name'>{name}</h2>
              <span className='description'>{short_description}</span>
            </div>
          </Card>

          <Modal
            show={showDetails}
            onHide={handleClose}
            className='activity-details'
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className='justify-content-md-center'>
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className='justify-content-md-center placer'>
                <Image src={img_url} className='activity-image' fluid />
              </Row>
              <Row>
                {`Website: `} <a href={url}>{url}</a>
              </Row>
              <Row>{`Category: ${category}`}</Row>
              <Row>{`Price_rating: ${price_rating}`}</Row>
              <Row>{long_description}</Row>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};
