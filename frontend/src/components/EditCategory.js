import CategoryForm from "./CategoryForm.js"
import "./EditCategory.css"

function EditCategory({ menu, setMenu, menuCategory, toggleEditCategory, deleteCategory, handleCategorySubmit }) {
	return (
		<div className="edit-category">
			<button className="edit-category-btn" onClick={() => toggleEditCategory(menuCategory._id)}>
				Edit Category
			</button>
			{menuCategory.edit &&
				<CategoryForm
					menu={menu}
					setMenu={setMenu}
					menuCategory={menuCategory}
					toggleEditCategory={toggleEditCategory}
					deleteCategory={deleteCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			}
		</div>
	)
}

export default EditCategory
