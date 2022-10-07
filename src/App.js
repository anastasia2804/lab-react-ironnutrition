import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';

import { useState } from 'react';

function App() {

  const [foodsArray, setFoodsArray] = useState(foods);
  const [results, setResults] = useState([])

  const addNewFood = (newFood) => {
    const updatedFoodsArray = [...foodsArray, newFood];

    setFoodsArray (updatedFoodsArray)
  }

  return (
    <div className="App">
    <SearchBar setFoodsArray={setFoodsArray} foodsArray={foodsArray} setResults={setResults} />
      <AddFoodForm addFood={addNewFood}/>
      <div>
        <Row>
          {foodsArray.map(foodElement => {
            return <FoodBox foodObject={foodElement}/>
          })}      
        </Row>
      </div>
    </div>
    );
}

export default App;
