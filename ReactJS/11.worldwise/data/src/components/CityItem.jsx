/* eslint-disable no-unused-vars */
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
    </li>
  );
}

export default CityItem;
