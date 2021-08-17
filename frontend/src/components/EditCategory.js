import { useState } from "react";
import CategoryForm from "./CategoryForm.js";
import "./EditCategory.css";

function EditCategory({ menuCategory, menuCategories, setMenuCategories, deleteCategory, /*handleCategorySubmit*/ }) {
	const [ toggle, setToggle ] = useState(false);

	function toggleForm() {
		setToggle(!toggle);
	}

	return (
		<div className="edit-category">
			<button className="edit-category-btn" onClick={toggleForm}>
				Edit Category
			</button>
			{toggle &&
				<CategoryForm
					menuCategory={menuCategory}
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					deleteCategory={deleteCategory}
					//handleCategorySubmit={handleCategorySubmit}
					toggleForm={toggleForm}
				/>
			}
		</div>
	);
}

export default EditCategory;
