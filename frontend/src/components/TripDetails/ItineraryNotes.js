import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Pencil, Save } from 'react-bootstrap-icons';

export const ItineraryNotes = (props) => {
  const { notes, notesForm, notesFormChangeHandler } = props;
  const [editNote, setEditNote] = useState(false);

  const editNotesHandler = () => {
    setEditNote(!editNote);
  };

  if (editNote) {
    return (
      <Form>
        <InputGroup>
          <Form.Control
            placeholder='notes'
            type='text'
            name='notes'
            value={notesForm}
            onChange={(e) => notesFormChangeHandler(e)}
          />
          <Button variant='outline-secondary' onClick={editNotesHandler}>
            <Save />
          </Button>
        </InputGroup>
      </Form>
    );
  } else {
    return (
      <div>
        {notes}
        <Pencil onClick={editNotesHandler} />
      </div>
    );
  }
};
