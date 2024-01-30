import ExpenseForm from "./ExpenseForm"
import "./NewExpenses.css"
import { useState } from 'react';

const NewExpenses = (props) => {
const [editForm,setEdit] = useState(false)
const saveExpenseDatahandler= (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
   
    props.onAddExpense(expenseData)
}

const clickHandler = () =>  {
    setEdit(true)
}
const cancelHandeler = (state) => {
    setEdit(false)
    
}

console.log('edit form ' + editForm);

    if(editForm === false) {
        return(
            <div className="new-expense">
                <button onClick={clickHandler}>Add New Expenses</button>
            </div>
        )
    }



    return(
       
        <div className="new-expense">
                  <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={cancelHandeler}/>
        </div>
        
    )
}

export default NewExpenses