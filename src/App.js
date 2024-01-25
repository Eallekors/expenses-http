import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const data={ 
    date : new Date(2023, 9, 6),
    title : 'New book',
    price : 30.99
  } 
  return (
    <div className="App">
      <Expenses 
        expenseData={data}    
      />
      <Expenses 
        expenseData={data}    
      />
    </div>
  );
}

export default App;
