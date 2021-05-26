import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard';

export const DayTab = (props) => {
  const { days } = props;

  console.log(days);
  // const daysTabs = <div>a</div>;

  const daySelectHandler = (eventKey) => {
    console.log('Click');
  };

  const daysTabs = days
    ? days.map((day, index) => {
        console.log(day.entries);
        const entires = day.entries ? (
          day.entries.map((entry) => {
            console.log(entry);
            return (
              <div>
                <ItineraryCard
                  name={entry.name}
                  start_time={entry.start_time}
                  end_time={entry.end_time}
                  img_url={entry.img_url}
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
    : 'set days';

  return (
    <div>
      <Tabs defaultActiveKey='Day 1' id='day-select-tabs'>
        {daysTabs}
      </Tabs>
    </div>
  );
};
