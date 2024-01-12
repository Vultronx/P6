import { useParams } from 'react-router-dom'
import bannerAbout from '../../images/kalen-emsley.png';
import Dropdown from '../../components/Dropdown/Dropdown.js';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

function Card( ) {
  const { logementId } = useParams()
  const logement = logements.filter((logement) => logement.id = logementId)
  return (
      <main className="App-body">
        <img className="bannerHigh" src={bannerAbout} alt="Banner_picture" />
        <ul className="dropdown">
            {
              logements.map((logementT) => (
                <span>
                {console.log(logementId)}
                <Dropdown id={logementT.id} title={logementT.title} description={logementT.description}/>
                </span>
              ))
            }
        </ul>
      </main>
  );
}

export default Card;
