import React,{ Fragment,useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpenses';
import Error from './components/UI/Error';



const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const repsonse = await fetch('http://localhost:3005/expenses')
        console.log(repsonse.ok)
        const responseData = await repsonse.json()
        if(!repsonse.ok){
          throw new Error('Failed fetching data')
        }
        setExpenses(responseData.expenses)
      } catch (error) {
        setError ({
          title: 'An error occured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true);
      } 
    setIsFetching(false);
  }
  getExpenses()
  console.log(expenses)
}, [])

  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      console.log(expense)
      return [expense, ...previousExpenses]
    })
  }
  
  return (
    <div className="App">
      { showError && (
        <Error 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )
      }
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      
      <Expenses expenses={expenses} isLoading={isFetching}/>
    </div>
  );
}

export default App;
