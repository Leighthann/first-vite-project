

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";


function App()
{

  const[alertVisible, setAlertVisibility] = useState(false)
  
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="danger" onClick={() =>  setAlertVisibility(true)}>My Button</Button>
    </div>
  )
}
/*
//Passing Children 
import Alert from "./components/Alert";


Without the use of the children component
function App()
{
  return (
    <div> <Alert text = "Hello" name=" Leigh-Ann" /> </div>
  );
}

/*
function App()
{
  return (
    <div> 
      <Alert > Hello <span>World</span></Alert>
    </div>
  );
}



import ListGroup from "./components/ListGroup";
function App() {
  const items = ["New York", "Paris", "Tokyo", "London", "San Francisco ", ""];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
  );
}
*/
export default App;
