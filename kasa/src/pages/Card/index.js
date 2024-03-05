import { redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown.js';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import logements from "../../assets/logements.json";
import starColor from "../../images/star_color.png";
import starGrey from "../../images/star_grey.png";
import '../../styles/App.scss';
import Error from '../Error/';

function Card( ) {
  const { logementId } = useParams()
  const logement = logements.filter((logement) => logement.id == logementId)[0]

  let [pictureId, setPictureId] = useState(0);

	if (!logement) {
		console.log("page non trouvée");
    return <Error />;
	}

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
  let rating = [];
  let ratingLength = 0;
  for (let i=0; i<logement.rating; i++) {
    ratingLength = rating.push(true);
  }
  for (let i=0; i<5-logement.rating; i++) {
    ratingLength = rating.push(false);
  }
  function Test() {
    //for (let i=0; i<logement.rating; i++) {
    return <span className="card star">*</span>;
  }
    //rating.appendChild(<img src="../../images/star_color.png"></img>);

    //ratingType = type === 'true' ? '<img src="star_color.png"></img>' : '<img src="start_grey.png"></img>';
  
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
            {
              (logement.pictures != 1) ?
              <>
                <button className="card sliderLeftButton" onClick={e => {previousHandleClick(e)}}>{""}</button>
                <button className="card sliderRightButton" onClick={e => {nextHandleClick(e)}}>{""}</button>
                <span class="card slideId">{(pictureId+1)+'/'+logement.pictures.length}</span>
              </>
              :
              <></>
            }
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
              <div className="card star">
                  {
                    rating.map((star) => (
                      <div className="card star">
                      {
                        star ? <img src={starColor}></img> : <img src={starGrey}></img>
                      }
                      </div>
                    ))
                  }
                  
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
        <Link to={"/card/" + logements[previous].id}>{"[<]  "}</Link>[{previous}] <span className="text-blue">[{current}]</span> [{next}]<Link to={"/card/" + logements[next].id}>{"  [>]"}</Link>
        </div>
        <br />
      </main>
    );
}

export default Card;
