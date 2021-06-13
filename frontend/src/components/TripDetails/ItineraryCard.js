import './ItineraryCard.scss';
import { Clock } from 'react-bootstrap-icons';
import moment from 'moment';

export const ItineraryCard = (props) => {
  const {
    id,
    name,
    start_time,
    end_time,
    url,
    img_url,
    removeEntry,
    order
  } = props;

  const formatTime = (time) => {
    return moment(time).format('hh:mm a');
  };

  return (
    <>
      {name && (
        <article className='postcard blue'>
          <a class='postcard__img_link' href='#'>
            <img class='postcard__img' src={img_url} alt='Activity Image' />
          </a>
          <div className='postcard__text'>
            <h1 className='postcard__title blue'>
              <a href='#'>{name}</a>
            </h1>
            <div className='postcard__subtitle small'>
              <time datetime='2011-11-18T14:54:39.929Z'>
                <Clock /> <span> </span>
                {formatTime(start_time)} - {formatTime(end_time)}
              </time>
            </div>
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
