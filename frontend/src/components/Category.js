import { useState, useEffect } from "react";
import "./Category.css";

function Category({ showCategory, toggleCategory }) {
	return (
		<div className="category">
			<button className="category-btn" onClick={toggleCategory}>
				Add Category
			</button>
			{showCategory &&
				<form className="category-menu">
					<label for="category-name">
						Category Name
					</label><br/>
					<input
						type="text"
						id="category-name"
						name="category-name"
					/><br/>
					<label for="category-description">
						Description
					</label><br/>
					<textarea
						type="text"
						id="category-description"
						name="category-description"
						className="category-description"
					/><br/>
					<button onClick={toggleCategory}>Cancel</button>
					<input type="submit" value="Save"/>
				</form>
			}
		</div>
	);
}

export default Category;
