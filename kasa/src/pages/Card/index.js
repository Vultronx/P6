import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown.js';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

function Card( ) {
  const { logementId } = useParams()
  , logement = logements.filter((logement) => logement.id == logementId)[0]
  , current = logements.indexOf(logement)
  , previousHandleClick = (e) => {
    if (pictureId > 0)
      pictureId--
    else
      pictureId = logement.pictures.length - 1
    setPictureId(pictureId)
  }
  , nextHandleClick = e => {
    if (pictureId < logement.pictures.length - 1)
      pictureId++
    else
      pictureId = 0;
    setPictureId(pictureId)
  }
  let [pictureId, setPictureId] = useState(0)
  
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
        <>
          <Slideshow url={logement.pictures[pictureId]} />
        </>
        }
        <button onClick={e => {previousHandleClick(e)}}>{"[<]"}</button>
        <button onClick={e => {nextHandleClick(e)}}>{"[>]"}</button>
        <div>
            {logement.title}
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

        <hr />
        <span className="text-center">Changer de logement</span>
        <div className="text-center">
        <Link to={"/card/" + logements[previous].id}>{"[<]"}</Link>
        <Link to={"/card/" + logements[next].id}>{"[>]"}</Link>
        </div>
        <div className="text-center">
            [{previous}] <span className="text-blue">[{current}]</span> [{next}]
        </div>
      </main>
    );
}

export default Card;
