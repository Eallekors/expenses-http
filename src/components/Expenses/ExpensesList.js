import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if(props.expenses.length === 0) {
        return(
            <p className="expenses-list__fallback">No expenses found</p>
        )
    }
    return(
        <ul class="expenses-list">
            {
                props.expenses.length > 0 && props.expenses.map((expenses) => {
                    return <ExpenseItem expenseData={expenses} key={expenses.id}/>
                })
            }
        </ul>
    )
}
export default ExpensesList