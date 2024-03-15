import { useState } from 'react'
import arrowUp from '../../../images/arrow_up_24px.png';
import arrowDown from '../../../images/arrow_down_24px.png';

function Element( data ) {
  
    const [open, setOpen] = useState(false);
    let i;
  
    return (
        <div className="dropdown">
            <div className="head">
                <li className="title" key={data.id+data.title}>

                        {data.title}

                </li>
                <span 
                    className="button" 
                    onClick={
                        () => setOpen(open ? false : true)
                    }
                >
                    {open ? <img className="flipToDown enable" src={arrowUp}></img> : <img className="flipToUp disable" src={arrowUp}></img>}
                </span>
            </div>
            {open ? 
                <div className="content" key={data.id+"description"}>
                    {
                        data.description[0].length>1 ?
                        data.description.map((element) => (
                            //key={"value_"+data.description.indexOf(element)}
                            <p key={"value_"+data.description.indexOf(element)}>{console.log(element)}{element}<br/></p>
                        )) :
                        <>{data.description}<br/></>
                    }
                </div>
                :""
            }
        </div>
    );
}
   
export default Element