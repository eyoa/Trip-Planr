import './ItineraryCard.scss';

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
                <i class='fas fa-calendar-alt mr-2'></i>
                {start_time} - {end_time}
              </time>
            </div>
            <div class='postcard__bar'></div>
            <div class='postcard__preview-txt'>Some notes</div>
            <ul class='postcard__tagbox'>
              <li class='tag__item'>
                <i class='fas fa-tag mr-2'></i>Drive
              </li>
              <li class='tag__item'>
                <i class='fas fa-clock mr-2'></i>35 mins.
              </li>
              <li class='tag__item play blue'>
                <a href='#'>
                  <i class='fas fa-play mr-2'></i>category?
                </a>
              </li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};
