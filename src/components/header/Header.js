import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
					Hi, it`s <em>Reactify</em>
					</strong>
					<br />frontend developer
				</h1>
				<div className="header__text">
					<p>with a passion for creating new projects.</p>
				</div>

			</div>
		</header>
	);
}

export default Header;