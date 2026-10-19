import { useState } from 'react';

function ExpenseForm({ setExpenses }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setExpenses(prev => {
            const lastId = prev.length ? prev[prev.length - 1].id : 0;

            return [
                ...prev,
                {
                    id: lastId + 1,
                    description: name,
                    category: category,
                    amount: Number(amount),
                    date: date
                }
            ]
        });
        setName('');
        setAmount('');
        setCategory('');
        setDate('');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter description"
                />
            <input
                value={amount}
                onChange={event => setAmount(event.target.value)}
                placeholder="Enter amount"
                type="number"
                />
            <select
                value={category}
                onChange={event => setCategory(event.target.value)}
            >
                <option value="">---</option>
                <option value="Food">Food</option>
                <option value="Housing">Housing</option>
                <option value="Car">Car</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
                />
            <button
                type="submit"
                style={{
                    padding: '10px',
                    backgroundColor: 'lightgreen',
                }}
            >
                Submit
            </button>
        </form>
        </>
    )
}

export default ExpenseForm;