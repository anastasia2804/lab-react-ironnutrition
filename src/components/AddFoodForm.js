import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

    const [foodName, setFoodName] = useState('');
    const [foodImage, setFoodImage] = useState('');
    const [foodCalories, setFoodCalories] = useState('');
    const [foodServings, setFoodServings] = useState('');

    const handleNameInput = element => setFoodName(element.target.value)
    const handleImageInput = element => setFoodImage(element.target.value)
    const handleCaloriesInput = element => setFoodCalories(element.target.value)
    const handleServingsInput = element => setFoodServings(element.target.value)

    const handleSubmit = (element) => {
        element.preventDefault();
        const newFood = {
            name: foodName, 
            image: foodImage, 
            calories: foodCalories, 
            servings: foodServings}

        console.log(newFood)
        props.addFood(newFood)

        setFoodName('');
        setFoodImage('');
        setFoodCalories('');
        setFoodServings('');
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={foodImage} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={foodCalories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={foodServings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;