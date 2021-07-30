import React from "react";
import "./Item.css";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "name",
			description: "desc",
			price: "0.0",
		};
	}

	render() {
		return(
			<div>
				<h className="item-name">{this.state.name}</h>
				<p className="item-description">{this.state.description}</p>
				<p className="item-price">${this.state.price}</p>
				<button>
					Click
				</button>
			</div>
		);
	}
}

export default Item;
