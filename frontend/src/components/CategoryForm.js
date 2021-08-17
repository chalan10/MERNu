import { useState } from "react";
import "./CategoryForm.css"

// TODO: is it okay to have a call to a functional component without passing in 
// all props? addCategory doesn't need categoryId whereas editCategory does
// look into the effects of this, if there are any
function CategoryForm({ menuCategory, menuCategories, setMenuCategories, deleteCategory, /*handleCategorySubmit,*/ toggleForm }) {
	const [ name, setName ] = useState(menuCategory && menuCategory.name);
	const [ description, setDescription ] = useState(menuCategory && menuCategory.description);

	function handleSubmit(e, data) {
		e.preventDefault();
		// Add Category
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			setMenuCategories([
				...menuCategories,
				{
					id: rid,
					name: data.name,
					description: data.description,
				}
			]);
			console.log(data);
			console.log(menuCategories);
		}
		// Edit Category
		else {
			setMenuCategories(
				menuCategories.map((menuCategory) => 
					menuCategory.id === data.id ?
					{
						...menuCategory,
						name: data.name,
						description: data.description,
					} :
					menuCategory
				)
			);
			console.log(data);
			console.log(menuCategories);
		}
	}

	// Add Category
	if (!menuCategory) {
		return (
			<form
				className="category-form"
				onSubmit={(e) => handleSubmit(e, { name: name, description: description })}
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
				<button onClick={toggleForm}>
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
				onSubmit={(e) => handleSubmit(e, { id: menuCategory.id, name: name, description: description })}
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
				<button onClick={toggleForm}>
					Cancel
				</button>
				<button
					onClick={() => deleteCategory(menuCategory.id)}
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
