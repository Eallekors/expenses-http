import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import Expenses from './components/Expenses';

function App() {
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
      
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
