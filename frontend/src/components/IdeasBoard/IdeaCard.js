import './IdeaCard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const IdeaCard = (props) => {
  const {
    user_id,
    name,
    img_url,
    start_time,
    end_time,
    url,
    description,
    votes,
    addVotes,
    removeVotes,
    addToTrip,
    addEntryToTrip
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
            <button className='btn' onClick={addEntryToTrip}>
              Add to Trip
            </button>
          </div>
          <aside className='show-votes'>{votes ? votes.length : 0}</aside>

          {votes.filter((vote) => {
            return vote.user_id === user_id;
          }).length > 0 ? (
            <aside className='votes' onClick={removeVotes}>
              unvote
            </aside>
          ) : (
            <aside className='votes' onClick={addVotes}>
              vote
            </aside>
          )}
        </div>
      )}
    </>
  );
};
