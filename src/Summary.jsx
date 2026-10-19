import React from 'react';

function Summary({ expenses }) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const formatPrice = amount =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);

    return (
        <div>
            <h2>Total: {formatPrice(total)}</h2>
        </div>
    )
}

export default Summary;