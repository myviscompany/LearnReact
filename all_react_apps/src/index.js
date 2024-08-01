import { React, useState } from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import "./index.css";

//pizza App starts here-----------------------------------------------------------------------------
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />

//       <h1>Hello !!</h1>
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" }
//   const style = {};
//   return (
//     <header className="header">
//       <h1 style={style}>Pizza Making company</h1>
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   const pizzaNum = pizzas.length;
//   console.log("pizzaNum==", pizzaNum);
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       {pizzaNum > 0 ? (
//         <>
//           <p>A list of authentic Italian Cuisine</p>
//           <ul className="pizzas">
//             {pizzaData.map((pizza) => {
//               return <Pizza pizzaObj={pizza} key={pizza.name} />;
//             })}
//           </ul>
//         </>
//       ) : (
//         <p>We are still working on our Menu!!</p>
//       )}
//     </main>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   console.log("hour==", hour);
//   const openHour = 12;
//   const closeHour = 22;

//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log("isOpen==", isOpen);
//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} />
//       ) : (
//         <p>
//           We are open between {openHour}:00 and {closeHour}:00
//         </p>
//       )}
//     </footer>
//   );
//   //return React.createElement("footer", null, "We are currently Open!!");
// }

// function Order({ closeHour }) {
//   return (
//     <div className="order">
//       <p>We are open until {closeHour}:00</p>
//       <button className="btn">Order Now</button>
//     </div>
//   );
// }

// function Pizza({ pizzaObj }) {
//   //if (pizzaObj.soldOut) return null;
//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <h3>{pizzaObj.name}</h3>
//       <p>{pizzaObj.ingredients}</p>
//       <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
//     </li>
//   );
// }
//pizza App ends here-----------------------------------------------------------------------------

/* Step App starts here------------------------------------
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
Step App ends here------------------------------------*/
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 12, packed: false },
  { id: 2, description: "Trimmer", quantity: 12, packed: false },
  { id: 2, description: "Cream", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far away🌴</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip ? 😎</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {} : { textDecoration: "line-Through" }}>
        {item.quantity} {item.description}
      </span>
      <span>❌</span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have items on your list and you already packed X%</em>
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
