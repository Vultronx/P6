import { redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown.js';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import logements from "../../assets/logements.json";
import '../../styles/App.scss';

function Card( ) {
  const { logementId } = useParams()
  const logement = logements.filter((logement) => logement.id == logementId)[0]
  console.log(logement);
  /*if (!logement)
    return redirect("/error")*/
  const current = logements.indexOf(logement)
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
          <div className="slideshow">
            <Slideshow url={logement.pictures[pictureId]} />
            <button className="card sliderLeftButton" onClick={e => {previousHandleClick(e)}}>{""}</button>
            <button className="card sliderRightButton" onClick={e => {nextHandleClick(e)}}>{""}</button>
          </div>
        }
        <div className="card">
          <div className="card head">
            <div>
              <div className="card title">
                  {logement.title}
              </div>
              <div className="card location">
                  {logement.location}
              </div>
              <div className="card tags">
                  {
                    logement.tags.map((tag) => (
                      <div key={"tag_"+logement.tags.indexOf(tag)} className="card tag">{tag}</div>)
                    )
                  }
              </div>
            </div>
            <div className="card host">
              <div className="card name">
                  <p>{logement.host.name}</p>
                  <img className="host-picture" src={logement.host.picture} />
              </div>
              <div>
                  {logement.rating}{" étoiles"}
              </div>
            </div>
          </div>
          <div className="card foot">
            <ul className="card description">
                {
                  <>
                    <Dropdown id={logement.id} title={"Description"} description={logement.description}/>
                    <Dropdown id={logement.id} title={"Equipements"} description={logement.equipments}/>
                  </>
                }
            </ul>
          </div>
        </div>
        <hr />
        <span className="text-center">Choix du logement</span>
        <div className="text-center">
        <Link to={"/card/" + logements[previous].id}>{"[<]"}</Link>
        <Link to={"/card/" + logements[next].id}>{"[>]"}</Link>
        </div>
        <div className="text-center">
        <Link to={"/card/" + logements[previous].id}>{"[<]  "}</Link>[{previous}] <span className="text-blue">[{current}]</span> [{next}]<Link to={"/card/" + logements[next].id}>{"  [>]"}</Link>
        </div>
        <br />
      </main>
    );
}

export default Card;
