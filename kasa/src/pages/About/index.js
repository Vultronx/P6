import bannerAbout from '../../images/kalen-emsley.png';
import Dropdown from '../../components/Dropdown/Dropdown.js';
import values from "../../assets/values.json";
import '../../styles/App.scss';

function About() {
  return (
      <main className="App-body">
        <div className="banner">
          <img src={bannerAbout} alt="Banner_picture" />
        </div>
        <ul className="dropdown">
            {values.map((value) => (
              <span><Dropdown id={value.id} title={value.title} description={value.description}/>
              {console.log(value)}
              </span>
            ))}
        </ul>
      </main>
  );
}

export default About;
