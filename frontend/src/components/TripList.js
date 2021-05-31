import { useState, Fragment } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TripList.scss';

export const TripList = (props) => {
  // HardCode User_id
  const user_id = 1;

  // rest of it
  const { tripList, addNewTrip, removeTrip } = props;
  const [openForm, setOpenForm] = useState(false);
  const [newTripName, setNewTripName] = useState('');
  const [newTripInfo, setNewTripInfo] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  function formInputHandler(event) {
    setNewTripName(event.target.value);
  }

  const trips = tripList
    ? tripList.map((tripList) => {
        return (
          <Fragment>
            <Row>
              <Col>{tripList.name}</Col>
              <Col>
                <Button value={tripList.id} onClick={removeTrip}>
                  remove
                </Button>
              </Col>
            </Row>
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
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

  return (
    <div>
      <Row className='justify-content-center'>
        <h1>My Trips</h1>
      </Row>
      <Row className='justify-content-end'>
        <Button
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          Make a new Trip
        </Button>
      </Row>
      <Row className='justify-content-center'>{form}</Row>
      {trips}
    </div>
  );
};
