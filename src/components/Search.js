import { Divider, Input } from 'antd';

const SearchBar = ({ setSearchTerm }) => {

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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






