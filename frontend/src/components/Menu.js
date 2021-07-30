import React from "react";
import Item from "./Item.js";
import "./Menu.css";

class Menu extends React.Component {
	render() {
		return(
			<div>
				<h2>Menu</h2>
				<Item />
				<Item />
			</div>
		);
	}
}

export default Menu;
