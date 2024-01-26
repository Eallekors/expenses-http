import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpenses';

const App = () => {
  const expenses=[
  { 
    date : new Date(2023, 9, 6),
    title : 'New book',
    price : 30.99
  } 
  ,
  { 
    date : new Date(2023, 9, 6),
    title : 'New jeans',
    price : 99.99
  } 
  ]  
  return (
    <div className="App">
      <NewExpenses></NewExpenses>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
