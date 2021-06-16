import './IdeasBoard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IdeaCard } from '../IdeasBoard/IdeaCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CustomIdeaForm } from './CustomIdeaForm';

export const IdeasBoard = (props) => {
  const {
    ideasList,
    trip_id,
    userState,
    addCustomIdea,
    addVotes,
    removeVotes,
    user_id,
    addEntryToTrip,
    removeIdea
  } = props;

  const ideas = ideasList
    ? ideasList.map((idea, index) => {
        return (
          <IdeaCard
            user_id={user_id}
            votes={idea.votes}
            name={idea.activity.name}
            img_url={idea.activity.img_url}
            start_time={idea.activity.start_time}
            end_time={idea.activity.end_time}
            description={idea.activity.description}
            category={idea.activity.category}
            url={idea.activity.url}
            addVotes={(e) => {
              addVotes(e, idea.id, idea.votes, index);
            }}
            removeVotes={(e) => {
              removeVotes(e, idea.id, idea.votes, index);
            }}
            addEntryToTrip={(e) => {
              addEntryToTrip(e, idea.activity_id);
            }}
            removeIdea={(e) => {
              removeIdea(e, idea.id);
            }}
          />
        );
      })
    : trip_id
    ? '< find ideas in the explore tab'
    : 'Select a trip';

  return (
    <div>
      <Container fluid='sm' className='ideas-board'>
        <Row className='justify-content-md-center'>
          <Col md={{ span: 5, offset: -1 }}>
            <h1>Ideas Board</h1>
          </Col>
        </Row>

        {userState.isLoggedIn ? (
          <>
            {/* hide temp form */}
            {/* <Row className='justify-content-end'>
          <Button onClick={() => {}}>Add Custom Idea</Button>
        </Row>
        <Row className='justify-content-md-center'>
          <CustomIdeaForm
            className='custom-idea-form'
            addCustomIdea={addCustomIdea}
          />
        </Row> */}
            <Row className='justify-content-md-center'>
              <Col className='ideas-container'>{ideas}</Col>
            </Row>
          </>
        ) : (
          <>
            <Row>Please Login</Row>
          </>
        )}
      </Container>
    </div>
  );
};
