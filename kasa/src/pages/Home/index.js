import { Link } from 'react-router-dom'
import bannerHome from '../../images/Image_source_1.png';
import logo from '../../images/logo.svg';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

function Home() {
  return (
    <div className="Home">
      <main className="App-body">
        <div className="banner">
          <img src={bannerHome} alt="Banner_picture" />
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the <code>src/App.js</code> file and save to reload.
        </p> 
          <div className="logementWrapper">
            {logements.map((logement) => (
              <a to={"/card/"+logement.id}>
                <div className="logement">{logement.title}</div>
              </a>
            ))}
          </div>
      </main>
    </div>
  );
}

export default Home;
