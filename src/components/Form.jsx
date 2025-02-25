import { useState } from "react";

function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, selectQuantity] = useState(1);

	function handleSubmit(event) {
		event.preventDefault();
		if (!description.trim()) return;
		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};
		console.log(newItem);
		onAddItems(newItem);
		setDescription("");
		selectQuantity(1);
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>what do you need for 😋 your trip? </h3>
			<select
				value={quantity}
				onChange={(e) => selectQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item...."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
}

export default Form;
