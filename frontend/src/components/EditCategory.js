import CategoryForm from "./CategoryForm.js";
import "./EditCategory.css";

function EditCategory({ menuCategory, menuCategories, setMenuCategories, toggleEditCategory, deleteCategory, handleCategorySubmit }) {
	return (
		<div className="edit-category">
			<button className="edit-category-btn" onClick={() => toggleEditCategory(menuCategory.id)}>
				Edit Category
			</button>
			{menuCategory.edit &&
				<CategoryForm
					menuCategory={menuCategory}
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					toggleEditCategory={toggleEditCategory}
					deleteCategory={deleteCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			}
		</div>
	);
}

export default EditCategory;
