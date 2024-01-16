import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown.js';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

let pictureId = 0

function Card( ) {
  const { logementId } = useParams()
  const [slideId, slideChange] = useState(0);
  const logement = logements.filter((logement) => logement.id == logementId)[0]
  const current = logements.indexOf(logement);
  
  let previous = 0;
  let next = 0;
  if (current > 0)
    previous = current - 1
  else
    previous = logements.length - 1
  if (current < logements.length - 1)
    next = current + 1
  else
    next = 0

  console.log(logement)
    return (
      <main className="App-body">
        {
        /*logement.pictures.map((cover) => (
            <img className="bannerHigh" src={cover} alt="picture" />
        ))*/
        }
        <img className="bannerHigh" src={logement.cover} alt="Banner_picture" />
        {
          <>          
            <Slideshow url={logement.pictures[pictureId]}/>
          </>
        }
        <span>Changer de logement</span>
        <Link to={"/card/"+logements[previous].id}>{"[<]"}</Link>
        <Link to={"/card/"+logements[next].id}>{"[>]"}</Link>
        <div>
            [{previous}] [{current}] [{next}] {logement.title}
        </div>
        <div>
            <img className="host-picture" src={logement.host.picture} />
            {logement.host.name}
        </div>
        <div>
            {logement.location}
        </div>
        
        <div>
            {logement.tags}
        </div>
        
        <div>
            {logement.rating}
        </div>
        <ul className="card">
            {
              <>
                <Dropdown id={logement.id} title={"Description"} description={logement.description}/>
                <Dropdown id={logement.id} title={"Equipements"} description={logement.equipments}/>
              </>
            }
        </ul>
      </main>
  );
}

export default Card;
