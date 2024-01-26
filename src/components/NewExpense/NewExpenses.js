import ExpenseForm from "./ExpenseForm"
import "./NewExpenses.css"

const NewExpenses = (props) => {
const saveExpenseDatahandler= (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
}

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}/>
        </div>
    )
}

export default NewExpenses