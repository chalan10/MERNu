import { useState } from "react";
import "./CategoryForm.css"

function CategoryForm({ menu, setMenu, menuCategory, toggleAddCategory, toggleEditCategory, deleteCategory, handleCategorySubmit }) {
	const [ name, setName ] = useState(menuCategory && menuCategory.name);
	const [ description, setDescription ] = useState(menuCategory && menuCategory.description);

	// Add Category
	if (!menuCategory) {
		return (
			<form
				className="category-form"
				onSubmit={(e) => handleCategorySubmit(e, { name: name, description: description })}
			>
				<label>Category Name</label><br/>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label>Category Description</label><br/>
				<textarea
					className="category-description"
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<button onClick={toggleAddCategory}>
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
			<form
				className="category-form"
				onSubmit={(e) => handleCategorySubmit(e, { cid: menuCategory._id, name: name, description: description })}
			>
				<label>Category Name</label><br/>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label>Description</label><br/>
				<textarea
					className="category-description"
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<button onClick={() => toggleEditCategory(menuCategory._id)}>
					Cancel
				</button>
				<button
					onClick={() => deleteCategory(menuCategory._id)}
					style={{ backgroundColor: "crimson" }}
				>
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
