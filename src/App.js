import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';


import { useState } from 'react';




function App() {

  const [foodsArray, setFoodsArray] = useState(foods)

  return (
    <div className="App">
      <div>
        <Row>
       {foodsArray.map(foodElement => {
        return <FoodBox foodObject={foodElement}/>
       })}
            

        {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}
       
</Row>
      </div>
    </div>
  );
}

export default App;
