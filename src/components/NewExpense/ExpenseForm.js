import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] =useState('')
    const [enteredAmount,setEnteredAmount] =useState('')
    const [enteredDate,setEnteredDate] =useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
     }
     const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
     }
     const submitHandler = (event) => {
        event.preventDefault();
       
        

        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        //props.onSaveExpenseData(expenseData)
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        
     }
     const cancelHandeler= (event) => {
        const cancel = "false"
        props.onCancel(cancel);
     }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input  type="text" 
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input  type="number" min="0.01" step="0.01" 
                             onChange={amountChangeHandler}
                             value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input  type="date" min="2023-01-01" max="2025-01-31" 
                             onChange={dateChangeHandler} 
                             value={enteredDate}
                    />
                </div>
            </div>
            
            
                
            
            <div className="new-expense__actions">
                <button type="button" onClick={cancelHandeler}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm