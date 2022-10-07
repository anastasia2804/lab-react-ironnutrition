import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';

import { useState } from 'react';

function App() {

  const [foodsArray, setFoodsArray] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = !searchTerm
    ? foodsArray
    : foodsArray.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  const addNewFood = (newFood) => {
    const updatedFoodsArray = [...foodsArray, newFood];

    setFoodsArray (updatedFoodsArray)
  }

  return (
    <div className="App">
    <SearchBar setSearchTerm={setSearchTerm} />
      <AddFoodForm addFood={addNewFood}/>
      <div>
      <Row>
          {filtered.map(foodElement => {
            return <FoodBox foodObject={foodElement}/>
          })}      
        </Row>
      </div>
    </div>
    );
}

export default App;
