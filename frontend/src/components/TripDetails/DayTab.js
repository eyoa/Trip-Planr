import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';

export const DayTab = (props) => {
  const { days, selectDay, activeDay, removeEntry } = props;

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
              id={entry.id}
              name={entry.activities.name}
              start_time={entry.start_time}
              end_time={entry.end_time}
              img_url={entry.activities.img_url}
              category={entry.activities.category}
              removeEntry={() => {
                removeEntry(entry.id);
              }}
            />
          );
        })
      ) : (
        <div>No activities</div>
      );

      return (
        <Tab key={day.id} eventKey={day.id} title={day.name}>
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
        onSelect={(eventKey) => selectDay(Number(eventKey))}
      >
        {daysTabs}
      </Tabs>
    </div>
  );
};
