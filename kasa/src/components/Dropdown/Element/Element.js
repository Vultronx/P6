import { useState } from 'react'

function Element( data ) {
  
    const [open, setOpen] = useState(false);
  
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
                    {open ? "[ - ]" : "[ + ]"}
                </span>
            </div>
            {open ? <li className="content" key={data.id+"description"}>{data.description}</li>:""}
        </div>
    );
}
   
export default Element