import "./CategoryForm.css"

// TODO: is it okay to have a call to a functional component without passing in 
// all props? addCategory doesn't need categoryId whereas editCategory does
// look into the effects of this, if there are any
function CategoryForm({ menuCategories, setMenuCategories, menuCategory, setMenuCategory, toggleCategoryForm }) {
	if (menuCategories) {
		return (
			<form className="category-form">
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
					className="category-description"
					type="text"
					id="category-description"
					name="category-description"
				/><br/>
				<button onClick={() => toggleCategoryForm()}>
					Cancel
				</button>
				<input type="submit" value="Save"/>
			</form>
		);
	}
	else if (menuCategory) {
		return (
			<form className="category-form">
				<label for="category-name">
					Category Name
				</label><br/>
				<input
					type="text"
					id="category-name"
					name="category-name"
					value={menuCategory.name}
				/><br/>
				<label for="category-description">
					Description
				</label><br/>
				<textarea
					className="category-description"
					type="text"
					id="category-description"
					name="category-description"
					value={menuCategory.description}
				/><br/>
				<button onClick={() => toggleCategoryForm(menuCategory.id)}>
					Cancel
				</button>
				<input type="submit" value="Save"/>
			</form>
		);
	}
}

export default CategoryForm;
