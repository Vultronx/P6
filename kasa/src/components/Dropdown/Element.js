const valuesList = [
    'Fiabilité',
    'Respect',
    'Service',
    'Sécurité'
]

function Element( props ) {
  
    const [open, setOpen] = useState(false);
  
    return (
        <li className="dropdown__element"><p>{props.v}</p><span className="dropdown__button" onClick={() => setOpen(open ? false : true)}>[ - ]</span>{console.log(open)}</li>
    );
}
  
export default Element