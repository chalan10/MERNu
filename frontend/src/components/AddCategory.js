import "./AddCategory.css";

function AddCategory({ showAddCategory, toggleShowAddCategory }) {
	return (
		<div className="add-category">
			<button className="add-category-btn" onClick={toggleShowAddCategory}>
				Add Category
			</button>
			{showAddCategory &&
				<form className="add-category-form">
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
						className="add-category-description"
						type="text"
						id="category-description"
						name="category-description"
					/><br/>
					<button onClick={toggleShowAddCategory}>Cancel</button>
					<input type="submit" value="Save"/>
				</form>
			}
		</div>
	);
}

export default AddCategory;
