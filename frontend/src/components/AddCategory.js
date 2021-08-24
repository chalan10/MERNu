import CategoryForm from "./CategoryForm.js";
import "./AddCategory.css";

function AddCategory({ menu, setMenu, showAddCategory, toggleAddCategory, handleCategorySubmit }) {
	return (
		<div className="add-category">
			<button className="add-category-btn" onClick={toggleAddCategory}>
				Add Category
			</button>
			{showAddCategory &&
				<CategoryForm
					menu={menu}
					setMenu={setMenu}
					toggleAddCategory={toggleAddCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			}
		</div>
	);
}

export default AddCategory;
