export const DayPane = (props) => {
  const { days, removeEntry } = props;
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
};
