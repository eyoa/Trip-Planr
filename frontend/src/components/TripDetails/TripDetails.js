import './TripDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Dropdown } from 'react-bootstrap';
import { DayTab } from './DayTab';
import { Fragment } from 'react';

export const TripDetails = (props) => {
  const {
    tripList,
    userState,
    tripSelectHandler,
    tripData,
    selectDay,
    activeDay,
    removeEntry,
    onDragEndHandler,
    notesForm,
    notesFormChangeHandler
  } = props;

  const trips = tripList
    ? tripList.map((tripList, index) => {
        return (
          <Fragment>
            <Dropdown.Item key={index} eventKey={tripList.id}>
              {tripList.name}
            </Dropdown.Item>
          </Fragment>
        );
      })
    : 'No Trips';

  return (
    <nav className='trip-drawer'>
      {userState.isLoggedIn ? (
        <>
          <Row className='justify-content-center day-select'>
            <Dropdown onSelect={tripSelectHandler}>
              <Dropdown.Toggle variant='dark' id='dropdown-basic' block>
                My Trips
              </Dropdown.Toggle>
              <Dropdown.Menu className='trip-dropdown-menu'>
                {trips}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row className='justify-content=center trip-details-container'>
            {tripData ? (
              <DayTab
                days={tripData.days}
                selectDay={selectDay}
                activeDay={activeDay}
                removeEntry={removeEntry}
                onDragEndHandler={onDragEndHandler}
                notesForm={notesForm}
                notesFormChangeHandler={notesFormChangeHandler}
              />
            ) : (
              <></>
            )}
          </Row>
        </>
      ) : (
        <div>{`Login to access your trips`}</div>
      )}
    </nav>
  );
};
