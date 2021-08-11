import { useState } from "react";
import "./CategoryForm.css"

// TODO: is it okay to have a call to a functional component without passing in 
// all props? addCategory doesn't need categoryId whereas editCategory does
// look into the effects of this, if there are any
function CategoryForm({ menuCategories, setMenuCategories, menuCategory, setMenuCategory, toggleCategoryForm, deleteCategory }) {
	const [ name, setName ] = useState(menuCategory && menuCategory.name);
	const [ description, setDescription ] = useState(menuCategory && menuCategory.description);
	// Add Category
	if (menuCategories) {
		return (
			<form className="category-form">
				<label for="category-name">Category Name</label><br/>
				<input
					type="text"
					id="category-name"
					name="category-name"
				/><br/>
				<label for="category-description">Category Description</label><br/>
				<textarea
					className="category-description"
					type="text"
					id="category-description"
					name="category-description"
				/><br/>
				<button onClick={() => toggleCategoryForm()}>
					Cancel
				</button>
				<input
					type="submit"
					value="Save"
					style={{ backgroundColor: "skyblue" }}
				/>
			</form>
		);
	}
	// Edit Category
	if (menuCategory) {
		return (
			<form className="category-form">
				<label for="category-name">
					Category Name
				</label><br/>
				<input
					type="text"
					id="category-name"
					name="category-name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label for="category-description">
					Description
				</label><br/>
				<textarea
					className="category-description"
					type="text"
					id="category-description"
					name="category-description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<button onClick={() => toggleCategoryForm(menuCategory.id)}>
					Cancel
				</button>
				<button onClick={() => deleteCategory(menuCategory.id)} style={{ backgroundColor: "crimson" }}>
					Delete
				</button>
				<input
					type="submit"
					value="Save"
					style={{ backgroundColor: "skyblue" }}
				/>
			</form>
		);
	}
}

export default CategoryForm;
