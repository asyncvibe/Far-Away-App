function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">
				<em>Start Adding some items to you packing list 🚀</em>
			</p>
		);
	const totalItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	// const unpackedItems = totalItems - packedItems;
	const percentage = (packedItems / totalItems) * 100;
	return (
		<footer className="stats">
			{percentage === 100 ? (
				<strong>Yay! You are all set for your trip ✈️</strong>
			) : (
				<strong>
					You have {totalItems} items on your list, and you already packed{" "}
					{packedItems} 🎒 ({percentage.toFixed(2)}%)
				</strong>
			)}
		</footer>
	);
}

export default Stats;
