import CategoryForm from "./CategoryForm.js";
import "./AddCategory.css";

function AddCategory({ menuCategories, setMenuCategories, showAddCategory, toggleAddCategory, handleCategorySubmit }) {
	return (
		<div className="add-category">
			<button className="add-category-btn" onClick={toggleAddCategory}>
				Add Category
			</button>
			{showAddCategory &&
				<CategoryForm
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					toggleAddCategory={toggleAddCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			}
		</div>
	);
}

export default AddCategory;
