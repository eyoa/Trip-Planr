import './ExploreList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ActivityCard } from '../ActivityCard';
import { Row, Col } from 'react-bootstrap';

export const ExploreList = (props) => {
  const { activityData } = props;

  const exploreList = activityData
    ? activityData.map((activityData, index) => {
        return (
          <ActivityCard
            key={index}
            name={activityData.name}
            description={activityData.description}
            img_url={activityData.img_url}
            rating={activityData.rating}
            category={activityData.category}
            url={activityData.url}
          />
        );
      })
    : 'No matches';

  console.log(exploreList);

  return (
    <nav className='explore-drawer'>
      <Row className='justify-content-center searchbar'>Searchbar?</Row>
      <Row className='justify-content-left'>
        <Col xs={2}></Col>
        <Col>
          <section className='explore-list-container'>{exploreList}</section>;
        </Col>
      </Row>
    </nav>
  );
};
