import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your city by clicking on a city on the map"} />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
