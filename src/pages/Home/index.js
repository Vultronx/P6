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
          <div className="logementWrapper">
            {logements.map((logement) => (
              <Link key={"id_"+logement.id} className="logementLink" to={"/card/"+logement.id}>
                <div className="logement">
                  <img className="logementCover" src={logement.cover}/>
                  <div className="logementTitle">{logement.title}</div>
                </div>
              </Link>
            ))}
          </div>
      </main>
    </div>
  );
}

export default Home;
