import './IdeaCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const IdeaCard = (props) => {
  const {
    name,
    img_url,
    start_time,
    end_time,
    url,
    description,
    votes
  } = props;
  return (
    <>
      {name && description && (
        <div
          className='card'
          style={{
            backgroundImage: `url(${img_url})`,
            backgroundSize: 'cover'
          }}
        >
          <div className='content'>
            <h2 className='idea-name'>{name}</h2>
            <p>
              <copy>{description}</copy>
            </p>
            <button className='add-trip-btn'>Add to Trip</button>
          </div>
          <aside className='votes'>{votes}</aside>
        </div>
      )}
    </>
  );
};
