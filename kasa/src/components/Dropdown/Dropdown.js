import '../../styles/App.scss';
import Element from './Element/Element.js';

function Dropdown( data ) {
  return (
    <span>
    <Element id={data.id} title={data.title} description={data.description}/>
    {
    //console.log(data.title)
    }
    </span>
  );
}

export default Dropdown