import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Prueba } from "./test.js";
import { Jumbotron } from "./jumbotron.js";
import { Tarjetas } from "./tarjetas.js";
import { Footer } from "./footer.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Prueba />
				<div className="container">
					<Jumbotron />
					<div className="row text-center">
						<Tarjetas
							titulo="Card title"
							texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
							textofooter="Find Out More!"
						/>
						<Tarjetas
							titulo="Card title"
							texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							textofooter="Find Out More!"
						/>
						<Tarjetas
							titulo="Card title"
							texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
							textofooter="Find Out More!"
						/>
						<Tarjetas
							titulo="Card title"
							texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
							textofooter="Find Out More!"
						/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
