import './ItineraryCard.scss';
import { Clock } from 'react-bootstrap-icons';

export const ItineraryCard = (props) => {
  const { name, start_time, end_time, url, img_url } = props;
  return (
    <>
      {name && (
        <article className='postcard blue'>
          <a class='postcard__img_link' href='#'>
            <img class='postcard__img' src={img_url} alt='Activity Image' />
          </a>
          <div class='postcard__text'>
            <h1 class='postcard__title blue'>
              <a href='#'>{name}</a>
            </h1>
            <div class='postcard__subtitle small'>
              <time datetime='2020-05-25 12:00:00'>
                <Clock />
                {start_time} - {end_time}
              </time>
            </div>
            <div class='postcard__preview-txt'>Some notes</div>
            <ul class='postcard__tagbox'>
              <li class='tag__item'>Drive</li>
              <li class='tag__item'>35 mins.</li>
              <li class='tag__item play blue'>category?</li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};
