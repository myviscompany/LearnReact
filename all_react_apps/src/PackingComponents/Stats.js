export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "Yo have packed everything. Ready to GO ✈️"
          : `💼 You have ${numItems} items on your list and you already packed
          ${packed} (${percent}% )`}
      </em>
    </footer>
  );
}
