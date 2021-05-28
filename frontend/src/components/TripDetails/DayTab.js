import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';

export const DayTab = (props) => {
  const { days } = props;

  console.log(days);

  const daysTabs = days ? (
    days.map((day, index) => {
      console.log(day.entries);
      const entires = day.entries ? (
        day.entries.map((entry) => {
          console.log(`entry is ${entry}`);
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
        <Tab eventKey={index + 1} title={day.name}>
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
      <Tabs defaultActiveKey='Day 1' id='day-select-tabs'>
        {daysTabs}
      </Tabs>
    </div>
  );
};
