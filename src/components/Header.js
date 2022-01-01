import '../styles/Header.css';
import logo from '../design/images/haggus-logo.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' />
    </div>
  );
};

export default Header;
