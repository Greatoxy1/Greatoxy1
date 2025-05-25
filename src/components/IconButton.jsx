import './IconButton.css';
import { MdReadMore } from 'react-icons/md';

export function IconButton({ children }) {
  return (
    <button className="IconButton">
      {children} <MdReadMore />
    </button>
  );
}