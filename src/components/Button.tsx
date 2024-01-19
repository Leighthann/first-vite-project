//Creating a button Component


interface ButtonProps{

    children:string
    color?:string //the ? means that it is optional , the App.tsx gives an error when the color component is not included
    //color?: "primary"| "secondary" | "danger" prevents an invalid property for the color being enetered , only one of these can be entered
    
    //a function with no parameters that returns void
    onClick: ({}) => void
}

//to have a default colour
export const Button = ({children, onClick, color = "primary"} :ButtonProps) => {
  return (
        <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button;