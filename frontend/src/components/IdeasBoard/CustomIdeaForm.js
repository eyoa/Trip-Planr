import React, { useState } from 'react';
import './CustomIdeaForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const CustomIdeaForm = (props) => {
  // const { addCustomIdea } = props;

  const [customIdea, setCustomIdea] = useState({
    name: '',
    description: '',
    img_url: '',
    rating: null,
    category: '',
    url: ''
  });

  const addCustomIdea = (newIdea) => {
    if (newIdea.rating !== null) {
      console.log(newIdea);
      // return axios.put();
    }
  };

  const submitForm = function (event) {
    event.preventDefault();
    addCustomIdea(customIdea);
    setCustomIdea({});
  };

  function formInputHandler(event) {
    const value = event.target.value;
    setCustomIdea({
      ...customIdea,
      [event.target.name]: value
    });
  }

  return (
    <section className='new-idea-container'>
      <form onSubmit={submitForm} method='POST' id='new-suggestion'>
        <label>Name: </label>
        <input
          name='name'
          id='custom-idea-name'
          value={customIdea.name}
          onChange={formInputHandler}
          placeholder='name'
        ></input>

        <label>Description: </label>
        <input
          name='description'
          id='custom-idea-description'
          value={customIdea.description}
          onChange={formInputHandler}
          placeholder='name'
        ></input>
        <label>image: </label>
        <input
          name='img_url'
          id='custom-idea-img_url'
          value={customIdea.img_url}
          onChange={formInputHandler}
          placeholder='name'
        ></input>
        <label>Rating </label>
        <input
          name='rating'
          id='custom-idea-rating'
          value={customIdea.rating}
          onChange={formInputHandler}
          placeholder='name'
        ></input>
        <label>category: </label>
        <input
          name='category'
          id='custom-idea-category'
          value={customIdea.category}
          onChange={formInputHandler}
          placeholder='name'
        ></input>
        <label>Durl </label>
        <input
          name='url'
          id='custom-idea-url'
          value={customIdea.url}
          onChange={formInputHandler}
          placeholder='name'
        ></input>

        <button type='submit'>Add</button>
      </form>
    </section>
  );
};
