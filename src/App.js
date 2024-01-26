import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpenses';

const DYMMY_EXPENSES=[
  { 
    id: 'id1',
    date : new Date(2023, 9, 6),
    title : 'New book',
    price : 30.99
  } 
  ,
  { 
    id: 'id2',
    date : new Date(2023, 9, 6),
    title : 'New jeans',
    price : 99.99
  } 
  ,
  { 
    id: 'id3',
    date : new Date(2024, 0, 25),
    title : 'New bag',
    price : 139.99
  } 
  ]  

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
