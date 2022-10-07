import { Divider, Input } from 'antd';
import { useState } from 'react';
// import foods from './foods.json';


const SearchBar = ({ foodsArray, setFoodsArray, setResults }) => {

  // const [searchTerm, setResults] = useState('')

  const handleSearch = (e) => {
    console.log('changing!')
    console.log(foodsArray)
    console.log(e.target.value)
    // setSearchTerm(e.target.value);
    let searchArray = [...foodsArray]
    let newArray = searchArray.filter((foods) => {
      // console.log(foods.name, "FOODS")
      return foods.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
    setResults(newArray)
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search bar</label>
      <Input type="text" placeholder="search..." onChange={(e)=>(handleSearch(e))} />
     
    </div>
  
  );
}

export default SearchBar;







