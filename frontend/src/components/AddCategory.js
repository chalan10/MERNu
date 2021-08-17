import { useState } from "react";
import CategoryForm from "./CategoryForm.js";
import "./AddCategory.css";

function AddCategory({ menuCategories, setMenuCategories, /*handleCategorySubmit*/ }) {
	const [ toggle, setToggle ] = useState(false);

	function toggleForm() {
		setToggle(!toggle);
	}

	return (
		<div className="add-category">
			<button className="add-category-btn" onClick={toggleForm}>
				Add Category
			</button>
			{toggle &&
				<CategoryForm
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					//handleCategorySubmit={handleCategorySubmit}
					toggleForm={toggleForm}
				/>
			}
		</div>
	);
}

/*
{Test()}
function Test() {
	return (
		<>Testing</>
	);
}
*/

export default AddCategory;
