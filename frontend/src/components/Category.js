import Item from "./Item.js";
import AddItem from "./AddItem.js";
import EditCategory from "./EditCategory.js";
import "./Category.css";

function Category({ menu, setMenu, menuCategory, toggleEditCategory, deleteCategory, handleCategorySubmit,
					toggleAddItem, toggleEditItem, deleteItem, handleItemSubmit}) {
	return (
		<div className="category">
			<div className="category-header">
				<h2>
					{menuCategory.name}
				</h2>
				<EditCategory
					menu={menu}
					setMenu={setMenu}
					menuCategory={menuCategory}
					toggleEditCategory={toggleEditCategory}
					deleteCategory={deleteCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			</div>
			{menuCategory.items.map((menuItem) => {
				return (
					<Item
						menu={menu}
						setMenu={setMenu}
						menuCategory={menuCategory}
						menuItem={menuItem}
						toggleEditItem={toggleEditItem}
						deleteItem={deleteItem}
						handleItemSubmit={handleItemSubmit}
					/>
				);
			})}
			<AddItem
				menu={menu}
				setMenu={setMenu}
				menuCategory={menuCategory}
				toggleAddItem={toggleAddItem}
				handleItemSubmit={handleItemSubmit}
			/>
		</div>
	);
}

export default Category;
