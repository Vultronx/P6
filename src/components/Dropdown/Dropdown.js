import '../../styles/App.scss';
import Element from './Element/Element.js';

function Dropdown( data ) {
  return (
    <Element id={data.id} title={data.title} description={data.description}/>
  );
}

export default Dropdown