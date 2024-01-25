import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){
    const desc = props.expenseData.title.toLocaleString
    ('en-US', {month: 'long'})
    const price = props.expenseData.price.toLocaleString
        ('en-US', {month: 'long'})   
   
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.expenseData.date}  />
            <div className='expense-item__description'>
                <h2>{props.expenseData.title} </h2>
                <div className='expense-item__price'>{props.expenseData.price} </div>
            </div>
        </div>
    )
} 

export default ExpenseItem