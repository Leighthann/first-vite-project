import { ReactNode } from "react";

/*
interface AlertProps
{
    text:string;
    name:string
    children:string
}

export const Alert = ({text, name}: AlertProps) => {
  return (
    <div className="alert alert-primary">{text}{name}</div>
  )
}
*/

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

//alert-primary , the second class that determines the colour
export default Alert;
