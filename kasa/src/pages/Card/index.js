import bannerAbout from '../../images/kalen-emsley.png';
import Dropdown from '../../components/Dropdown/Dropdown.js';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

function Card() {
  return (
      <main className="App-body">
        <img className="bannerHigh" src={bannerAbout} alt="Banner_picture" />
        <ul className="dropdown">
            {logements.map((logement) => (
              <span><Dropdown id={logement.id} title={logement.title} description={logement.description}/>
              {console.log(logement)}
              </span>
            ))}
        </ul>
      </main>
  );
}

export default Card;
