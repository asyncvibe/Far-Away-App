import { useState } from "react";
import Item from "./Item";
function PackingList({ data, onDeleteItem, onToggleItem, onClearList }) {
	const [sort, setSort] = useState("input");
	let sortedItems;
	if (sort === "input") sortedItems = data;

	if (sort === "description")
		sortedItems = data
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sort === "packed")
		sortedItems = data
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sort} onChange={(e) => setSort(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button type="button" onClick={onClearList}>
					Clear List
				</button>
			</div>
		</div>
	);
}

export default PackingList;
