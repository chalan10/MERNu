import CategoryForm from "./CategoryForm.js";
import "./AddCategory.css";

function AddCategory({ menuCategories, setMenuCategories, showAddCategory, toggleShowAddCategory }) {
	return (
		<div className="add-category">
			<button className="add-category-btn" onClick={toggleShowAddCategory}>
				Add Category
			</button>
			{showAddCategory &&
				<CategoryForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} toggleCategoryForm={toggleShowAddCategory}/>
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
