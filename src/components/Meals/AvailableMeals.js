import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pradeep',
    description: 'Food',
    price: 100,
  },
  {
    id: 'm2',
    name: 'Wife',
    description: 'Phone',
    price: 1000,
  },
  {
    id: 'm3',
    name: 'For Baby',
    description: 'toys',
    price: 150,
  },
  {
    id: 'm4',
    name: 'Movi ticket',
    description: 'Book ticket',
    price: 240,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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