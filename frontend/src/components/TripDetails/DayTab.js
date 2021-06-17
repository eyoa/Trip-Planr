import './DayTab.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ItineraryCard } from './ItineraryCard.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const DayTab = (props) => {
  const { days, selectDay, activeDay, removeEntry, onDragEndHandler } = props;

  const sortByOrder = (array) => {
    const result = [];
    for (const item of array) {
      result[item.order] = item;
    }
    // console.log(result);
    return result;
  };

  const daysTabs = days ? (
    days.map((day) => {
      const entires = day.entries ? (
        sortByOrder(day.entries).map((entry, index) => {
          return (
            <Draggable
              key={entry.id.toString()}
              draggableId={entry.id.toString()}
              index={index}
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
        <Tab
          key={day.id}
          eventKey={day.id}
          title={day.name}
          className='date-tabs'
        >
          <DragDropContext onDragEnd={onDragEndHandler}>
            <Droppable droppableId='itinerary'>
              {(provided) => (
                <article
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className='itinierary-container'
                >
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
    <div className='trip-container'>
      <Tabs
        activeKey={activeDay.day_id}
        id='day-select-tabs'
        onSelect={(eventKey) => selectDay(Number(eventKey))}
        className='tabs-con'
      >
        {daysTabs}
      </Tabs>
    </div>
  );
};
