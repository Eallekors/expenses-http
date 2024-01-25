import './ExpenseItem.css'


function ExpenseItem(props){
    const desc = props.title.toLocaleString
        ('en-US', {desc: 'long'})
    const price = props.price.toLocaleString
        ('en-US', {price: 'long'})
    
       
    return (
        <div className='expense-item'>
            <div className='expense-item__description'>
                <h2>{desc} </h2>
                <div className='expense-item__price'>{price} </div>
            </div>
        </div>
    )
} 

export default ExpenseItem