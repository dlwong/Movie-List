
var Search = (props) => (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange = {(e) => props.handleChange(e)}/>
      <input type="submit" onClick = {() => props.handleClick()} value='Go!' />
    </div> 
  );
  
  export default Search;