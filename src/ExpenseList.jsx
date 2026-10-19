import React from 'react';
import ExpenseItem from './ExpenseItem.jsx'

function ExpenseList({ expenses, onDelete }) {
    return (
        <ul>
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                onDelete={onDelete}
                />
            ))}
        </ul>
    )
}



export default ExpenseList;