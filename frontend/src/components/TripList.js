import { useState, Fragment } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormControl,
  ListGroup,
  InputGroup
} from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TripList.scss';

export const TripList = (props) => {
  const { tripList, addNewTrip, removeTrip, userState } = props;
  const [openForm, setOpenForm] = useState(false);
  const [newTripName, setNewTripName] = useState('');
  const [newTripInfo, setNewTripInfo] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const user_id = userState.user.id;

  function formInputHandler(event) {
    setNewTripName(event.target.value);
  }

  const trips = tripList
    ? tripList.map((tripList) => {
        return (
          <Fragment>
            <ListGroup.Item variant='dark'>
              <div>{tripList.name}</div>

              {tripList.collaborators ? (
                tripList.collaborators.map((collaborator) => {
                  return (
                    <Fragment>
                      <ul>
                        {collaborator}
                        <Button>-</Button>
                      </ul>
                    </Fragment>
                  );
                })
              ) : (
                <></>
              )}
              <div>
                <InputGroup className='mb-3'>
                  <FormControl
                    placeholder='username'
                    aria-label='collaborator username'
                    aria-describedby='basic-addon2'
                  />
                  <Button variant='dark' id='button-addon2'>
                    +
                  </Button>
                </InputGroup>
              </div>
              <div>
                <Button value={tripList.id} onClick={removeTrip} variant='dark'>
                  remove trip
                </Button>
              </div>
            </ListGroup.Item>
          </Fragment>
        );
      })
    : 'No Trips';

  let form;

  if (openForm) {
    form = (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addNewTrip(
            newTripInfo[0].startDate,
            newTripInfo[0].endDate,
            newTripName,
            user_id
          );
          setNewTripName('');
          setOpenForm(!openForm);
        }}
      >
        <Form.Group>
          <Form.Label>Trip name</Form.Label>
          <Form.Control
            type='text'
            id='custom-idea-name'
            value={newTripName}
            onChange={formInputHandler}
            placeholder='Super Duper Awesome Trip'
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>dates</Form.Label>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setNewTripInfo([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={newTripInfo}
            minDate={new Date()}
          />
        </Form.Group>
        <Button type='submit' variant='dark'>
          Submit
        </Button>
      </Form>
    );
  }

  return (
    <div className='trip-list-main'>
      <Row className='justify-content-center'>
        <h1 className='trip-list-title'>My Trips</h1>
      </Row>

      {userState.isLoggedIn ? (
        <>
          <Row className='justify-content-end'>
            <Button
              onClick={() => {
                setOpenForm(!openForm);
              }}
              variant='dark'
            >
              Make a new Trip
            </Button>
          </Row>
          <Row className='justify-content-center'>{form}</Row>
          <Col xs lg='2'></Col>
          <Col xs={{ span: 8, offset: 3 }}>
            <ListGroup variant='flush'>{trips}</ListGroup>
          </Col>
          <Col xs lg='2'></Col>
        </>
      ) : (
        <>
          <Row>Please login</Row>
        </>
      )}
    </div>
  );
};
