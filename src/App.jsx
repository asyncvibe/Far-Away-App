import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "charger", quantity: 3, packed: true },
// ];
function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
		console.log(items);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to clear the list?"
		);
		if (!confirmed) return;
		setItems([]);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItem} />
			<PackingList
				data={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
