import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const data={ 
    date : new Date(2023, 9, 6),
    title : 'New book',
    price : 30.99
  } 
  return (
    <div className="App">
      <ExpenseItem 
        expenseData={data}    
      />
    </div>
  );
}

export default App;
