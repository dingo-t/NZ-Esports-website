import { Link } from 'react-router-dom';
import './navbar.css';

// The navbar allows navigation to every main page of the website
function Navbar() {

  return (
      <>
        <nav className='navbar'>
          {/* The navbar links for when the user has a large screen device */}
          <div className='navbar-container'>
              <Link to='/' className='navbar-logo'>
                  <img id='netsafe-logo' src='../images/NetSafe-logo_imagelarge.png'></img>
              </Link>
              <Link to='/' className='navbar-logo'>
                  <img id='esports-logo' src='../images/NZ-Esports_Logo_White-1024x1024.png'></img>
              </Link>

            <div className='nav-button-container'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/news'
                  className='nav-links'
                >
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/gaming'
                  className='nav-links'
                >
                  Gaming
                </Link>
              </li>  
              <li className='nav-item'>
                <Link
                  to='/scams'
                  className='nav-links'
                >
                  Scams
                </Link>
              </li>  
            </div>
          </div>
        </nav>
      </>
    );
  }
  
export default Navbar;
  