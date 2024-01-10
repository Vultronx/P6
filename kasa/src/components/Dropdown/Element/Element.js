import { useState } from 'react'

function Element( data ) {
  
    const [open, setOpen] = useState(false);
  
    return (
        <div>
            <li key={data.id+data.title} className="dropdown__element">
                <p>
                    {data.title}
                </p>
                <span 
                    className="dropdown__button" 
                    onClick={
                        () => setOpen(open ? false : true)
                    }
                >
                    {open ? "[ - ]" : "[ + ]"}
                </span>
            </li>
            {open ? <li key={data.id+"description"} className='dropdown__content dropdown__content--red'>{data.description}</li>:""}
        </div>
    );
}
   
export default Element