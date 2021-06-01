import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';

export const DayTab = (props) => {
  const { days, selectDay } = props;

  console.log(days);

  const sortByOrder = (array) => {
    console.log(`sort by order received ${array}`);
    const result = [];
    for (const item of array) {
      console.log(`item is ${item.activities.name}`);
      console.log(`item order is ${item.order}`);

      result[item.order - 1] = item;
    }
    return result;
  };

  const daysTabs = days ? (
    days.map((day) => {
      const entires = day.entries ? (
        sortByOrder(day.entries).map((entry) => {
          return (
            <div>
              <ItineraryCard
                name={entry.activities.name}
                start_time={entry.start_time}
                end_time={entry.end_time}
                img_url={entry.activities.img_url}
                category={entry.activities.category}
              />
            </div>
          );
        })
      ) : (
        <div>No activities</div>
      );

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
        defaultActiveKey='1'
        id='day-select-tabs'
        onSelect={(eventKey) => {
          selectDay(eventKey);
        }}
      >
        {daysTabs}
      </Tabs>
    </div>
  );
};
