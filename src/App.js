import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpenses';

const DYMMY_EXPENSES=[
  { 
    id: 'id1',
    date : new Date(2023, 0, 19),
    title : 'New book',
    price : 30.99
  } 
  ,
  { 
    id: 'id2',
    date : new Date(2024, 0, 19),
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
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      console.log(expense)
      return [expense, ...previousExpenses]
    })
  }
  console.log(expenses)
  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
