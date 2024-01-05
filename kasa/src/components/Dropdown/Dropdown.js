import '../../styles/App.scss';
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
            <li className="dropdown__title"><p>{value}</p><span className="dropdown__button" onClick={() => setOpen(open ? false : true)}>[ - ]</span>{console.log(open)}</li>
        ))}
    </ul>
  );
}

export default Dropdown