import './ExploreList.scss';
import { ActivityCard } from '../ActivityCard';

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
      <section className='explore-list-container'>{exploreList}</section>;
    </nav>
  );
};
