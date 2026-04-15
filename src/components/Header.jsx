import { Link } from 'react-router-dom';
import nav from '../assets/images/menu-btn (3).svg';
import '../assets/style/style.css';
function Header(){
    return(
        <div className="header">
            <Link to='/categories'>
            <nav className='header-nav'>
            <img src={nav} alt="" />
            </nav>
            <div className="header-btn">Все новости</div>
            </Link>

        </div>
    )



}

export default Header;