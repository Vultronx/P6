import logo from '../../images/logo.svg';
import '../../styles/App.scss';

function Home() {
  return (
    <div className="Home">
      <main className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the <code>src/App.js</code> file and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default Home;
