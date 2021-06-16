import './IdeaCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Image, Row } from 'react-bootstrap';
import { CalendarPlusFill, Heart, HeartFill } from 'react-bootstrap-icons';
import { useState } from 'react';

export const IdeaCard = (props) => {
  const {
    user_id,
    name,
    img_url,
    start_time,
    end_time,
    category,
    url,
    description,
    votes,
    addVotes,
    removeVotes,
    addEntryToTrip,
    removeIdea
  } = props;

  const [showIdeaDetails, setShowIdeaDetails] = useState(false);
  const closeIdeaDetailsHandler = () => setShowIdeaDetails(false);
  const showIdeaDetailsHandler = () => setShowIdeaDetails(true);
  const voted = [];
  for (const user of votes) {
    voted.push(user.user_id);
    //Map to user names or images later?

    // console.log(user.user_id);
  }

  return (
    <>
      {name && description && (
        <>
          <div
            onClick={showIdeaDetailsHandler}
            className='card'
            style={{
              backgroundImage: `url(${img_url})`,
              backgroundSize: 'cover'
            }}
          >
            <div className='content'>
              <h2 className='idea-name'>{name}</h2>
              <p>
                <copy>{description}</copy>
              </p>
              <button className='remove-idea-btn' onClick={removeIdea}>
                remove
              </button>
            </div>
            <aside className='itinerary-add' onClick={addEntryToTrip}>
              <CalendarPlusFill />
            </aside>
            <aside className='show-votes'>{votes ? votes.length : 0}</aside>

            {votes.filter((vote) => {
              return vote.user_id === user_id;
            }).length > 0 ? (
              <aside className='votes' onClick={removeVotes}>
                <HeartFill fill='red' />
              </aside>
            ) : (
              <aside className='votes' onClick={addVotes}>
                <Heart />
              </aside>
            )}
          </div>

          <Modal
            show={showIdeaDetails}
            onHide={closeIdeaDetailsHandler}
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
              <Row>{`Votes: ${voted}`}</Row>
              <Row>
                {`Website: `} <a href={url}>{url}</a>
              </Row>
              <Row>{category}</Row>
              <Row>{description}</Row>
            </Modal.Body>
            <Modal.Footer>
              <div>
                {votes.filter((vote) => {
                  return vote.user_id === user_id;
                }).length > 0 ? (
                  <HeartFill fill='red' onClick={removeVotes} />
                ) : (
                  <Heart onClick={addVotes} />
                )}
              </div>
              <div onClick={addEntryToTrip} className='add-entry-btn'>
                <CalendarPlusFill />
              </div>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};
