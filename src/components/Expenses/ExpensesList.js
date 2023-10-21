import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

function ExpensesList(props) {
    let expensesContent = <p>No expenses founded!</p>

    if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses!</h2>
    }
    return (
        <ul className="expenses-list">
            {
                props.item.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />))
            }
        </ul>
    )
}
export default ExpensesList;