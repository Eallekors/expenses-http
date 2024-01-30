import './Expenses.css'
import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
      const [filteredYear, setFilteredYear] = useState('2023');

      const filterChangeHandler = (filteredYear) => {
            //console.log('Year data in Expenses.js '+ filteredYear)
            setFilteredYear(filteredYear);
      }
      const filteredExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
          });
          
      props.expenses.map((expense) => {
           //console.log(expense)
      })
     
      return (
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {     
                  filteredExpenses.map((expense)=> {
                        return <ExpenseItem expenseData={expense} key={expense.id}/>
                  })
            }
           </Card>
    ) 
} 

export default Expenses