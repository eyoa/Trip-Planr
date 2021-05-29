import './TripDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Dropdown } from 'react-bootstrap';
import { DayTab } from './DayTab';
import { Fragment } from 'react';

export const TripDetails = (props) => {
  const { tripList, tripSelectHandler, tripData } = props;

  const trips = tripList
    ? tripList.map((tripList) => {
        return (
          <Fragment>
            <Dropdown.Item eventKey={tripList.id}>
              {tripList.name}
            </Dropdown.Item>
          </Fragment>
        );
      })
    : 'No Trips';

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
        {tripData ? <DayTab days={tripData.days} /> : <></>}
      </Row>
    </nav>
  );
};
