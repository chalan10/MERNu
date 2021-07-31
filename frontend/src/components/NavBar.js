import "./NavBar.css";

function NavBar({ color, onToggle }) {
	return (
		<button
			className="navbar"
			style={{ backgroundColor: color }}
			onClick={onToggle}
		>
			This is a NavBar
		</button>
	);
}

export default NavBar;
