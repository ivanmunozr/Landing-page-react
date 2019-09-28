import React from "react";
import PropTypes from "prop-types";

export const Tarjetas = function(props) {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325"
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title">{props.titulo}</h4>
					<p className="card-text">{props.texto}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{props.textofooter}
					</a>
				</div>
			</div>
		</div>
	);
};

Tarjetas.propTypes = {
	titulo: PropTypes.string,
	texto: PropTypes.string,
	textofooter: PropTypes.string
};

/*
export const Tarjetas = function() {
	return (
		<div className="row text-center">
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="http://placehold.it/500x325"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sapiente esse necessitatibus neque.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="http://placehold.it/500x325"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Explicabo magni sapiente, tempore debitis
							beatae culpa natus architecto.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="http://placehold.it/500x325"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sapiente esse necessitatibus neque.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						className="card-img-top"
						src="http://placehold.it/500x325"
						alt=""
					/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Explicabo magni sapiente, tempore debitis
							beatae culpa natus architecto.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
*/
