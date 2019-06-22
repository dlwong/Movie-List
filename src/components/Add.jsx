
var Add = (props) => (
    <div className="add-container">
      <input type="text" placeholder="Add movie title here" onChange = {(event) => props.handleTitle(event)}/>
      <input type="submit" onClick = {() => props.handleAdd()} value='Add' />
    </div> 
  );
  
  export default Add;