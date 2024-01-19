//instead of using a div to wrap all the elements ,  a Fragment can be used

import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";


//Passing Data via Props
interface ListProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//We can use an interface to pass data to functions

//function ListGroup(props: ListProps)
//would need to prefix props. before all attributes

function ListGroup({ items, heading, onSelectItem }: ListProps) {
  //const items = ["New York", "Paris", "Tokyo", "London", "San Francisco ", ""];
  // items = [];
  //let selectedIndex = 0;


  //Managing State
  //Hook - a function that allows us to use built in functions in react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //using the state tells react that this component can have data that will change overtimr

  //const message = items.length === 0 ?  <p>No items found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  //Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  /*
  if (items.length === 0) 
    return (
    <>
    <h1>List</h1> 
    <p>No items found</p>
    </>
    );
*/

  //Convert each item to a li element
  //{} are used to render items dynamically
  items.map((item) => <li>{item}</li>);

  return (
    <Fragment>
      {/*or just use an empty anchor tags  <> and </> */}
      {/** When rendering a list of items using the map method, each item should have a unique key ; item is the unique key since the elements in the array are unique  */}
      <h1>{heading}</h1>
      {/*Utilising Conditional Rendering*/}
      {getMessage()}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //If the index is the same as the selectedIndex , then add it to the active class which highlights it
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            /*onClick={() => console.log("Clicked", item, index)}*/
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
