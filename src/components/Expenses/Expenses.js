import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'


const Expenses = (props) => {
      
      return (
            <Card className="expenses">
           <ExpenseItem expenseData={props.expenses[0]} />
           <ExpenseItem expenseData={props.expenses[1]} />
           </Card>
    ) 
} 

export default Expenses