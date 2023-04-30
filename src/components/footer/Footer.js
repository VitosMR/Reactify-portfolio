import "./style.css";
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="glow-on-hover">
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="glow-on-hover">
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="glow-on-hover">
							<a href="https://github.com/VitosMR">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 reactify-ua.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;