import logo from '../../images/logo.svg';
import '../../styles/App.css';

function About() {
  return (
    <div className="About">
      <header className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit this page-component and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;
