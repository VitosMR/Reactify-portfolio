import { Routes, Route} from "react-router-dom";
import Header from './../components/header/Header'
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Contacts from "../pages/Contacts";

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<div className="skils">
							<h1>Frontend</h1>
							<li><h3>HTML</h3>
							<span className="bar"> <span className="html"></span></span>
							</li>	
							<li><h3>CSS</h3>
							<span className="bar"> <span className="css"></span></span>
							</li>	
							<li><h3>React</h3>
							<span className="bar"> <span className="react"></span></span>
							</li>	
							<li><h3>Js</h3>
							<span className="bar"> <span className="js"></span></span>
							</li>
						</div>
						<div className="skils">
							<h1>Backend</h1>
							<li><h3>NodeJS</h3>
							<span className="bar"> <span className="NodeJS"></span></span>
							</li>	
							<li><h3>MySQL</h3>
							<span className="bar"> <span className="MySQL"></span></span>
							</li>	
							<li><h3>PHP</h3>
							<span className="bar"> <span className="PHP"></span></span>
							</li>	
						</div>
						
							<Projects />
							<Routes>
								<Route path="/project/:id" element={<Project />} />
							</Routes>
							<Contacts />
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;