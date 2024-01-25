import './Expenses.css'

import ExpenseItem from './ExpenseItem'


function Expenses(props){
    
      return (
            <div class="expenses">
           <ExpenseItem expenseData={props.expenses[0]} />
           <ExpenseItem expenseData={props.expenses[1]} />
           </div>
    ) 
} 

export default Expenses