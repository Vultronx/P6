import { useState } from 'react'

function Element( value ) {
  
    const [open, setOpen] = useState(false);
  
    return (
        <div>
            <li key={value.id+value.title} className="dropdown__element">
                <p>
                    {value.title}
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
            {open ? <li key={value.id+"description"} className='dropdown__content dropdown__content--red'>{value.description}</li>:""}
        </div>
    );
}
   
export default Element