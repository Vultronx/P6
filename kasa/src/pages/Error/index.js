import { Link } from 'react-router-dom'
import '../../styles/App.css';

function Error() {
  return (
    <div className="Error">
        <header className="App-body">
            <span className="App-color App-font-size-xxl .App-font-weight-700 App-margin-default">404</span>
            <p className="App-color App-font-size-s">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='App-link App-font-size-xs App-margin-default' to="/">Retourner sur la page d’accueil</Link>
        </header>
    </div>
  );
}

export default Error;