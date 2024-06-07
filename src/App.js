import "./App.css";
import Bookitems from "./component/Bookitem/Bookitem";
import Filters from "./component/Filters/Filters";
import Navbar from "./component/Navbar/Navrbar";
import { useState } from "react";

function App() {
  const [actualtype, setActualtype] = useState("all");
  const [booksList, setBookList] = useState([]);
  console.log(booksList);

  function addBook() {
    console.log(5555);
    const newBook = {
      id: 0,
      name: "Newbook",
      category: "computer-science",
      Author: "jenny",
    };
    setBookList([...booksList, newBook]);
  }
  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        <button onClick={addBook}>add</button>
        <Filters setActualtype={setActualtype} />
        <div className="book-list">
          {booksList.map(function (book) {
            return (
              <Bookitems
                category={book.category}
                name={book.name}
                title={book.title}
                Quantity={book.Quantity}
                price={book.price}
                Author={book.Author}
                id={book.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

export const books = [
  {
    id: 0,
    name: "algo",
    category: "science",
    title: "web computer",
    Author: "brad",
    Quantity: "40",
  },
  {
    id: 1,
    name: "algorithm",
    category: "computer-science",
    title: "web ",
    Author: "piter",
    Quantity: "30",
  },
  {
    id: 2,
    name: "rithm",
    category: "literrature",
    title: "intrnet",
    Author: "Rowling",
    Quantity: "70",
    price: "600",
  },

  {
    id: 3,
    name: "algorithm",
    title: "web computer",
    category: "literrature",
    Author: "jack",
    Quantity: "50",
    price: "500",
  },

  {
    id: 4,
    name: "algorithm",
    title: "intrnet",
    category: "computer-science",
    price: "800",
  },

  {
    name: "algorithm",
    title: "web ",
    category: "science",
  },
];
