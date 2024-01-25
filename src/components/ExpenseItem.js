import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(props){
    const desc = props.expenseData.title.toLocaleString
    ('en-US', {month: 'long'})
    const price = props.expenseData.price.toLocaleString
        ('en-US', {month: 'long'})   
   
    return (
        
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseData.date}  />
            <div className='expense-item__description'>
                <h2>{props.expenseData.title} </h2>
                <div className='expense-item__price'>{props.expenseData.price} </div>
            </div>
        </Card>
    )
} 

export default ExpenseItem