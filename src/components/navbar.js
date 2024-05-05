import { Link } from 'react-router-dom';
import './navbar.css';

// The navbar allows navigation to every main page of the website
function Navbar() {

  return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <div className='nav-button-container'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' >
                  <h2>Home</h2>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/news'
                  className='nav-links'
                >
                  <h2>News</h2>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/gaming'
                  className='nav-links'
                >
                  <h2>Gaming</h2>
                </Link>
              </li>  
              <li className='nav-item'>
                <Link
                  to='/scams'
                  className='nav-links'
                >
                  <h2>Scams</h2>
                </Link>
              </li>  
            </div>
          </div>
        </nav>
      </>
    );
  }
  
export default Navbar;
  