import {useEffect, useState} from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        'https://react-http-95098-default-rtdb.firebaseio.com/meals.json'
      );

      // 응답 오류시 처리
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          ...responseData[key],
          id: key,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals()
      .catch((e) => {
        setIsLoading(false);
        setHttpError(e.message);
      });

  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes['meals-loading']}>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section>
        <p className={classes['meals-error']}>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
