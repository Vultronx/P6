import '../../styles/App.scss';

function DropdownElement( props ) {
  return (
    <div className="DropdownElement">
        { props.children }
    </div>
  );
}

export default DropdownElement