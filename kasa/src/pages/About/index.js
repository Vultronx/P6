import bannerPicture from '../../images/kalen-emsley.png';
import Dropdown from '../../components/Dropdown/Dropdown.js';
import '../../styles/App.scss';

function About() {
  return (
      <main className="App-body">
        <img src={bannerPicture} alt="Banner_picture" />
        <Dropdown />
      </main>
  );
}

export default About;
