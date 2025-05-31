import "./IconButton.css";
import { MdReadMore } from "react-icons/md";


export function IconButton({ children,onclick ,icon }) {


  return (
    <div>
    <button className="IconButton">
      {children} {onclick}{icon}<MdReadMore />
      </button>
      </div>
  );
}
export default IconButton;
