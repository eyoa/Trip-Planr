import './ExploreList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ActivityCard } from './ActivityCard';
import { Row, Col } from 'react-bootstrap';

export const ExploreList = (props) => {
  const { activityData, suggestActivity, addEntryToTrip } = props;

  const exploreList = activityData
    ? activityData.map((activityData) => {
        return (
          <ActivityCard
            key={activityData.id}
            id={activityData.id}
            name={activityData.name}
            description={activityData.description}
            img_url={activityData.img_url}
            rating={activityData.rating}
            category={activityData.category}
            url={activityData.url}
            suggestActivity={(e) => suggestActivity(e, activityData.id)}
            addEntryToTrip={(e) => addEntryToTrip(e, activityData.id)}
          />
        );
      })
    : 'No matches';

  return (
    <nav className='explore-drawer'>
      <Row className='justify-content-center searchbar'>
        <h3 className='explore-title'>Explore</h3>
      </Row>
      <Row className='justify-content-end'>
        <section className='explore-list-container'>{exploreList}</section>
      </Row>
    </nav>
  );
};
