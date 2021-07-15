import './ItineraryCard.scss';
import { Clock } from 'react-bootstrap-icons';
import moment from 'moment';
import { ItineraryNotes } from './ItineraryNotes';
// import { Form } from 'react-bootstrap';
// import { useState } from 'react';
// import { itineraryNotes } from './ItineraryNotes';

export const ItineraryCard = (props) => {
  const {
    id,
    name,
    start_time,
    end_time,
    url,
    img_url,
    removeEntry,
    order,
    notes,
    notesForm,
    notesFormChangeHandler
  } = props;
  // const [editNote, setEditNote] = useState(false);

  const formatTime = (time) => {
    return moment(time).format('hh:mm a');
  };

  // const editNotesHandler = () => {
  //   setEditNote = !editNote;
  // };

  // let itineraryNotes;
  // if (editNote) {
  //   itineraryNotes = (
  //     <Form>
  //       <Form.Group>
  //         <Form.Control
  //           placeholder='notes'
  //           type='text'
  //           name='notes'
  //           value={notesForm}
  //           onChange={(e) => notesFormChangeHandler(e)}
  //         />
  //       </Form.Group>
  //     </Form>
  //   );
  // } else {
  //   itineraryNotes = (
  //     <div>
  //       {notes}
  //       <Pencil onClick={editNotesHandler} />
  //     </div>
  //   );
  // }

  return (
    <>
      {name && (
        <article className='postcard blue'>
          <a class='postcard__img_link' href='#'>
            <img class='postcard__img' src={img_url} alt='Activity Image' />
          </a>
          <div className='postcard__text'>
            <h1 className='postcard__title blue'>
              <a href={url}>{name}</a>
            </h1>
            <div className='postcard__subtitle small'>
              <time datetime='2011-11-18T14:54:39.929Z'>
                <Clock /> <span> </span>
                {formatTime(start_time)} - {formatTime(end_time)}
              </time>
            </div>
            <ItineraryNotes
              notes={notes}
              notesForm={notesForm}
              notesFormChangeHandler={notesFormChangeHandler}
            />
            <div className='postcard__preview-txt' onClick={removeEntry}>
              X Remove
            </div>
            <ul className='postcard__tagbox'>
              <li className='tag__item'>Drive</li>
              <li className='tag__item'>35 mins.</li>
              <li className='tag__item play blue'>{props.category}</li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};
