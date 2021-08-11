import CategoryForm from "./CategoryForm.js";
import "./EditCategory.css";

function EditCategory({ menuCategory, setMenuCategory, toggleEditCategory, deleteCategory }) {
	return (
		<div className="edit-category">
			<button className="edit-category-btn" onClick={() => toggleEditCategory(menuCategory.id)}>
				Edit Category
			</button>
			{menuCategory.edit &&
				<CategoryForm
					menuCategory={menuCategory}
					setMenuCategory={setMenuCategory}
					toggleCategoryForm={toggleEditCategory}
					deleteCategory={deleteCategory}
				/>
			}
		</div>
	);
}

export default EditCategory;
