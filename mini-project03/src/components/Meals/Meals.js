import React, {Fragment} from 'react';
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvaliableMeals/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  );
};

export default Meals;