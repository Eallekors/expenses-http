import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import ExpenseItem from './ExpenseItem';


function Expenses(props){
   
      return (
    <div className='expenses'>
           <ExpenseDate 
                date={props.expenseData.date} 
            />
           <ExpenseItem
                title={props.expenseData.title}
                price={props.expenseData.price}
           />
    </div>
    ) 
} 

export default Expenses