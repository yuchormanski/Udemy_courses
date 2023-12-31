import { useCities } from "../contexts/CitiesContext.jsx";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();
  // const { countriesInput, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your countries by clicking on a city on the map"}
      />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((c) => c.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
