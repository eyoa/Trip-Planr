import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const DayTab = (props) => {
  const { days, selectDay, activeDay, removeEntry } = props;

  console.log();

  const sortByOrder = (array) => {
    const result = [];
    for (const item of array) {
      result[item.order - 1] = item;
    }
    return result;
  };

  const onDragEnd = (result) => {
    // to update state
  };

  const daysTabs = days ? (
    days.map((day) => {
      const entires = day.entries ? (
        day.entries.map((entry) => {
          return (
            <Draggable
              key={entry.id.toString()}
              draggableId={entry.id.toString()}
              index={entry.order}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <ItineraryCard
                    id={entry.id}
                    order={entry.order}
                    name={entry.activities.name}
                    start_time={entry.start_time}
                    end_time={entry.end_time}
                    img_url={entry.activities.img_url}
                    category={entry.activities.category}
                    removeEntry={() => {
                      removeEntry(entry.id);
                    }}
                  />
                </div>
              )}
            </Draggable>
          );
        })
      ) : (
        <div>No activities</div>
      );

      return (
        <Tab key={day.id} eventKey={day.id} title={day.name}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='itinerary'>
              {(provided) => (
                <article {...provided.droppableProps} ref={provided.innerRef}>
                  {entires}
                  {provided.placeholder}
                </article>
              )}
            </Droppable>
          </DragDropContext>
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
