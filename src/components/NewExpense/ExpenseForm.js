import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    return(
        <form>
            <div class="new-expense__controls">
                <div class="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div class="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div class="new-expense__control">
                    <label>date</label>
                    <input type="date" min="2023-01-01" max="2025-01-31" />
                </div>
            </div>
            <div class="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm