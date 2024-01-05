import '../../styles/App.scss';
import Element from './Element/Element.js';
import values from "../../assets/values.json";

const dataValues = JSON.stringify(values);

function Dropdown( props ) {
  return (
    <ul className="dropdown">
        {values.map((value) => (
            <Element title={value.title} description={value.description}/>
        ))}
    </ul>
  );
}

export default Dropdown