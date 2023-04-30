import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong >Reactify Lab</strong> 
					</NavLink>
					<BtnDarkMode />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
