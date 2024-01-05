import logo from '../../images/logo_footer.png';
import '../../styles/App.scss';

function Footer() {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <img src={logo} alt="logo" />
        <p>
            © 2020 Kasa. All rights reserved
        </p> 
      </footer>
    </div>
  );
}

export default Footer