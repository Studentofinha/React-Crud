// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from './component/Expense/Expenses'
// import  ListCreate  from "./component/ListCreate";
// import List from "./component/List";
// // import ListEdit from "./component/ListEdit";
// import ListDetails from "./component/ListDetails";
// import ListEdit from "./component/ListEdit";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  return (
    <div>
      <Expenses items={expenses}></Expenses>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<ListCreate />}></Route>
          <Route path="/details/:listid" element={<ListDetails />}></Route>
          <Route path="/edit/:listid" element={<ListEdit />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
