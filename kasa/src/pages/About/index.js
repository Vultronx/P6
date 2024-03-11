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
        <ul className="about">
            {values.map((value) => (
              <Dropdown key={"value_"+value.id} id={value.id} title={value.title} description={value.description}/>
            ))}
        </ul>
      </main>
  );
}

export default About;
