import '../../styles/App.scss';
import Element from './Element.js';

import { useState } from 'react';

const valuesList = [
    'Fiabilité',
    'Respect',
    'Service',
    'Sécurité'
]

function Dropdown( props ) {
  
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul className="dropdown">
        {valuesList.map((value) => (
            <Element />
        ))}
    </ul>
  );
}

export default Dropdown