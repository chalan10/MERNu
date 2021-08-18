import Item from "./Item.js";
import AddItem from "./AddItem.js";
import EditCategory from "./EditCategory.js";
import "./Category.css";

function Category({ menuCategory, menuCategories, setMenuCategories, toggleEditCategory, deleteCategory, handleCategorySubmit,
					menuItems, setMenuItems, toggleAddItem, toggleEditItem, deleteItem, handleItemSubmit}) {
	return (
		<div className="category">
			<div className="category-header">
				<h2>
					{menuCategory.name}
				</h2>
				<EditCategory
					menuCategory={menuCategory}
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					toggleEditCategory={toggleEditCategory}
					deleteCategory={deleteCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			</div>
			{menuItems.map((item) => {
				if (item.id === menuCategory.id) {
					return (
						<Item
							menuItem={item}
							menuItems={menuItems}
							setMenuItems={setMenuItems}
							toggleEditItem={toggleEditItem}
							deleteItem={deleteItem}
							handleItemSubmit={handleItemSubmit}
						/>
					);
				}
				return null;
			})}
			<AddItem
				menuCategory={menuCategory}
				menuItems={menuItems}
				setMenuItems={setMenuItems}
				toggleAddItem={toggleAddItem}
				handleItemSubmit={handleItemSubmit}
			/>
		</div>
	);
}

export default Category;
