import './TripList.scss';

export const TripList = (props) => {
  const { tripDetails } = props;

  console.log(tripDetails);

  const trips = tripDetails
    ? tripDetails.map((tripDetails, index) => {
        // console.log(tripsList.name);
        return <li>{tripDetails.name}</li>;
      })
    : 'No Trips';

  return (
    <div>
      <ul>{trips}</ul>
    </div>
  );
};
