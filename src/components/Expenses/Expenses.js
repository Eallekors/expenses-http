import './Expenses.css'
import { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
     const filterChangeHandler = (filteredYear) => {
            console.log('Year data in Expenses.js '+ filteredYear)
      }

      props.expenses.map((expense) => {
            console.log(expense)
      })
      return (
            <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            {     
                  props.expenses.map((expense)=> {
                        return <ExpenseItem expenseData={expense} key={expense.id}/>
                  })
            }
           </Card>
    ) 
} 

export default Expenses