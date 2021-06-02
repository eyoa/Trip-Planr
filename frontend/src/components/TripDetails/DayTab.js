import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';

export const DayTab = (props) => {
  const { days, selectDay, activeDay } = props;

  const sortByOrder = (array) => {
    const result = [];
    for (const item of array) {
      result[item.order - 1] = item;
    }
    return result;
  };

  const daysTabs = days ? (
    days.map((day, index) => {
      const entires = day.entries ? (
        sortByOrder(day.entries).map((entry) => {
          return (
            <ItineraryCard
              key={entry.id}
              name={entry.activities.name}
              start_time={entry.start_time}
              end_time={entry.end_time}
              img_url={entry.activities.img_url}
              category={entry.activities.category}
            />
          );
        })
      ) : (
        <div>No activities</div>
      );

      // console.log(`day.id is ${day.id}`);

      return (
        <Tab eventKey={day.id} title={day.name}>
          <div>
            {day.name}
            {entires}
          </div>
        </Tab>
      );
    })
  ) : (
    <></>
  );

  return (
    <div>
      <Tabs
        activeKey={activeDay.day_id}
        id='day-select-tabs'
        onSelect={(eventKey) => selectDay(eventKey)}
      >
        {daysTabs}
      </Tabs>
    </div>
  );
};
