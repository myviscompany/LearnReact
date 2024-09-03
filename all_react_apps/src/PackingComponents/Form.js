import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleClick(e) {
    e.preventDefault();
    if (!description) return;
    // console.log({ description }, { quantity });
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);
    //console.log(JSON.stringify(items));

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleClick}>
      <h3>What do you need for your trip ? 😎</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, counter) => ++counter).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
