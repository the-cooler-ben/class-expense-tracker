import React from 'react';

function ExpenseItem({ expense, onDelete }) {
    const formatPrice = amount =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    return (
    <li key={expense.id}
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBotton: '10px',
        textColor: 'darkgrey',
        backgroundColor: 'lightblue',
    }}>
        <span>{expense.description}</span> ::
        <span>{expense.category}</span> ::
        <span>{formatPrice(expense.amount)}</span> ::
        <span>{new Date(expense.date).toLocaleDateString()}</span>
        <button
            onClick={() => onDelete(expense.id)}
            style={{
                padding: '10px',
            }}
        >
            Delete
        </button>
    </li>)
}

export default ExpenseItem;