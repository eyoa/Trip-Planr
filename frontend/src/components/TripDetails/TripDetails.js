import './TripDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Row, Dropdown } from 'react-bootstrap';
import { DayTab } from './DayTab';

export const TripDetails = (props) => {
  const { tripDetails } = props;
  const [tripData, setTripData] = useState({ tripEntries: '', numDays: 0 });
  // const [tripEntries, setTripEntries] = useState('');
  // const [numDays, setNumDays] = useState('');

  const trips = tripDetails
    ? tripDetails.map((tripDetails, index) => {
        return (
          <Dropdown.Item eventKey={index}>{tripDetails.name}</Dropdown.Item>
        );
      })
    : 'No Trips';

  const tripSelectHandler = (eventKey) => {
    const tripEntries = tripDetails[eventKey].days;
    const numDays = tripDetails[eventKey].days;
    setTripData({ tripEntries, numDays });
  };

  return (
    <nav className='trip-drawer'>
      <Row className='justify-content-center day-select'>
        <Dropdown onSelect={tripSelectHandler}>
          <Dropdown.Toggle variant='outline-primary' id='dropdown-basic' block>
            My Trips
          </Dropdown.Toggle>
          <Dropdown.Menu>{trips}</Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row className='justify-content=center trip-details-container'>
        <DayTab days={tripData.numDays} />
      </Row>
    </nav>
  );
};
